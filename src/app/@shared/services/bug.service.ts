import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';

@Injectable({
  providedIn: 'root'
})

export class BugService {

  bugs : Bug[] = [];

  constructor() { }

 addItem( value : Partial<Bug>) {
    this.bugs.push(value as Bug);
  }

  getItems() : Bug[]{
    return this.bugs;
  }

}
