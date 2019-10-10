import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  
  task: string;
  tasks = [];

  onClick(){
    if(this.task !=""){
    this.tasks.push({name: this.task});
    this.task = '';
    }
  }

  removeItem = function(index){
    this.tasks.splice(index, 1);
  
  }
  
  onClickDelete(){
    this.tasks.pop();
  }
  
  constructor() { }

  ngOnInit() {
  }
}




