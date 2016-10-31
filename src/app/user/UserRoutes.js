(function() {
  'use strict'

  angular
    .module('AngularKarmaJasmine.User')
    .config(UserRoutes)

  UserRoutes.$inject = [
    '$stateProvider'
  ]

  function UserRoutes($stateProvider) {
    $stateProvider.state('users', {
      url          : '/users',
      templateUrl  : 'main.html',
      controller   : 'UserController',
      controllerAs : 'ctrl'
    })
  }
})()
