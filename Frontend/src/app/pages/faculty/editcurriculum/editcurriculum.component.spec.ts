import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcurriculumComponent } from './editcurriculum.component';

describe('EditcurriculumComponent', () => {
  let component: EditcurriculumComponent;
  let fixture: ComponentFixture<EditcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
