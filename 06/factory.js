/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-07 20:11:11
 * @version $Id$
 */
//工厂模式
//根据传入类型的不同创建不同的对象
function CarMaker(){

}
CarMaker.prototype.dirve=function(){
	return this.doors+"doors";
}

CarMaker.factory=function(type){
	var constr=type;
	var newcar;

	if(typeof CarMaker[constr]!="function"){
		throw{
			name:"Error",
			message:constr+"not exit"
		}
	}

	if(typeof CarMaker[constr].dirve!="function"){
		CarMaker[constr].prototype=new CarMaker();
	}
	newcar=new CarMaker[constr]();
	return newcar;
}
CarMaker.Compet=function(){
	this.doors=1;
}
CarMaker.Convertible=function(){
	this.doors=2;
}
CarMaker.Suv=function(){
	this.doors=4;
}

var a1=CarMaker.factory("Compet");
console.log(a1.dirve());
var a2=CarMaker.factory("Suv");
console.log(a2.dirve());




















































