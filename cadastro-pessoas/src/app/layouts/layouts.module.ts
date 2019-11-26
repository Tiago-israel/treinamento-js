import { NgModule } from "@angular/core";
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LayoutsRoutingModule } from './layouts.routing.module';

@NgModule({
    declarations: [MainComponent, MenuComponent],
    imports: [
        CommonModule,
        LayoutsRoutingModule
    ]
})
export class LayoutsModule { }