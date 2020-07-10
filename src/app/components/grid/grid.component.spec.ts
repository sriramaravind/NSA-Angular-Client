import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridviewComponent;
  let fixture: ComponentFixture<GridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
