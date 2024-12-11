import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  nombre:string = 'Mi nombre ejemplo';
  porcentaje:number=0.235;

}
