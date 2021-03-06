import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { AuthGuard } from "./auth/auth.guard";
import { PlacementDetailsComponent } from './placement-details/placement-details/placement-details.component';
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: "auth",
    loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)
  },
  { path: "students", component: StudentCreateComponent},
  { path: "auth/login",
    loadChildren: () => import("./auth/login/login.component").then(x => x.LoginComponent)
  },
  { path: 'academic-profile', component: AcademicDetailsComponent },
  { path: 'placement-profile', component: PlacementDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
