import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BarDiZoneServices {

    constructor(private http: HttpClient) {}

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