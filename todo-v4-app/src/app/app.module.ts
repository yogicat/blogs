import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// pipe
import { StatusPipe } from './todos/status.pipe';

// custom components
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CheckStatusComponent } from './components/check-status/check-status.component';
import { TodosComponent } from './todos/todos.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

// services
import { TodosService } from './todos.service';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
