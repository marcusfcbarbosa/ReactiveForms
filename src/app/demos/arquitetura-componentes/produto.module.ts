import { NgModule } from "@angular/core";// para ter um módulo
import { CommonModule } from "@angular/common";// para definir que esse não é o módulo principal
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.componente";
import { ProdutoCountComponent } from "./componentes/produto-count.componente";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutoResolve } from "./services/produto.resolve";

registerLocaleData(localePt);

@NgModule({

    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers:[
        ProdutoService,
        ProdutoResolve
    ],
    exports: [

    ]

})
export class ProdutoModule { }