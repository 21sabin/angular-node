import{Component,OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message.model';
import {NgForm} from '@angular/forms'

@Component({
    selector:'app-input-component',
    templateUrl:'./message-input.component.html'
  

})
export class MessageInputComponent implements OnInit{
  message:Message;
    constructor(private messageService:MessageService){

    }

    onSubmit(form:NgForm){
      if(this.message){
        //edit
        this.message.content=form.value.content;
        this.messageService.updateMessage(this.message)
        .subscribe(
          data=>console.log(data)
        )
        this.message=null;
      }else{
        const message=new Message(form.value.content,"sabin","dfd","fd");
        this.messageService.addMessage(message)
        .subscribe(
          data=>console.log(data),
          error=>console.error(error)
          );
      }
     
        form.reset();

    }

    clear(form:NgForm){
      this.message=null;
      form.reset();
    }

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
          (message:Message)=>this.message=message
        )

    }
}