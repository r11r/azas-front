import {Component, Input, Output} from 'angular2/core';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'

@Component({
	selector: '.azascouncil',
	templateUrl: 'azas/council.component.html'
})
export class CouncilComponent {

    @Input() council: Council;
    
}
