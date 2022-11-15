import { Component, OnInit } from '@angular/core';
import { Box, currentUser } from '../Interfaces';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.scss']
})
export class BoxesListComponent implements OnInit {

  private boxListQuery!: QueryRef<{boxes: any}>;

  constructor(public apollo: Apollo) { 
    this.boxListQuery = this.apollo.watchQuery({
      query: gql`query {
        boxes(free: false, purchasable: true, openable: true) {
          edges {
            node {
              id
              name
              iconUrl
              cost
            }
          }
        }
      }`
    });
  }

  public boxes: any[] = [
    {
      "node": {
        "id": "Qm94OjMyNDM",
        "name": "Kato",
        "iconUrl": "https://static.ancientgaming.io/images/CSGORoll_Case_Content%20Killer.png",
        "cost": 8775.67
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNDU",
        "name": "Test many boxes 10",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.57
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNDY",
        "name": "Box in box test",
        "iconUrl": "https://static.ancientgaming.io/images/u2.png",
        "cost": 50
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNDc",
        "name": "Box for regression",
        "iconUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97aa13c5-fd38-4b4e-9854-b10d3d6f46b7/d47tkmy-31fcf985-9d30-4852-af94-2d3b56ce35a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdhYTEzYzUtZmQzOC00YjRlLTk4NTQtYjEwZDNkNmY0NmI3XC9kNDd0a215LTMxZmNmOTg1LTlkMzAtNDg1Mi1hZjk0LTJkM2I1NmNlMzVhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9qVDSbqNE42k7Pv5PWJgulxAsI3r58euIw0fpazMDBI",
        "cost": 0.1
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNDk",
        "name": "Crazy boxxx",
        "iconUrl": "https://csgoroll-review-f-4k0u73-h7r4kpopga-uc.a.run.app/en/boxes/create",
        "cost": 0.06
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTA",
        "name": "Best drop box 2",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 275000
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTI",
        "name": "item test box",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 15288.27
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTM",
        "name": "Test many boxes 74",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTQ",
        "name": "Test many boxes 49",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTU",
        "name": "Noot noot",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 72.86
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTc",
        "name": "Test many boxes 100",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTg",
        "name": "Ception",
        "iconUrl": "https://static.ancientgaming.io/images/u2.png",
        "cost": 819500
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNTk",
        "name": "ram pam pam",
        "iconUrl": "https://www.flaticon.com/free-icon/embarrassed_4138755",
        "cost": 942.96
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjA",
        "name": "wsxbgtrdlsosad11",
        "iconUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmyicons.co%2F&psig=AOvVaw26qiS9_lQglanVxJZUZxqE&ust=1653051725193000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNi8htnP6_cCFQAAAAAdAAAAABAD",
        "cost": 1417.01
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjI",
        "name": "qaz12",
        "iconUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreeicons.io%2F&psig=AOvVaw3orNR5_6oIC_DWZbqLu_R-&ust=1652179418594000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDbzpCe0vcCFQAAAAAdAAAAABAD",
        "cost": 6503.2
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjM",
        "name": "Highlander Test",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 1902.79
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjQ",
        "name": "Test many boxes 63",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjU",
        "name": "Test many boxes 51",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjY",
        "name": "Test many boxes 90",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjc",
        "name": "Test many boxes 32",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjg",
        "name": "Test many boxes 33",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNjk",
        "name": "Test many boxes 39",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzA",
        "name": "Test many boxes 97",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzE",
        "name": "VOLATILE-TEST",
        "iconUrl": "https://static.ancientgaming.io/images/CSGORoll_Case_Volatile.png",
        "cost": 421.14
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzI",
        "name": "Fifty Fifty with a Rare",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 18.65
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzQ",
        "name": "Box Creator box",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 211.25
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzU",
        "name": "27juneBox",
        "iconUrl": "https://cdn3.iconfinder.com/data/icons/line/36/smile_toothless-512.png",
        "cost": 311.41
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzY",
        "name": "Test many boxes 77",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzc",
        "name": "Stonkage",
        "iconUrl": "https://i.pinimg.com/originals/e8/66/3d/e8663d8db1b48400d608783bc0985c42.jpg",
        "cost": 16644.8
      }
    },
    {
      "node": {
        "id": "Qm94OjMyNzk",
        "name": "testadam",
        "iconUrl": "https://1@1.com",
        "cost": 4346.14
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODA",
        "name": "dpb",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.98
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODE",
        "name": "Test many boxes 29",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODI",
        "name": "Test many boxes 75",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODM",
        "name": "Test many boxes 78",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODQ",
        "name": "Test many boxes 82",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODU",
        "name": "Test many boxes 83",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODY",
        "name": "Test many boxes 87",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODc",
        "name": "Test many boxes 19",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODg",
        "name": "Test many boxes 93",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyODk",
        "name": "Test many boxes 22",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTA",
        "name": "Test many boxes 91",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTE",
        "name": "Test many boxes 92",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTI",
        "name": "Test many boxes 42",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTM",
        "name": "Test many boxes 34",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTQ",
        "name": "Test many boxes 64",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTU",
        "name": "Test many boxes 65",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTY",
        "name": "Test many boxes 67",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTc",
        "name": "Test many boxes 41",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTg",
        "name": "Test many boxes 43",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMyOTk",
        "name": "Test many boxes 96",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDA",
        "name": "Test many boxes 45",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDE",
        "name": "Test many boxes 94",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDI",
        "name": "Test many boxes 38",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDM",
        "name": "Test many boxes 20",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDQ",
        "name": "Test many boxes 71",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDU",
        "name": "Test many boxes 72",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDY",
        "name": "Test many boxes 35",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDc",
        "name": "Test many boxes 37",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDg",
        "name": "Test many boxes 40",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMDk",
        "name": "Test many boxes 62",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTA",
        "name": "Test many boxes 50",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTE",
        "name": "Test many boxes 95",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTI",
        "name": "Test many boxes 27",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTM",
        "name": "Test many boxes 7",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTQ",
        "name": "Test many boxes 46",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTU",
        "name": "Test many boxes 26",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTY",
        "name": "Test many boxes 99",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTc",
        "name": "Test many boxes 4",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTg",
        "name": "Test many boxes 84",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMTk",
        "name": "Test many boxes 85",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjA",
        "name": "Test many boxes 98",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjE",
        "name": "Test many boxes 54",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjI",
        "name": "Test many boxes 58",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjM",
        "name": "Test many boxes 18",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjQ",
        "name": "Test many boxes 9",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjU",
        "name": "Test many boxes 21",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjY",
        "name": "Test many boxes 13",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjc",
        "name": "Test many boxes 66",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjg",
        "name": "Test many boxes",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMjk",
        "name": "fancyName box",
        "iconUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fbutton-free-icon_3568036.html&psig=AOvVaw0KheoffP-UU_KD3OpgR9hR&ust=1647429327487000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjswtH-x_YCFQAAAAAdAAAAABAD",
        "cost": 6360.39
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzA",
        "name": "Boxy 101",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 539
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzE",
        "name": "Ception2",
        "iconUrl": "https://static.ancientgaming.io/images/u2.png",
        "cost": 34661.36
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzI",
        "name": "Fifty fifty",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 9.94
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzQ",
        "name": "Test many boxes 76",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzU",
        "name": "Fifty Fifty full of rares",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 12.43
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzY",
        "name": "ASFASFASFAFF",
        "iconUrl": "https://image.shutterstock.com/image-photo/contemplative-male-graphic-designer-pondering-600w-1647254182.jpg",
        "cost": 13346.45
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzc",
        "name": "Test many boxes 48",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzg",
        "name": "Xmas",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 10
      }
    },
    {
      "node": {
        "id": "Qm94OjMzMzk",
        "name": "sdaf",
        "iconUrl": "https://play.google.com/store/apps/details?id=io.hexman.xiconchanger&hl=pl&gl=CL",
        "cost": 953.91
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDA",
        "name": "70% KNIFE CASE",
        "iconUrl": "https://static.ancientgaming.io/images/70%25Knife.png",
        "cost": 104.51
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDE",
        "name": "MAXEV",
        "iconUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fopen-box%2F70657&psig=AOvVaw33mXLCORxTjbRALwnErC3C&ust=1651917028403000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjU-8_MyvcCFQAAAAAdAAAAABAJ",
        "cost": 1069.01
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDI",
        "name": "Test many boxes 17",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDQ",
        "name": "Test many boxes 11",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDU",
        "name": "CS Box new",
        "iconUrl": "https://www-staging.csgoroll.com/en/boxes/create",
        "cost": 9075.4
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDY",
        "name": "Test many boxes 16",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDc",
        "name": "Draw Test 2",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 8140
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDg",
        "name": "testb",
        "iconUrl": "https://static.ancientgaming.io/images/Rolex%20Submariner%20116610LV.png",
        "cost": 0.1
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNDk",
        "name": "MobileRGr",
        "iconUrl": "https://images.app.goo.gl/zwegfzAKD8GffSxXA",
        "cost": 3129.27
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTA",
        "name": "testbx2",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 1099999.94
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTI",
        "name": "rgrBox",
        "iconUrl": "https://cdn-icons-png.flaticon.com/512/8012/8012278.png",
        "cost": 1056.08
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTY",
        "name": "testrbox111",
        "iconUrl": "https://static.ancientgaming.io/images/NorthFacebox%20png.png",
        "cost": 0.01
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTc",
        "name": "10% Knife 2",
        "iconUrl": "https://static.ancientgaming.io/images/DailyBox7.png",
        "cost": 12.34
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTg",
        "name": "BoxInsideBox1111",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 11.52
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNTk",
        "name": "RamPamPamBox",
        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYKuRaXk4D72cyGIMnpbSruu2ZZIZz7ks6Q&usqp=CAU",
        "cost": 2088.97
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjA",
        "name": "Test many boxes 86",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjE",
        "name": "Test many boxes 88",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjI",
        "name": "Test many boxes 23",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjM",
        "name": "V Box",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 4995.7
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjQ",
        "name": "Test many boxes 24",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjU",
        "name": "Test many boxes 25",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjY",
        "name": "Test many boxes 31",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjc",
        "name": "piotr test box inside the box",
        "iconUrl": "https://mojbox.pl",
        "cost": 1
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjg",
        "name": "Test many boxes 53",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNjk",
        "name": "Test many boxes 57",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzA",
        "name": "Test many boxes 59",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzE",
        "name": "Test many boxes 61",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzI",
        "name": "Test many boxes 56",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzM",
        "name": "Test many boxes 55",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzQ",
        "name": "Test many boxes 89",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzU",
        "name": "Test many boxes 47",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzY",
        "name": "Draw Test 11",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 4752.57
      }
    },
    {
      "node": {
        "id": "Qm94OjMzNzc",
        "name": "Test many boxes 30",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODA",
        "name": "Fifty Fifty with LOADS of Rares",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 12306.53
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODE",
        "name": "Test many boxes 14",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODI",
        "name": "Test many boxes 15",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODM",
        "name": "Test many boxes 52",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODQ",
        "name": "Test many boxes 68",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODU",
        "name": "Test many boxes 69",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODY",
        "name": "Test many boxes 70",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODc",
        "name": "Test many boxes 73",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODg",
        "name": "Test many boxes 79",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzODk",
        "name": "Test many boxes 80",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTA",
        "name": "Test many boxes 81",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTE",
        "name": "Chicken Dinner",
        "iconUrl": "https://static.ancientgaming.io/CSGORoll_Case_Chickendinner.png",
        "cost": 33.65
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTI",
        "name": "ception3",
        "iconUrl": "https://static.ancientgaming.io/images/u2.png",
        "cost": 3028.58
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTM",
        "name": "Free box lvl 5",
        "iconUrl": "https://www.flaticon.com/premium-icon/icons/svg/1078/1078454.svg",
        "cost": 2.25
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTQ",
        "name": "BOXFOREDIT",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 6985.77
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTU",
        "name": "Test many boxes 12",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTY",
        "name": "Box creator",
        "iconUrl": "https://www.csgoroll.com/en/assets/icons/coins.svg",
        "cost": 891.56
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTc",
        "name": "Test many boxes 3",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTg",
        "name": "fast create test",
        "iconUrl": "https://img.fortawesome.com/1ce05b4b/start-illustration.svg",
        "cost": 27500.23
      }
    },
    {
      "node": {
        "id": "Qm94OjMzOTk",
        "name": "Box 9999",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 11
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDE",
        "name": "Boxy11",
        "iconUrl": "https://static.ancientgaming.io/images/madness.png",
        "cost": 229.33
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDI",
        "name": "testsetset",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 2641.29
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDM",
        "name": "Big Box",
        "iconUrl": "https://drive.google.com/file/d/17gXcFB4gSGm91kwoRnuh2BhBqNGRgFZ5/view?usp=sharing",
        "cost": 350
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDQ",
        "name": "Test many boxes 36",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDU",
        "name": "Test many boxes 2",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDc",
        "name": "Test many boxes 6",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MDk",
        "name": "Test many boxes 5",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTA",
        "name": "dsada",
        "iconUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fcheck-one%2F155665&psig=AOvVaw0BMx6Hnn_UC6JkZ0yrMESn&ust=1652879832390000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNi-w6zP5vcCFQAAAAAdAAAAABAD",
        "cost": 870.09
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTE",
        "name": "Test many boxes 8",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTI",
        "name": "Test many boxes 28",
        "iconUrl": "https://static.hypedrop.com/images/u2.png",
        "cost": 1.61
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTQ",
        "name": "Sys is a mug",
        "iconUrl": "https://static.coindesk.com/wp-content/uploads/2013/10/ross-ulbricht-1000x600.jpg",
        "cost": 44000.55
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTU",
        "name": "I is a box",
        "iconUrl": "https://static.ancientgaming.io/images/DailyBox9.png",
        "cost": 2054
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTY",
        "name": "Big Box 6",
        "iconUrl": "https://drive.google.com/file/d/17gXcFB4gSGm91kwoRnuh2BhBqNGRgFZ5/view?usp=sharing",
        "cost": 0.03
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTc",
        "name": "Decimal box",
        "iconUrl": "https://hughesent.com/wp-content/uploads/2019/03/Unboxing-Experience.jpg",
        "cost": 48999.999
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MTk",
        "name": "Decimal box 2",
        "iconUrl": "https://hughesent.com/wp-content/uploads/2019/03/Unboxing-Experience.jpg",
        "cost": 39999.22222222
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MjA",
        "name": "Goat Box",
        "iconUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97aa13c5-fd38-4b4e-9854-b10d3d6f46b7/d47tkmy-31fcf985-9d30-4852-af94-2d3b56ce35a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdhYTEzYzUtZmQzOC00YjRlLTk4NTQtYjEwZDNkNmY0NmI3XC9kNDd0a215LTMxZmNmOTg1LTlkMzAtNDg1Mi1hZjk0LTJkM2I1NmNlMzVhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9qVDSbqNE42k7Pv5PWJgulxAsI3r58euIw0fpazMDBI",
        "cost": 0.1
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MjI",
        "name": "fwefseftest",
        "iconUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97aa13c5-fd38-4b4e-9854-b10d3d6f46b7/d47tkmy-31fcf985-9d30-4852-af94-2d3b56ce35a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdhYTEzYzUtZmQzOC00YjRlLTk4NTQtYjEwZDNkNmY0NmI3XC9kNDd0a215LTMxZmNmOTg1LTlkMzAtNDg1Mi1hZjk0LTJkM2I1NmNlMzVhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9qVDSbqNE42k7Pv5PWJgulxAsI3r58euIw0fpazMDBI",
        "cost": 1
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MjQ",
        "name": "Goat boxes in boxes",
        "iconUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97aa13c5-fd38-4b4e-9854-b10d3d6f46b7/d47tkmy-31fcf985-9d30-4852-af94-2d3b56ce35a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdhYTEzYzUtZmQzOC00YjRlLTk4NTQtYjEwZDNkNmY0NmI3XC9kNDd0a215LTMxZmNmOTg1LTlkMzAtNDg1Mi1hZjk0LTJkM2I1NmNlMzVhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9qVDSbqNE42k7Pv5PWJgulxAsI3r58euIw0fpazMDBI",
        "cost": 0.63
      }
    },
    {
      "node": {
        "id": "Qm94OjM0Mjc",
        "name": "QA Item variants and coin flip box",
        "iconUrl": "https://www.cno.org/globalassets/images/qa/quality-assurance-logo-en.png",
        "cost": 999
      }
    },
    {
      "node": {
        "id": "Qm94OjM0Mjk",
        "name": "wrdfasddfs",
        "iconUrl": "https://static.ancientgaming.io/images/CSGORoll_Case_Knock_out%20(1).png",
        "cost": 275000
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MzA",
        "name": "Nix test box",
        "iconUrl": "https://st4.depositphotos.com/1031343/31430/v/600/depositphotos_314303230-stock-illustration-unboxing-banner-design.jpg",
        "cost": 12
      }
    },
    {
      "node": {
        "id": "Qm94OjM0MzM",
        "name": "GREAT CREATED BOX",
        "iconUrl": "https://image.shutterstock.com/shutterstock/photos/50205055/display_1500/stock-photo-stock-image-of-man-shouting-and-pointing-a-fuel-pump-nozzle-at-his-head-50205055.jpg",
        "cost": 0.5
      }
    }
  ];
  public newBoxes: any[] = [];

  ngOnInit(): void {
    this.getBoxList();
  }

  async getBoxList(): Promise<any> {
    const result = await this.boxListQuery.refetch();
    this.newBoxes = result.data.boxes.edges;
    return result.data.boxes.edges;
  }

}
