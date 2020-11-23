import { Component, OnInit, TemplateRef } from '@angular/core';
import { faSearch, faSignInAlt,faTimes,faUpload,faAngleUp,faAngleDown,faSignOutAlt,faImages } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUploadBtnClicked = false;
  faImages = faImages;
  faAngleUp = faAngleUp;
  faSignOutAlt = faSignOutAlt;
  faAngleDown = faAngleDown;
  isUserMenuOpen = false;

  isLoggedIn = true;
  faSearch = faSearch;
  faUpload= faUpload;
  faGoogle = faGoogle;
  faTimes = faTimes;
  faSignInAlt = faSignInAlt;
  title = 'client';
  isCollapsed = true;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  handleClickLogin(){
    window.location.href = 'http://localhost:32694/auth/google';
  }

  toggleUserMenu(){
    this.isUserMenuOpen =  !this.isUserMenuOpen;
  }
  toggleUploadButton(){
    this.isUploadBtnClicked =  !this.isUploadBtnClicked;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

