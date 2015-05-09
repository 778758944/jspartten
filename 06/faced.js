/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-09 10:05:10
 * @version $Id$
 */
//外观模式
myEvent={
	stop:function(){
		e.preventDefault();
		e.stopPropagetion();
	}
}
