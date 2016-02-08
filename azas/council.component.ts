import {Component, Input, Output} from 'angular2/core';

@Component({
	selector: '.azascouncil',
	templateUrl: 'azas/council.component.html'
})
export class CouncilComponent {

    @Input() token: string;
    
}
