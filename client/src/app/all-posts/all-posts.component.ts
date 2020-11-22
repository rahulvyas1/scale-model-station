import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
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
