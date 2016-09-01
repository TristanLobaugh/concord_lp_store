var concordApp = angular.module("concordApp", []);


concordApp.controller("concordController", function($scope, $http){

	var search = "";

    // var url = "http://api.eve-central.com/api/quicklook?typeid=3196&typeid=34" + search;
    var url = "http://api.eve-central.com/api/marketstat?typeid=3196&typeid=35"
    $http.get(url).success(function(data) {
    	console.log(data);
        $scope.data = $.xml2json(data);
        // var json = $.xml2json(response);
        console.log($scope.data);
        for (var i = 0; i < $scope.data.length; i++) {

        }
    });


});


// {"typeID": 3196,"typeName": "Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1002"}








