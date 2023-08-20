import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: '', redirectTo: '/associates', pathMatch: 'full' },
  { path: 'hr-list', component: HrListComponent },
  { path: 'hr-details/:id', component: HrDetailsComponent },
  { path: 'hr-form', component: HrFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'associate', component: AssociateComponent },
  { path: 'associates', component: AssociateListComponent },
  { path: '', redirectTo: '/associate-main', pathMatch: 'full' }, // Redirect to the main associate page
  { path: 'associate-main', component: AssociateMainPageComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent},
  { path: 'delete', component: DeleteAssociateComponent },
  { path: 'skillmain', component: SkillmainpageComponent},
  { path: 'createskill', component: CreateSkillComponent},
  { path: 'listskill', component: SkillListComponent},
  { path: 'deleteskill', component: DeleteSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}