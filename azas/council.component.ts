import {Component, Input, Output} from 'angular2/core';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'
import {MascotComponent} from './mascot.component'
import {ParticipantComponent} from './participant.component'

@Component({
    selector: '.azascouncil',
    directives: [MascotComponent, ParticipantComponent],    
    templateUrl: 'azas/council.component.html'
})
export class CouncilComponent {

    @Input() council: Council;

    public delParticipant(part: Participant) {
        var index = this.council.participants.indexOf(part, 0);
        if (index != undefined) {
            this.council.participants.splice(index, 1);
        } else {
            console.log("ERROR: participant to be deleted not found!")
        }
    }

    public newParticipant() {
        this.council.participants.push({
            id: "",
            councilId: this.council.info.id,
            priority: this.council.participants.length,
            approved: false,
            info: {
                firstName: "",
                lastName: "",
                nickName: "",
                email: "",
                cell: "",
                gremium: "",
                tshirt: "",
                robe: "",
                food: "",
                allergies: "",
                excursion1: "",
                excursion2: "",
                excursion3: "",
                dayOfBirth: "",
                nationality: "",
                address: "",
                comment: "",
                zaepfchen: false,
                swimmer: "",
                snorer: "",
                arrival: ""
            }
        });
    }

    public delMascot(mascot: Mascot) {
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
