import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-easybank-feature',
  templateUrl: './easybank-feature.component.html',
  styleUrls: ['./easybank-feature.component.scss']
})
export class EasybankFeatureComponent implements OnInit {
  @Input() image = "";
  @Input() header = "";
  @Input() content = "";

  constructor() { }

  ngOnInit(): void {
  }

}
