
import { NgModule } from "@angular/core";// para ter um módulo
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    {
        path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')//dessa forma ativa o lazyLoading, para módulo externo
            .then(m => m.ProdutoModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent }// <==== essa configuracao tem que estar por ultimo, senao ela se sobrepoe as outras rotas
];


@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }