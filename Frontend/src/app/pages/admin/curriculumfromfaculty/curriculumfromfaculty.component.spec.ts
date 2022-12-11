import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumfromfacultyComponent } from './curriculumfromfaculty.component';

describe('CurriculumfromfacultyComponent', () => {
  let component: CurriculumfromfacultyComponent;
  let fixture: ComponentFixture<CurriculumfromfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumfromfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumfromfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
