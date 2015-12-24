import { Component, View } from "angular2/core";
import {QC} from "../models/kulu";

@Component({
	selector: "QC-Tile",
	templateUrl: "/scripts/tile/tile.html",
	inputs:['kulu']
})
export class Tile{
	public kulu: QC.Kulu;
}
