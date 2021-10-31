import { Component, OnInit, Input } from '@angular/core';

class Article {
  image: string;
  author: string;
  header: string;
  content: string;

  constructor(image: string, author: string, header: string, content: string) {
    this.image = image;
    this.author = author;
    this.header = header;
    this.content = content;
  }
}

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
  @Input() columns = 0;
  articles: Article[] = [
    new Article(
      "assets/image-currency.jpg",
      "By Claire Robinson",
      "Receive money in any currency with no fees",
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"),
    new Article(
      "assets/image-restaurant.jpg",
      "By Wilson Hutton",
      "Treat yourself without worrying about money",
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"),
    new Article(
      "assets/image-plane.jpg",
      "By Wilson Hutton",
      "Take your Easybank card wherever you go",
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"),
    new Article(
      "assets/image-confetti.jpg",
      "By Claire Robinson",
      "Our invite-only Beta accounts are now live!",
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
