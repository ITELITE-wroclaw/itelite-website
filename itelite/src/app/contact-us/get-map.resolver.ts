import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class GetMapResolver implements Resolve<any>
{

  constructor(private httpClient: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpClient
    .get("https://api.tomtom.com/search/2/geocode/terenowa 42.json?storeResult=false&lat=17.337&lon=51.89&extendedPostalCodesFor=PAD&view=Unified&key=V3jauwxXfg3CH5O7cZEKQe5OpkI5y7Vn")
    .pipe(
      mergeMap((e: any) => of(e))
    )
  }
}