import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AboutProjectssComponent } from './about-projectss/about-projectss.component';
import { AboutmyselfComponent } from './aboutmyself/aboutmyself.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { ExperienceComponent } from './experience/experience.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BannerComponent,AboutProjectssComponent,AboutmyselfComponent,ContactComponent,
  HeaderComponent,AcheivementsComponent,ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
