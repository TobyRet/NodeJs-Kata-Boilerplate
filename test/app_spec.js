import {something} from '../src/app'
import {expect} from 'chai'

describe('a test', () => {
	it('returns true', () => {
		expect(something()).to.equal(true)
	})
})