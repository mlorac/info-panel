import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackComponent } from './button-back.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    ButtonBackComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    ButtonBackComponent
  ]
})
export class ButtonBackModule { }
