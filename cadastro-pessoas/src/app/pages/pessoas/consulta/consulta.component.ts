import { Component, OnInit } from "@angular/core";
import { Pessoa } from '../models/pessoa';
import { ApiService } from 'src/app/services/api.services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "consultar-pessoas",
    templateUrl: "./consulta.component.html"
})
export class ConsultaPessoas implements OnInit {

    public pessoas: Pessoa[] = []

    constructor(private api: ApiService,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const { pessoas } = this.activatedRoute.snapshot.data;
        this.pessoas = pessoas;
    }

    public excluirPessoa(id: number) {
        this.api.excluir('http://localhost:3000/pessoas', id).subscribe(() => {
            this.toastr.info("Usuário excluido com sucesso", "Sucesso");
            this.buscarPessoas();
        })
    }

    private buscarPessoas() {
        this.api.buscarTodos('http://localhost:3000/pessoas').subscribe(
            (pessoas: Pessoa[]) => {
                this.pessoas = pessoas;
            }
        )
    }


}