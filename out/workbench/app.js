"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const extensions_1 = require("../instantiation/extensions");
const appService_1 = require("../services/app/appService");
const authService_1 = require("../services/auth/authService");
let App = class App {
    constructor(authService) {
        this.authService = authService;
    }
    startUp() {
        this.authService.getUserInfo();
    }
};
App = __decorate([
    __param(0, authService_1.IAuthService)
], App);
exports.App = App;
extensions_1.registerSingleton(appService_1.IAppService, App);
