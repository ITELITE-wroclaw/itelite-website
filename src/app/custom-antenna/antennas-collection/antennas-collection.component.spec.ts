import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennasCollectionComponent } from './antennas-collection.component';

describe('AntennasCollectionComponent', () => {
  let component: AntennasCollectionComponent;
  let fixture: ComponentFixture<AntennasCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntennasCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntennasCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
