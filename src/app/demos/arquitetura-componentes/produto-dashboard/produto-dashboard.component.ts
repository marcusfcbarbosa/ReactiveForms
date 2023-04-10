import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.componente';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.componente';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    //se cair aqui é pq a view ja foi renderizada //isso daqui é o equivalente ao $(#id).click do jquery
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clickou no Texto');
      return;
    });

    //ViewChild
    //console.log('Objeto do Contador:', this.contador.produtos);

    //ViewChildren
    this.botoes.forEach(p => {
      // console.log('Log para cada produto do ProdutoDetalheComponent :');
      // console.log(p.produto);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
