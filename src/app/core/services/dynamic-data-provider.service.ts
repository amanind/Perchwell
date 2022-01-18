import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingModel } from 'src/app/shared/models/ListingModel';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataProviderService {

  constructor(
    private restApiService: RestApiService
  ) { }

  /**
   * Provide list of resources available in market
   * @param id : account_name
   * @returns 
   */
  public getListingData(id: string): Observable<any> {
		return this.restApiService.get(`api/feeds/${id}`);
	}
}
