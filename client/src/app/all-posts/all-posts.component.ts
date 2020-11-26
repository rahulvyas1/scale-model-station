import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  selectedSlide = 0;
  slides:any;
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

  numOfImages = 32;
  images: Image [];

  constructor() {
    this.slides = this.generateImagesList();
  }

  private generateRandomImage(): Image {
    const len = (Math.random() * (1000 - 400) + 300).toFixed();
    const width = len;
    const height = len;
    return {src: `https://picsum.photos/${width}/${height}/?random`};
  }

  private generateImagesList(): Image[] {
    const images: Image[] = [];
    for (let i = 0; i < this.numOfImages; i++){
      const image = this.generateRandomImage();
      image.text = `#${i}`;
      images.push(image);
    }
    return images;
  }

  addImage() {
    const image = this.generateRandomImage();
    image.text = `#${this.images.length}`;
    this.images.push(image);
  }


  ngOnInit(): void {
  }

}
