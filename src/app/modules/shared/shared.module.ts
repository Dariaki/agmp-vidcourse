import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';
import { TimeNormalizerPipe } from './pipes/time-normalizer.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { LogoComponent } from './components/logo/logo.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseStatusDirective } from './directives/course-status.directive';

@NgModule({
  declarations: [
    ModalComponent,
    FilterPipe,
    TimeNormalizerPipe,
    OrderByPipe,
    LogoComponent,
    GenericInputComponent,
    NotificationComponent,
    BreadcrumbsComponent,
    CourseStatusDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers: [FilterPipe],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FilterPipe,
    OrderByPipe,
    TimeNormalizerPipe,
    ModalComponent,
    LogoComponent,
    GenericInputComponent,
    NotificationComponent,
    BreadcrumbsComponent,
    CourseStatusDirective
  ],
})
export class SharedModule { }
