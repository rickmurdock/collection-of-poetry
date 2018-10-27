import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UNTITLED } from './mock-untitled';

@Injectable({
  providedIn: 'root'
})
export class UntitledService {

  constructor() { }

  getUntitledPoem(id): Observable<string> {
    let untitled = UNTITLED.find(poem => poem.id == id);
    let res = untitled.poem;
    return of(res);
  }
}
