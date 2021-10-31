import { Component, OnInit, Input } from '@angular/core';

class Feature {
  image: string;
  header: string;
  content: string;

  constructor(image: string, header: string, content: string) {
    this.image = image;
    this.header = header;
    this.content = content;
  }
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @Input() columns = 0;
  features: Feature[] = [
    new Feature(
      "assets/icon-online.svg",
      "Online Banking",
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."),
    new Feature(
      "assets/icon-budgeting.svg",
      "Simple Budgeting",
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."),
    new Feature(
      "assets/icon-onboarding.svg",
      "Fast Onboarding",
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."),
    new Feature(
      "assets/icon-api.svg",
      "Open API",
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
