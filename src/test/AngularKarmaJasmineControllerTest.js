'use strict'

describe('AngularKarmaJasmineControllerTest', AngularKarmaJasmineControllerTest)

function AngularKarmaJasmineControllerTest() {
  let $controller
  let ctrl

  //beforeEach(angular.mock.module('ui.router'))
  beforeEach(angular.mock.module('AngularKarmaJasmine'))

  beforeEach(inject((_$controller_, _$log_) => {
    $controller = _$controller_
    ctrl = $controller('AngularKarmaJasmineController', {
      $log : _$log_
    })
  }))

  it('that AngularKarmaJasmineController should exist', () => {
    expect(ctrl).toBeDefined()
  })

  it('that message should exists', () => {
    expect(ctrl.message).toBeDefined()
  })
}
