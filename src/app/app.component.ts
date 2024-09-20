import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentProjektionComponent } from './content-projektion/content-projektion.component';
import { EchoComponent } from './echo/echo.component';
import {
  MultiContentOne,
  MultiContentProjectionComponent,
  MultiContentTwo,
} from './multi-content-projection/multi-content-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContentProjektionComponent,
    EchoComponent,
    MultiContentProjectionComponent,
    MultiContentOne,
    MultiContentTwo,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
