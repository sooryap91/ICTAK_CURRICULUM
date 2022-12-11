import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { RequirementformComponent } from './pages/admin/requirementform/requirementform.component';
import { LayoutfacultyComponent } from './pages/faculty/layoutfaculty/layoutfaculty.component';
import { RequirementformfacultyComponent } from './pages/faculty/requirementformfaculty/requirementformfaculty.component';
import { ResponseformComponent } from './pages/faculty/responseform/responseform.component';
import { FacultydashboardComponent } from './pages/faculty/facultydashboard/facultydashboard.component';
import { PastcurriculamComponent } from './pages/faculty/pastcurriculum/pastcurriculam.component';
import { CurriculumfromfacultyComponent } from './pages/admin/curriculumfromfaculty/curriculumfromfaculty.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './services/auth.guard';
import { ViewcurriculumComponent } from './pages/admin/viewcurriculum/viewcurriculum.component';
import { UpdatecurriculumComponent } from './pages/admin/updatecurriculum/updatecurriculum.component';
import { ViewComponent } from './pages/faculty/view/view.component';
import { EditcurriculumComponent } from './pages/faculty/editcurriculum/editcurriculum.component';
import { EditformComponent } from './pages/faculty/editform/editform.component';
@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    RequirementformComponent,
    LayoutfacultyComponent,
    RequirementformfacultyComponent,
    ResponseformComponent,
    FacultydashboardComponent,
    PastcurriculamComponent,
    CurriculumfromfacultyComponent,
    ViewcurriculumComponent,
    UpdatecurriculumComponent,
    ViewComponent,
    EditformComponent,
    EditcurriculumComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [AuthService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
