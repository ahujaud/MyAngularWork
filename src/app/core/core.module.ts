import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListService } from '../shared/shopping-list.service';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        HttpClientModule,
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        HttpClientModule,
    ],
    providers: [
        ShoppingListService,
    ],
})
export class CoreModule { }
