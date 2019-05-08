import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[validateDate]',
  providers: [
    { provide: NG_VALIDATORS, useValue: CustomDateTimeDirective, multi: true }
  ]
})
export class CustomDateTimeDirective {

}

