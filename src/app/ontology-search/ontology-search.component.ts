import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject, throwError } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from "rxjs/operators";
import { OntologySearchService } from "../ontology-search.service";

@Component({
  selector: 'app-ontology-search',
  templateUrl: './ontology-search.component.html',
  styleUrls: ['./ontology-search.component.css']
})
export class OntologySearchComponent implements OnInit {

  public loading = false;
  public searchTerm = new Subject<KeyboardEvent>();
  public searchResult: any;
  public paginationElements: any;
  public errorMessage: any;
  public page:any;

  constructor(private readonly ontologySearchService: OntologySearchService) { }

  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  public search() {
    this.searchTerm.pipe(
      map((e: any) => {
        console.log(e.target.value);
        return e.target.value
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        return this.ontologySearchService._searchEntries(term)
      }),
      catchError((e) => {
        console.log(e)
        this.loading = false;
        this.searchResult = "";
        this.errorMessage = e.message;
        if (e.status === 400) {
          this.errorMessage = "No such ontology found!";
        }
        return throwError(e);
      }),
    ).subscribe(v => {
        this.loading = false;
        this.searchResult = v;
        this.paginationElements = this.searchResult;
    })
  }

  ngOnInit(): void {
    this.search();
  }
}
