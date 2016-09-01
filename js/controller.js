var concordApp = angular.module("concordApp", []);


concordApp.controller("concordController", function($scope, $http){

	var search = "";

    var url = "http://eve-marketdata.com/api/item_orders2.json?char_name=demo&buysell=b&type_ids=34,36" + search;
    $http.get(url).success(function(data) {
    	console.log(data);
        $scope.data = data;
        for (var i = 0; i < $scope.data.length; i++) {

        }
    });


});


// {"typeID": 3196,"typeName": "Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1002"}








