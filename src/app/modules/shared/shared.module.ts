import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { LogoComponent } from './components/logo/logo.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ModalComponent,
    FilterPipe,
    LogoComponent,
    GenericInputComponent,
    NotificationComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FilterPipe,
    ModalComponent,
    LogoComponent,
    GenericInputComponent,
    NotificationComponent,
    BreadcrumbsComponent
  ],
})
export class SharedModule { }
