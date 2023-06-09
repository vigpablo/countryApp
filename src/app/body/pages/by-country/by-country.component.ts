import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../shared/services/countries.service';
import { Country } from 'src/app/shared/interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',

})
export class ByCountryComponent implements OnInit {

  public countries: Country[] = [];

  public initialValue: string = '';

  constructor( public countriesService: CountriesService) {};

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string):void {
    this.countriesService.searchCountry(term)
    .subscribe(countries => { this.countries = countries })
  }
}
