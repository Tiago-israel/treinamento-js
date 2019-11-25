import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs"
import { Pessoa } from '../models/pessoa';
import { ApiService } from 'src/app/services/api.services';

@Injectable({
    providedIn: "root"
})

export class PessoasResolve implements Resolve<Pessoa[]>{

    constructor(private api: ApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.api.buscarTodos('http://localhost:3000/pessoas');
    }

}