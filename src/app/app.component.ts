import { Component } from '@angular/core';

@Component({
  selector: 'elbil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuToggled = true;

  toggleMenu(): void {
    this.menuToggled = !this.menuToggled;
  }
}
