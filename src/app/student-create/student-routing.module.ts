import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcademicDetailsComponent } from "../academic-details/academic-details.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class StudentRoutingModule {}
export const RoutingComponents = [AcademicDetailsComponent]
