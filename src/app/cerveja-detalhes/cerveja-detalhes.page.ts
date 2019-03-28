import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor() {
    this.nome="Puro Malte";
    this.detalhes="A Proibida Puro Malte é uma cerveja estilo Golden Lager. Sua legítima receita alemã e secular é produzida com a mais cristalina água, dois lúpulos importados, fermento proveniente do maior centro cervejeiro em Munique e 100% de malte.";
  }

  ngOnInit() {
  }

}
