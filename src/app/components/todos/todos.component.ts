import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //todo list that is looped through to present on the page
  todos: Todo[];

  //variables to update using input form 
  inputTitle:string = "";
  inputDescription:string = "";
  inputDueDate:string = "";
  inputTags:string = "";

  //var for tag search
  inputTagsSearch:string = "";

  //sort variables
  key:string = 'id';
  reverse:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: "G",
        description: "Todo descrtitip",
        duedate: "G",
        tags: "Apps",
        completed: false
      },
      {
        title: "A",
        description: "Todo descrtitip",
        duedate: "a",
        tags: "Apps",
        completed: false
      },
      {
        title: "H",
        description: "H",
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
      title: this.inputTitle.charAt(0).toLocaleUpperCase() + this.inputTitle.slice(1),
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

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  Search(){
    if (this.inputTagsSearch == ""){
      this.ngOnInit();
    }else {
      this.todos = this.todos.filter(res => {
        return res.tags.toLocaleLowerCase().match(this.inputTagsSearch.toLocaleLowerCase());
      })
    }
  }

}
