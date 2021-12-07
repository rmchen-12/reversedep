"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = require("../services/auth/authService");
const instantiationService_1 = require("../instantiation/instantiationService");
const serviceCollection_1 = require("../instantiation/serviceCollection");
const auth_1 = require("../services/auth/auth");
const app_1 = require("./app");
require("./app");
class Main {
    main() {
        // Launch
        this.startup();
    }
    async startup() {
        const instantiationService = this.createServices();
        instantiationService.invokeFunction((accessor) => {
            // 拿到服务实例
            const authService = accessor.get(authService_1.IAuthService);
            authService.getUserInfo();
            // 启动app
            instantiationService.createInstance(app_1.App).startUp();
        });
    }
    createServices() {
        const services = new serviceCollection_1.ServiceCollection();
        services.set(authService_1.IAuthService, new auth_1.AuthService());
        return new instantiationService_1.InstantiationService(services, true);
    }
}
new Main().main();
