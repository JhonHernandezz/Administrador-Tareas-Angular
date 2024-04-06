import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})

export class TaskInfoComponent {

  @ViewChild('nameInput') nameInput! : ElementRef;
  @ViewChild('statuSelect') statuSelect! : ElementRef;
  @ViewChild('descriptionTextarea') descriptionTextarea! : ElementRef;

  submitData(event: any) {

    let existeData = localStorage.getItem('data')
    let totalData: any[] = []

    if (existeData) {
      totalData = JSON.parse(existeData)
    }

    const format = (date: any, locale: any, options: any) => 
      new Intl.DateTimeFormat(locale, options).format(date)
    

    let now = new Date()

    format(now, 'es', { dateStyle: 'long' })

    const data = {
      id: crypto.randomUUID(),
      name: this.nameInput.nativeElement.value,
      status: this.statuSelect.nativeElement.value,
      description: this.descriptionTextarea.nativeElement.value,
      date: now
    }    

    totalData.push(data)

    localStorage.setItem('data', JSON.stringify(totalData))
  }
}