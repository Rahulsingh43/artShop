import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent {

  // activeSlides?: SlidesOutputData;
  // getPassedData(data: SlidesOutputData) {
  //   this.activeSlides = data;
  //   console.log(this.activeSlides);
  // }
  dynamicSlides = [
    {
      id: '1',
      src:'assets/img/budhha.jpg',
      alt:'Side 1',
      title:'Budhha',
      route: 'buddha'
    },
    {
      id: '2',
      src:'assets/img/waterf.jpeg',
      alt:'Side 2',
      title:'Water-Color',
      route: 'water-color'
    },
    {
      id: '3',
      src:'assets/img/Kalamkari.jpeg',
      alt:'Side 3',
      title:'Traditional',
      route: 'traditional'
    },
    {
      id: '4',
      src:'assets/img/acrylic2.jpg',
      alt:'Side 4',
      title:'Acrylic',
      route: 'acrylic'
    },
    {
      id: '5',
      src:'assets/img/oilowl.jpeg',
      alt:'Side 5',
      title:'Oil-Pastel',
      route: 'oil-pastel'
    }
  ]

  constructor() { }
 customOptions: OwlOptions = {
   loop: true,
  //  mouseDrag: false,
  //  touchDrag: false,
  //  pullDrag: false,
   dots: false,
   navSpeed: 600,
   autoplay: true, // Enable autoplay
   autoplayTimeout: 2500, // Autoplay interval in milliseconds
   autoplayHoverPause: true,
   lazyLoad: true,
   pullDrag: true,
   responsive: {
     0: {
       items: 3
     },
     400: {
       items: 3
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   
 }
}
