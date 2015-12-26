import {Component, OnInit} from "angular2/core";
import {Tile} from "../tile/tile";
import {Http, Headers} from "angular2/http";
import {QCConstants} from "../qcConsts/constants";
import {QC} from "../models/kulu";
@Component({
    selector: "qc-jukebox",
	/*template: `<ul><li *ngFor="#kulu of kulus">
				 <QC-Tile [kulu]="kulu"></QC-Tile>
				 </li></ul>`,*/
    template: `<div class="owl-carousel">
                <div class="item" *ngFor="#kulu of kulus">
                <qc-tile [kulu]="kulu"></qc-tile>
                </div>
                </div>`,
    directives: [Tile]
})
export class Jukebox implements OnInit {
    public myHeaders = new Headers();
    public kulus: Array<QC.Kulu> = null;
    ngOnInit() {
        console.log('onInit');
    }
    constructor(public http: Http) {
        this.myHeaders.append("Authorization", "Bearer " + QCConstants.token);
        this.http.get(QCConstants.restEndPoint + "/kulus", { headers: this.myHeaders })
            .map(res=> res.json())
            .subscribe(
            data=> {
                console.log(data);
                var res: QC.KulusResult = data;
				/*let retkulus:Array<QC.Kulu> = res.kulus;
				retkulus.forEach((kulu: QC.Kulu) => {
						if (kulu.thumbnail) { }
						else {
							kulu.thumbnail =
							{
								height: 0,
								width: 0,
								url: "https://feature-morgan-stanley.kuluvalley.com/01450116157767/client/graphics/default-thumbnail.png" };
						}
                */
                this.kulus = res.kulus.map(kulu => {
                    if (!kulu.thumbnail)
                        kulu.thumbnail = {
                            height: 0,
                            width: 0,
                            url: "https://feature-morgan-stanley.kuluvalley.com/01450116157767/client/graphics/default-thumbnail.png"
                        };
                    return kulu;
                });
                console.log(res.total);
            },
            err=> console.log(err),
            () => {
                console.log("Kulus fetched");
                setTimeout(function() {
                    $('.owl-carousel').owlCarousel({
                        margin: 10,
                        autoWidth: true,
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    });
                }, 100);
            });

    }
}