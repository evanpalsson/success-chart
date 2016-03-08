var app = angular.module('success-chart', ['firebase']);

	// Facebook login
	app.controller('loginCtrl', ['$scope', '$firebaseAuth',

		function($scope, $firebaseAuth) {
			var ref = new Firebase("https://success-chart.firebaseio.com");
    		$scope.authObj = $firebaseAuth(ref);
		}

		console.log('loginCtrl is working');
		
	]);

