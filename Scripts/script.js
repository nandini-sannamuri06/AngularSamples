var module = angular.module("MyModule", []).controller("myController",
		function($scope) {
			var user = {
				Name : 'Nandini',
				Address : 'Hyderabad',
				Gender : 'Female',
				Image : 'images/flower-22674_960_720.jpg'
			};

			var users = [ {
				Name : 'Nandini',
				NickNames : [
					{name:'Nandu'},
					{name:'Ansi'}],
				Address : 'Hyderabad',
				Gender : 'Female',
				Image : 'images/flower-22674_960_720.jpg'
			}, 
			{
				Name : 'Narendra',
				NickNames : [
					{name:'Chinni'},
					{name:'Nari'}],
				Address : 'Hyderabad',
				Gender : 'Male',
				Image : 'images/flower-22674_960_720.jpg'
			},

			];
			$scope.user = user;
			$scope.users = users;
		});