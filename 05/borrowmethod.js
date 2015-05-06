/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-06 20:03:29
 * @version $Id$
 */
 //借用方法
function f(){
	return [].slice.call(arguments,1,3);
}
// console.log(f(1,2,3,4,5));

var one={
	name:"object",
	say:function(greet){
		return greet+","+this.name;
	}
}

console.log(one.say("hello"));

var two={
	name:"another name"
}

console.log(one.say.apply(two,["hi"]));

var say=one.say;
console.log(say("hello2"));

var third={
	name:"name3",
	method:function(callback){
		return callback("hello3");
	}
}
console.log(third.method(one.say));
Function.prorotype.bind=function(obj){
	var slice=Array.prototype.slice;
	var that=this;
	arg=slice.call(arguments,1);
	return function(){
		return fn.apply(obj,arg.concat(slice.call(arguments)));
	}

}

var twosay2=one.say.bind(two,"lolo");
console.log(twosay2("jaja"));












































































