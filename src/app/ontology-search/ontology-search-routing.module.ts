import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OntologySearchComponent } from "./ontology-search.component";

const routes: Routes = [
  {
    path: '',
    component: OntologySearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OntologySearchRoutingModule { }
