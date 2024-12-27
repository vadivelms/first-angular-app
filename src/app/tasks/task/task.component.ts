import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task?.id);
  }
  
}
