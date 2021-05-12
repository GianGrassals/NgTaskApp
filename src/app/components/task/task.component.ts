import { Task } from './../../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  listTask: Task[] = [];
  nameTask = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){

    // Create new task
    const task: Task = {
      name : this.nameTask,
      state: false
    }

    // Add task to Array
    this.listTask.push(task);

    //Reset Form
    this.nameTask = "";

  }

  deleteTask(index: number){
    this.listTask.splice(index,1);
  }


  updateTask(task: Task, index: number): void {

      this.listTask[index].state = !task.state;

  }

}
