import { CommonModule } from '@angular/common';
import { Component,Renderer2,ElementRef} from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent{
  private pdfUrl = 'gs://portfolio-13fd1.appspot.com/Aneesh_Resume.pdf';

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'Aneesh_Resume.pdf';
    link.click();
  }
}