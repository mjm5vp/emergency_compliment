`use strict`;

(function(){
  var app = angular.module("emergencyComp");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    var num = Math.floor(Math.random() * (data.length));
    vm.data = data[num]
  }

}());
