import {Component} from "angular2/core";
import {Tile} from "../tile/tile";
import {Http, Headers} from "angular2/http";

@Component({
	selector:"QC-Jukebox",
	template: "<QC-Tile></QC-Tile><br/><QC-Tile></QC-Tile>",
	directives:[Tile]
})
export class Jukebox{
	constructor() {
		console.log("Jukebox Activated");
	}
}