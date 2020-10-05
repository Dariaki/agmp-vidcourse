import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from "../dashboard/dashboard.module";
import { FooterComponent } from "./components/footer/footer.component";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule
  ],
  exports: [
    LoginModule,
    DashboardModule,
    FooterComponent,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
