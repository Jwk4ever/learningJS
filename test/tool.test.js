//tool.js 功能测试


if(typeof require !== 'undefined'){
	var _ = require('../src/Tools/tool.js');
	var expect = require('chai').expect;
}else{
	var expect = chai.expect;
}

describe('类型检测',function(){
	var typeOf = _.typeOf;
	it('字符串',function(){
		expect(typeOf('jia')).to.be.equal('string');
	});
	it('正则',function(){
		expect(typeOf(/\s/)).to.be.equal('regexp');
	});
	it('数组',function(){
		expect(typeOf([1,2,3,4])).to.be.equal('array');
	})
})

describe('数组相等检测',function(){
	it('[] 和 [] 应该相等',function(){
		expect(_.isArrayEqual([],[])).to.be.ok;
	})
	it('[1,2,3] 和 [1,2,3] 应该相等',function(){
		expect(_.isArrayEqual([1,2,3],[1,2,3])).to.be.ok;
	})
	it('[1,2] 和 [1] 不应该相等',function(){
		expect(_.isArrayEqual([1,2],[1])).to.be.not.ok;
	})
})

describe('数字相等检测',function(){
	it('NaN 与 NaN 应该相等',function(){
		expect(_.numisEqual(NaN,NaN)).to.be.equal(true);
	});
	it('+0 和 -0 不应该相等',function(){
		expect(_.numisEqual(+0,-0)).to.be.equal(false);
	});
	it('1 和 2 不应该相等',function(){
		expect(_.numisEqual(1,2)).to.be.equal(false);
	})
})

describe('转化为数组',function(){
	it('多位输入转化为数组',function(){
		expect(_.isArrayEqual(_.toArray(1,2,3,4,5),[1,2,3,4,5])).to.be.ok;
	})
	it('函数arguments转化为数组',function(){
		var testFun = function(){
			expect(_.isArrayEqual(_.toArray(1,2,3),[1,2,3])).to.be.ok;
		};
		testFun(1,2,3);
	})
})

describe('删除数组中的元素',function(){
	it('删除数组中一个元素',function(){
		expect(_.isArrayEqual(_.removeElementFromArray([1,2,3],2),[1,3])).to.be.ok;
	})
	it('删除数组中所有元素',function(){
		expect(_.isArrayEqual(_.removeElementFromArray([1,1,1],1),[])).to.be.ok;
	})
})

describe('字符串复制',function(){
	it('字符串复制多次',function(){
		expect(_.strRepeat('asd',2)).to.be.equal('asdasd');
	})
})

describe('对象选择属性输出',function(){
	var user = {
		name: 'jiaweikang',
		age: 15,
		sex: 'male'
	}
	it('选择对象相等',function(){
		expect(_.pick(user,'name','age')).to.be.eql({name: 'jiaweikang',age: 15});
	})
})

describe('是否为手机号码',function(){
	var isPhone = _.isPhone;
	it('1213 不是电话号码',function(){
		expect(isPhone(1212)).to.be.false;
	});
	it('13413124324 是电话号码',function(){
		expect(isPhone(13413124324)).to.be.true;
	})
})

describe('是否为电子邮箱',function(){
	var isEmail = _.isEmail;
	it('32411@.com 不是邮箱',function(){
		expect(isEmail('32411@.com')).to.be.false
	})
	it('@tom.com 不是邮箱',function(){
		expect(isEmail('@tom.com')).to.be.false
	})
	it('123@sina.com 是邮箱',function(){
		expect(isEmail('123@sina.com')).to.be.true
	})
})




