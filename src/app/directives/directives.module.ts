import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credential-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';

@NgModule({
  declarations:[
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
  ],
  exports:[
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
  ],
})
export class DirectiveModule{

}
