import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Question } from '../question';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService:UserService, private router:Router,private adminService:AdminService) { }

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


}
