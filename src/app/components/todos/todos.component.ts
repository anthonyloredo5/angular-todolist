import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTitle:string = "";
  inputDescription:string = "";
  inputDueDate:string = "";
  inputTags:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: "first Todo",
        description: "Todo descrtitip",
        duedate: "0/12/12",
        tags: "Apps",
        completed: false
      },
      {
        title: "second Todo",
        description: "Todo descrtitip",
        duedate: "0/12/12",
        tags: "Apps",
        completed: false
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
      title: this.inputTitle,
      description: this.inputDescription,
      duedate: this.inputDueDate,
      tags: this.inputTags,
      completed: false
    })
    
    this.inputTitle = "";
    this.inputDescription = "";
    this.inputDueDate = "";
    this.inputTags = "";

  }

}
