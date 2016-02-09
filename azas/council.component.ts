import {Component, Input, Output, ViewQuery, QueryList} from 'angular2/core';
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

    constructor(@ViewQuery(ParticipantComponent) public partComs: QueryList<ParticipantComponent>){
        partComs.changes.subscribe(() => console.log(partComs.length));
    }
    
    public participantUp(index: number) {
        if(index != 0) {
            // change participants:
            var old = this.council.participants[index-1];
            this.council.participants[index-1] = this.council.participants[index];
            this.council.participants[index] = old;
            // adjust priorities
            this.council.participants[index-1].priority = index-1;
            this.council.participants[index].priority = index;
            // save both
            this.partComs.toArray()[index-1].save();
            this.partComs.toArray()[index].save();
        }
    }

    public participantDown(index: number) {
        console.log(index);
        if(index != this.council.participants.length-1) {
            // change participants:
            var old = this.council.participants[index+1];
            this.council.participants[index+1] = this.council.participants[index];
            this.council.participants[index] = old;
            // adjust priorities
            this.council.participants[index+1].priority = index+1;
            this.council.participants[index].priority = index;
            // save both
            this.partComs.toArray()[index+1].save();
            this.partComs.toArray()[index].save();
        }
    }

    public delParticipant(index: number) {
        this.council.participants.splice(index, 1);
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
