import { Component } from '@angular/core';
import { Bug } from './@shared/models/bug';
import { BugService } from './@shared/services/bug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private bugService:BugService){}
    bugs: Bug[] = this.bugService.getItems();
}

