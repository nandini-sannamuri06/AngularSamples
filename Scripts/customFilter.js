
var custApp = angular.module("custMod", []).controller("custController", function($scope) {
	var employees = [ {
		name : 'Nandini',
		gender : 1,
		city : 'hyderabad'
	}, {
		name : 'asus',
		gender : 3,
		city : 'chennai'
	}, {
		name : 'lenova',
		gender : 3,
		city : 'chennai'
	}, {
		name : 'narendra',
		gender : 2,
		city : 'nizamabad'
	}, ];
	$scope.employees = employees;
});