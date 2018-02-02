import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {User} from './user.model'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'


@Component({
    selector:'app-signin',
    templateUrl:'./signin.component.html',
 
  
})

export class SigninComponent implements OnInit{
    myForm:FormGroup;
    error:any;
    constructor(private authService:AuthService,private router:Router){}

    onsubmit(){
        const user=new User(this.myForm.value.email,this.myForm.value.password);
        this.authService.signin(user)
        .subscribe(
            data=>{
                localStorage.setItem('token',data.token);
                localStorage.setItem('userId',data.userId);
                this.router.navigateByUrl('/')
            },
            error=>console.error(error)
        )
    }

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

  
}