import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private loginService: LoginService,
        private toastr: ToastrService,
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.createLoginForm();
    }
    
    public get form() {
        return this.loginForm.controls;
    }

    private createLoginForm() {
        return this.formBuilder.group({
            login: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }

    public login() {
        const usuario = this.loginForm.value;
        const usuarioLogado = this.loginService.login(usuario);
        if (!usuarioLogado) {
            this.toastr.error("Login ou Senha incorretos", "Erro")
        } else {
            this.toastr.success("Login efetuado com sucesso", "Sucesso")
            this.router.navigate(["/home"])
        }
    }
}