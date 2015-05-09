/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-07 20:57:47
 * @version $Id$
 */
function Sale(price){
	this.price=price||100;
}
Sale.prototype.getPrice=function(){
	return this.price;
}

Sale.decorators={};
Sale.decorators.fedtax={
	getPrice:function(){
		var price=this.uber.getPrice();
		price=price+price*5/100;
		return price;
	}
};

Sale.decorators.quebec={
	getPrice:function(){
		var price=this.uber.getPrice();
		price=price+100;
	}
};
Sale.prototype.decorate=function(decorator){
	var F=function(){};
	var override=this.constructor.decorators[decorator];
	var i,newjob;

	F.prototype=this;//F的原型已经是Sale的实例
	newjob=new F();

	newjob.uber=this;
	for(i in override){
		if(override.hasOwnProperty(i)){
			newjob[i]=override[i];
		}
	}
	return newjob;
}

var sale1=new Sale(200);
sale1=sale1.decorate("fedtax");
console.log(sale1.getPrice());

//装饰着模式2
function Sale2(price){
	this.price=price||100;
	this.decorator_list=[]
}

Sale2.decorators={};
Sale2.decorators.qubec=function(price){
	return price+price*7.5/100;
}
Sale2.decorators.money=function(price){
	return "$"+price.toFixed(2);
}
Sale2.prototype={
	decorate:function(decorator){
		this.decorator_list.push(decorator);
	},
	getPrice:function(){
		var price=this.price;
		var decorators=this.decorator_list;
		var len=decorators.length;
		console.log(this.constructor);
		for(var i=0;i<len;i++){
			var name=decorators[i];
			price=Sale2.decorators[name](price);
		}
		return price;
	}
}
var sale2=new Sale2();
sale2.decorate("qubec","money");
console.log(sale2.constructor);
alert(sale2.getPrice());
//js中的constructor属性



















































































