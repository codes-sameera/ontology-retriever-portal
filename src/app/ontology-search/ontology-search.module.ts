import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OntologySearchRoutingModule } from './ontology-search-routing.module';
import { OntologySearchComponent } from './ontology-search.component';

@NgModule({
  imports: [
   OntologySearchRoutingModule,
   ReactiveFormsModule,
   CommonModule,
   NgxPaginationModule
  ],
  declarations: [OntologySearchComponent]
})
export class OntologySearchModule { }
