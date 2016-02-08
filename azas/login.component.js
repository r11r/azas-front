(function(azas) {
    azas.LoginComponent = ng.core.Component({
        selector: '.azaslogin',
        outputs: ['submit'],
        templateUrl: 'azas/login.component.html'
    }).Class({
        constructor: function() {
            this.token = "";
            this.submit = new ng.core.EventEmitter();
            console.log("Login loaded")
        },
        doSubmit: function(){
            this.submit.emit(this.token)
        }
    });
})(window.azas || (window.azas = {}));
