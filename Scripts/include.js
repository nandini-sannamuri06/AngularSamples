var includeApp = angular.module("includeSample",[]).controller("includeController",function($scope){
	  var employees = [
		  {name:'nandini',age:'20',address:'hyderbad'},
		  {name:'narendra', age:'30',address:'nizamabad'}
	  ];
	  
	  $scope.employees = employees;
	  $scope.employeeView = "employeeTable.html";
	  
});