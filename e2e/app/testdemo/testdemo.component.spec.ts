import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdemoComponent } from './testdemo.component';

describe('TestdemoComponent', () => {
  let component: TestdemoComponent;
  let fixture: ComponentFixture<TestdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
