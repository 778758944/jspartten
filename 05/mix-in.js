/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-06 19:48:57
 * @version $Id$
 */
function mix(){
	var child={};
	for(var i=0;i<arguments.length;i++){
		for(k in arguments[i]){
			if(arguments[i].hasOwnProperty(k)){
				child[k]=arguments[i][k];
			}
		}
	}
	return child;
}

var kid=mix({name:"jack"},{age:12},{weight:120});
console.log(kid.age);
