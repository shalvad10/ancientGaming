import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-detailed',
  templateUrl: './box-detailed.component.html',
  styleUrls: ['./box-detailed.component.scss']
})
export class BoxDetailedComponent implements OnInit {

  constructor() { }

  public prizeImages = [
    'https://static.ancientgaming.io/images/CSGORoll_Case_Content%20Killer.png',
    "https://static.hypedrop.com/images/u2.png",
    "https://static.ancientgaming.io/images/u2.png",
    "https://static.hypedrop.com/images/u2.png",
    "https://static.ancientgaming.io/images/madness.png"
  ];

  public prizeImage = 'https://static.ancientgaming.io/images/CSGORoll_Case_Content%20Killer.png';
  public wonItem = '';

  public box = {
    "id": "Qm94OjMyNDM",
    "name": "Kato",
    "iconUrl": "https://static.ancientgaming.io/images/CSGORoll_Case_Content%20Killer.png",
    "cost": 8775.67
  };

  ngOnInit(): void { }

  openBox() {
    const animation =  setInterval( () => {
      this.prizeImage = this.prizeImages[Math.floor(Math.random() * (this.prizeImages.length - 0) + 0)]
    }, 100);

    setTimeout(() => {
      clearInterval(animation);
      this.wonItem = this.prizeImage;
    }, 2000);
  }

}
