import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { GENERALPOEMS } from './general-poems';
import { PUBLISHEDPOEMS } from './published-poems';
import { UNTITLEDPOEMS } from './untitled-poems';
import { WORSHIPFULPOEMS } from './worshipful-poems';
import { UntitledComponent } from '../untitled/untitled.component';
import { UntitledPoem } from './untitled-poem.model';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  private untitledUrl = 'api/untitledpoems';

  constructor(private http: HttpClient) { }

  getGeneralPoem(name): Observable<object> {
    const titledPoem = GENERALPOEMS.find(poem => poem.title === name);
    return of(titledPoem);
  }

  getPublishedPoem(name: string): Observable<object> {
    const titledPoem = PUBLISHEDPOEMS.find(poem => poem.title === name);
    return of(titledPoem);
  }

  getUntitledPoem(id): Observable<string> {
    const untitled = UNTITLEDPOEMS.find(poem => poem.id === id);
    const res = untitled.poem;
    return of(res);
  }

  //
  getUntitledPoems(): Observable<UntitledPoem[]> {
    console.log('1111');
    // console.log(this.http.get<UntitledPoem[]>(this.untitledUrl))
    return this.http.get<UntitledPoem[]>(this.untitledUrl)
      .pipe(
        catchError(this.handleError('untitledpoems', []))
      );
  }

  getWorshipfulPoem(name): Observable<object> {
    const titledPoem = WORSHIPFULPOEMS.find(poem => poem.title === name);
    return of(titledPoem);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log('error-------------------', error);

      return of(result as T);
    };
  }

}
