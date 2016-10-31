(function() {
  'use strict'

  angular
    .module('AngularKarmaJasmine.Commons')
    .factory('UserService', UserService)

  UserService.$inject = []

  function UserService() {

    return {
      requestAll : () => {
      }
    }

  }
})()
