import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-projectss',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './about-projectss.component.html',
  styleUrl: './about-projectss.component.css'
})
export class AboutProjectssComponent {
  private lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const animatedElement = document.getElementById('animateElement');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (!animatedElement) return;

    if (scrollTop > 700) {
      // Downscroll
      animatedElement.style.display = 'flex';
      animatedElement.style.opacity = '1';
      animatedElement.style.animation = 'slideDown 2s forwards';
    } else {
      // Upscroll
      if (scrollTop < 1000) {
        animatedElement.style.opacity = '0';
        animatedElement.style.animation = 'slideUp 2s reverse';
 // Hide after animation
      }
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }
}
