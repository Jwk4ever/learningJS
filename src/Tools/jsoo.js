//js面对对象编程
//es5

//给对象添加属性
// Object.defineProperty Object.defineProperties
var book = {};

Object.defineProperties(book,{
	_year:{
		value: 2011,
		writable: true
	},
	edition:{
		value: 1,
		writable: true
	},
	author:{
		value:"jiaweikang"
	},
	year:{
		get:function(){
			return this._year;
		},
		set:function(val){
			if(val > 2011){
				this.edition += val - 2011;
				this._year = val;
			}
		}
	}
});

// console.log(book);
// console.log(book.year);
// book.year = 2015;
// console.log(book.year);
// console.log(book.edition);
// console.log(Object.getOwnPropertyDescriptor(book, 'author'));

//创建对象
//工厂模式

function createPerson(name,age,job){
	var o = {};
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}


//构造函数

// function Person(name,age,job){
// 	this.name = name;
// 	this.age = age;
// 	this.job = job;
// 	this.sayName = function(){
// 		console.log(this.name);
// 	}
// }

//原型模式

function Person(){};

Person.prototype.name = 'jiaweikang';
Person.prototype.age = 25;
Person.prototype.job = 'software enigneer';
Person.prototype.sayName = function(){
	console.log(this.name);
}

//var person1 = new Person(); 

// person1.sayName();
// person2.sayName();

//console.log(person1 instanceof Person);

//function Person(){}



//原型链和借用构造函数
//组合继承

function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
}

Person.prototype.sayName = function(){
	console.log(this.name);
}

function Student(name,age,job,school){
	Person.call(this,name,age,job);
	this.school = school;
}

Student.prototype = new Person();
//Me.prototype.constructor = Me;
Object.defineProperty(Student.prototype,'constructor',{
	value: Student,
	enumerable: false
});


//实现继承


//寄生继承
function inherit(sup,sub){
	var F = new Function();
	F.prototype = sup.prototype;
	sub.prototype = new F();
}

//console.dir(person);

//es6

class People{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayName(){
		console.log(this.name)
	}
}

class Worker extends People{
	constructor(name,age,job){
		super(name,age);
		this.job = job;
	}
}

var jack = new Worker('jack',12,'software enigneer');
jack.sayName();

//函数表达式






