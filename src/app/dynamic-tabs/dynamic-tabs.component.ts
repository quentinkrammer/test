import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-panel',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class LeftPanelComponent {}

@Component({
  selector: 'app-right-panel',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class RightPanelComponent {}

@Component({
  selector: 'app-tab-panel',
  template: `<ng-template #tabPanel><ng-content></ng-content></ng-template>`,
  standalone: true,
})
export class TabPanelComponent {
  @Input({ required: true }) header = '';
  @Input({ required: true }) leftPanel!: TemplateRef<unknown>;
  @Input({ required: true }) rightPanel!: TemplateRef<unknown>;
  // TODO: how to properly handly undefined case
  @ViewChild('tabPanel') tabPanel!: TemplateRef<unknown>;
}

@Component({
  selector: 'app-dynamic-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-tabs.component.html',
  styleUrl: './dynamic-tabs.component.css',
})
export class DynamicTabsComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) tabPanels:
    | QueryList<TabPanelComponent>
    | undefined;
  tabs!: TabPanelComponent[];

  activeIndex = 0;

  ngAfterContentInit(): void {
    this.tabs = (this.tabPanels as QueryList<TabPanelComponent>).toArray();
  }

  onTabHeader(index: number) {
    this.activeIndex = index;
  }
}
