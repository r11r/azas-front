(function(azas) {
    azas.AzasComponent = ng.core.Component({
        selector: '#azas',
        directives: [azas.LoginComponent, azas.CouncilComponent],
        templateUrl: 'azas/azas.component.html',
        styleUrls:['azas/all.css']
    }).Class({
        
        constructor: function() {
            this.view = "login";
            this.token = "";
            this.council = {};
        },
        
        login: function(enteredToken) {
            this.token = enteredToken;
            this.view = "loading";
            console.log("Login attempt: "+enteredToken);
            azas.rest.getCouncil(enteredToken, this._ngZone, this.tokensucces, this.tokenfail);
        },

        tokensucces: function(data) {
            this._ngZone.run(function(){
                console.log("loginsuccess");
                this.council = data;
                this.view = "council";
            });
        },

        tokenfail: function(statuscode) {
            this._ngZone.run(function(){
                console.log("Login fail: "+statuscode.toString());
                this.view = "badlogin";
            });
        }

    });
})(window.azas || (window.azas = {}));
