import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Admin } from '../admin';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userService:UserService, private router:Router
    , private adminService:AdminService) { }

  ngOnInit(): void {
    this.user=this.userService.giveUserData()
    this.admin=this.adminService.giveAdminData()
  }

  isSearched:boolean=false

  questions:Question[] | undefined

  user=new User()
  admin = new Admin()

  getValue(values:string){
    if(values !=='')
    this.userService.searchQuestion(values).subscribe((data)=>{
      console.log(data)
      this.questions=data
      if(data.length==0){
        alert("No Question Found")
      }else{
      this.isSearched=true}
    })

  }

  sendQuestionToGetAnswer(id:number){
    console.log(id)
    this.userService.getQuestionId(id)
    this.router.navigate(['/get-answer'])
    this.isSearched=false

  }

  response:any
  adminLogout(adminId:number){

    this.adminService.adminLogout(adminId).subscribe((data)=>{
     this.response=(data)
    },err =>{
     console.log("error called"+err)
     this.admin=new Admin()
     this.adminService.sendAdminData(this.admin)
     this.router.navigate(['/admin'])
    }

    )

  }

  userLogout( userId:number) {
    this.userService.userLogout(userId).subscribe((data)=>{
     this.response=data
    },err =>{
     this.user=new User()
     this.userService.sendUserData(this.user)
     this.router.navigate(["/user"])
    }
    )
 }

  adminRegister(data:any){

   this.admin.email= data.email
    this.admin.name= data.fName+" "+data.lName
    this.admin.password=data.password
    this.admin.phoneNumber=data.mNumber

     this.adminService.adminRegister(this.admin).subscribe((data)=>{
      this.admin=data
      alert("Admin Added")
      this.router.navigate(['/admin'])
     },err =>{
      alert("Admin Already Available")
      this.router.navigate(['/admin'])
     })

    }

}
