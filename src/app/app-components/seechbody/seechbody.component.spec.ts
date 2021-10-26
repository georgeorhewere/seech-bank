import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeechbodyComponent } from './seechbody.component';

describe('SeechbodyComponent', () => {
  let component: SeechbodyComponent;
  let fixture: ComponentFixture<SeechbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeechbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeechbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
