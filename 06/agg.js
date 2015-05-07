/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-07 20:36:26
 * @version $Id$
 */
var agg=(function(){
	var index=0;
	var data=[1,2,3,4,5];
	var length=data.length;
	return {
		next:function(){
			var ele;
			if(index>length){
				return null;
			}
			ele=data[index];
			index=index+2;
			return ele;
		},
		rewind:function(){
			index=0;
		},
		current:function(){
			return data[index];
		}
	}
}());

console.log(agg.next());
console.log(agg.next());
agg.rewind();
console.log(agg.current());



























































