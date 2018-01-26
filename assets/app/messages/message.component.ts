import { Component,Input,Output } from '@angular/core';
import { Message } from './message.model';
import { EventEmitter } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
        .config{
            text-align:right;
        }
    `]
  
})
export class MessageComponent {
   
    @Input() message:Message;
    @Output() onEditClicked:EventEmitter<string>=new EventEmitter();
    id:any;

    constructor(private messageService:MessageService){
        this.id=this.message.messageId
    }

    onEdit(){
        this.message.content="just clicked";
       this.onEditClicked.emit("value form message component");
    }

    onDelete(id:any){
      //  this.messageService.deleteMessage(this.message);
      console.log("id",id)
    }
    
}