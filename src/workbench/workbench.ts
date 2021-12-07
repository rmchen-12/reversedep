import { IAuthService } from '../services/auth/authService';
import { IInstantiationService } from '../instantiation/instantiation';
import { InstantiationService } from '../instantiation/instantiationService';
import { ServiceCollection } from '../instantiation/serviceCollection';
import { AuthService } from '../services/auth/auth';
import { App } from './app';

import './app'

class Main {
  main(): void {
    // Launch
    this.startup();
  }

  private async startup() {
    const instantiationService = this.createServices();
    instantiationService.invokeFunction((accessor) => {
      // 拿到服务实例
      const authService = accessor.get(IAuthService);
      authService.getUserInfo();

      // 启动app
      instantiationService.createInstance(App).startUp();
    });
  }

  private createServices(): IInstantiationService {
    const services = new ServiceCollection();

    services.set(IAuthService, new AuthService());

    return new InstantiationService(services, true);
  }
}

new Main().main();
