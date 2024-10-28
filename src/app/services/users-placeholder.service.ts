import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserPlaceholder } from "../interfaces/user-placeholder/user-placeholder.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getPlaceholderUsers(): Observable<UsersPlaceholderService>{
    return this._httpClient.get<UsersPlaceholderService>('https://jsonplaceholder.typicode.com/users')
  }

}
