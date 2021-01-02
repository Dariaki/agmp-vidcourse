import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NotFoundModule } from './modules/not-found/not-found.module';

import { AuthInterceptor } from './services/interceptors/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    NotFoundModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
