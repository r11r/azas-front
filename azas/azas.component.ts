import {Component} from 'angular2/core';
import {LoginComponent} from './login.component';
import {CouncilComponent} from './council.component';
import {RestClient} from './rest'

@Component({
	selector: '.azasmain',
	directives: [LoginComponent, CouncilComponent],
	templateUrl: 'azas/azas.component.html',
	styleUrls:['azas/all.css']
})
export class AzasComponent {

	public view = 'login';
	public token = '';
	public council = {};
	
	constructor(private rest: RestClient) {}
	
	login(token: string) {
        this.token = token;
        this.view = "loading";
        console.log("Login attempt: "+token);
        this.rest.getCouncil(token, this.tokensuccess, this.tokenfail)
    }

    tokensuccess(data) {
        console.log("loginsuccess");
        this.council = data;
        this.view = "council";
    }

    tokenfail(code) {
        console.log("Login fail: "+code.toString());
        this.view = "badlogin";
    }
	
}
