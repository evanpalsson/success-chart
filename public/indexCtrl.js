app.controller('indexCtrl', ['$scope', '$firebaseAuth', '$state',
    function($scope, $firebaseAuth, $state) {

        var ref = new Firebase("https://success-chart.firebaseio.com");

        $scope.authObj = $firebaseAuth(ref);
        $scope.authObj.$authWithOAuthToken("facebook");
        $scope.username = '';

        $scope.login = function() {
	        $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
              $scope.username = authData.facebook.displayName;
	            console.log("Logged in as:", authData.facebook.displayName);
	            console.log('authData: ', authData);
                $state.go('chart');
	        }).catch(function(error) {
	            console.error("Authentication failed:", error);
	        });
	    };

        $scope.logout = function() {
            $scope.authObj.$unauth();
            $state.go('login');
            console.log('logged out');
        };
    }
]);

console.log('indexCtrl is working');
