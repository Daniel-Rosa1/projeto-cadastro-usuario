import { UsersPlaceholderService } from './services/users-placeholder.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { UsersListResponse } from './types/users-list-response';
import { GenereListResponse } from './types/genres-list-response';
import { StateListResponse } from './types/state-list-response';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList : UsersListResponse = [];
  genresList : GenereListResponse = [];
  statesList: StateListResponse = [];
  usersPlaceholderList: any = [];

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number| undefined ;

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _usersPlaceholderService : UsersPlaceholderService
  ){}


  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates()
  }
  getStates() {
    this._brazilianStatesService.getStates().subscribe((brazilianStatesResponse) => {
      this.statesList = brazilianStatesResponse
    })
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) =>{
      this.usersList = usersListResponse;
    });
  };

  private getGenres(){
    this._genresService.getGenres().subscribe((genresListResponse) =>{
      this.genresList = genresListResponse;
    });
  };

  getPlaceholderUsers() {
    this._usersPlaceholderService.getPlaceholderUsers().subscribe((usersPlaceholderResponse) =>{
      this.usersPlaceholderList = usersPlaceholderResponse;
      console.log(this.usersPlaceholderList)
    })
  }

  onUserSelected(userIndex : number ){
    const userFound = this.usersList[userIndex]

    if(userFound){
      this.userSelectedIndex = structuredClone(userIndex)
      this.userSelected = userFound;
    }
  }


}
