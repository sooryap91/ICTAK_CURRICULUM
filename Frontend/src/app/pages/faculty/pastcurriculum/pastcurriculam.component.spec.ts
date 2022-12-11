import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastcurriculamComponent } from './pastcurriculam.component';

describe('PastcurriculamComponent', () => {
  let component: PastcurriculamComponent;
  let fixture: ComponentFixture<PastcurriculamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastcurriculamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastcurriculamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
