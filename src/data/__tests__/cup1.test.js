/* global describe, it, expect */
'use strict'
const { cup1 } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of cup1 data', () => {
  it('cup1 data files returns object', () => {
    expect(cup1).not.toBe('')
  })
})
