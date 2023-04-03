import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';
import { Login } from 'app/models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:8080/user/';
    // 'https://etermws.uc.r.appspot.com/user/';
   
  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<Object> {
    return this.httpClient.post<Login>(this.baseUrl + 'login', login);
    console.log(login)
  }

  saveUser(user: User) {
    console.log(user);
    return this.httpClient.post<User>(this.baseUrl + 'newUser', user);

  }

  showAllUser(): Observable<User[]> {
    console.log(User)
    return this.httpClient.get<User[]>(this.baseUrl + 'getAllUser');
   
  }

  deleteUser(usuarioId: number){
    console.log('usuario ' + this.deleteUser)
    return this.httpClient.delete<User>(
      this.baseUrl + 'delete/' + usuarioId
    );
  }
}
