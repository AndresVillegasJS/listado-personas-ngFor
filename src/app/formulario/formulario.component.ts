import { Component, EventEmitter, Output } from '@angular/core';
import { persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<persona>();

  nombreInput: string = '';
  apellidoInput: string ='';

  agregarPersona(){
    let persona1 = new persona(this.nombreInput, this.apellidoInput); 
    this.personaCreada.emit(persona1);
  }



}
