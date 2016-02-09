import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {Mascot, Identifiable} from './model'
import {RestClient} from './rest'

@Component({
	selector: '.azasmascot',
	templateUrl: 'azas/mascot.component.html'
})
export class MascotComponent implements OnInit {

    @Input() public token: string;
    @Input() public mascot: Mascot;
    @Output() public deleted: EventEmitter<Mascot> = new EventEmitter();
    public state = 'display';

    constructor(private rest: RestClient) {}    
    
    public ngOnInit() {
        if(this.mascot.id=="") {
            this.state = 'edit'
        }
    }

    public edit() {
        this.state = 'edit';
    }

    public save() {
        this.state = 'save';
        if(this.mascot.id=="") this.rest.addMascot(
            this.token,
            this.mascot.fullName,
            this.mascot.nickName,
            (response) => {
            this.mascot.id = (<Identifiable> response).id;
                this.state = 'display';
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
        else this.rest.editMascot(
            this.token,
            this.mascot.id,
            this.mascot.fullName,
            this.mascot.nickName,
            (response) => {
                this.state = 'display';
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
    }

    public delete() {
        if(!window.confirm(this.mascot.nickName + " wirklich löschen :-(")) return;
        this.state = 'delete';
        if(this.mascot.id=="") this.deleted.emit(this.mascot);
        else this.rest.deleteMascot(
            this.token,
            this.mascot.id,
            (response) => {
                this.deleted.emit(this.mascot);
            },
            (code) => {
                window.alert("Serverfehler: "+code.toString());
            }
        );
    }
    
}
