import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credential-validator.directive';

@NgModule({
  declarations:[
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
  ],
  exports:[
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
  ],
})
export class DirectiveModule{

}
