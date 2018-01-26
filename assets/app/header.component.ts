import { Component } from '@angular/core';



@Component({
    selector: 'app-header',
    template:`
    <div class="container">

    <ul class="nav nav-pills">
        <li role="presentation" routerLinkActive="active"><a [routerLink]="['/messages']" >Messages</a></li>
        <li role="presentation" routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
      
    </ul>
         
    </div>
        
    `
    
  
})
export class HeaderComponent {

 
}