import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerocketComponent } from './singlerocket.component';

describe('SinglerocketComponent', () => {
  let component: SinglerocketComponent;
  let fixture: ComponentFixture<SinglerocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
