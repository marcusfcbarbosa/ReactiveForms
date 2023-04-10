import { ImplicitReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    

    user = { admin: false, logged: false }

    //Posso fazer o download do módulo ?
    canLoad() {
        return this.user.admin;
    }

    //Posso acessar o módulo ?
    canActivate(){
        return this.user.logged;
    }

}

