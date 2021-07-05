import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public arrRowOne: Array<any> = [
    "Udemy for Business", "Teach on Udemy", "Get the app", "About us", "Contact us"
  ]
  public arrRowTwo: Array<any> = [
    "Careers", "Blog", "Help and Support", "Affiliate", "Contact us"
  ]
  public arrRowThere: Array<any> = [
    "Udemy for Business", "Teach on Udemy", "Get the app", "About us", "Contact us"
  ]
  constructor() { }
  ngOnInit(): void {
  }
}
