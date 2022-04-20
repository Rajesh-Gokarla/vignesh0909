import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "auth",
    loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)
  },
  { path: "student-create",
    loadChildren: () => import("./student-create/student.module").then(x => x.StudentModule)
  },
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
