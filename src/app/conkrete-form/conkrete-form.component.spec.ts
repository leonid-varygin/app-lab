import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConkreteFormComponent } from './conkrete-form.component';

describe('ConkreteFormComponent', () => {
  let component: ConkreteFormComponent;
  let fixture: ComponentFixture<ConkreteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConkreteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConkreteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
