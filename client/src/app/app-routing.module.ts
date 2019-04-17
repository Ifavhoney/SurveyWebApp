//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { CreateSurveyComponent } from "./pages/create-survey/create-survey.component";
import { DisplaySurveyListComponent } from './pages/display-survey-list/display-survey-list.component';
import { DeleteSurveyComponent } from './pages/delete-survey/delete-survey.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },
  { path: "survey/display-survey", component: DisplaySurveyListComponent, data: {title: 'Survey List'}},
  {path:  "survey/display-survey/delete/:id", component: DeleteSurveyComponent, data: {title: "Create A Survey!"}},

  {
    path: "survey/create-survey",
    component: CreateSurveyComponent,
    data: { title: "Create A Survey!" }
  },

  {
    path: "survey/survey-list",
    component: SurveyComponent,
    data: { title: "Survey-list" }
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
