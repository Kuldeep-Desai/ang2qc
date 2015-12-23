import { Component, View } from "angular2/core";
import { Router, RouteConfig, ROUTER_DIRECTIVES, Location } from "angular2/router";
import {Login} from "../Login/Login";
import {Jukebox} from "../Jukebox/Jukebox";

@Component({
	selector: "QC-App",
	template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ name: "Login", component: Login, path: "/login" },
	{ name: "Jukebox", component: Jukebox, path: "/jukebox" }
])
export class App {
	constructor(public router: Location) {
		 router.go("/jukebox");
	}
}