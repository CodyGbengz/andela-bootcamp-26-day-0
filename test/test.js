'use strict';

const should = require('chai').should();
const myApp = require('../app/arithgeo.js');
 
describe("arithGeo Function", function() {
  it("should exist", function(){
    myApp.arithGeo([]).should.not.be.undefined;
  });
  it("should return 0 for empty array", function() {
  	myApp.arithGeo([]).should.eql(0);

  });
  it("should return -1 for [3,3,2,6,2]", function() {
  	myApp.arithGeo([3,3,2,6,2]).should.equal(-1);
  });
  it("should be a string for [1,3,5,7,9]", function() {
  	myApp.arithGeo([1,3,5,7,9]).should.be.a('string');
  });
  it("should return 'Arithmetic' for [1,3,5,7,9]", function() {
  	myApp.arithGeo([1,3,5,7,9]).should.equal('Arithmetic')
  });
});

describe("test for arithmetic progression",function(){
	it("should not return 'Arithmetic' for [2,6,18,54]", function() {
		myApp.arithGeo([2,6,18,54]).should.not.equal('Arithmetic');
  });
	it("should return 'Arithmetic' for [2,4,6,8]", function() {
		myApp.arithGeo([2,4,6,8]).should.equal('Arithmetic');
  });
	it("should return 'Arithmetic' for [5,10,15,20]",function() {
		myApp.arithGeo([5,10,15,20]).should.equal('Arithmetic');
  });
});

describe("test for geometric progression", function() {
	it("should not return 'Geometric' for input [3,6,9]", function() {
		myApp.arithGeo([3,6,9]).should.not.equal('Geometric');
	});
	it("should return 'Geometric' for [4,16,64]", function() {
		myApp.arithGeo([4,16,64]).should.equal('Geometric');
	});
});

describe("test for empty array input", function() {
  it("should return '0' for input []", function() {
    myApp.arithGeo([]).should.equal(0);
  });
  it("should not return '0' for non-empty array ", function() {
    myApp.arithGeo([8,9,3]).should.not.equal(0);
  });
});

describe("test for neither arithmetic nor geometric sequence", function() {
  it("should return -1 for input [3,2,-4,443]", function() {
    myApp.arithGeo([3,2,-4,443]).should.equal(-1);
  });
  it("should return -1 for input [1]", function() {
    myApp.arithGeo([1]).should.equal(-1);
  });
  it("should return -1 for string input", function() {
    myApp.arithGeo('boy').should.equal(-1);
  });
})
  
