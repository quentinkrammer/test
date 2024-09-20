import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-echo',
  standalone: true,
  imports: [],
  templateUrl: './echo.component.html',
  styleUrl: './echo.component.css',
})
export class EchoComponent {
  @Input({ required: true }) value = '';
}
