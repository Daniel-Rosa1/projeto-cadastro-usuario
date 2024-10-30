import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenereListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/state-list-response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() genresList : GenereListResponse = [];
  @Input() stateList : StateListResponse = [];
  @Input() userSelected : IUser = {} as IUser;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges){
   
  }



}
