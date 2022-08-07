import { Component } from '@angular/core';
import { faNavicon, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-site';
  
  faNavicon = faNavicon;
  faSquareUp = faSquareCaretUp;


  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({behavior: 'smooth'});
 }
}
