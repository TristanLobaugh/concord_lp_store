$(document).ready(function()	{

	var concordApp = angular.module("concordApp", []);


	concordApp.controller("concordController", function($scope, $http){

		var items = [];
		var search = "";
		var list = lpItems;
		$scope.sortSell = false;
		$scope.sortBuy = false;

		for(var i = 0; i < list.length; i++){
				search = "typeid=" + list[i][0];
				// console.log(list[i][1]);
				var url = "http://api.eve-central.com/api/marketstat/json?" + search;
				$http.get(url).success(function(data) {
					// console.log(data[0]);
					thisTypeId = data[0].all.forQuery.types[0];
					thisTypeIdBuy = data[0].buy.max;
					thisTypeIdSell = data[0].sell.min;
					thisIdData = findData(thisTypeId);
					// console.log(thisTypeId + " - Buy: " + thisTypeIdBuy + " | Sell: " + thisTypeIdSell);

					items.push(new Item(thisTypeId, thisIdData[0], thisIdData[1], thisIdData[2], thisTypeIdBuy, thisTypeIdSell));


			        // $scope.data = $.xml2json(data);
			        // console.log($scope.data);
	    		});
			}
			console.log(items);

		findData = function(id){
			for(var i = 0; i < list.length; i++){
				if(id === list[i][0]){
					return [list[i][1], list[i][2], list[i][3]];
				}
			}
			return "Null";
		}

		function Item(id, name, lpPrice, iskPrice, buyPrice, sellPrice){
			this.id = id;
			this.name = name;
			this.lpPrice = lpPrice;
			this.iskPrice = iskPrice;
			this.buyPrice = buyPrice;
			this.sellPrice = sellPrice;
			this.lpByBuy = Math.floor((buyPrice - iskPrice) / lpPrice);
			this.lpBySell = Math.floor((sellPrice - iskPrice) / lpPrice);
		}

	    // var url = "http://api.eve-central.com/api/quicklook?" + search;
	    // var url = "http://api.eve-central.com/api/marketstat/json?" + search;

	    $scope.listBy = function(sortItem){
	    	$scope.items = items;
	    	$scope.sortBy = "-" + sortItem;
	    	if(sortItem === "lpByBuy"){
	    		$scope.sortSell = false;
	    		$scope.sortBuy = true;
	    	}
	    	else if(sortItem === "lpBySell"){
	    		$scope.sortBuy = false;
	    		$scope.sortSell = true;
	    	}
	    }


	});

});

// {"typeID": 3196,"typeName": "Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1002"}








