/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-19 20:31:05
 * @version $Id$
 */
var Sandbox=function(){
	var args=Array.prototype.slice.call(arguments),//将参数变成一个数组
	    callback=args.pop(),//获取最后一个回调函数
	    modules=(args[0]&&typeof args[0]==="string")? args:args[0];//获取所需要的模块

	    console.log(callback);
	    console.log(modules);

	if(!(this instanceof Sandbox)){//instanceof函数的用法记牢
		return new Sandbox(modules,callback);
	}

	if(!modules||modules==="*"){
		modules=[];
		for(var i in Sandbox.modules){
			if(Sandbox.modules.hasOwnProperty(i)){
				modules.push(i);
			}
		}
	}

	for(var k=0;k<modules.length;k++){
		Sandbox.modules[modules[k]](this);
	}
	console.log(this);

	callback(this);
};
Sandbox.prototype={
	name:"my application",
	versin:"1.0.0",
	getName:function(){
		return this.name;
	}
};
//增加模块
//属性是键值对，键为模块的名字，值为实现每个模块对应的函数
Sandbox.modules={};
Sandbox.modules.dom=function(box){
	alert("haha");
	box.getElement=function(){
		alert("haha");
	};
	box.getStyle=function(){
		alert("huhu");
	};
	box.foo="bar";
};

Sandbox.modules.event=function(box){
	box.attachEvent=function(){};
	box.detachEvent=function(){};
};

Sandbox.modules.ajax=function(box){
	box.makeRequest=function(){};
	box.getRequest=function(){};
};

var kk=Sandbox("dom",function(box){
	return box;
});

kk.getElement();


