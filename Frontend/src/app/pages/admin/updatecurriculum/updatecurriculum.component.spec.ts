import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecurriculumComponent } from './updatecurriculum.component';

describe('UpdatecurriculumComponent', () => {
  let component: UpdatecurriculumComponent;
  let fixture: ComponentFixture<UpdatecurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
