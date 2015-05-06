/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-06 19:26:43
 * @version $Id$
 */
function extendDeep(parent,child){
	var toStr=Object.prototype.toString;
	var arr="[object Array]";
	var i;
	var child=child||{};
	// console.log([].toString());

	for(i in parent){
		if(parent.hasOwnProperty(i)){
			if(typeof parent[i]==="object"){
				console.log(toStr.call(parent[i]));
				child[i]=toStr.call(parent[i])===arr? []:{};
				extendDeep(parent[i],child[i])
			}
			else{
				child[i]=parent[i];
			}
		}
	}
	return child;
}

var dad={
	counts:[1,2,3,4],
	reader:{
		paper:true
	}
}

var kid=extendDeep(dad);
kid.counts.push(5);
console.log(dad.counts);//子对象的变化不会影响父对象
console.log(kid.counts);
































































