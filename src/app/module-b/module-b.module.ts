import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { ModuleCModule } from '../module-c/module-c.module';
import { ModuleAModule } from '../module-a/module-a.module';




@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    ModuleCModule,
    ModuleCModule,
    ModuleAModule,
    
  ],
  exports: [
    B1Component,
    B2Component,
  ],
})
export class ModuleBModule { }
