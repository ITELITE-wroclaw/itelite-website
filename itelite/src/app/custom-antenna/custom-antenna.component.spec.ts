import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAntennaComponent } from './custom-antenna.component';

describe('CustomAntennaComponent', () => {
  let component: CustomAntennaComponent;
  let fixture: ComponentFixture<CustomAntennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAntennaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
