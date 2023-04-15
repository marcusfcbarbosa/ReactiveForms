import { Component, Inject, OnInit } from '@angular/core';
import { BarDiZoneServiceMock, BarDiZoneServices } from './bar-di-zones.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar-di-zones.config';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    { provide: BarDiZoneServices, useClass: BarDiZoneServiceMock } //apenas o componente esta resolvendo a injecao de dependencia, não está registrada em nenhum outro módulo
  ]
})
export class BarDiZonesComponent implements OnInit {

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  constructor(private barService: BarDiZoneServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
  ) {
  }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
  }

}
