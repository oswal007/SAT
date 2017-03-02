var hola1 = 14
var hola2 = 0.12
var Oswaldo = angular.module('Oswaldo',[]);
Oswaldo.controller('IVA', function($scope) {
	$scope.sacar = hola1 * hola2;
});