import { PasswordStrengthValidatorDirective } from './../../directives/password-strength-validator.directive';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenereListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/state-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { withRequestsMadeViaParent } from '@angular/common/http';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  passwordStrengthValue: number = 0
  @Input() genresList : GenereListResponse = [];
  @Input() stateList : StateListResponse = [];
  @Input() userSelected : IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges){
    const USER_CHANGED = changes['userSelected']

    if(USER_CHANGED){
      this.onPasswordChange(this.userSelected.password)
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password)
  }

}

