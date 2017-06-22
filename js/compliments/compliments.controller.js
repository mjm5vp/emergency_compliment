`use strict`;

(function(){
  var app = angular.module("emergencyComp");
  app.controller("mainController", MainController);

  function MainController(){
    var vm = this;
    var num = Math.floor(Math.random() * (data.length));
    vm.data = data[num]
  }

}());
