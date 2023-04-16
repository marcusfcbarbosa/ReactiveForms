import { CommonModule } from "@angular/common";
import { Injector, ModuleWithProviders, NgModule } from "@angular/core";
import { BarDiZonesComponent } from "./bar-di-zones.component";
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from "./bar-di-zones.config";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarDiZonesComponent
    ],
    providers: [
        //Provider global para todos que chamarem esse módulo
    ],
    exports: [
        BarDiZonesComponent
    ]
})
//Esse módulo pode ser apresentado como módulo de formas diferentes, depende de como vc chamar
export class BarDiZonesModule {

    static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
        return {
            ngModule: BarDiZonesModule,
            //Providers customizado de acordo com o método que vc chama
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config },
               
            ]
        }
    }

}