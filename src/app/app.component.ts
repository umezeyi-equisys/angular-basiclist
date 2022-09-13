import { Component, VERSION } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
