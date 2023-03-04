import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  uri = "http://192.168.50.69:3000";
  constructor(private http: HttpClient) {    
  }

}
