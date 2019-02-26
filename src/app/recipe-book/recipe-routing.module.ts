import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AuthGaurdService } from './../auth/auth-gaurd.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes = [
    {
        path: '',
        component: RecipeBookComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurdService] },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurdService] }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(appRoutes)],
    exports: [
        RouterModule,
    ],
    providers: [AuthGaurdService],
})
export class RecipeRoutingModule { }
