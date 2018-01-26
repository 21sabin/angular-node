import{Component,OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';
@Component({
    selector:"app-message-list",
    template:`
    <app-message [message]="message"
    (onEditClicked)="content=$event"
   *ngFor="let message of messages"></app-message>

    `
})
export class MessageListComponent{
    messages:Message[];
    constructor(private messageService:MessageService){ 
       
    }
    ngOnInit(){
        // this.messages=this.messageService.getMessage();
        // console.log("messagelist",this.messages);
        this.messageService.getMessage()
        .subscribe(
            data=>this.messages=data,
            error=>console.error(error)
        )
    }

    
   
    // messages:Message[]=[
    //     // new Message("some message","sabin","223","fd"),
    //     // new Message("some else message","sabin","dfd","dfs")
       
    // ];
    

    

}
