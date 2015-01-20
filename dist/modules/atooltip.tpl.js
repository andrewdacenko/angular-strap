/**
 * angular-strap
 * @version v2.1.6 - 2015-01-20
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.atooltip').run(['$templateCache', function($templateCache) {

  $templateCache.put('atooltip/atooltip.tpl.html', '<div class="atooltip in" ng-show="title"><div class="atooltip-arrow"></div><div class="atooltip-inner" ng-bind="title"></div></div>');

}]);