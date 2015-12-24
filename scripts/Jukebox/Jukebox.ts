import {Component} from "angular2/core";
import {Tile} from "../tile/tile";
import {Http, Headers} from "angular2/http";
import {QCConstants} from "../qcConsts/constants";
import {QC} from "../models/kulu";
@Component({
	selector: "QC-Jukebox",
	/*template: `<ul><li *ngFor="#kulu of kulus">
				 <QC-Tile [kulu]="kulu"></QC-Tile>
				 </li></ul>`,*/
	template: `<div class="owl-carousel">
				<QC-Tile *ngFor="#kulu of kulus" [kulu]="kulu"></QC-Tile>
				</div>`,
	directives: [Tile]
})
export class Jukebox {
	public myHeaders = new Headers();
	public kulus: Array<QC.Kulu>=null;
	constructor(public http: Http) {
		this.myHeaders.append("Authorization", "Bearer " + QCConstants.token);
		this.http.get(QCConstants.restEndPoint + "/kulus", { headers: this.myHeaders })
			.map(res=> res.json())
			.subscribe(
			data=> {
				console.log(data);
				var res: QC.KulusResult = data;
				let retkulus:Array<QC.Kulu> = res.kulus;
				retkulus.forEach((kulu: QC.Kulu) => {
						if (kulu.thumbnail) { }
						else {
							kulu.thumbnail =
							{
								height: 0,
								width: 0,
								url: "https://feature-morgan-stanley.kuluvalley.com/01450116157767/client/graphics/default-thumbnail.png" };
						}
				});
				this.kulus = retkulus;
				console.log(res.total);
			},
			err=> console.log(err),
			() => {
				console.log("Kulus fetched");
				$('.owl-carousel').owlCarousel({
					margin: 10,
					loop: true,
					autoWidth: true,
					items: 4
				});
			});

	}
}