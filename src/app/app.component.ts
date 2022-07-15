import { Component } from '@angular/core';
import { persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado-personas';
  personas: persona[] = [
    new persona('juan','perez'),
    new persona('laura','juares'),
    new persona('karla','suarez')
  ];

  personaAgregada(persona: persona){
    this.personas.push(persona);

  }

}
