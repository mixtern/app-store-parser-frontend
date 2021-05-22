import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from 'src/shared/main/app-config';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-app-config-modal',
  templateUrl: './app-config-modal.component.html',
  styleUrls: ['./app-config-modal.component.scss']
})

export class AppConfigModalComponent implements OnInit {
  r:AppConfigService;
  constructor(t:AppConfigService) { this.r = t; }

  ngOnInit() {
  }

  openAddAppModal() {
    
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");

    let link = modal.querySelector("[id=\"app-link\"]");
    console.log(link);
    console.log(link.textContent);
    link.textContent = "";
  }
}
