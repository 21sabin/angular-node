
export class User{
    constructor(
    public email:string,
    public password:string,
    public lastname?:string,
    public firstname?:string){
        this.email=email;
        this.password=password;
        this.lastname=lastname;
        this.firstname=firstname;
    }
}