angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
  
  $scope.getData = function() {
    $scope.quotes = dataService.getData();
  }
  $scope.getData();
  
  $scope.addQuote = dataService.addData;
  
  $scope.removeQuote = dataService.removeData;
  
  $scope.search = function() {
    $scope.searchSubmit = $scope.inputSearch;
  }
  
  $scope.addQuoteClicked = false;
  $scope.removeQuoteClicked = false;
  $scope.searchQuoteClicked = false;
  
  $scope.showAdd = function() {
    $scope.addQuoteClicked = true;
    $scope.removeQuoteClicked = false;
    $scope.searchQuoteClicked = false;
  }
  
  $scope.showRemove = function() {
    $scope.addQuoteClicked = false;
    $scope.removeQuoteClicked = true;
    $scope.searchQuoteClicked = false;
  }
  
  $scope.showSearch = function() {
    $scope.addQuoteClicked = false;
    $scope.removeQuoteClicked = false;
    $scope.searchQuoteClicked = true;
  }
  
});