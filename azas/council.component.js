(function(azas) {
    azas.CouncilComponent = ng.core.Component({
        selector: '.azascouncil',
        inputs: ['token'],
        templateUrl: 'azas/council.component.html'
    }).Class({
        constructor: function() {}
    });
})(window.azas || (window.azas = {}));
