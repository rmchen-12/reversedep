import { registerSingleton } from '../instantiation/extensions';
import { IAppService } from '../services/app/appService';
import { IAuthService } from '../services/auth/authService';

export class App implements IAppService {
  declare _serviceBrand: undefined;

  constructor(@IAuthService private readonly authService: IAuthService) {}

  startUp() {
    this.authService.getUserInfo();
  }
}

registerSingleton(IAppService, App);