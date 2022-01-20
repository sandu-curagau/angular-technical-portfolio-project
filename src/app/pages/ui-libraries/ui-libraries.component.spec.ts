import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibrariesComponent } from './ui-libraries.component';

describe('UiLibrariesComponent', () => {
  let component: UiLibrariesComponent;
  let fixture: ComponentFixture<UiLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLibrariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
