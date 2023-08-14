import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true,
    },
  ],
})
export class EmailValidationDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && !this.isValidEmail(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[A-Za-z0-9]+(_[0-9]{3})+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  }
}
