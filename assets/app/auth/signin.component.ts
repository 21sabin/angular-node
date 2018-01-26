import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
    selector:'app-signin',
    templateUrl:'./signin.component.html',
 
  
})

export class SigninComponent implements OnInit{
    myForm:FormGroup;

    ngOnInit(){
        this.myForm=new FormGroup({
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
        console.log(this.myForm);
    }
}