import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function confirmPwd(key: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    /*@ts-ignore*/
    if (control?.parent?.controls[key]?.value !== control.value) {
      return {'pwdInvalid': true};
    }
      return null;
    }
}