import { NgModule } from '@angular/core';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const materialModules = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
