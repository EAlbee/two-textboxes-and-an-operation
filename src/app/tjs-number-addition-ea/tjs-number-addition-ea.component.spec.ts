import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsNumberAdditionEAComponent } from './tjs-number-addition-ea.component';

describe('TjsNumberAdditionEAComponent', () => {
  let component: TjsNumberAdditionEAComponent;
  let fixture: ComponentFixture<TjsNumberAdditionEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjsNumberAdditionEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsNumberAdditionEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
