import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cerveja',
  templateUrl: './add-cerveja.page.html',
  styleUrls: ['./add-cerveja.page.scss'],
})
export class AddCervejaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mensagem="";
  }
  mensagem;
  salvar(form){
    const cervejaString = JSON.stringify(form.value)
    const nomeCerveja = form.value.nome

    sessionStorage.setItem(nomeCerveja,cervejaString);
    
    let chavesdisponiveis = sessionStorage.getItem('chaves');
    
    if(chavesdisponiveis != null){
      chavesdisponiveis = chavesdisponiveis + ';' + nomeCerveja;
    }else{
      chavesdisponiveis = nomeCerveja;
    }
    
    sessionStorage.setItem('chaves',chavesdisponiveis);

    form.reset();
    this.mensagem="Cadastrado com sucesso";
    console.log("As chaves disponíveis são:",chavesdisponiveis);
  }
}
