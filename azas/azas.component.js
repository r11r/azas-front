(function(azas) {
  azas.AzasComponent =
    ng.core.Component({
      selector: '#azas',
      template: '<h1>Anmeldung zur Zapf am See</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.azas || (window.azas = {}));
