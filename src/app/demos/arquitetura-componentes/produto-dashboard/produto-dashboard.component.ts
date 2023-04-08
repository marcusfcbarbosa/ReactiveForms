import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.componente';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.componente';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})

export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;


  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;
  constructor() { }


  ngOnInit() {
    this.produtos = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'gopro.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'laptop.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'mouse.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: false,
      valor: 600,
      imagem: 'headset.jpg'
    }];
  }

  ngAfterViewInit(): void {
    //se cair aqui é pq a view ja foi renderizada //isso daqui é o equivalente ao $(#id).click do jquery
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clickou no Texto');
      return;
    });

    //ViewChild
    console.log('Objeto do Contador:', this.contador.produtos);

    //ViewChildren
    this.botoes.forEach(p=>{
      console.log('Log para cada produto do ProdutoDetalheComponent :');
      console.log( p.produto);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}