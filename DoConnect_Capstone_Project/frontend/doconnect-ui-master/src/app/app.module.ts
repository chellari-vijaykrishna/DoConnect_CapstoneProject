import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { GetAnswerComponent } from './get-answer/get-answer.component';
import { HomeComponent } from './home/home.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UnapprovedquestionsComponent } from './unapprovedquestions/unapprovedquestions.component';
import { UnapprovedanswersComponent } from './unapprovedanswers/unapprovedanswers.component';
import { UserslistComponent } from './userslist/userslist.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllQuestionsComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AskQuestionComponent,
    NavBarComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
    ChatComponent,
    GetAnswerComponent,
    HomeComponent,
    SidebarComponent,
    UnapprovedquestionsComponent,
    UnapprovedanswersComponent,
    UserslistComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
