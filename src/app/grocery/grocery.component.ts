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
    this.tasks.push({name: this.task});
    this.task = '';
  }
  constructor() { }

  ngOnInit() {
  }
}




