import { NgModule } from "@angular/core";

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({

    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent
    ],//componentes do módulo
    imports: [
        CommonModule,//para dizer que não é o módulo principal
        RouterModule
    ], exports: [
        MenuComponent,  //<===== precisa exportar os módulos,para que o módulo principal tenha acesso
        HomeComponent,  //<===== precisa exportar os módulos,para que o módulo principal tenha acesso
        FooterComponent  //<===== precisa exportar os módulos,para que o módulo principal tenha acesso
    ]
})

export class NavegacaoModule { }