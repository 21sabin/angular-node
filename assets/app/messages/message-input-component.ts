import{Component} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message.model';
import {NgForm} from '@angular/forms'
@Component({
    selector:'app-input-component',
  //  templateUrl:'./message-input-component.html',
  template:`
  <div class="container">
  <div class="row">
          <div class="col-sm-8 col-offset-sm-4">
          <form (ngSubmit)="onSubmit(f)" #f=ngForm>
              <div class="from-group">
              <input type="text" name="content" ngModel class="form-control" required>
            </div>
            <br>
            <div class="form-group">
              <input type="submit" value="save" class="form-control"  class="btn btn-primary">
            </div>

          </form>
                
          </div>
  </div>
</div>
  `,
  styles:[`.container{margin-top:30px;}`]
})
export class MessageInputComponent{
    constructor(private messageService:MessageService){

    }
    // onSave(content:string){
    //     const message=new Message(content,"sabin","dfd","fd");
    //    this.messageService.addMessage(message);
    // }
    onSubmit(form:NgForm){
      const message=new Message(form.value.content,"sabin","dfd","fd");
      this.messageService.addMessage(message)
      .subscribe(
        data=>console.log("new data",data),
        error=>console.error(error)
      );
      form.reset();

    }
}