import {Component, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup} from '@angular/forms';

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
  formGroup: FormGroup;
  // tslint:disable-next-line:no-input-rename
  @Input('formControlName') formControl: string;
  @Input() matIcon: string;
  @Input() placeholder: string;
  @Input() type: string;

  @ViewChild('input') input;

  constructor(private renderer: Renderer2, private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  registerOnChange( fn: any ): void {
    // this.onChange = fn;
  }

  registerOnTouched( fn: any ): void {
    // this.onTouched = fn;
  }

  // setDisabledState( isDisabled: boolean ): void {
  //   const input = this.input.nativeElement;
  //   const action = isDisabled ? 'addClass' : 'removeClass';
  //   this.renderer[action](input, 'disabled');

  // }

  writeValue( value: any ): void {
    // const input = this.input.nativeElement;
    // this.renderer.setProperty(input, 'value', value );
  }



}
