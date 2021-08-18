import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template:`

        <h1>{{titulo}}</h1>
        <h3>La base es {{base}}</h3>

        <button (click)="acumular(base)"> +{{base}} </button>
        <span>{{contador}}</span>
        <button (click)="acumular(base*-1)">-{{base}} </button>
    
    `

})
export class ContadorComponent{

    public titulo:string = 'Contador APP';
    public contador:number=10;
    public base:number=5;
    acumular(valor:number){
      this.contador+=valor;
    }

}