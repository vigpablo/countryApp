import { Component, Input } from '@angular/core';
import { Country } from 'src/app/shared/interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []

}
