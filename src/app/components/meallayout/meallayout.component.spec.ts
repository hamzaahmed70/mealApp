import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeallayoutComponent } from './meallayout.component';

describe('MeallayoutComponent', () => {
  let component: MeallayoutComponent;
  let fixture: ComponentFixture<MeallayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeallayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeallayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
