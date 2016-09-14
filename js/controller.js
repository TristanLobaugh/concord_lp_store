var concordApp = angular.module("concordApp", []);


concordApp.controller("concordController", function($scope, $http){

	var items = [];
	var search = "";
	var list = [[3077,"Zainou 'Gnome' Shield Upgrades SU-602",2500,2500000],[3078,"Zainou 'Gnome' Shield Upgrades SU-604",50000,50000000],[3079,"Zainou 'Gnome' Shield Upgrades SU-606",250000,250000000],[3080,"Zainou 'Gnome' Shield Management SM-702",2500,2500000],[3081,"Zainou 'Gnome' Shield Management SM-704",50000,50000000],[3084,"Zainou 'Gnome' Shield Management SM-706",250000,250000000],[3085,"Zainou 'Gnome' Shield Emission Systems SE-802",2500,2500000],[3086,"Zainou 'Gnome' Shield Emission Systems SE-804",50000,50000000],[3087,"Zainou 'Gnome' Shield Emission Systems SE-806",250000,250000000],[3088,"Zainou 'Gnome' Shield Operation SP-902",2500,2500000],[3089,"Zainou 'Gnome' Shield Operation SP-904",50000,50000000],[3092,"Zainou 'Gnome' Shield Operation SP-906",250000,250000000],[3093,"Eifyr and Co. 'Rogue' Evasive Maneuvering EM-702",2500,2500000],[3094,"Eifyr and Co. 'Rogue' Evasive Maneuvering EM-704",50000,50000000],[3095,"Eifyr and Co. 'Rogue' Evasive Maneuvering EM-706",250000,250000000],[3096,"Eifyr and Co. 'Rogue' Navigation NN-602",2500,2500000],[3097,"Eifyr and Co. 'Rogue' Navigation NN-604",50000,50000000],[3100,"Eifyr and Co. 'Rogue' Navigation NN-606",250000,250000000],[3101,"Eifyr and Co. 'Rogue' Fuel Conservation FC-802",2500,2500000],[3102,"Eifyr and Co. 'Rogue' Fuel Conservation FC-804",50000,50000000],[3103,"Eifyr and Co. 'Rogue' Fuel Conservation FC-806",250000,250000000],[3104,"Eifyr and Co. 'Rogue' Afterburner AB-604",50000,50000000],[3109,"Eifyr and Co. 'Rogue' Warp Drive Operation WD-604",50000,50000000],[3112,"Eifyr and Co. 'Rogue' High Speed Maneuvering HS-902",2500,2500000],[3113,"Eifyr and Co. 'Rogue' High Speed Maneuvering HS-904",50000,50000000],[3116,"Eifyr and Co. 'Rogue' High Speed Maneuvering HS-906",250000,250000000],[3117,"Eifyr and Co. 'Rogue' Warp Drive Speed WS-608",2500,2500000],[3118,"Eifyr and Co. 'Rogue' Warp Drive Speed WS-613",50000,50000000],[3119,"Eifyr and Co. 'Rogue' Warp Drive Speed WS-618",250000,250000000],[3120,"Eifyr and Co. 'Rogue' Acceleration Control AC-602",2500,2500000],[3121,"Eifyr and Co. 'Rogue' Acceleration Control AC-604",50000,50000000],[3124,"Eifyr and Co. 'Rogue' Acceleration Control AC-606",250000,250000000],[3125,"Zainou 'Deadeye' Guided Missile Precision GP-802",2500,2500000],[3126,"Zainou 'Deadeye' Guided Missile Precision GP-804",50000,50000000],[3127,"Zainou 'Deadeye' Guided Missile Precision GP-806",250000,250000000],[3128,"Zainou 'Deadeye' Missile Bombardment MB-702",2500,2500000],[3129,"Zainou 'Deadeye' Missile Bombardment MB-704",50000,50000000],[3132,"Zainou 'Deadeye' Missile Bombardment MB-706",250000,250000000],[3133,"Zainou 'Deadeye' Missile Projection MP-702",2500,2500000],[3134,"Zainou 'Deadeye' Missile Projection MP-704",50000,50000000],[3135,"Zainou 'Deadeye' Missile Projection MP-706",250000,250000000],[3136,"Zainou 'Deadeye' Rapid Launch RL-1002",2500,2500000],[3137,"Zainou 'Deadeye' Rapid Launch RL-1004",50000,50000000],[3140,"Zainou 'Deadeye' Rapid Launch RL-1006",250000,250000000],[3141,"Zainou 'Deadeye' Target Navigation Prediction TN-902",2500,2500000],[3142,"Zainou 'Deadeye' Target Navigation Prediction TN-904",50000,50000000],[3143,"Zainou 'Deadeye' Target Navigation Prediction TN-906",250000,250000000],[3144,"Zainou 'Gnome' Launcher CPU Efficiency LE-602",2500,2500000],[3145,"Zainou 'Gnome' Launcher CPU Efficiency LE-604",50000,50000000],[3148,"Zainou 'Gnome' Launcher CPU Efficiency LE-606",250000,250000000],[3149,"Hardwiring - Zainou 'Sharpshooter' ZMX11",2500,2500000],[3150,"Hardwiring - Zainou 'Sharpshooter' ZMX110",50000,50000000],[3151,"Hardwiring - Zainou 'Sharpshooter' ZMX1100",250000,250000000],[3152,"Zainou 'Snapshot' Defender Missiles DM-802",2500,2500000],[3153,"Zainou 'Snapshot' Defender Missiles DM-804",50000,50000000],[3156,"Zainou 'Snapshot' Defender Missiles DM-806",250000,250000000],[3157,"Zainou 'Snapshot' Heavy Assault Missiles AM-702",2500,2500000],[3158,"Zainou 'Snapshot' Heavy Assault Missiles AM-704",50000,50000000],[3159,"Zainou 'Snapshot' Heavy Assault Missiles AM-706",250000,250000000],[3160,"Zainou 'Snapshot' FOF Explosion Radius FR-1002",2500,2500000],[3161,"Zainou 'Snapshot' FOF Explosion Radius FR-1004",50000,50000000],[3164,"Zainou 'Snapshot' FOF Explosion Radius FR-1006",250000,250000000],[3165,"Zainou 'Snapshot' Heavy Missiles HM-702",2500,2500000],[3166,"Zainou 'Snapshot' Heavy Missiles HM-704",50000,50000000],[3167,"Zainou 'Snapshot' Heavy Missiles HM-706",250000,250000000],[3168,"Zainou 'Snapshot' Light Missiles LM-902",2500,2500000],[3169,"Zainou 'Snapshot' Light Missiles LM-904",50000,50000000],[3172,"Zainou 'Snapshot' Light Missiles LM-906",250000,250000000],[3173,"Zainou 'Snapshot' Rockets RD-902",2500,2500000],[3174,"Zainou 'Snapshot' Rockets RD-904",50000,50000000],[3175,"Zainou 'Snapshot' Rockets RD-906",250000,250000000],[3176,"Zainou 'Snapshot' Torpedoes TD-602",2500,2500000],[3177,"Zainou 'Snapshot' Torpedoes TD-604",50000,50000000],[3180,"Zainou 'Snapshot' Torpedoes TD-606",250000,250000000],[3181,"Zainou 'Snapshot' Cruise Missiles CM-602",2500,2500000],[3182,"Zainou 'Snapshot' Cruise Missiles CM-604",50000,50000000],[3183,"Zainou 'Snapshot' Cruise Missiles CM-606",250000,250000000],[3185,"Eifyr and Co. 'Gunslinger' Medium Projectile Turret MP-802",2500,2500000],[3188,"Eifyr and Co. 'Gunslinger' Medium Projectile Turret MP-804",50000,50000000],[3189,"Eifyr and Co. 'Gunslinger' Medium Projectile Turret MP-806",250000,250000000],[3190,"Eifyr and Co. 'Gunslinger' Motion Prediction MR-702",2500,2500000],[3191,"Eifyr and Co. 'Gunslinger' Motion Prediction MR-704",50000,50000000],[3192,"Eifyr and Co. 'Gunslinger' Motion Prediction MR-706",250000,250000000],[3193,"Eifyr and Co. 'Gunslinger' Surgical Strike SS-902",2500,2500000],[3194,"Eifyr and Co. 'Gunslinger' Surgical Strike SS-904",50000,50000000],[3195,"Eifyr and Co. 'Gunslinger' Surgical Strike SS-906",250000,250000000],[3196,"Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1002",2500,2500000],[3197,"Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1004",50000,50000000],[3198,"Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1006",250000,250000000],[3199,"Eifyr and Co. 'Gunslinger' Small Projectile Turret SP-602",2500,2500000],[3200,"Eifyr and Co. 'Gunslinger' Small Projectile Turret SP-604",50000,50000000],[3201,"Eifyr and Co. 'Gunslinger' Small Projectile Turret SP-606",250000,250000000],[3202,"Inherent Implants 'Lancer' Small Energy Turret SE-602",2500,2500000],[3203,"Inherent Implants 'Lancer' Controlled Bursts CB-702",2500,2500000],[3204,"Inherent Implants 'Lancer' Gunnery RF-902",2500,2500000],[3205,"Inherent Implants 'Lancer' Large Energy Turret LE-1002",2500,2500000],[3206,"Inherent Implants 'Lancer' Medium Energy Turret ME-802",2500,2500000],[3207,"Inherent Implants 'Lancer' Small Energy Turret SE-604",50000,50000000],[3208,"Inherent Implants 'Lancer' Controlled Bursts CB-704",50000,50000000],[3209,"Inherent Implants 'Lancer' Gunnery RF-904",50000,50000000],[3210,"Inherent Implants 'Lancer' Large Energy Turret LE-1004",50000,50000000],[3211,"Inherent Implants 'Lancer' Medium Energy Turret ME-804",50000,50000000],[3212,"Inherent Implants 'Lancer' Small Energy Turret SE-606",250000,250000000],[3213,"Inherent Implants 'Lancer' Controlled Bursts CB-706",250000,250000000],[3214,"Inherent Implants 'Lancer' Gunnery RF-906",250000,250000000],[3215,"Inherent Implants 'Lancer' Large Energy Turret LE-1006",250000,250000000],[3216,"Inherent Implants 'Lancer' Medium Energy Turret ME-806",250000,250000000],[3217,"Zainou 'Deadeye' Sharpshooter ST-902",2500,2500000],[3220,"Zainou 'Deadeye' Trajectory Analysis TA-704",50000,50000000],[3221,"Zainou 'Deadeye' Trajectory Analysis TA-706",250000,250000000],[3222,"Zainou 'Deadeye' Large Hybrid Turret LH-1002",2500,2500000],[3224,"Zainou 'Deadeye' Large Hybrid Turret LH-1006",250000,250000000],[3225,"Zainou 'Deadeye' Small Hybrid Turret SH-602",2500,2500000],[3226,"Zainou 'Deadeye' Small Hybrid Turret SH-604",50000,50000000],[3227,"Zainou 'Deadeye' Small Hybrid Turret SH-606",250000,250000000],[3228,"Zainou 'Gnome' Weapon Upgrades WU-1002",2500,2500000],[3229,"Zainou 'Gnome' Weapon Upgrades WU-1004",50000,50000000],[3230,"Zainou 'Gnome' Weapon Upgrades WU-1006",250000,250000000],[3231,"Zainou 'Deadeye' Medium Hybrid Turret MH-802",2500,2500000],[3232,"Zainou 'Deadeye' Medium Hybrid Turret MH-804",50000,50000000],[3233,"Zainou 'Deadeye' Medium Hybrid Turret MH-806",250000,250000000],[3234,"Zainou 'Deadeye' Sharpshooter ST-904",50000,50000000],[3235,"Zainou 'Deadeye' Sharpshooter ST-906",250000,250000000],[3236,"Zainou 'Deadeye' Trajectory Analysis TA-702",2500,2500000],[3237,"Inherent Implants 'Squire' Capacitor Management EM-802",2500,2500000],[3238,"Inherent Implants 'Squire' Capacitor Management EM-804",50000,50000000],[3239,"Inherent Implants 'Squire' Capacitor Management EM-806",250000,250000000],[3240,"Inherent Implants 'Squire' Capacitor Systems Operation EO-602",2500,2500000],[3241,"Inherent Implants 'Squire' Capacitor Systems Operation EO-604",50000,50000000],[3246,"Inherent Implants 'Squire' Capacitor Systems Operation EO-606",250000,250000000],[3247,"Inherent Implants 'Squire' Capacitor Emission Systems ES-702",2500,2500000],[3248,"Inherent Implants 'Squire' Capacitor Emission Systems ES-704",50000,50000000],[3249,"Inherent Implants 'Squire' Capacitor Emission Systems ES-706",250000,250000000],[3250,"Inherent Implants 'Squire' Energy Pulse Weapons EP-702",2500,2500000],[3251,"Inherent Implants 'Squire' Energy Pulse Weapons EP-704",50000,50000000],[3252,"Inherent Implants 'Squire' Energy Pulse Weapons EP-706",250000,250000000],[3253,"Inherent Implants 'Squire' Energy Grid Upgrades EU-702",2500,2500000],[3254,"Inherent Implants 'Squire' Energy Grid Upgrades EU-704",50000,50000000],[3255,"Inherent Implants 'Squire' Energy Grid Upgrades EU-706",250000,250000000],[3256,"Inherent Implants 'Squire' Power Grid Management EG-602",2500,2500000],[3257,"Inherent Implants 'Squire' Power Grid Management EG-604",50000,50000000],[3258,"Inherent Implants 'Squire' Power Grid Management EG-606",250000,250000000],[3262,"Zainou 'Gypsy' Electronics Upgrades EU-602",2500,2500000],[3263,"Zainou 'Gypsy' Electronics Upgrades EU-604",50000,50000000],[3264,"Zainou 'Gypsy' Electronics Upgrades EU-606",250000,250000000],[3265,"Zainou 'Gypsy' CPU Management EE-602",2500,2500000],[3266,"Zainou 'Gypsy' CPU Management EE-604",50000,50000000],[3267,"Zainou 'Gypsy' CPU Management EE-606",250000,250000000],[3268,"Zainou 'Gypsy' Signature Analysis SA-702",2500,2500000],[3269,"Zainou 'Gypsy' Signature Analysis SA-704",50000,50000000],[3270,"Zainou 'Gypsy' Signature Analysis SA-706",250000,250000000],[3271,"Zainou 'Gypsy' Electronic Warfare EW-902",2500,2500000],[3272,"Zainou 'Gypsy' Electronic Warfare EW-904",50000,50000000],[3273,"Zainou 'Gypsy' Electronic Warfare EW-906",250000,250000000],[3274,"Zainou 'Gypsy' Long Range Targeting LT-802",2500,2500000],[3275,"Zainou 'Gypsy' Long Range Targeting LT-804",50000,50000000],[3276,"Zainou 'Gypsy' Long Range Targeting LT-806",250000,250000000],[3277,"Zainou 'Gypsy' Propulsion Jamming PJ-802",2500,2500000],[3278,"Zainou 'Gypsy' Propulsion Jamming PJ-804",50000,50000000],[3279,"Zainou 'Gypsy' Propulsion Jamming PJ-806",250000,250000000],[3280,"Zainou 'Gypsy' Sensor Linking SL-902",2500,2500000],[3281,"Zainou 'Gypsy' Sensor Linking SL-904",50000,50000000],[3282,"Zainou 'Gypsy' Sensor Linking SL-906",250000,250000000],[3283,"Zainou 'Gypsy' Weapon Disruption WD-902",2500,2500000],[3284,"Zainou 'Gypsy' Weapon Disruption WD-904",50000,50000000],[3287,"Zainou 'Gypsy' Weapon Disruption WD-906",250000,250000000],[3291,"Inherent Implants 'Noble' Repair Systems RS-602",2500,2500000],[3292,"Inherent Implants 'Noble' Repair Systems RS-604",50000,50000000],[3299,"Inherent Implants 'Noble' Repair Systems RS-606",250000,250000000],[3414,"Inherent Implants 'Noble' Remote Armor Repair Systems RA-702",2500,2500000],[3415,"Inherent Implants 'Noble' Remote Armor Repair Systems RA-704",50000,50000000],[3470,"Inherent Implants 'Noble' Remote Armor Repair Systems RA-706",250000,250000000],[3471,"Inherent Implants 'Noble' Mechanic MC-802",2500,2500000],[3474,"Inherent Implants 'Noble' Mechanic MC-804",50000,50000000],[3475,"Inherent Implants 'Noble' Mechanic MC-806",250000,250000000],[3476,"Inherent Implants 'Noble' Repair Proficiency RP-902",2500,2500000],[3477,"Inherent Implants 'Noble' Repair Proficiency RP-904",50000,50000000],[3478,"Inherent Implants 'Noble' Repair Proficiency RP-906",250000,250000000],[3479,"Inherent Implants 'Noble' Hull Upgrades HG-1002",2500,2500000],[3481,"Inherent Implants 'Noble' Hull Upgrades HG-1004",50000,50000000],[3482,"Inherent Implants 'Noble' Hull Upgrades HG-1006",250000,250000000],[13209,"Armored Warfare Mindlink",20000,20000000],[13239,"Eifyr and Co. 'Rogue' Afterburner AB-606",250000,250000000],[13241,"Eifyr and Co. 'Rogue' Warp Drive Operation WD-606",250000,250000000],[21888,"Siege Warfare Mindlink",20000,20000000],[21889,"Information Warfare Mindlink",20000,20000000],[21890,"Skirmish Warfare Mindlink",20000,20000000],[22559,"Mining Foreman Mindlink",20000,20000000],[27111,"Eifyr and Co. 'Rogue' Afterburner AB-602",2500,2500000],[27113,"Eifyr and Co. 'Rogue' Warp Drive Operation WD-602",2500,2500000],[37613,"CONCORD Warp Disruption Field Generator",180000,100000000]];
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

// {"typeID": 3196,"typeName": "Eifyr and Co. 'Gunslinger' Large Projectile Turret LP-1002"}








