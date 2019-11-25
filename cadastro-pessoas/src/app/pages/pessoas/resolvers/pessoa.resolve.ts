import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { ApiService } from 'src/app/services/api.services';

@Injectable({
    providedIn: 'root'
})
export class PessoaResolve implements Resolve<Pessoa> {

    constructor(private api: ApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pessoa | Observable<any> {
        const { id } = route.params;
        return this.api.buscarPorId("http://localhost:3000/pessoas", id);
    }

}