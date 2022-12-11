import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfacultyComponent } from './layoutfaculty.component';

describe('LayoutfacultyComponent', () => {
  let component: LayoutfacultyComponent;
  let fixture: ComponentFixture<LayoutfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
