import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { RequirementformComponent } from './pages/admin/requirementform/requirementform.component';
import { FacultydashboardComponent } from './pages/faculty/facultydashboard/facultydashboard.component';
import { LayoutfacultyComponent } from './pages/faculty/layoutfaculty/layoutfaculty.component';
import { RequirementformfacultyComponent } from './pages/faculty/requirementformfaculty/requirementformfaculty.component';
import { ResponseformComponent } from './pages/faculty/responseform/responseform.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PastcurriculamComponent } from './pages/faculty/pastcurriculum/pastcurriculam.component';
import { CurriculumfromfacultyComponent } from './pages/admin/curriculumfromfaculty/curriculumfromfaculty.component';
import { AuthGuard } from './services/auth.guard';
import { ViewcurriculumComponent } from './pages/admin/viewcurriculum/viewcurriculum.component';
import { UpdatecurriculumComponent } from './pages/admin/updatecurriculum/updatecurriculum.component';
import { ViewComponent } from './pages/faculty/view/view.component';
import { EditformComponent } from './pages/faculty/editform/editform.component';
import { EditcurriculumComponent } from './pages/faculty/editcurriculum/editcurriculum.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{path: 'admin',canActivate:[AuthGuard], component: LayoutComponent, children: [ { path: '', component: DashboardComponent },{ path: 'requirementform', component: RequirementformComponent },
  { path: 'dashboard', component: DashboardComponent },{path:'curriculumfaculty',component:CurriculumfromfacultyComponent},
{path:'view',component:ViewcurriculumComponent},{path:'update/:id',component:UpdatecurriculumComponent}]},

{ path: 'faculty',canActivate:[AuthGuard] ,component: LayoutfacultyComponent, children: [{path :'',component:FacultydashboardComponent},
  { path: 'requirementformfaculty', component: RequirementformfacultyComponent },
  { path: 'pastcurriculum',component:PastcurriculamComponent},{path :'facultydashboard',component:FacultydashboardComponent},
  { path: 'responseform/:id', component: ResponseformComponent },{ path: 'view/:id', component: ViewComponent },
  { path: 'editform/:id', component:EditformComponent },  { path: 'editcurriculum', component:EditcurriculumComponent }

 ]
},

{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
