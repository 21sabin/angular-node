import {Component} from '@angular/core';

@Component({
    selector:'app-logout',
    template:`
        <button type="button" class="btn btn-danger" (click)="logout()">Logout</button>
    `
})

export class LogoutComponent{
    logout(){

    }
}