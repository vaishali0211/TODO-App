import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-upcomingtask',
  templateUrl: './upcomingtask.page.html',
  styleUrls: ['./upcomingtask.page.scss'],
})
export class UpcomingtaskPage implements OnInit {
  upcomingTask: { task: string; date: string; }[];

  constructor(
    public modalCtlr:ModalController,
     public todoServive:TodoService
  ) { 
    this.upcomingTask=[
      {task:'add buttons on home page',date:'20 May 2021'},
      {task:'API integrate',date:'23 May 2021'},
      {task:'make Documentation',date:'24 May 2021'},
      {task:'load data in home page',date:'25 May 2021'},
      {task:'create Login form',date:'27 May2021'},
      {task:' add Validations',date:'28 May 2021'},
      {task:'Add Authentication',date:'29 May 2021'},
    ]
   }
   async dismis(){
    await this.modalCtlr.dismiss()
  }

  ngOnInit() {
  }

}
