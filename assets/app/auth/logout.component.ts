import {Component} from '@angular/core';
import {AuthService} from './auth.service'
import { Router } from '@angular/router';

@Component({
    selector:'app-logout',
    template:`
        <button type="button" class="btn btn-danger" (click)="onlogout()">Logout</button>
    `
})

export class LogoutComponent{
    
    constructor(private authService:AuthService,private router:Router){}
    onlogout(){
       this.authService.logout();
        this.router.navigate(['/auth','signin']);
    }
}