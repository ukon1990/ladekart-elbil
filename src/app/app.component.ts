import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'elbil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elbil';

  constructor(private db: DatabaseService) {
    this.db.constructor();
  }
}
