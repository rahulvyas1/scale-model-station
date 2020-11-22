import { Component, OnInit, TemplateRef } from '@angular/core';
import { faSearch, faSignInAlt,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faSearch = faSearch;
  faGoogle = faGoogle;
  faTimes = faTimes;
  faSignInAlt = faSignInAlt;
  title = 'client';
  isCollapsed = true;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

