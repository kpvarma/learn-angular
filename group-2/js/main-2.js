(function(){
  var app = angular.module('LessonTwoApp', []);

  app.controller('UserController', function(){
    this.user = user;
  });

  user = {
    first_name: "First Name",
    last_name: "Last Name",
    address: "#665, A1 Block, 3rd Stage, X Avenue, City, State"
  };
})();