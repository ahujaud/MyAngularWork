import { ShopingListEditComponent } from './shoping-list-edit/shoping-list-edit.component';
import { ShopingListComponent } from './shoping-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopingListComponent,
        ShopingListEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ShopingListComponent,
        ShopingListEditComponent,
    ],
    providers: [],
})
export class ShoppingListModule { }
