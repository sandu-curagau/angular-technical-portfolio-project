import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengExamplesComponent } from './primeng-examples.component';

describe('PrimengExamplesComponent', () => {
  let component: PrimengExamplesComponent;
  let fixture: ComponentFixture<PrimengExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
