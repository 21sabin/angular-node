import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {User} from './user.model'


@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
   styleUrls:['./signup.component.css']
  
})

export class SignupComponent implements OnInit{
    myForm:FormGroup;
    users:User;

    ngOnInit(){
        this.myForm=new FormGroup({
            firstname:new FormControl(null,Validators.required),
            lastname:new FormControl(null,Validators.required),
            email:new FormControl(null,[
                Validators.required
                //Validators.pattern('^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$')
            ]),
            password:new FormControl(null,[
                Validators.required,
                Validators.minLength(6)
            ])
        });
        console.log("myform.valid",this.myForm.valid)
    }

    onsubmit(){
        console.log(this.myForm.value.firstname);
       
    
}