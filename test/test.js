'use strict';

var expect = require('chai').expect;
var magicAdd = require('../index');

describe('#magicAdd', function () {
	it('magicAdd 1 and 2 should return 3 ', function () {
		var result = magicAdd(1, 2);
		expect(result).to.equal(3);
	});

	it('magicAdd 2 and 1 should return 3 ', function () {
		var result = magicAdd(2, 1);
		expect(result).to.equal(3);
	});
})