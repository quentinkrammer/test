import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjektionComponent } from './content-projektion.component';

describe('ContentProjektionComponent', () => {
  let component: ContentProjektionComponent;
  let fixture: ComponentFixture<ContentProjektionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjektionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjektionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
