import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionContainerComponent } from './expansion-container.component';

describe('ExpansionContainerComponent', () => {
  let component: ExpansionContainerComponent;
  let fixture: ComponentFixture<ExpansionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
