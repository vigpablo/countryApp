import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/interfaces/country';
import { Region } from 'src/app/shared/interfaces/region.type';
import { CountriesService } from 'src/app/shared/services/countries.service';



@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',

})
export class ByRegionComponent implements OnInit {

  public countries: Country[] = []
  public regions: Region [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(public countriesService: CountriesService) {}


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ):void {

    this.selectedRegion = region

    this.countriesService.searchRegion( region )
    .subscribe(countries =>
      this.countries = countries)
  }

}
