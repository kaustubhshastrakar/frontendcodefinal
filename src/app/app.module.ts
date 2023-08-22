import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HrListComponent } from './hr-list/hr-list.component';
import { HrDetailsComponent } from './hr-details/hr-details.component';
import { HrFormComponent } from './hr-form/hr-form.component';
import { LoginComponent } from './login/login.component';
import { AssociateComponent } from './associate/associate.component';
import { AssociateListComponent } from './associate-list/associate-list.component';
import { AssociateMainPageComponent } from './associate-main-page/associate-main-page.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { DeleteAssociateComponent } from './delete-associate/delete-associate.component';
import { SkillmainpageComponent } from './skillmainpage/skillmainpage.component';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { DeleteSkillComponent } from './deleteskill/deleteskill.component';
import { AssociateLoginComponent } from './associate-login/associate-login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { AssociateSkillsComponent } from './associate-skills/associate-skills.component';
import { AssociateSkillsListComponent } from './associate-skills-list/associate-skills-list.component';
import { AssociateDetailsComponent } from './associate-details/associate-details.component';
import { AssociateloginsuccessComponent } from './associateloginsuccess/associateloginsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HrListComponent,
    HrDetailsComponent,
    HrFormComponent,
    LoginComponent,
    AssociateComponent,
    AssociateListComponent,
    AssociateMainPageComponent,
    LoginsuccessComponent,
    DeleteAssociateComponent,
    SkillmainpageComponent,
    CreateSkillComponent,
    SkillListComponent,
    DeleteSkillComponent,
    AssociateLoginComponent,
    MainLoginComponent,
    AssociateSkillsComponent,
    AssociateSkillsListComponent,
    AssociateDetailsComponent,
    AssociateloginsuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'mainlogin', pathMatch: 'full' },
      {path: 'hr-list', component: HrListComponent },
      {path: 'hr-details/:id', component: HrDetailsComponent },
      {path: 'hr-form', component: HrFormComponent },
      {path: 'login', component: LoginComponent},
      {path: 'associate', component: AssociateComponent},
      {path: 'associates', component: AssociateListComponent},
      {path: 'associate-main', component: AssociateMainPageComponent},
      {path: 'loginsuccess', component: LoginsuccessComponent},
      {path: 'delete-associate', component: DeleteAssociateComponent},
      {path: 'skillmain', component: SkillmainpageComponent},
      {path: 'createskill', component: CreateSkillComponent},
      {path: 'listskill', component: SkillListComponent},
      {path: 'deleteskill', component: DeleteSkillComponent},
      {path: 'associatelogin', component: AssociateLoginComponent},
      {path: 'mainlogin', component: MainLoginComponent},
      {path: 'associateskills', component: AssociateSkillsComponent},
      {path: 'associateskillslist', component: AssociateSkillsListComponent},
      {path: 'associatedetails', component: AssociateDetailsComponent},
      {path: 'associateloginsuccess', component: AssociateloginsuccessComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
