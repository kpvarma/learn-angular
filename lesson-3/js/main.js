(function(){
  var app = angular.module('LessonTwoApp', []);

  app.factory("User", function(){
    return {
      first_name: "First Name",
      last_name: "Last Name",
      address: "#665, A1 Block, 3rd Stage, X Avenue, City, State"
    };
  });

  app.controller('UserController', function($scope, User){
    $scope.user = User;
  });

})();