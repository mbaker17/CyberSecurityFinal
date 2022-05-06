import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToolComponent } from './show-tool.component';

describe('ShowToolComponent', () => {
  let component: ShowToolComponent;
  let fixture: ComponentFixture<ShowToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
