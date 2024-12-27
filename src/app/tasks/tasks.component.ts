import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks";
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: any;
  dummyTasks = DUMMY_TASKS;
  addTaskFlag = false;
  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.user.id);
  }

  onTaskComplete(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.addTaskFlag = true;
  }

  onCancelAddTask() {
    this.addTaskFlag = false;
  }
  onAddNewTask(newTaskData: NewTaskData) {    
    this.dummyTasks.unshift({
      id: Math.random().toString(),
      userId: this.user.id,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate
    });
    this.addTaskFlag = false;    
  }
}
