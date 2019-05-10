import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router:Router){
    this.cervejas = []
  }

  ngOnInit(){}
  
  excluir(nome){
    localStorage.removeItem(nome);
    this.listar();
  }

  detalhes(nome){
    this.router.navigate(["/cerveja-detalhes",nome]);
  }
  listar(){
    this.cervejas = [];

    const tamanhodobanco = localStorage.length

    for(let index = 0; index < tamanhodobanco; index++) {
      const chave = localStorage.key(index);
      const cerveja = localStorage.getItem(chave);
      this.cervejas.push(JSON.parse(cerveja));
      
    }
  }

  cervejas;
  //Toda vez que entra na pagina e volta , ele é executado.
  ionViewDidEnter() {
    this.listar();
  }

}