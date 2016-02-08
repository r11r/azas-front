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
        },
        login: function(enteredToken) {
            this.token = enteredToken;
            console.log("Login: " + this.token);
            this.view = "council";
        }
    });
})(window.azas || (window.azas = {}));
