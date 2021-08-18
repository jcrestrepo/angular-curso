import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] =['Capitan America','spiderman', 'hulk', 'thor', 'ironman'];
  hBorrado:string='';

  get heroeBorrado(): string{
    return this.hBorrado;
  }
  

  borrarHeroe(){
    this.hBorrado =this.heroes.shift() || '';
    // console.log('Borrando');
    
  }
}
