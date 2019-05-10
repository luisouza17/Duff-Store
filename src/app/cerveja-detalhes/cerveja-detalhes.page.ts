import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage  {

  nome;
  descricao;

  constructor(private route:ActivatedRoute) {
    console.log('Executou o construtor')
  }

  mostrar(){
    const nomeCerveja = this.route.snapshot.params.id;
    const cervejareal = localStorage.getItem(nomeCerveja);
    const cervejaobjeto = JSON.parse(cervejareal);
    this.nome = cervejaobjeto.nome;
    this.descricao = cervejaobjeto.descricao;
  }

  ionViewDidEnter() {
   this.mostrar();
  }
}
