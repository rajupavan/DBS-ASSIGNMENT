import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(
    private http : HttpClient
  ) { }

  getUsersList() {
    return this.http.get(this.baseUrl);
  }

  createUser(userData: any) {
    return this.http.post(this.baseUrl, userData);
  }

  userById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateUser(id: number, userData: any) {
    return this.http.put(`${this.baseUrl+'/'+id}` , userData);  
  }

  deleteUser(id: number){
    return this.http.delete(`${this.baseUrl+'/'+id}`);  
  }


}
