var MyApp = angular.module("MyApp", []);

MyApp.factory("DefaultProduct", function(){
	var ps = {
		name:  "Car",
		price : 10000000,
		description : "Benz",
	};
	return ps;
});

MyApp.controller("MyController", function($scope, DefaultProduct){

	// Default product
	$scope.product = DefaultProduct;

	// All products
	$scope.products = [];

	$scope.add = function(p){
		$scope.products.push(p);
		$scope.product = {}

		console.log($scope.products);
	};

	$scope.remove = function(p){
		var i = $scope.products.indexOf(p);
		$scope.products.splice(i, 1);
	};

	$scope.edit = function(p){
		//var i = $scope.products.indexOf(p);
		//$scope.products.splice(i, 1);	
		$scope.product = p;
		$scope.editing = true;
	};

	$scope.update = function(p){
		$scope.product = {};
		$scope.editing = false;
	};
});