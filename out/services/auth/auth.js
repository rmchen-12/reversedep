"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    constructor() {
        this.id = 'auth';
        this.nickName = 'ha';
        this.firstName = 'lucy';
        this.lastName = 'lee';
    }
    getUserInfo() {
        console.log('service id:', this.id);
        console.log(`${this.firstName} ${this.lastName}: ${this.nickName}`);
    }
}
exports.AuthService = AuthService;
