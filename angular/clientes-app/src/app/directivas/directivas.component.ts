import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html'
})
export class DirectivasComponent  {

  lisaCursos: string[] = ['Typescript', 'Javascript', 'Java SE', 'Python', 'C++']
  
  habilitar: boolean = true;
  
  constructor(){}

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false: true;
  }

}
