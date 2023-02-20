import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';
import { Login } from '../models/login';
import { Response } from '../models/Response';
// import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { numberToString } from 'igniteui-angular-core';

@Injectable({
  providedIn: 'root'
})
export class ServicesTodoService {
  baseURL: string = "https://cjpawwprbe.us-east-1.awsapprunner.com";

  constructor(private http: HttpClient) { }
  GetAuthToken(name: string, email: string): Observable<any> {
    const login: Login ={
      name: "user1",
      password: "password1"
    };
    const request = this.http.post(
      `${this.baseURL}/api/Users/authenticate`,
      login
    );
    return request;
  }


  AddToDo(todo: ToDo): Observable<any> {
    const request = this.http.post<any>(`${this.baseURL}/ToDo/addToDo`, todo, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }),
    });
    return request;
  }

  GetToDoList(favorite : boolean)
  {
    const request = this.http.get<any>(
      `${this.baseURL}/ToDo/toDoList?favorite=`+ `${String(favorite)}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }),
      }).subscribe((response: any) => { 
        this.todoList = response;
      });
    
    }

  UpdateToDo(toDoId: number): Observable<boolean> {
    console.log(toDoId);
    const request = this.http.put<boolean>(`${this.baseURL}/ToDo/checkToDo?id=`+ `${toDoId}`, "",  {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }),
    });

    return request;
  }

  FavoriteToDo(toDoId: number): Observable<boolean> {
    console.log(toDoId);
    const request = this.http.put<boolean>(`${this.baseURL}/ToDo/favoriteToDo?id=`+ `${toDoId}`,"",  {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }),
    });

    return request;
  }
  DeleteToDo(toDoId: number): Observable<boolean> {
    const request = this.http.delete<boolean>(`${this.baseURL}/ToDo/deleteToDo?id=`+ `${toDoId}`,  {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }),
    });

    return request;
  }
  todoList: ToDo[] = [];  
}


