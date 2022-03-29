import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "../auth/auth-routing.module";
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule
  ]
})
export class StudentModule {}
