import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        AuthRoutingModule,
        FormsModule
    ],
    exports: [
        LoginComponent,
        SignupComponent,
    ],
})
export class AuthModule { }
