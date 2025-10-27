import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessionsComponent } from './search-professions.component';

describe('SearchProfessionsComponent', () => {
  let component: SearchProfessionsComponent;
  let fixture: ComponentFixture<SearchProfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchProfessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
