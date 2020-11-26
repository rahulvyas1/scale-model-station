import { Component, OnInit, TemplateRef } from '@angular/core';
import { faSearch, faSignInAlt, faTimes, faUpload, faAngleUp, faAngleDown, faSignOutAlt, faImages } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import qs from 'qs';

import { Store } from '@ngrx/store';
import { LoadUserAction } from './store/actions/user.action';
import { AppState } from './store/models/app-state.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUploadBtnClicked = false;
  userProfile = {profilePic:null};
  faImages = faImages;
  faAngleUp = faAngleUp;
  faSignOutAlt = faSignOutAlt;
  faAngleDown = faAngleDown;
  isUserMenuOpen = false;

  isLoggedIn = false;
  faSearch = faSearch;
  faUpload = faUpload;
  faGoogle = faGoogle;
  faTimes = faTimes;
  faSignInAlt = faSignInAlt;
  title = 'client';
  isCollapsed = true;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private store: Store<AppState>,private userService: UserService) {

    this.userService.getCurrentUser().then(data=>{
      console.log(data);
      const payload = {
        id: data.currentUser['?_id'],
        firstName: data.currentUser['name']['givenName'],
        profilePic: data.currentUser['photos'][0]['value'],
        username: data.currentUser['name']['givenName'],
      };
      this.userProfile = payload;
    })
    console.log(window.location)

    const parsedData = qs.parse(window.location.search);
    console.log(parsedData);
    if(parsedData['?id']){
      const payload = {
        id: parsedData['?_id'],
        firstName: parsedData['name']['givenName'],
        profilePic: parsedData['photos'][0]['value'],
        username: parsedData['name']['givenName'],
      };
      this.userProfile = payload;
      this.store.dispatch(new LoadUserAction(payload));
    }

  }

  handleClickLogin() {
    window.location.href = 'http://localhost:32694/auth/google';
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  toggleUploadButton() {
    this.isUploadBtnClicked = !this.isUploadBtnClicked;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

