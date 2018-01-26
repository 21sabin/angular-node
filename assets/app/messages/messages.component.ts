import {Component} from  '@angular/core';

@Component({
    selector:'app-messages',
    template:`
    <app-input-component></app-input-component>
<hr>
  <app-message-list></app-message-list>

    `
})
export class MessagesComponent{

}