const expect = require('chai').expect;
const PromiseA = require('../src/Promise');

const wait = function (time = 100, val = 'val', isResolve = true){
    return new PromiseA((resolve, reject) => {
        setTimeout(() => {
            isResolve && resolve(val);
            reject(val)
        }, time);
    })
}


describe('Promise 功能检测', () => {
    it('resolve 功能测试', () => {
        let a = new PromiseA((resolve, reject) => {
            setTimeout(() => {
                resolve('a');
            },100);
        })
        a.then((val) => {
            expect(val).to.te.equal('a');
        });
    })

    it('reject 功能测试', () => {
        let a = new PromiseA((resolve, reject) => {
            setTimeout(() => {
                reject('err')
            },100);
        });
        a.then(() => {
            console.log('should not be here');
        }, (reason) => {
            expect(reason).to.be.equal('err');
        })
    })

    it('Promise 同步功能', () => {
        let a = new PromiseA((resolve, reject) => {
            resolve('a');
        })
        a.then((val) => {
            expect(val).to.be.equal('a');
        })
    })

    it('Promise 状态不可逆', () => {
        let a = new PromiseA((resolve, reject) => {
            resolve('res');
            reject('rej');
        })
        expect(a.$state).to.be.equal('resolved');
    })

    it('Promise.all 功能测试', () => {
        // PromiseA.all([wait(100,1),wait(200,2)]).then((valArr) => {
        //     expect(valArr[1]).to.be.equal(2);
        // })
    })

    it('Promise.race 功能测试', () => {
        PromiseA.race([wait(100,1),wait(200,2)]).then((val) => {
            expect(val).to.be.equal(1);
        })
    })
})

describe('Promise.resolve 功能测试', () => {
    it('thenable 对象', () => {
        let a = {
            then: function(resolveCb, rejectCb){
                resolveCb('val');
            }
        }
        Promise.resolve(a).then((val) => {
            expect(val).to.be.equal('val');
        })
    })

    it('基本类型', () => {
        Promise.resolve(1).then((val) => {
            expect(val).to.be.equal(1);
        })
    })

    it('Promise 对象', () => {
        Promise.resolve(wait(100, 1)).then((val) => {
            expect.to.be.equal(1);
        })
    })
})

describe('Promise.reject 功能测试', () => {

})