import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core"; 
import {App } from "../app/app";
import { HTTP_PROVIDERS } from "angular2/http";
import { ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from "angular2/router";

bootstrap(App, [ROUTER_PROVIDERS, PathLocationStrategy, provide(APP_BASE_HREF,{useValue:"/"})]);