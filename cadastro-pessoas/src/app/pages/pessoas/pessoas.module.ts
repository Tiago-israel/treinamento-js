import { NgModule } from "@angular/core";
import { HighlightDirective } from 'src/app/core/directives/high-light.directive';
import { ConsultaPessoas } from './consulta/consulta.component';
import { CadastroPessoa } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
    declarations: [
        CadastroPessoa,
        ConsultaPessoas,
        HighlightDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        PessoasRoutingModule
    ],
    providers: []
})
export class PessoasModule { }