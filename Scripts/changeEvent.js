var app = angular.module("changeApp",[])
.controller("changeCtrl",function($scope){
	var list = [
		{price:'10',qty:'0',totalPrice:'0'},
		{price:'20',qty:'0',totalPrice:'0'},
		{price:'30',qty:'0',totalPrice:'0'}
		];
	$scope.list = list;
});