import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/shared/interfaces/country';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: []
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private countriesService: CountriesService,
               private router: Router ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id) ),
    )
    .subscribe( country => {
      if ( !country ) return this.router.navigateByUrl('**')

      return this.country = country;


    });
  }

}




