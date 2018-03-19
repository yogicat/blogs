import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../model/todo.interface';
@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(todos: ITodo[], status?: string): ITodo[] {
    return todos.filter(({completed}) => {
      switch (status) {
        case 'active':
          return !completed;
        case 'completed':
          return completed;
        default:
          return todos;
      }
    });
  }

}
