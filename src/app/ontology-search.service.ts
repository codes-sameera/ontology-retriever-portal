import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OntologySearchService {

  public baseUrl = "http://localhost:8080/ontologies/";
  public searchResult: any;

  constructor(private readonly httpClient: HttpClient) { }

  public searchEntries(term: string): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
    }else{
      return this.httpClient.get(this.baseUrl + term).pipe(
        map(response => {
          console.log(response)
          const ontologies = [response];
          return this.searchResult = ontologies;
        })
      );
    }

  }

  public _searchEntries(term: string){
    return this.searchEntries(term);
  }
}
