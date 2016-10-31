'use strict'

describe('UserServiceTest', UserServiceTest)

function UserServiceTest() {
  let service

  beforeEach(angular.mock.module('AngularKarmaJasmine.Commons'))

  beforeEach(inject((_UserService_) => {
    service = _UserService_
  }))

  it('that UserService should exist', () => {
    expect(service).toBeDefined()
  })

  it('that requestAll should exist', () => {
    expect(service.requestAll).toBeDefined()
  })
}
