System.register(["angular2/core", "../tile/tile"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tile_1;
    var Jukebox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tile_1_1) {
                tile_1 = tile_1_1;
            }],
        execute: function() {
            Jukebox = (function () {
                function Jukebox() {
                    console.log("Jukebox Activated");
                }
                Jukebox = __decorate([
                    core_1.Component({
                        selector: "QC-Jukebox",
                        template: "<QC-Tile></QC-Tile><br/><QC-Tile></QC-Tile>",
                        directives: [tile_1.Tile]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Jukebox);
                return Jukebox;
            })();
            exports_1("Jukebox", Jukebox);
        }
    }
});
//# sourceMappingURL=Jukebox.js.map