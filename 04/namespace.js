/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-17 20:27:41
 * @version $Id$
 */
//通用命名空间函数
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

var module2=MYAPP.namespace("MYAPP.modules.module2");
console.log(MYAPP.modules);
console.log(module2);

//声明依赖关系
function test1(){
	// alert(MYAPP.modules);
	// alert(MYAPP.modules.module2);
}
function test2(){
	// var a=MYAPP.modules;//声明依赖
	// alert(a);
	// alert(MYAPP.modules.module2);
}
function Gadget(){
	var name="ipod";//私有属性
	var spec={
		width:100,
		height:200
	};
	this.getName=function(){//公有函数,特权方法
		return name;//内部函数可以访问局部变量
	};
	this.getSpec=function(){//私有属性失效
		return spec;
	}	
};
var gadget=new Gadget();
var spec=gadget.getSpec();
spec.width=200;
console.log(spec.width);

//对象字面量的私有属性
var myobj;
(function(){
	var name="hello";//私有部分
	myobj={
		getName:function(){
			return name;
		}
	}
}());
console.log(myobj.getName());

//原型和私有性
function Garden(){
	var name="rose";//不会在实例中被创建，不能修改
	this.getName=function(){
		return name;
	}
};
Garden.prototype=(function(){
	var age=12;//不能修改
	return {
		getAge:function(){
			return age;
		}
	}
}());
var garden=new Garden();

console.log(garden.getName());
console.log(garden.getAge());

//将私有方法揭示为公用方法
var myarray;
(function(){
	var str="[object Array]";
	var toString=Object.prototype.toString;
	var kk={
		name:"kakak",
		age:12
	};

	function isArray(a){
		return str===toString.call(a);
	}
	function indexOf(hak,need){
		var i=0;
		var length=hak.length;
		for(i;i<length;i++){
			if(hak[i]==need){
				return i;
			}
		}
		return false;
	};
	myarray={
		isArray:isArray,
		indexOf:indexOf,
		inArray:indexOf,
		kk:kk,
		nan:kk
	};
}())
console.log(myarray.isArray([]));
console.log(myarray.indexOf(["k","a"],"a"));
myarray.indexOf=null;
console.log(myarray.inArray(["k","a"],"a"));
console.log(myarray.kk.name);
// myarray.kk=null;
myarray.kk.name="jack";
console.log(myarray.nan.name);


