import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})

export class TaskViewComponent {

  informacion: any[] = []
  
  ngOnInit(): void {
    this.mostrarInfo()
    this.setColor()
  }

  mostrarInfo(): void {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.informacion = JSON.parse(storedData);
    }    
  }

  color: string = ''

  setColor(): void {
    if (this.informacion[0].status == 'Not started') {
      this.color = 'darkgray';
    } else if (this.informacion[0].status == 'In process') {
      this.color = 'blue';
    } else if (this.informacion[0].status == 'Paused') {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
  }
}