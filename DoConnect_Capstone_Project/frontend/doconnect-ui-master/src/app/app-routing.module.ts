import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { GetAnswerComponent } from './get-answer/get-answer.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { UnapprovedanswersComponent } from './unapprovedanswers/unapprovedanswers.component';
import { UnapprovedquestionsComponent } from './unapprovedquestions/unapprovedquestions.component';
import { UserslistComponent } from './userslist/userslist.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "all-questions", component: AllQuestionsComponent },
  { path: "", component: HomeComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-register", component: AdminRegisterComponent },
  { path: "ask-question", component: AskQuestionComponent },
  { path: "admin", component:AdminComponent  },
  { path: "user", component: UserComponent },
  { path: "chat", component: ChatComponent },
  { path: "get-answer", component: GetAnswerComponent },
  { path: "get-unapproved-answers", component: UnapprovedanswersComponent },
  { path: "get-unapproved-questions", component: UnapprovedquestionsComponent },
  { path: "get-all-users", component: UserslistComponent },
  { path: "search", component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

