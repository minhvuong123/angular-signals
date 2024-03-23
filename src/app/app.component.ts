import { Component } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [DefaultComponent, SignalsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-signal';
}
