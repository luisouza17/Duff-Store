import { Component, OnInit } from '@angular/core';
import { ViewCompiler } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {  
  cervejas;

  ngOnInit(){
  }  
  ionViewDidEnter(){
    this.cervejas = [];

    const chavesdisponiveis = sessionStorage.getItem('chaves');
    
    const chavesseparadas = chavesdisponiveis.split(';');
    
    for(var i = 0 ; i<chavesseparadas.length; i++){
      const cerveja = sessionStorage.getItem(chavesseparadas[i]);
      const cervejaObj = JSON.parse(cerveja);
      this.cervejas.push(cervejaObj); 
    
    }
    }
  
}