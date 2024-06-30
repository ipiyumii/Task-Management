import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  isStopAddingTask = false;
  @Output()stop = new EventEmitter<boolean>()

  onStopAddTask() {
    this.stop.emit(this.isStopAddingTask)
  }
}
