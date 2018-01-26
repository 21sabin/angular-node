import {Message} from './message.model';
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class MessageService{
    messages:Message[]=[];
    constructor(private http:Http){}

    addMessage(message:Message){
        //this.messages.push(message);
        const body=JSON.stringify(message)
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.post("http://localhost:3000/messages",body,{headers:headers})
        .map((response:Response)=>response.json())
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

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}