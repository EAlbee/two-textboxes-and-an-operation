import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILemkeNumbersThingComponent } from './ilemke-numbers-thing.component';

describe('ILemkeNumbersThingComponent', () => {
  let component: ILemkeNumbersThingComponent;
  let fixture: ComponentFixture<ILemkeNumbersThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILemkeNumbersThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILemkeNumbersThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
