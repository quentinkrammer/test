import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-content-projection',
  standalone: true,
  imports: [],
  templateUrl: './multi-content-projection.component.html',
  styleUrl: './multi-content-projection.component.css',
})
export class MultiContentProjectionComponent {}

@Component({
  selector: 'multi-content-one',
  template: `<span>multi content projection 1</span>`,
  standalone: true,
})
export class MultiContentOne {
  /* ... */
}

@Component({
  selector: 'multi-content-two',
  template: `<span>multi content projection 2</span>`,
  standalone: true,
})
export class MultiContentTwo {
  /* ... */
}
