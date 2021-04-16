import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true
      },
    ]
  }

  toggleDone (id:number) {
    this.todos.map((val, i) => {
      if (i == id) {
        val.completed = !val.completed;
      }
      return val;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((val, i) => i !== id)
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    
    this.inputTodo = "";

  }

}
