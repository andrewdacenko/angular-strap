'use strict';

angular.module('mgcrea.ngStrapDocs')

.config(function($atooltipProvider) {
  angular.extend($atooltipProvider.defaults, {
    html: true
  });
})

.controller('AtooltipDemoCtrl', function($scope, $q, $sce, $atooltip) {

  $scope.atooltip = {title: 'Hello Atooltip<br />This is a multiline message!', checked: false};

  // Controller usage example
  /*
  var myAtooltip = $atooltip(angular.element(document.querySelector('#test')), {title: 'Hello atooltip', placement: 'right'});
  $scope.showAtooltip = function() {
    myAtooltip.$promise.then(myAtooltip.show);
  };
  $scope.hideAtooltip = function() {
    myAtooltip.$promise.then(myAtooltip.hide);
  };
  */

});
