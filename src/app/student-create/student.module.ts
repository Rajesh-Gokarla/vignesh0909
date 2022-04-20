import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "../auth/auth-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import { StudentRoutingModule, RoutingComponents } from "./student-routing.module";
import { StudentCreateComponent } from "./student-create.component";

@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
    StudentRoutingModule,
  ]
})
export class StudentModule {}
