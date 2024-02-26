import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosuresComponent } from './enclosures.component';

describe('EnclosuresComponent', () => {
  let component: EnclosuresComponent;
  let fixture: ComponentFixture<EnclosuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnclosuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
