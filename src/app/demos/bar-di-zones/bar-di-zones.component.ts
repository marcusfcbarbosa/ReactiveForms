import { Component, OnInit } from '@angular/core';
import { BarDiZoneServiceMock, BarDiZoneServices } from './bar-di-zones.service';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    { provide: BarDiZoneServices, useClass: BarDiZoneServiceMock } //apenas o componente esta resolvendo a injecao de dependencia, não está registrada em nenhum outro módulo
  ]
})
export class BarDiZonesComponent implements OnInit {

  barBebida1: string;
  constructor(private barService: BarDiZoneServices) { }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
  }

}
