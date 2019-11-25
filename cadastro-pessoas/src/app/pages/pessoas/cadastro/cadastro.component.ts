import { Component, OnInit } from "@angular/core";
import { Pessoa } from '../models/pessoa';
import { ApiService } from 'src/app/services/api.services';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "cadastro-pessoa",
    templateUrl: "./cadastro.component.html"
})
export class CadastroPessoa implements OnInit {


    public pessoa = new Pessoa();

    constructor(
        private api: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService) { }

    ngOnInit(): void {
        const { pessoa } = this.activatedRoute.snapshot.data;
        if (pessoa) {
            this.pessoa = pessoa;
        }
    }

    salvar() {
        if (this.pessoa.id) {
            this.editarPessoa(this.pessoa.id, this.pessoa);
        } else {
            this.novaPessoa();
        }
    }

    private novaPessoa(): void {
        this.api.salvar('http://localhost:3000/pessoas', this.pessoa).subscribe(
            () => {
                this.toastr.success(`${this.pessoa.nome} cadastrado com sucesso`, 'Sucesso!');
                this.router.navigate(["/pessoas"])
            },
            erro => {
                this.toastr.error("Houve um erro no servidor!", "Ops", {
                    progressBar: true
                })
            }
        )
    }

    private editarPessoa(id: number, pessoa: Pessoa): void {
        this.api.editar('http://localhost:3000/pessoas', id, pessoa).subscribe(
            () => {
                this.toastr.success(`${this.pessoa.nome} editado com sucesso`, 'Sucesso!');
                this.router.navigate(["/pessoas"])
            },
            erro => {
                this.toastr.error("Houve um erro no servidor!", "Ops", {
                    progressBar: true
                })
            }
        )
    }
}