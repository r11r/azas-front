import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';
import {ParticipantInfo, Participant, Mascot, CouncilInfo, Council} from './model'

@Injectable()
export class RestClient {

    public static host: string;

    constructor(private http: Http) {}

    private call(endpoint: string, request: Object, success: (obj: Object) => void, error: (code: number) => void) {
        var body = JSON.stringify(request);
        this.http.post(RestClient.host + endpoint, body)
            .map(response => response.json())
            .subscribe( 
                response => success(response), 
                httperror => error(httperror.status) 
            )
    }

	
    addParticipant(token: string, participantInfo: ParticipantInfo, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/addpart", {token: token, info: participantInfo}, success, error)
    }

    editParticipant(token: string, id: string, priority: number, info: ParticipantInfo, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/editpart", {token: token, id: id, priority: priority, info: info}, success, error);
    }

    deleteParticipant(token: string, id: string, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/delpart", {token: token, id: id}, success, error);
    }

    addMascot(token: string, fullName: string, nickName: string, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/addmascot", {token: token, fullName: fullName, nickName: nickName}, success, error);
    }

    editMascot(token: string, id: string, fullName: string, nickName: string, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/editmascot", {token: token, id: id, fullName: fullName, nickName: nickName}, success, error);
    }

    deleteMascot(token: string, id: string, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/delmascot", {token: token, id: id}, success, error);
    }

    getCouncil(token: string, success: (obj: Object) => void, error: (code: number) => void) {
        this.call("/v1/getcouncil", {token: token}, success, error);
    }

    //dumpData(password: string, success: (obj: Object) => void) {
    //    var body = JSON.stringify({password: password});
    //    this.http.post(AzasClient.host + "/v1/dumpdata", body)
    //        .map(response => response.json())
    //        .subscribe(obj => success(obj))
    //}

}
