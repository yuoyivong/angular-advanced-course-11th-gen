import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidationDirective,
      multi: true,
    },
  ],
})
export class PasswordValidationDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && !this.isValidPassword(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  private isValidPassword(password: string): boolean {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$!%*?&])[A-Za-z0-9@#$!%*?&]{8,}/;
    return passwordPattern.test(password);
  }
}
