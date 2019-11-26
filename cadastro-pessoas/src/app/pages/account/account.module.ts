import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account.routing.module';
import { CardModule } from 'src/app/components/card/card.module';
import { LoginService } from './login/services/login.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        CardModule
    ],
    providers: [
        LoginService
    ]
})
export class AccountModule { }