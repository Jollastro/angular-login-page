import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() imgSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
