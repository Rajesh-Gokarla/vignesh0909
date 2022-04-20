import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { AuthGuard } from "./auth/auth.guard";
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'student-create', pathMatch: 'full'},
  { path: "auth",
    loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)
  },
  { path: "student-create", component: StudentCreateComponent},
  { path: "auth/login",
    loadChildren: () => import("./auth/login/login.component").then(x => x.LoginComponent)
  },
  { path: 'academic-profile', component: AcademicDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
