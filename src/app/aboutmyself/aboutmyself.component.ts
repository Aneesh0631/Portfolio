import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-aboutmyself',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './aboutmyself.component.html',
  styleUrls: ['./aboutmyself.component.css']
})
export class AboutmyselfComponent {
  private lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const animatedElement = document.getElementById('animatedElement');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (!animatedElement) return;

    if (scrollTop > 160) {
      // Downscroll
      animatedElement.style.display = 'flex';
      animatedElement.style.opacity = '1';
      animatedElement.style.animation = 'slideDown 2s forwards';
    } else {
      // Upscroll
      if (scrollTop < 900) {
        animatedElement.style.opacity = '0';
        animatedElement.style.animation = 'slideUp 2s reverse';
 // Hide after animation
      }
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }
}
