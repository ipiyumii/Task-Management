import { NewTaskData } from './../task/task.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  @Output()stop = new EventEmitter<void>()
  // @Output()stop = new EventEmitter<void>()

  constructor(private taskService: TaskService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onStopAddTask() {
    this.stop.emit()
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
    this.userId )

    this.stop.emit()
  }
}
