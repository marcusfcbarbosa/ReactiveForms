import { NgModule } from "@angular/core";// para ter um módulo
import { CommonModule } from "@angular/common";// para definir que esse não é o módulo principal
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";


@NgModule({

    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [

    ]

})
export class ProdutoModule { }