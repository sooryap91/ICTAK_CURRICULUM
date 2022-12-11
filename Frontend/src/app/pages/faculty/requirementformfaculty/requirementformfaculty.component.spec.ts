import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementformfacultyComponent } from './requirementformfaculty.component';

describe('RequirementformfacultyComponent', () => {
  let component: RequirementformfacultyComponent;
  let fixture: ComponentFixture<RequirementformfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementformfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementformfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
