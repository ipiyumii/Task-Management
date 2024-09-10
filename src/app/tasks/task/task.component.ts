import { TaskService } from './../tasks.services';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

// interface Task {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    // this.complete.emit(this.task.id)
    this.taskService.removeTask(this.task.id)
  }
}
