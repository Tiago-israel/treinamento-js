import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPessoas } from './consulta/consulta.component';
import { PessoasResolve } from './resolvers/pessoas.resolve';
import { CadastroPessoa } from './cadastro/cadastro.component';
import { PessoaResolve } from './resolvers/pessoa.resolve';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
    {
        path: "",
        component: ConsultaPessoas,
        resolve: {
            pessoas: PessoasResolve
        },
        canActivate:[AuthGuard]
    },
    {
        path: "cadastrar",
        component: CadastroPessoa,
        canActivate:[AuthGuard]
    },
    {
        path: "editar/:id",
        component: CadastroPessoa,
        resolve: {
            pessoa: PessoaResolve
        },
        canActivate:[AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }