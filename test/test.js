/*global describe, it, beforeEach, afterEach*/
'use strict'
import assert from 'assert'
import Mod from '../src'

const PI = Math.PI

let el
beforeEach(() => {
  el = document.createElement('div')
  document.body.appendChild(el)
})

afterEach(() => {
  document.body.removeChild(el)
})

describe('works', function() {
  it('should works', function () {
    var m = new Mod()
    console.log(PI)
    assert.equal(1, 1)
  })
})
