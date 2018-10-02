import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsAddNumbersComponent } from './tjs-add-numbers.component';

describe('TjsAddNumbersComponent', () => {
  let component: TjsAddNumbersComponent;
  let fixture: ComponentFixture<TjsAddNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsAddNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsAddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
