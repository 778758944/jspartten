/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-18 21:04:38
 * @version $Id$
 */

 //模块模式
var MYAPP=MYAPP||{};
MYAPP.namespace=function(ns_string){
	var parts=ns_string.split(".");
	var parent=MYAPP;
	if(parts[0]==="MYAPP"){
		parts=parts.slice(1);
	}
	for(var i=0;i<parts.length;i++){
		if(typeof parent[parts[i]]==="undefined"){
			parent[parts[i]]={};
		}
		parent=parent[parts[i]];
	}
	return parent;
};
console.log(MYAPP.namespace("MYAPP.KK.JAJA"));
console.log(MYAPP.KK);
console.log(MYAPP);
MYAPP.namespace("utilities.array");
MYAPP.namespace("utilities.object");

MYAPP.utilities.array=(function(){
	//创建依赖
	var uobj=MYAPP.utilities.object,
	    ulan=MYAPP.utilities.lang,
	//定义私有属性
	    array_string="[object Array]",
	    ops=Object.prototype.toString,

	    getlert=function(){
	    	alert("haha");
	    }
	//定义私有方法

	//公共Api
	return {
		isArray:function(a){
			return ops.call(a)==array_string;
		},
		inArray:function(need,stack){
			for(var i=0;i<stack.length;i++){
				if (stack[i]===need){
					return i;
				}
			}
			return -1;
		},
		getlert:getlert,//获得引用，更改引用不会更改原类型
		getlert2:getlert
	};
}());
console.log(MYAPP.utilities.array.isArray([]));
console.log(MYAPP.utilities.array.inArray("c","kkkka"));
MYAPP.utilities.array.getlert=function(){
	alert("ppp");
};
// console.log(MYAPP.utilities.array.getlert());

console.log(MYAPP.utilities.array.getlert2());

MYAPP.namespace("utilities.toArray");
MYAPP.utilities.toArray=(function(){
	//创建依赖
	//建立私有属性
	var getArr;
	//添加私有方法

	//公有api构造函数
	getArr=function(o){
		this.obj=o;
	};
	getArr.prototype={
		toArray:function(){
			var arr=[];
			for(var i=0;i<this.obj.length;i++){
				arr.push(this.obj[i]);
			}
			return arr;
		}
	};
	return getArr;
}());
console.log(new MYAPP.utilities.toArray("jaja").toArray());

