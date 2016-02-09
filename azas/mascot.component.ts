import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'

@Component({
	selector: '.azasmascot',
	templateUrl: 'azas/mascot.component.html'
})
export class MascotComponent implements OnInit {

    @Input() public mascot: Mascot;
    @Output() public deleted: EventEmitter<Mascot> = new EventEmitter();
    
    public state = 'display';

    public ngOnInit() {
        if(this.mascot.id=="") {
            this.state = 'edit'
        }
    }

    public edit() {
        this.state = 'edit';
    }

    public save() {
        this.state = 'display';
    }

    public delete() {
        console.log("deleting mascot");
        if(!window.confirm(this.mascot.nickName + " wirklich löschen :-(")) return;
        this.deleted.emit(this.mascot);
    }
    
}
