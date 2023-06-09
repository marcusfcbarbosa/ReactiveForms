import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarDiZoneServiceMock, BarDiZoneServices, BarFactory, BebidaService } from './bar-di-zones.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar-di-zones.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    // { provide: BarDiZoneServices, useClass: BarDiZoneServices } //apenas o componente esta resolvendo a injecao de dependencia, não está registrada em nenhum outro módulo
    // , //comentando pois é a mesma coisa e o que vale esta sendo o ultimo
    {
      provide: BarDiZoneServices,
      useFactory: BarFactory,
      deps: [HttpClient, //dependencias, que o método BarFactory recebe como parametro
        //BAR_UNIDADE_CONFIG,
        Injector
      ]
    },
    { provide: BebidaService, useExisting: BarDiZoneServices }
  ]
})
export class BarDiZonesComponent implements OnInit {

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;
  constructor(private barService: BarDiZoneServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
  ) {
  }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
    this.dadosUnidade = this.barService.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();//Ele chama o metodo do BarService, que e igual ao metodo da classe abstrata
  }

}
