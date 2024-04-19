import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaComponent } from './elimina.component';

describe('EliminaComponent', () => {
  let component: EliminaComponent;
  let fixture: ComponentFixture<EliminaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminaComponent]
    });
    fixture = TestBed.createComponent(EliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
