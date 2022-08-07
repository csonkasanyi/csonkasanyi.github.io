import { Component, OnInit } from '@angular/core';
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faNavicon = faNavicon;
  faXmark = faXmark;
  
  constructor() {}

  ngOnInit(): void {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      const menuContainer = document.getElementById("menuContainer") as HTMLElement;
      if (prevScrollpos > currentScrollPos) {
        menuContainer.style.top = "0";
      } else {
        menuContainer.style.top = "-385px";
    }
      prevScrollpos = currentScrollPos;
  }
  }

  
  menuHandler() {
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    const close = document.getElementById('close') as HTMLElement;
    const menu = document.getElementById('menu') as HTMLElement;
        
    hamburger.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'flex';
  }

  closeMenu() {
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    const close = document.getElementById('close') as HTMLElement;
    const menu = document.getElementById('menu') as HTMLElement;
    
    hamburger.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'none';
  }
}
