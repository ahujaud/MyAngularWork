import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class AuthRoutingModule { }
