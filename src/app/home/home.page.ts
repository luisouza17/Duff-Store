import { Component, OnInit } from '@angular/core';
import { ViewCompiler } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(){
    this.cervejas = []
  }

  ngOnInit(){}
  
  excluir(nome){
    localStorage.removeItem(nome);
  }

  cervejas;
  
  ionViewDidEnter() {
    this.cervejas = [];

    const tamanhodobanco = localStorage.length

    for(let index = 0; index < tamanhodobanco.length; index++) {
      const chave = localStorage.key(index);
      const cerveja = localStorage.getItem(chave);
    
      
    }
  }

}