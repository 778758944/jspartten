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

	F.prototype=this;
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























































































