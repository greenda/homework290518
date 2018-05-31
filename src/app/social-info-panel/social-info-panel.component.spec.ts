import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInfoPanelComponent } from './social-info-panel.component';

describe('SocialInfoPanelComponent', () => {
  let component: SocialInfoPanelComponent;
  let fixture: ComponentFixture<SocialInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
