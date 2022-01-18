import { AgentsModel } from "./AgentsModel";
import { LocationModel } from "./LocationModel";
import { OpenHousesModel } from "./OpenHousesModel";

export interface ListingModel {
	id?: string;
	location?: LocationModel;
	agents?: AgentsModel;
	open_houses?: OpenHousesModel;
	media?: any;
	listing_details?: any;
	rental_details?: any;
    unit_details?: any;
    unit_amenities?: any;
    building_details?: any;
    building_amenities?: any;
    features?: any;
    views_and_exposures?: any;
    policies?: any;
}