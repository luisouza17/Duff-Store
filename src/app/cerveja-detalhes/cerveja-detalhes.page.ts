import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor(private route:ActivatedRoute) {
    console.log('Executou o construtor')
  }

  ngOnInit() {
   let idcerveja = this.route.snapshot.params.id;
   if (idcerveja==50) {
     this.nome="Proibida Puro Malte"
     this.detalhes="A Proibida Puro Malte é uma cerveja estilo Golden Lager. Sua legítima receita alemã e secular é produzida com a mais cristalina água, dois lúpulos importados, fermento proveniente do maior centro cervejeiro em Munique e 100% de malte.     "
   }else if(idcerveja==60){
     this.nome="Puro Malte Skol"
     this.detalhes="Na Skol, a roda nunca para de girar. Por isso, a gente criou a puro malte da Skol. Ela é feita com água, malte e lúpulo e um processo inovador que destaca o sabor do puro malte, garantindo aquele detalhe que nenhuma outra tem: desce redondo"
   }
  }

}
