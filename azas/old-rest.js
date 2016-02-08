(window.azas || (window.azas = {}));
(window.azas.rest || (window.azas.rest = {}));

(function(rest){

    rest.host = "http://localhost:8080";

    rest.call = function(path, request, onsuccess, onerror){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4) {
                if(ajax.status == 200) {
                    onsuccess(JSON.parse(ajax.responseText));
                } else {
                    onerror(ajax.status);
                }
            }
        }
        ajax.open("POST", rest.host + path, true);
        ajax.send(JSON.stringify(request));
    }

    rest.addParticipant = function(token, participantInfo, callback, error) {
        rest.call("/v1/addpart", {token: token, info: participantInfo}, callback, error)
    }

    rest.editParticipant = function(token, id, priority, participantInfo, callback, error) {
        rest.call("/v1/editpart", {token: token, id: id, priority: priority, info: info}, callback, error);
    }

    rest.deleteParticipant = function(token, id, callback, error) {
        rest.call("/v1/delpart", {token: token, id: id}, callback, error);
    }

    rest.addMascot = function(token, fullName, nickName, callback, error) {
        rest.call("/v1/addmascot", {token: token, fullName: fullName, nickName: nickName}, callback, error);
    }

    rest.editMascot = function(token, id, fullName, nickName, callback, error) {
        rest.call("/v1/editmascot", {token: token, id: id, fullName: fullName, nickName: nickName}, callback, error);
    }

    rest.deleteMascot = function(token, id, callback, error) {
        rest.call("/v1/delmascot", {token: token, id: id}, callback, error);
    }

    rest.getCouncil = function(token, onsuccess, onerror){
        rest.call("/v1/getcouncil", {token: token}, onsuccess, onerror)
    }

})(window.azas.rest);
