/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-06 19:07:42
 * @version $Id$
 */

 //原型继承
function object(parent){
	var F=function(){};
	F.prototype=parent;
	return new F();
}

function Person(){
	this.name="Adam";
}
Person.prototype.getName=function(){
	return this.name;
}
var papa=new Person();

// var kid=object(papa);
var kid=Object.create(papa,{age:{value:11}});//Object内置create方法可以实现原型继承
//create()方法接受两个参数，一餐为要继承的对象，二餐为一个属性值为对象的对象。

console.log(kid.getName());
console.log(kid.age);