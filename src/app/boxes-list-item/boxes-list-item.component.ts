import { Component, Input, OnInit } from '@angular/core';
import { Box, currentUser } from '../Interfaces';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boxes-list-item',
  templateUrl: './boxes-list-item.component.html',
  styleUrls: ['./boxes-list-item.component.scss']
})
export class BoxesListItemComponent implements OnInit {

  private currentUserQuery!: QueryRef<{currentUser: currentUser}>;
  // private boxDetails!: QueryRef<{species: any}, { OpenBoxInput: any}>;

  constructor(private apollo: Apollo, private router: Router) {
    
    this.currentUserQuery = this.apollo.watchQuery({
      query: gql`query {
        currentUser {
          id
          name
          wallets {
            id
            amount
            currency
          }
        }
      }`
    });

    // this.boxDetails = this.apollo.mutate({
    //   query: gql`mutation OpenBox($input: OpenBoxInput!) {
    //     openBox(input: $input) {
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
  
  }

  @Input() item!: Box;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  navigate(id: string) {
    this.router.navigateByUrl(`box/${id}`)
  }

  async getCurrentUser(): Promise<currentUser> {
    const result = await this.currentUserQuery.refetch();
    console.warn(result.data.currentUser);
    return result.data.currentUser;
  }

  // async findSpecies(OpenBoxInput: any): Promise<any> {
  //   const result = await this.boxDetails.refetch({ OpenBoxInput });
  //   return result.data.species;
  // }

}
