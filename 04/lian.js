/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-23 09:58:57
 * @version $Id$
 */
//链式调用
var obj={
	value:1,
	increment:function(){
		this.value++;
		return this;
	},
	add:function(num){
		this.value+=num;
		return this;
	},
	show:function(){
		alert(this.value);
	}
};
// obj.increment().add(5).show();

Function.prototype.method=function(name,fn){
	this.prototype[name]=fn;
	return this;
};
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.method("getname",function(){
	alert(this.name);
}).method("getage",function(){
	alert(this.age);
});

var person1=new Person("jack",22);
// person1.getname();
// person1.getage();
Array.method("inArray",function(a){
	for(var i=0;i<this.length;i++){
		if (this[i]==a){
			return true;
		}
	}
	return false;
});
var arr=[1,2];
// alert(arr.inArray(3));
console.log(Array instanceof Function);
console.log(Function instanceof Object);
console.log(Object instanceof Function);
console.log(Array instanceof Object);
console.log(Function instanceof Array);
console.log(Date instanceof Object);
console.log(typeof new Date());
console.log(new Date().toString());