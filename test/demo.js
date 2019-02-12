const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const animal = { pets:['dog','cat','hamster'] };
const foo = 'bar';


function mysquare(n){
	return n;
}

function fizzbuzz(n) {
	if(n%15 == 0){
		return("fizzbuzz");
	}else if(n%3 ==0){
		return("fizz");
	}else if(n%5 == 0){
		return("buzz");
	}else{
		return n.toString();	
	}
}

describe('Some code to test',()=>{
	it('My first test',()=>{
		const anumber = 10;
		expect(anumber).to.exist;
	});
	it('This is another test',()=>{
		const val = false;
		expect(val).to.equal(false);
	});
	it('Test a function',()=>{
		var res = mysquare(12);
		expect(res).to.equal(12);
	});
	it('Test fizbuzz',()=>{
		var res = fizzbuzz(1);
		expect(res).to.equal("1");
		res = fizzbuzz(15);
		expect(res).to.equal("fizzbuzz");
		res = fizzbuzz(45);
		//expect(res).to.equal("fizz");
		expect(res).to.equal("fizzbuzz");
		assert.equal(res,"fizzbuzz","res equals fizzbuzz")
	});

});