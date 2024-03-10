import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectssComponent } from './about-projectss.component';

describe('AboutProjectssComponent', () => {
  let component: AboutProjectssComponent;
  let fixture: ComponentFixture<AboutProjectssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutProjectssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
