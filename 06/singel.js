/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-07 19:20:17
 * @version $Id$
 */
 //单体模式
//利用对象的静态属性实现
function Universe(){
	if(typeof Universe.instance=="object"){
		return Universe.instance;
	}
	this.name="kaka";
	this.age=11;
	Universe.instance=this;
}

var a1=new Universe();
var a2=new Universe();

// console.log(a1==a2);

//利用闭包实现
function Universe2(){
	this.name="kaka";
	this.age=12;
	var instance=this;
	//重写构造函数
    Universe2=function(){
    	return instance;
    }
}
Universe2.prototype.nothing=true;
var b1=new Universe2();
Universe2.prototype.everything=true;
var b2=new Universe2();
// console.log(b1===b2);
// console.log(b1.nothing);
// console.log(b2.nothing);
// console.log(b1.everything);
// console.log(b2.everything);
// console.log(b1.constructor==b2.constructor);
// console.log(b2.constructor==Universe2);

function Universe3(){
	var instance;
	Universe3=function(){
		return instance;
	}
	Universe3.prototype=this;
	console.log(this.nothing);
	instance=new Universe3();
	//重置指针
	instance.constructor=Universe3;
	instance.name="kaka";
	return instance;
}
Universe3.prototype.nothing=true;
var c1=new Universe3();
Universe3.prototype.everything=true;
var c2=new Universe3();
console.log(c1==c2);
console.log(c2.everything);
console.log(c1.constructor===Universe3);
console.log(Universe3.prototype);//本身就是一个实例












