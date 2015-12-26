declare var bootbox: any;
import {Component, View} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {QCConstants} from "../qcConsts/constants";
import { Router, RouteConfig, ROUTER_DIRECTIVES, Location } from "angular2/router";
import "rxjs/operator/map";
@Component({
	selector: "qc-login"
})
@View({
	templateUrl:"/scripts/login/login.html"
})
export class Login {
	myHeaders = new Headers();
	public username="";
	constructor(public http: Http, public router:Router) {
	}
	login() {
		this.myHeaders.append("contentType", "application/json");
		this.http.get("http://dev-sp2013-10:9999/api/auth/"+this.username, { headers: this.myHeaders })
			.map(res=> res.json())
			.subscribe(data=> {
				QCConstants.token = data;
				console.log(QCConstants.token);
				this.router.navigate(["/Jukebox"]);},
			error=> { console.log(error);
				bootbox.dialog({
					title: "Invalid UserName",
					message: "Please try again with correct username"
				});
			},
			() => console.log("complete"));
	};
}