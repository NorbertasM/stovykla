import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms'


@Directive({
  selector: '[birthYear]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: BirthYearDirective, multi: true }
  ]
})
export class BirthYearDirective implements Validator {

  registerOnValidatorChange(fn: () => void): void {

  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let year: number = control.value
    if (year < new Date().getFullYear() -5) {
      return null
    } else {
      return { error: 'Neteisingi metai' }
    }
  }

  constructor() { }
}
