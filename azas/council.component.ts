import {Component, Input, Output, ViewQuery, QueryList, OnInit} from 'angular2/core';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'
import {MascotComponent} from './mascot.component'
import {ParticipantComponent} from './participant.component'

@Component({
    selector: '.azascouncil',
    directives: [MascotComponent, ParticipantComponent],    
    templateUrl: 'azas/council.component.html'
})
export class CouncilComponent implements OnInit {

    @Input() council: Council;

    constructor(@ViewQuery(ParticipantComponent) public partComs: QueryList<ParticipantComponent>){
        partComs.changes.subscribe(() => console.log(partComs.length));
    }

    public ngOnInit() {
        this.assignSavePositions();
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
        this.assignSavePositions();
    }

    public participantDown(index: number) {
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
        this.assignSavePositions();
    }

    public assignSavePositions() {
        var n=3;
        for (var i in this.council.participants) {
            if (n>0 && this.council.participants[i].info.gremium=="") {
                this.council.participants[i].approved = true;
                n--;
            } else {
                this.council.participants[i].approved = false;
            }
        }
    }

    public delParticipant(index: number) {
        this.council.participants.splice(index, 1);
        this.assignSavePositions();
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
                tshirt: "xl male",
                robe: false,
                food: "omnivor",
                allergies: "",
                excursion1: "",
                excursion2: "",
                excursion3: "",
                dayOfBirth: "",
                nationality: "",
                address: {
                    street: "",
                    zipCode: "",
                    city: "",
                    country: ""
                },
                comment: "",
                zaepfchen: false,
                swimmer: "geht so",
                snorer: "nein",
                arrival: "Zug",
                owntent: false
            }
        });
        this.assignSavePositions();
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
