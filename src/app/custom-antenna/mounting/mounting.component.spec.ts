import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountingComponent } from './mounting.component';

describe('MountingComponent', () => {
  let component: MountingComponent;
  let fixture: ComponentFixture<MountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
