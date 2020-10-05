import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';

@NgModule({
    declarations: [
      LoginComponent,
      LoginFormComponent,
      LoginHeaderComponent
    ],
  imports: [
    SharedModule,
  ],
    exports: [
      LoginComponent
  ],
})
export class LoginModule { }
