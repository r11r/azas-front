import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Identifiable, Participant, ParticipantInfo} from './model'
import {RestClient} from './rest'

@Component({
    selector: '.azasparticipant',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'azas/participant.component.html'
})
export class ParticipantComponent implements OnInit {

    @Input() public token: string;
    @Input() public part: Participant;
    @Output() public deleted: EventEmitter<Participant> = new EventEmitter();
    @Output() public up: EventEmitter<boolean> = new EventEmitter();
    @Output() public down: EventEmitter<boolean> = new EventEmitter();
    public state: string;

    constructor(private rest: RestClient) {}    
    
    public ngOnInit() {
        if(this.part.id=="") {
            this.state = 'edit';
        } else {
            this.state = 'display';
        }
    }

    public gremiums = ['', 'StAPF', 'TOPF', 'KomGrem','Vorstand ZaPF e.V.'];
    public tshirts = ['xxs male','xs male','s male','m male','l male','xl male','xxl male','xxs female','xs female','s female','m female','l female','xl female','xxl female'];
    public foods = ['omnivor','vegetarisch','vegan'];
    public swimmers = ['entenmäßig', 'geht so', 'wie ein Block Granit'];
    public snorers = ['nein','ein bisschen','stark','Motorsäge'];
    public transportations = ['Zug','Fernbus','Auto','Sonsitiges']

    public excursions = ['','PSI (CH)','KKW (CH)','Technorama (CH)','Pfahlbauten','Ruppaner und Klärwerk','ISC und Stadtführung','Airbus und Dornier','Zeppelin und Dornier','Simulink Workshop'];

    public goUp() {
        this.up.emit(true);
    }
    
    public goDown() {
        this.down.emit(true);
    }

    public edit() {
        this.state = 'edit';
    }

    public save() {
        this.state = 'save';
        if(this.part.id=="") this.rest.addParticipant(
            this.token,
            this.part.priority,
            this.part.info,
            (response) => {
            this.part.id = (<Identifiable> response).id;
                this.state = 'display';
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
        else this.rest.editParticipant(
            this.token,
            this.part.id,
            this.part.priority,
            this.part.info,
            (response) => {
                this.state = 'display';
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
    }

    public delete() {
        if(!window.confirm(this.part.info.nickName + " wirklich löschen :-(")) return;
        this.state = 'delete';
        if(this.part.id=="") this.deleted.emit(this.part);
        else this.rest.deleteParticipant(
            this.token,
            this.part.id,
            (response) => {
                this.deleted.emit(this.part);
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
    }

    public updateTshirt(event) {
        //alert(stringyfy(event));
    }
    
}
