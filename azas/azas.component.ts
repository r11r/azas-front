import {Component, OnInit} from 'angular2/core';
import {LoginComponent} from './login.component';
import {CouncilComponent} from './council.component';
import {RestClient} from './rest'

@Component({
    selector: '.azasmain',
    directives: [LoginComponent, CouncilComponent],
    templateUrl: 'azas/azas.component.html'
})
export class AzasComponent implements OnInit {

    public view = 'login';
    public token = '';
    public council = {};
	
    constructor(private rest: RestClient) {}
	
    login(token: string) {
        this.token = token;
        this.view = "loading";
        console.log("Login attempt: "+token);
        this.rest.getCouncil(
            token, 
            (data: Object) => {
                console.log("loginsuccess");
                this.council = data;
                this.view = "council";
            },
            (code: number) => {
                console.log("Login fail: "+code.toString());
                this.view = "badlogin";
            }
        )
    }

    ngOnInit() {
        if(window.location.hash) {
            var hash = window.location.hash.substring(1); //removes the # character
            this.login(hash);
        }
    }

}
