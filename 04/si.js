/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-19 21:24:42
 * @version $Id$
 */
var Gadget=function(price){
	this.price=price;
};
Gadget.inShiny=function(){//公有静态成员
	var msg = "you bet";
	if(this instanceof Gadget){
		msg=msg+"it coast $"+this.price;
	}
	return msg;
};
Gadget.prototype.setPrice=function(price){
	this.price=price;
};
Gadget.prototype.inShiny=Gadget.inShiny;

console.log(Gadget.inShiny());
// console.log(Gadget.setPrice(300));
console.log(new Gadget(300).inShiny());

//私有静态成员
//以同一个构造函数创建的对象可以共享
//构造函数外部不能访问
var Gedget2=(function(){
	var count=0;//私有静态成员
	var newGedget=function(){
		count++;
		this.count=count;
	};
	newGedget.prototype.getId=function(){//特权方法就是能够访问私有属性的方法
		return this.count;
	};
	return newGedget;
}());

var g1=new Gedget2();
var g2=new Gedget2();
console.log(g1.getId());
console.log(g2.getId());

//常量
var constant=(function(){
	var constants={};
	ownProp=Object.prototype.hasOwnProperty;
	allowed={
		string:1,
		number:1,
		boolean:1
	};
	prefix=(Math.random()+"_").slice(2);
	return {
		set:function(name,value){
			if(this.isDefined(name)){
				return false;
			}
			if(!ownProp.call(allowed,typeof value)){
				return false;
			}
			constants[prefix+name]=value;
			return true;
		},
		isDefined:function(name){
			return ownProp.call(constants,prefix+name);
		},
		get:function(name){
			if(this.isDefined(name)){
				return constants[prefix+name];
			}
			return null;
		}
	};
}());
console.log(constant.isDefined("maxwidth"));
console.log(constant.set("maxwidth",600));
console.log(constant.get("maxwidth"));