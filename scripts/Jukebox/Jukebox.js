System.register(["angular2/core", "../tile/tile", "angular2/http", "../qcConsts/constants"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tile_1, http_1, constants_1;
    var Jukebox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tile_1_1) {
                tile_1 = tile_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            Jukebox = (function () {
                function Jukebox(http) {
                    var _this = this;
                    this.http = http;
                    this.myHeaders = new http_1.Headers();
                    this.kulus = null;
                    this.myHeaders.append("Authorization", "Bearer " + constants_1.QCConstants.token);
                    this.http.get(constants_1.QCConstants.restEndPoint + "/kulus", { headers: this.myHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        var res = data;
                        var retkulus = res.kulus;
                        retkulus.forEach(function (kulu) {
                            if (kulu.thumbnail) { }
                            else {
                                kulu.thumbnail =
                                    {
                                        height: 0,
                                        width: 0,
                                        url: "https://feature-morgan-stanley.kuluvalley.com/01450116157767/client/graphics/default-thumbnail.png" };
                            }
                        });
                        _this.kulus = retkulus;
                        console.log(res.total);
                    }, function (err) { return console.log(err); }, function () {
                        console.log("Kulus fetched");
                        setTimeout(function () {
                            $('.owl-carousel').owlCarousel({
                                margin: 10,
                                autoWidth: true
                            });
                        }, 100);
                    });
                }
                Jukebox.prototype.ngOnInit = function () {
                    console.log('onInit');
                };
                Jukebox = __decorate([
                    core_1.Component({
                        selector: "QC-Jukebox",
                        template: "<div class=\"owl-carousel\">\n                <div class=\"item\" *ngFor=\"#kulu of kulus\">\n\t\t\t\t<QC-Tile [kulu]=\"kulu\"></QC-Tile>\n                </div>\n\t\t\t\t</div>",
                        directives: [tile_1.Tile]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Jukebox);
                return Jukebox;
            })();
            exports_1("Jukebox", Jukebox);
        }
    }
});
//# sourceMappingURL=Jukebox.js.map