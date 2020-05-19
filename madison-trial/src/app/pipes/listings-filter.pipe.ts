import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listingsFilter'
})
export class ListingsFilterPipe implements PipeTransform {

    transform(listings: any[], filter_by: string, value: string): any[] {
        if (!listings) {
          return [];
        }
        if (!filter_by || !value) {
          return listings;
        }
    
        return listings.filter(listing =>
          listing[filter_by].toLowerCase().includes(value.toLowerCase())
        );
      }
}