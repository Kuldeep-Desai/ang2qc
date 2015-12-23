import {Component} from "angular2/core";
import {Tile} from "../tile/tile";
@Component({
	selector:"QC-Jukebox"
	template: "<QC-Tile></QC-Tile><br/><QC-Tile></QC-Tile>",
	directives:[Tile]
})
export class Jukebox{ }