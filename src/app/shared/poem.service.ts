import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GENERALPOEMS } from './general-poems';
import { PUBLISHEDPOEMS } from './published-poems';
import { UNTITLEDPOEMS } from './untitled-poems';
import { WORSHIPFULPOEMS } from './worshipful-poems';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  constructor() { }

  getGeneralPoem(name): Observable<object> {
    let titledPoem = GENERALPOEMS.find(poem => poem.title == name);
    return of(titledPoem);
  }

  getPublishedPoem(name): Observable<object> {
    let titledPoem = PUBLISHEDPOEMS.find(poem => poem.title == name);
    return of(titledPoem);
  }

  getUntitledPoem(id): Observable<string> {
    let untitled = UNTITLEDPOEMS.find(poem => poem.id == id);
    let res = untitled.poem;
    return of(res);
  }

  getWorshipfulPoem(name): Observable<object> {
    let titledPoem = WORSHIPFULPOEMS.find(poem => poem.title == name);
    return of(titledPoem);
  }
}
