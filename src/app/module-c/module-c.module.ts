import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { ModuleAModule } from '../module-a/module-a.module';



@NgModule({
  declarations: [
    HeaderMainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderMainComponent,
    FooterComponent,
  ],
})
export class ModuleCModule { }
