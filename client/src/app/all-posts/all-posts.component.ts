import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  selectedSlide = 0;
  slides = [
     { text:'All',src: "http://placehold.it/350x150/000000" },
    { text:'Aircrafts',src: "http://placehold.it/350x150/111111" },
    {text:'AFV', src: "http://placehold.it/350x150/333333" },
    { text:'Civil',src: "http://placehold.it/350x150/666666" },
    {text:'Naval', src: "http://placehold.it/350x150/777777" },
    // {text:'Diorama', img: "http://placehold.it/350x150/888888" },
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 5 };

  // addSlide() {
  //   this.slides.push({ img: "http://placehold.it/350x150/777777" })
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e) {
  //   console.log('breakpoint');
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  handleClickSlider(slide,i) {
    this.selectedSlide = i;
    console.log("slide", slide)
  }

  activeModelCategory = 1;
  itemsPerSlide = 4;

  modelCategories = [
    {
      title: "All",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
    {
      title: "Aircrafts",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
    {
      title: "AFV",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
    {
      title: "Civil",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
    {
      title: "Figures",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
    {
      title: "Dioramas",
      background: "https://picsum.photos/seed/picsum/400/200",
    },
  ]
  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' },
    { title: 'item 7' },
    { title: 'item 7' },
    { title: 'item 7' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
