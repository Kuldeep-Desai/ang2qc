System.register(["angular2/core", "angular2/http", "../qcConsts/constants", "angular2/router", "rxjs/operator/map"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, constants_1, router_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            Login = (function () {
                function Login(http, router) {
                    this.http = http;
                    this.router = router;
                    this.myHeaders = new http_1.Headers();
                    this.username = "";
                }
                Login.prototype.login = function () {
                    var _this = this;
                    this.myHeaders.append("contentType", "application/json");
                    this.http.get("http://dev-sp2013-10:9999/api/auth/" + this.username, { headers: this.myHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        constants_1.QCConstants.token = data;
                        console.log(constants_1.QCConstants.token);
                        _this.router.navigate(["/Jukebox"]);
                    }, function (error) {
                        console.log(error);
                        bootbox.dialog({
                            title: "Invalid UserName",
                            message: "Please try again with correct username"
                        });
                    }, function () { return console.log("complete"); });
                };
                ;
                Login = __decorate([
                    core_1.Component({
                        selector: "qc-login"
                    }),
                    core_1.View({
                        templateUrl: "/scripts/login/login.html"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map