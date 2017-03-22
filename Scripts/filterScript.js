var filterApp = angular.module("myFilterMod",[]).controller("myFilterCont",function($scope){
	var users = [
		{name:'Nandini',dob: new Date("september 28 1987"), gender:'Female', salary:10000},
		{name:'xxx',dob: new Date('28-nov-1986'), gender:'male', salary:20000},
		{name:'yyyy',dob: new Date('28-mar-1980'), gender:'Female', salary:100000},
		{name:'zzz',dob: new Date('28-apr-1978'), gender:'Female', salary:30000},
		{name:'abc',dob: new Date('28-dec-1977'), gender:'Male', salary:40000},
		{name:'ggbbb',dob: new Date('28-sep-1965'), gender:'Female', salary:100000},
	];
	$scope.users = users;
	$scope.rowLimit = 5;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	
	$scope.sortData = function(column){
		$scope.reverseSort = ($scope.sortColumn==column) ? !$scope.reverseSort : false;
		$scope.sortColumn  = column;
	};
	
	$scope.sortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return '';
	};
	
});