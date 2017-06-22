`use strict`;

(function(){
  var app = angular.module("angularComp");
  app.controller("mainController", mainController);

  function mainController(){
    var vm = this;
    var num = Math.floor(Math.random() * data.length);
    vm.data = data[num]
  }

}());
