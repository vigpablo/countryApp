import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/by-id/country-page.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
    BodyComponent,
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryPageComponent,
    CountryTableComponent,
    LoadingSpinnerComponent,
    SearchboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BodyComponent,
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryPageComponent,
    LoadingSpinnerComponent,
    SearchboxComponent,      //exportaciones no necesarias. Son necesarias cuando el componente
                             //de un módulo es específicamente usado dentro de otro módulo. De
                             //lo contrario sólo basta con importar el módulo entero en el otro.
  ]
})
export class BodyModule { }
