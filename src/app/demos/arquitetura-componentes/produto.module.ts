import { NgModule } from "@angular/core";// para ter um módulo
import { CommonModule } from "@angular/common";// para definir que esse não é o módulo principal
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.componente";

registerLocaleData(localePt);

@NgModule({

    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalheComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [

    ]

})
export class ProdutoModule { }