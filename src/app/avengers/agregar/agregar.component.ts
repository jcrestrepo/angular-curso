import { Component, Input,  Output,EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/avengers.interface';
import { AvengersService } from '../services/avengers.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  @Input() nuevo: Personaje ={
    nombre: '',
    poder:0
  }
  
  // @Output() onNuevoHeroe:EventEmitter<Personaje>= new EventEmitter();
  /**
   *
   */
  constructor(private avengersService:AvengersService) {
    
    
  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo);
    this.avengersService.agregarHeroe(this.nuevo);
    // this.onNuevoHeroe.emit(this.nuevo)
    this.nuevo= {
      nombre:'',
      poder:0
    }
  }
}
