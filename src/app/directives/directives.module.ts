import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credential-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';

@NgModule({
  declarations:[
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
  exports:[
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
})
export class DirectiveModule{

}
