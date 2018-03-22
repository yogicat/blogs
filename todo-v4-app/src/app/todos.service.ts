import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITodo } from './model/todo.interface';

@Injectable()
export class TodosService {
  todos: ITodo[];
  // private api
  todos_api = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {
    // console.log(this.http);
  }

  getTodos(): any {
    return this.http
      .get<ITodo[]>(this.todos_api);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .post<ITodo>(this.todos_api, todo);
  }

  checkTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .put<ITodo>(this.todos_api, todo);
  }

  removeTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .delete<ITodo>(this.todos_api);
  }
}
