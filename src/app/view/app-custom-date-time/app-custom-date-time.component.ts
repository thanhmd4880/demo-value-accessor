import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppCustomDateTimeComponent),
  multi: true,
};

@Component({
  selector: 'app-app-custom-date-time',
  providers: [SELECT_VALUE_ACCESSOR],
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

  selectedOption = 'today';
  selectedDate = new Date();

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
    this.selectedDate = value;
  }

  onChange(value) {
    this.propagateChange(value);
  }

  onChangeOption() {
    const now = new Date();
    switch (this.selectedOption) {
      case 'today': this.selectedDate =  now; break;
      case 'yesterday': this.selectedDate = new Date(new Date().setDate(now.getDate() - 1)); break;
      case 'lastWeek': this.selectedDate = new Date(new Date().setDate(now.getDate() - 7)); break;
      default: this.selectedDate = now;
    }

  }

}
