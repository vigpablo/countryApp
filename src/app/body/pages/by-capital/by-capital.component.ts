import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/interfaces/country';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false
  public initialValue: string = ''

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ):void {

    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries
      this.isLoading = false;
    })
  }

}
