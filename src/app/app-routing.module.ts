import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';


import { ShopingListComponent } from './shoping-list/shoping-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipes', loadChildren: './recipe-book/recipe.module#RecipeModule' },
    { path: 'shopping-list', component: ShopingListComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
