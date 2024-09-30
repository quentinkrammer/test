import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentProjektionComponent } from './content-projektion/content-projektion.component';
import { EchoComponent } from './echo/echo.component';
import {
  MultiContentOne,
  MultiContentProjectionComponent,
  MultiContentTwo,
} from './multi-content-projection/multi-content-projection.component';
import {
  DynamicTabsComponent,
  TabPanelComponent,
} from './dynamic-tabs/dynamic-tabs.component';
import { SvgTestComponent } from './svg-test/svg-test.component';

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
    TabPanelComponent,
    DynamicTabsComponent,
    SvgTestComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
