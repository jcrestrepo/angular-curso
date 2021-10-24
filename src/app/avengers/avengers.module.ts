import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AvengersService } from './services/avengers.service';



@NgModule({
  declarations: [
    MainPageComponent,
    HeroesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  
  ],
  exports: [MainPageComponent],
  providers:[
    AvengersService
  ]
})
export class AvengersModule { }
