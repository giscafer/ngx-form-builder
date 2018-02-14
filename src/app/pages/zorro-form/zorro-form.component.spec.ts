import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroFormComponent } from './zorro-form.component';

describe('ZorroFormComponent', () => {
  let component: ZorroFormComponent;
  let fixture: ComponentFixture<ZorroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
