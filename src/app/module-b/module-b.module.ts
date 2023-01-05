import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    B1Component,
    B2Component,
  ],
})
export class ModuleBModule { }
