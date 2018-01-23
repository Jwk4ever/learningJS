//tool.js 功能测试

var tool = require('../src/week1/tool.js');
var expect = require('chai').expect;


describe('类型检测',function(){
	it('应该相等',function(){
		expect(tool.typeOf('jia')).to.be.equal('string');
	});
});

describe('数字相等检测',function(){
	it('NaN 与 NaN 应该相等',function(){
		expect(tool.numisEqual(NaN,NaN)).to.be.equal(true);
	});
	it('+0 和 -0 不应该相等',function(){
		expect(tool.numisEqual(+0,-0)).to.be.equal(false);
	});
	it('1 和 2 不应该相等',function(){
		expect(tool.numisEqual(1,2)).to.be.equal(false);
	})
});

// describe('转化数组检测',function(){
// 	it('应该是数组',function(){
// 		var arr = 'abcdefg';
// 		expect(tool.toArray(arr)).t
// 	})
// })