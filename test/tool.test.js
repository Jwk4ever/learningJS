//tool.js 功能测试

var tool = require('../src/Tools/tool.js');
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
describe('转化为数组',function(){
	it('多位输入转化为数组',function(){
		expect(tool.toArray(1,2,3,4,5)).to.be.equal([1,2,3,4,5]);
	})
})


describe('对象选择属性输出',function(){
	var user = {
		name: 'jiaweikang',
		age: 15,
		sex: 'male'
	}
	it('选择对象相等',function(){
		expect(tool.pick(user,'name','age')).to.be.equal({name: 'jiaweikang',age: 15});
	})
})