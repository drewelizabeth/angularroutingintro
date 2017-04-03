angular.module('myApp').controller('rosterCtrl', function($scope, rosterService){

    $scope.players = rosterService.getPlayers();

})