import {Component, Input, Output} from 'angular2/core';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'
import {MascotComponent} from './mascot.component'

@Component({
    selector: '.azascouncil',
    directives: [MascotComponent],    
    templateUrl: 'azas/council.component.html'
})
export class CouncilComponent {

    @Input() council: Council;
    
    public delMascot(mascot: Mascot) {
        console.log("delMascot event triggered")
        var index = this.council.mascots.indexOf(mascot, 0);
        if (index != undefined) {
            this.council.mascots.splice(index, 1);
        } else {
            console.log("ERROR: mascot to be deleted not found!")
        }
    }

    public newMascot() {
        this.council.mascots.push({
            id: "",
            councilId: this.council.info.id,
            nickName: "",
            fullName: ""
        });
    }

}
