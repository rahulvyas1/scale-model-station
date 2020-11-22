import { Component, OnInit } from '@angular/core';
import { faPaperPlane,faUpload,faSave } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  faPaperPlane= faPaperPlane;
  faUpload= faUpload;
  faSave= faSave;
  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
