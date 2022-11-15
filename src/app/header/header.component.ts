import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  isLoggedIn: boolean = false;

  currentUser =  {
    id: "VXNlcjo0MDAwMDIzMTg",
    name: "shalvadoliashvili",
    wallets: [
      {
        id: "V2FsbGV0OjQwNDg4MTA5OQ",
        amount: 4998.99,
        currency: "TKN"
      },
      {
        id: "V2FsbGV0OjQwNDg4MTEwMA",
        amount: 0,
        currency: "TKN"
      },
      {
        id: "V2FsbGV0OjQwNDg4MTEwMQ",
        amount: 0,
        currency: "TKN"
      },
      {
        id: "V2FsbGV0OjQwNDg4MTEwMg",
        amount: 2,
        currency: "TKN"
      }
    ]
  };

  // private Login!: QueryRef<{user: any}>;

  ngOnInit(): void {
    // this.Login = this.apollo.watchQuery({
    //   query: gql`mutation Login($input: OpenBoxInput!) {
    //     Login(input: $input) {
    //       boxOpenings {
    //         id
    //         itemVariant {
    //           id
    //           name
    //           value
    //         }
    //       }
    //     }
    //   }`
    // });
    // this.signin('ancient','whatnot');
  }

//   public signinQL = gql`
//   mutation signin($email: String!, $password: String!) {
//     signin(email: $email, password: $password) {
//       token
//       user {
//         name
//       }
//     }
//   }
// `;

  // signin(email: string, password: string) {
  //   this.apollo
  //     .mutate({
  //       mutation: this.signinQL,
  //       variables: { email, password }
  //     })
  //     .subscribe(
  //       ({ data }) => {
  //         console.warn(data);
  //         // localStorage.setItem("token", data.signin.token);
  //         // this.isAuthenticated.next(true);
  //         // window.location.href = "/";
  //       },
  //       error => {
  //         console.log("there was an error sending the query", error);
  //       }
  //     );
  // }

  public get getBalance() {
    return Math.max.apply(Math, this.currentUser.wallets.map(function(wallet) { return wallet.amount; }))
  }

}
