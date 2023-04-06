import { NgModule } from "@angular/core";// para ter um módulo
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";



const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)

    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }