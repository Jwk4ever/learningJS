

function PromiseA(fn){
    this.$chain = [];
    this.$state = 'pending';

    let resolve = (val) => {
        if(this.$state != 'pending'){
            return
        }
        this.$state = 'resolved';
        this.$chain.forEach((item) => {
            item.resolveCb(err);
        })
    }

    let reject = (err) => {
        if(this.$state != 'pending'){
            return
        }
        this.$state = 'rejected';
        this.$chain.forEach((item) => {
            item.rejectCb(err);
        })
    }

    fn(resolve, reject);
}

PromiseA.prototype.then = function(resolveCb, rejectCb){
    this.$chain.push({
        resolveCb,
        rejectCb
    })
    // return new PromiseA((resolve, reject) => {

    // })
}

PromiseA.race = function(PromiseArr){

}

PromiseA.all = function(PromiseArr){

}

PromiseA.resolve = function(){
    
}

PromiseA.reject = function(){

}

module.exports = PromiseA;