import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StatusPipe } from './todos/status.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CheckStatusComponent } from './components/check-status/check-status.component';
import { TodosComponent } from './todos/todos.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    TodoListComponent,
    CheckStatusComponent,
    TodosComponent,
    TodoInputComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
