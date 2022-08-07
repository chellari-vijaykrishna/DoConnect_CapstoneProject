import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Question } from '../question';
import { User } from '../user';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  constructor( private userService:UserService,private adminService:AdminService , private router:Router) { }

  ngOnInit(): void {
    this.user=this.userService.giveUserData()
    this.admin=this.adminService.giveAdminData()
    this.getQuestions('all')

  }
  questions:Question[] | undefined

  admin=new Admin()
  user= new User()
  response:any

 getQuestions(topic:string){
    this.userService.getQuestions(topic).subscribe((data)=>{
    this.questions=data
    console.log("questions are "+this.questions)

  })
 }

 sendQuestionToGetAnswer(questionId:number){
  this.userService.getQuestionId(questionId)
  this.router.navigate(['/get-answer'])

 }

 deleteQuestion(questionId:number){
  this.adminService.deleteQuestion(questionId).subscribe((data)=>{
    this.response=data
    alert("Question Removed")
    this.router.navigate(['/admin'])
  })

 }


}
