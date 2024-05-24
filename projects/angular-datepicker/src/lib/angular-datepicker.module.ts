import { NgModule } from '@angular/core';
import { AngularDatepickerComponent } from './angular-datepicker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSlimScrollModule } from 'ngx-slimscroll';

@NgModule({
  declarations: [AngularDatepickerComponent],
  imports: [CommonModule, FormsModule, NgSlimScrollModule],
  exports: [AngularDatepickerComponent, CommonModule, FormsModule, NgSlimScrollModule],
})
export class AngularDatepickerModule {}
