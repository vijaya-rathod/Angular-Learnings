import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommersComponent } from './ecommers.component';

describe('EcommersComponent', () => {
  let component: EcommersComponent;
  let fixture: ComponentFixture<EcommersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
