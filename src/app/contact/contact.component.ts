import { Component, OnInit } from '@angular/core';
import { faChrome, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faAt = faAt;
  faChrome = faChrome;
  constructor() { }

  ngOnInit(): void {
  }

}
