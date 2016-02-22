import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: '.azaslogin',
    templateUrl: 'azas/login.component.html'
})
export class LoginComponent {

    public token: string;

    @Output() public onLogin: EventEmitter<string> = new EventEmitter();

    public login() {
        console.log("LoginComponenet: "+this.token);
        this.onLogin.emit(this.token);
    }

}

