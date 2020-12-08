import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FilterPipe } from './pipes/filter.pipe';
import { TimeNormalizerPipe } from './pipes/time-normalizer.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { LogoComponent } from './components/logo/logo.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseStatusDirective } from './directives/course-status.directive';
import { GenericTextareaComponent } from './components/generic-textarea/generic-textarea.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TagInputComponent } from './components/tag-input/tag-input.component';

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
    CourseStatusDirective,
    GenericTextareaComponent,
    DatePickerComponent,
    TimePickerComponent,
    TagInputComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule
    ],
  providers: [
    FilterPipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    FilterPipe,
    OrderByPipe,
    TimeNormalizerPipe,
    ModalComponent,
    LogoComponent,
    GenericInputComponent,
    NotificationComponent,
    BreadcrumbsComponent,
    CourseStatusDirective,
    TagInputComponent,
    TimePickerComponent,
    DatePickerComponent
  ],
})
export class SharedModule { }
