/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-10 09:59:25
 * @version $Id$
 */
var i=0;
setInterval(function(){
	i++;
	postMessage(i);
},2000)
