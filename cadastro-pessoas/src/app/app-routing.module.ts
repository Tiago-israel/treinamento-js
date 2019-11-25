import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPessoas } from './pages/pessoas/consulta/consulta.component'
import { CadastroPessoa } from './pages/pessoas/cadastro/cadastro.component';
import { PessoaResolve } from './pages/pessoas/resolvers/pessoa.resolve';
import { PessoasResolve } from './pages/pessoas/resolvers/pessoas.resolve';


const routes: Routes = [
  {
    path: "",
    redirectTo: "pessoas",
    pathMatch: "full"
  },
  {
    path: "pessoas",
    component: ConsultaPessoas,
    resolve: {
      pessoas: PessoasResolve
    }
  },
  {
    path: "pessoas/cadastrar",
    component: CadastroPessoa
  },
  {
    path: "pessoas/editar/:id",
    component: CadastroPessoa,
    resolve: {
      pessoa: PessoaResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
