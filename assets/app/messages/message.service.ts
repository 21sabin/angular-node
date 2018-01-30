import {Message} from './message.model';
import {Injectable,EventEmitter} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';


import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class MessageService{
    messages:Message[]=[];
    messageIsEdit=new EventEmitter<Message>();

    constructor(private http:Http){}

    addMessage(message:Message){
        //this.messages.push(message);
        const body=JSON.stringify(message)
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.post("http://localhost:3000/messages",body,{headers:headers})
        .map((response:Response)=>{
            const result=response.json().obj;
            const message=new Message(result.obj.content,"dummy",result.obj._id,null);
            this.messages.push(message);
            return message;
        })
        .catch((error:Response)=>Observable.throw(error.json()));

    }

    getMessage(){
        return this.http.get("http://localhost:3000/messages")
        .map((response: Response)=>{
            const messages=response.json().obj;
            let transformMessage:Message[]=[];
            for(let message of messages){
                transformMessage.push(new Message(message.content,"sabin",message._id,null));
            }
            this.messages=transformMessage;
            return transformMessage;
        })
        .catch((error:Response)=>Observable.throw(error.json()));
    }

    editMessage(message:Message){
       this.messageIsEdit.emit(message);
    }

    updateMessage(message:Message){
        const body=JSON.stringify(message)
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.patch("http://localhost:3000/messages/"+message.messageId,body,{headers:headers})
        .map((response:Response)=>response.json())
        .catch((error:Response)=>Observable.throw("error"))
    }

    deleteMessage(message:Message){
       this.messages.splice(this.messages.indexOf(message),1);
       return this.http.delete("http://localhost:3000/messages/"+message.messageId)
       .map((res:Response)=>res.json())
       .catch((error:Response)=>Observable.throw(error.json()))
    }
}