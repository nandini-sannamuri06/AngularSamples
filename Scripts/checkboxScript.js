var checkBoxApp = angular.module("checkboxMod",[]).controller("checkboxCtrl",function($scope){
	
	var data = [
		{Name:'Nandini',Age:'30'},
		{Name: 'XXX',Age:'40'}
	];
	$scope.data = data;
	$scope.selectedItems =[];
	$scope.getData = function(index,value){
		if(value){
		$scope.selectedRow = index;
		$scope.selectedItems[index] = data[index];
		console.log($scope.selectedItems)
		}else{
			$scope.selectedRow = -1;
		}
		
	};
	
});