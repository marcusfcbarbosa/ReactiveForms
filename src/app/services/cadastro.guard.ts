import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveForms/cadastro/cadastro.component";
import { Observable } from "rxjs";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
    
    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja abanadonar o preenchimento do formulario');
        }
        return true;
    }
}
