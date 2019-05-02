import {Component, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from '@angular/forms';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectInputComponent),
  multi: true,
};

@Component({
  selector: 'app-select-input',
  providers: [SELECT_VALUE_ACCESSOR],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {

  foods = [{id: 1 , name: 'Banh my'}, {id: 2 , name: 'Pho'}, {id: 3 , name: 'Hu tieu'}, {id: 4 , name: 'Sandwich'}];
  selectedValue = 1;
  @Input() matIcon: string;
  @Input() placeholder: string;
  @ViewChild('select') select;

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
    this.selectedValue = value;
  }

  onChange(value) {
    this.propagateChange(value);
  }

}
