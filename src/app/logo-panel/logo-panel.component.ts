import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-panel',
  templateUrl: './logo-panel.component.html',
  styleUrls: ['./logo-panel.component.scss']
})
export class LogoPanelComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() logos: string[];

  constructor() { }

  ngOnInit() {
  }

}
