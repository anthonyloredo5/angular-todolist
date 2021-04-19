import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";
import  *  as  data  from  './todos.json';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor() {}

  //todo list that is looped through to present on the page
  todos: Todo[] = (data as any).default;

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

  ngOnInit(): void {
    this.todos = (data as any).default;
    console.log(this.todos);
    
    // this.rs.getTodos().subscribe((response) => {
    //   this.todos = response;
    // })
  }

  toggleDone (id:number) {
    this.todos.map((val, i) => {
      if (i == id) {
        val.completed = !val.completed;
      }
      return val;
    })
  }

  deleteTodo (obj) {
    console.log(obj, "is obj");
    this.todos = this.todos.filter(item => item !== obj)
  }

  addTodo () {
    this.todos.push({
      title: this.inputTitle.charAt(0).toLocaleUpperCase() + this.inputTitle.slice(1),
      description: this.inputDescription,
      duedate: this.inputDueDate,
      tags: this.inputTags,
      completed: false
    })
    
    var due = this.inputDueDate;
    console.log(due);
    
    
    this.inputTitle = "";
    this.inputDescription = "";
    this.inputDueDate = "";
    this.inputTags = "";

  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  search(){
    if (this.inputTagsSearch == ""){
      this.ngOnInit();
    }else {
      this.todos = this.todos.filter(res => {
        return res.tags.toLocaleLowerCase().match(this.inputTagsSearch.toLocaleLowerCase());
      })
    }
  }

}
