import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Luiz Henrique Alberto de Camargo',
    idade: 20,
    cidade:'Porto Feliz',
    instituicao: 'Fatec Itu - Dom Amaury Castanho'
  };

  constructor() { }

  ngOnInit() {
  }

}