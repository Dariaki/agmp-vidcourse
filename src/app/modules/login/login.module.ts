import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
    declarations: [
      LoginComponent,
      LoginFormComponent
    ],
  imports: [
    SharedModule,
  ],
    exports: [
      LoginComponent
  ],
})
export class LoginModule { }
