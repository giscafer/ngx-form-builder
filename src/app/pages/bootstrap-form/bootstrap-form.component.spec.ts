import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormComponent } from './bootstrap-form.component';

describe('BootstrapFormComponent', () => {
  let component: BootstrapFormComponent;
  let fixture: ComponentFixture<BootstrapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
