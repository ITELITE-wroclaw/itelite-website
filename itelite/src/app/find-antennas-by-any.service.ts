import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class FindAntennasByAnyService {

  constructor(private apollo: Apollo){}

  public getAntennasByAnyProperty(findByText: string)
  {
    
  }
}
