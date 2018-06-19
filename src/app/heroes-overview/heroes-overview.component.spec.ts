import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesOverviewComponent } from './heroes-overview.component';

describe('HeroesOverviewComponent', () => {
  let component: HeroesOverviewComponent;
  let fixture: ComponentFixture<HeroesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
