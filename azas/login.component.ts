import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: '.azaslogin',
	templateUrl: 'azas/login.component.html'
})
export class LoginComponent {
    
    token: string;

	@Output() submit: EventEmitter<string> = new EventEmitter();
	
	doSubmit() {
		this.submit.emit(this.token);
	}
	
}

