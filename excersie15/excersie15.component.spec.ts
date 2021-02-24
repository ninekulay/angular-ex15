import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excersie15Component } from './excersie15.component';

describe('Excersie15Component', () => {
  let component: Excersie15Component;
  let fixture: ComponentFixture<Excersie15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excersie15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Excersie15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
