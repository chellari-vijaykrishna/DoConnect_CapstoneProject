import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Answer } from '../answer';
import { Question } from '../question';
import { User } from '../user';

@Component({
  selector: 'app-unapprovedquestions',
  templateUrl: './unapprovedquestions.component.html',
  styleUrls: ['./unapprovedquestions.component.css']
})
export class UnapprovedquestionsComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admin= this.adminService.giveAdminData()
   console.log("admin data is"+this.admin.id)
   if(this.admin.id==0){
    alert("Login Required")
    this.router.navigate(['/admin-login'])
   }
   else{
    this.getUnApprovedQuestions()
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

  getUnApprovedQuestions(){
    this.adminService.getUnApprovedQuestions().subscribe((data)=>{
     console.log(data)
     this.questions=data
     if(data.length!==0){
       this.questionThere=true
     }
     else
     alert("No Questions to approve")
    })

 }

 approveQuestion(questionId:number){
  this.adminService.approveQuestion(questionId).subscribe((data)=>{
   this.question=data
   alert("Question Approved")
   this.router.navigate(['/admin'])
  })

}

approveAnswer(answerId:number){
  this.adminService.approveAnswer(answerId).subscribe((data)=>{
   this.answer=data
   alert("Answer Approved")
   this.router.navigate(['/admin'])
  })
}
deleteQuestion(questionId:number){
 this.adminService.deleteQuestion(questionId).subscribe((data)=>{
   this.response=data
   alert("Question Removed")
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
getUser(email:string) {
 this.adminService.getUser(email).subscribe((data)=>{
   this.user=data
 })
}

addAdmin(){
 this.router.navigate(['/admin-register'])
}

getAllUsers(){
 this.adminService.getAllUsers().subscribe((data)=>{
   console.log(data)
   this.users=data
   if(data.length!==0){
     this.userThere=true
   }
   else
   alert("No users present")
 })
}

}
