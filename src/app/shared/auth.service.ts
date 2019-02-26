
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    token: string;

    constructor (private router: Router) { }

    initializeFirebase() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-p2_UVkLodTOemI4fxic68fCe6heMo3s',
            authDomain: 'food-cart-a6706.firebaseapp.com',
        });
    }
    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                this.router.navigate(['/recipes']);
                firebase.auth().currentUser.getIdToken()
                    .then((token) => this.token = token);
            })
            .catch((error) => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    this.router.navigate(['/signup']);
                }
            });
    }

    signUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => console.log(error));
    }

    logout() {
        firebase.auth().signOut()
            .then((resposne) => {
                this.router.navigate(['/login']);
                this.token = null;
            })
            .catch((error) => console.log(error));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token) => this.token = token);

        return this.token;
    }

    authenticateUser() {
        return this.token != null;
    }
}
