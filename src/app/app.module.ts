import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule, rootRouterConfig } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarDiZonesModule } from './demos/bar-di-zones/bar-di-zones.module';
import { BarDiZoneServices } from './demos/bar-di-zones/bar-di-zones.service';

//usa para organização caso sua aplicação se torne gigantesca
export const BAR_PROVIDERS:   Provider[] = [
  BarDiZoneServices
];


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    HttpClientModule,
    BarDiZonesModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard,
    CadastroGuard
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
