import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../@shared/models/bug';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

  @Input() bug : Bug; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
