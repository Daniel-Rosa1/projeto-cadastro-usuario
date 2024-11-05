import { PasswordStrengthValidatorDirective } from './../../directives/password-strength-validator.directive';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenereListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/state-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { withRequestsMadeViaParent } from '@angular/common/http';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-date-to-date-obj';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnInit {

  passwordStrengthValue: number = 0
  minDate: Date | null = null ;
  maxDate: Date | null = null ;
  dateValue: Date | null = null;

  @Input() genresList : GenereListResponse = [];
  @Input() stateList : StateListResponse = [];
  @Input() userSelected : IUser = {} as IUser;

  ngOnInit(){
    this.setMinAndMaxDate()
  }

  ngOnChanges(changes: SimpleChanges){
    const USER_CHANGED = changes['userSelected'];

    if(USER_CHANGED){
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepiker(this.userSelected.birthDate);
    }
  }


  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password)
  }

  private setMinAndMaxDate() {
    this.minDate = new Date( new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepiker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }


}

