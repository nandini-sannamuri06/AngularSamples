var myEvent = angular.module("eventModule",[]).controller("eventController",function($scope){
	var movies = [
		{name:'BaleBaleMagadivoy',likes:'0',disLikes:'0'},
		{name:'Sreemanthudu',likes:'0',disLikes:'0'},
		{name:'Bahubali',likes:'0',disLikes:'0'}
	];
	
	$scope.movies = movies;
	
	$scope.incrementLikes = function(movie){
		movie.likes++;
	};
	$scope.incrementDisLikes = function(movie){
		movie.disLikes++;
	};
});