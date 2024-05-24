import { NgModule } from '@angular/core';
import { AngularDatepickerComponent } from './angular-datepicker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularDatepickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [AngularDatepickerComponent, CommonModule, FormsModule],
})
export class AngularDatepickerModule {}
