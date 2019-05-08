import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material';
import * as moment from 'moment';
import {Platform} from '@angular/cdk/platform';

class MyDateAdapter extends NativeDateAdapter {
  constructor(matDateLocale: string) { super(matDateLocale, new Platform()); }
  format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return this._to2digit(month) + '/' + this._to2digit(day) + '/' + year + ' ' + this._to2digit(hours) + ':' + this._to2digit(minutes);
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppCustomDateTimeComponent),
  multi: true,
};

export const MY_FORMATS = {
  parse: {
    dateInput: {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  },
};

@Component({
  selector: 'app-app-custom-date-time',
  providers: [
    SELECT_VALUE_ACCESSOR,
    // { provide: DateAdapter, useClass: MyDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  templateUrl: './app-custom-date-time.component.html',
  styleUrls: ['./app-custom-date-time.component.css']
})

export class AppCustomDateTimeComponent implements OnInit, ControlValueAccessor {
  dateOptions = [
    {id: 'yesterday', name: 'Yesterday'},
    {id: 'today', name: 'Today'},
    {id: 'endOfToday', name: 'End of Today'},
    {id: 'lastWeek', name: 'Last Week'},
    {id: 'thisWeek', name: 'This Week'},
    {id: 'lastMonth', name: 'Last Month'},
    {id: 'thisMonth', name: 'Yesterday'},
    {id: 'custom', name: 'Custom'}
  ];

  time = '';
  selectedOption = 'today';
  @ViewChild('dateInput') dateInputRef: ElementRef;

  private propagateChange = (_: any) => { };

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange( fn: any ): void {
    this.propagateChange = fn;
  }

  registerOnTouched( fn: any ): void {
    // this.onTouched = fn;
  }

  writeValue( value: any ): void {
    if (this.dateInputRef)
      this.dateInputRef.nativeElement.value = value;
  }

  onDateInput(value) {
    this.propagateChange(value);
  }

  onChangeOption() {
    // const now = new Date();
    // switch (this.selectedOption) {
    //   case 'today': this.selectedDate =  now; break;
    //   case 'yesterday': this.selectedDate = new Date(new Date().setDate(now.getDate() - 1)); break;
    //   case 'lastWeek': this.selectedDate = new Date(new Date().setDate(now.getDate() - 7)); break;
    //   default: this.selectedDate = now; break;
    // }
    // this.onChange(this.selectedDate);
  }

  onChangeTime(value: any) {
    // console.log(value);
    // const [hour, minute] = this.time.split(':');
    // this.selectedDate = new Date(new Date(this.selectedDate).setHours(+hour));
    // this.selectedDate = new Date(new Date(this.selectedDate).setMinutes(+minute));
    // this.onChange(this.selectedDate);
  }
}

