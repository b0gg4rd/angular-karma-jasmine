(function() {
  'use strict'

  angular
    .module('AngularKarmaJasmine')
    .config(AngularKarmaJasmineRoutes)

  AngularKarmaJasmineRoutes.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
  ]

  function AngularKarmaJasmineRoutes($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/')

  }
})()
