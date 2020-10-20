import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSecondComponent } from './blog-second.component';

describe('BlogSecondComponent', () => {
  let component: BlogSecondComponent;
  let fixture: ComponentFixture<BlogSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
