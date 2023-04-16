import { Inject, Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from "./bar-di-zones.config";

@Injectable()
export class BarDiZoneServices {

    constructor(private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig) { }


    obterUnidade(): string {
        return 'Unidade ID:' + this.ApiConfig.unidadeId + ' Token  :' + this.ApiConfig.unidadeToken
    }
    obterBebidas(): string {
        return 'Bebidas';
    }
    obterPorceos(): string {
        return 'Porções';
    }
    obterRefeicoes(): string {
        return 'Refeições';
    }

}

export class BarDiZoneServiceMock {
    obterBebidas(): string {
        return 'Mock';
    }
}

//Obtendo a Instancia desse serviço através de uma factory
export function BarFactory(http: HttpClient
    //, config: BarUnidadeConfig
    , injector: Injector //serviceLocator, pois ele localiza dentro do motor de dependencia
) {
    return new BarDiZoneServices(http, injector.get(BAR_UNIDADE_CONFIG));
}