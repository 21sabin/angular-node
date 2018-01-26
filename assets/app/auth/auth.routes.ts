import {Routes,RouterModule} from '@angular/router';

import {SigninComponent} from './signin.component';
import {SignupComponent} from './signup.component';
import {LogoutComponent} from './logout.component';

export const auth_routes=[
    {path:"",redirectTo:'signup',pathMatch:"full"},
    {path:"signin",component:SigninComponent},
    {path:"signup",component:SignupComponent},
    {path:"logout",component:LogoutComponent}

]

export const AUTH_ROUTING=RouterModule.forRoot(auth_routes);