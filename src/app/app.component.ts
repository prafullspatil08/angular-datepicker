import { Component } from '@angular/core';
import { DatepickerOptions } from '../../projects/angular-datepicker/src/public-api';
import locale from 'date-fns/locale/en-US';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: locale,
    closeOnClickOutside: true,
    closeOnSelection: true,
    selectRange: false,
    includeDays: 'previous-month', // 'none', 'previous-month', 'next-month', 'all'. Should it render days outside current month.
    minYear: 1950,
    maxYear: 2030,
    displayFormat: 'MM/dd/yyyy',
    rangeSeparator: '-', //m Char that separates start and end dates in input field.
    minDate: undefined, // Minimal selectable date
    maxDate: new Date(), // Maximal selectable date
    barTitleIfEmpty: '',
    addClass: {}, // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'datepicker-0', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: true, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };
  constructor() {
    this.date = new Date();
  }
}
