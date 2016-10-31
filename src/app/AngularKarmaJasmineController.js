(function() {
  'use strict'

  angular
    .module('AngularKarmaJasmine')
    .controller('AngularKarmaJasmineController', AngularKarmaJasmineController)

  AngularKarmaJasmineController.$inject = [
    '$log'
  ]

  function AngularKarmaJasmineController($log) {

    $log.debug('AngularKarmaJasmineController up and running...')

    this.message = 'Hello, world!'
  }
})()
