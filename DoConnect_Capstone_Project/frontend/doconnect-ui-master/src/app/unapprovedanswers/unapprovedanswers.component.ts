import { Component, OnInit } from '@angular/core';
import { Question } from './../question';
import { Answer } from './../answer';
import { User } from './../user';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unapprovedanswers',
  templateUrl: './unapprovedanswers.component.html',
  styleUrls: ['./unapprovedanswers.component.css']
})
export class UnapprovedanswersComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admin= this.adminService.giveAdminData()
   console.log("admin data is"+this.admin.id)
   if(this.admin.id==0){
    alert("Login Required")
    this.router.navigate(['/admin-login'])
   }
   else{
    this.getUnApprovedAnswers();
   }
  }

  response:any
  admin = new Admin()
  answer:Answer | undefined
  question = new Question()
  questions:Question[] | undefined
  answers:Answer[] | undefined
  user = new User()
  users: User[] | undefined
  answerThere:boolean=false
  questionThere:boolean=false
  userThere:boolean=false

  getUnApprovedAnswers(){
    this.adminService.getUnApprovedAnswers().subscribe((data)=>{
     console.log(data)
     this.answers=data
     if(data.length!==0){
       this.answerThere=true
     }
     else
     alert("No answers to approve")
    })

 }

 approveAnswer(answerId:number){
  this.adminService.approveAnswer(answerId).subscribe((data)=>{
   this.answer=data
   alert("Answer Approved")
   this.router.navigate(['/admin'])
  })
}

deleteAnswer(answerId:number){
 this.adminService.deleteAnswer(answerId).subscribe((data)=>{
   this.response=data
   alert("Answer Removed")
   this.router.navigate(['/admin'])
 })

}

}
