import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRemediesComponent } from './search-remedies.component';

describe('SearchRemediesComponent', () => {
  let component: SearchRemediesComponent;
  let fixture: ComponentFixture<SearchRemediesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRemediesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRemediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
