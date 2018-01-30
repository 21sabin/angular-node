import{Component,OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';
@Component({
    selector:"app-message-list",
    template:`
    <app-message [message]="message"
   *ngFor="let message of messages"></app-message>
    `
})

//  (onEditClicked)="content=$event"
export class MessageListComponent{
    messages:Message[];
    constructor(private messageService:MessageService){ 
       
    }
    ngOnInit(){
        // this.messages=this.messageService.getMessage();
        // console.log("messagelist",this.messages);
        this.messageService.getMessage()
        .subscribe(
            (messages:Message[])=>{
                this.messages=messages
            }
        )
        
    }

    
   
    // messages:Message[]=[
    //     // new Message("some message","sabin","223","fd"),
    //     // new Message("some else message","sabin","dfd","dfs")
       
    // ];
    

    

}
