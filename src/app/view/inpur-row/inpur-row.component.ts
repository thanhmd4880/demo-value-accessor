import {Component, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ControlValueAccessor} from '@angular/forms';

import {NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InpurRowComponent),
  multi: true,
};

@Component({
  selector: 'app-inpur-row',
  providers: [INPUT_VALUE_ACCESSOR],
  templateUrl: './inpur-row.component.html',
  styleUrls: ['./inpur-row.component.css']
})
export class InpurRowComponent implements OnInit, ControlValueAccessor {
  @Input() matIcon: string;
  @Input() placeholder: string;
  @Input() type: string;
  @ViewChild('input') input;

  private propagateChange = (_: any) => { };

  constructor(private renderer: Renderer2) {
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
    const input = this.input.nativeElement;
    this.renderer.setProperty(input, 'value', value );
  }

  onChange(value) {
    this.propagateChange(value);
  }

}
