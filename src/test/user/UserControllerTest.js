'use strict'

describe('UserControllerTest', UserControllerTest)

function UserControllerTest() {
  let $controller
  let ctrl

  beforeEach(angular.mock.module('ui.router'))
  beforeEach(angular.mock.module('AngularKarmaJasmine.User'))

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_
    ctrl = $controller('UserController', {})
  }))

  it('that UserController should exist', () => {
    expect(ctrl).toBeDefined()
  })
}
