import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: any;

  constructor(private taskService: TasksService) { }

  addTaskFlag = false;
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

 
  onAddTask() {
    this.addTaskFlag = true;
  }

  onCloseAddTask() {
    this.addTaskFlag = false;
  }
  onAddNewTask(newTaskData: NewTaskData) {

    this.addTaskFlag = false;
  }
}
