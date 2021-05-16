import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories =[]
  categorySelectedCategory
  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory
  selectwork: any;
  addnew: any;
  addTaskobj: any;


  constructor(
     public modalCtlr: ModalController,
     public todoService:TodoService,
     public alert:AlertController,
     public router:Router) {

   }



  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
  }
  
  
  
  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
      // this.router.navigate(['/home']);


    }else{
      console.log("can't save empty task");


    }
    this.dismis()


  }
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }


  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
    // this.newTaskObj.reset()

  }
  new(){
   console.log(this.addTaskobj); 
   alert("hi")

  }
  
 
  
}