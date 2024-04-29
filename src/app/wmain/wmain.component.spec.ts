import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmainComponent } from './wmain.component';

describe('WmainComponent', () => {
  let component: WmainComponent;
  let fixture: ComponentFixture<WmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
