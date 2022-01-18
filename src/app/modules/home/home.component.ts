import { Component, OnInit } from '@angular/core';
import { DynamicDataProviderService } from 'src/app/core/services/dynamic-data-provider.service';
import { ListingModel } from 'src/app/shared/models/ListingModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listing: ListingModel[] = []; // list of resources
  public displayListing: ListingModel[] = []; // list of resources
  public totalCount: number; // total number of records fetched for pagination
  public pageSize: number = 12; // total number cards to be displayed
  public accountName = 'sothebys_international_realty'; // hardcoded search listing

  constructor(
    private dynamicDataProviderService: DynamicDataProviderService
  ) { }

  /**
   * fetch listing for accountname on init
   */
  ngOnInit(): void {
    this.dynamicDataProviderService.getListingData(this.accountName).subscribe(resp =>{
			this.listing = resp.listings;
      this.displayListing = [...this.listing];
      this.displayListing.splice(12, resp.total);
      this.totalCount = this.listing.length;
		});
  }

  /**
   * method to display next or previous listing on click of pagination
   * @param event 
   */
  handlePageEvent(event) {
    if(event) {
     // this.displayListing = [...this.listing];
     let end = (event.pageIndex + 1) * this.pageSize;
     let start = event.pageIndex * this.pageSize;

      this.displayListing = this.listing.slice(start, end);
    }
  }

}
