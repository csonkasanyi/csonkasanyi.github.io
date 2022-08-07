import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faCss3, faGithub, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faBootstrap = faBootstrap;
  faJavascript = faJs;
  faReact = faReact;
  faAngular = faAngular;
  faGithub = faGithub;
  faSass = faSass;
  constructor() { }

  ngOnInit(): void {
  }

}
