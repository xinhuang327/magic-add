'use strict';

var expect = require('chai').expect;
var magicAdd = require('../index');

describe('#magicAdd', function () {
	it('magicAdd 1 and 2 should return 3 ', function () {
		var result = magicAdd.magicAdd(1, 2);
		expect(result).to.equal(3);
	});
})

describe('#magicAddPeople', function () {
	it('magicAddPeople 1 and 2 should return 3 ', function () {
		var result = magicAdd.magicAddPeople({ name: "j", age: 1 }, { name: "k", age: 2 });
		expect(result.age).to.equal(3);
	});
})