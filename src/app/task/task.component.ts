import { Component } from '@angular/core';

import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskViewComponent } from '../task-view/task-view.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskInfoComponent, TaskViewComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

}