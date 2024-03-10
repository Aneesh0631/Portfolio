import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmyselfComponent } from './aboutmyself.component';

describe('AboutmyselfComponent', () => {
  let component: AboutmyselfComponent;
  let fixture: ComponentFixture<AboutmyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmyselfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
