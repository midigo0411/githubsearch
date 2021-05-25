import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubResultComponent } from './github-result.component';

describe('GithubResultComponent', () => {
  let component: GithubResultComponent;
  let fixture: ComponentFixture<GithubResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
