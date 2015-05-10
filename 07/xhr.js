/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-10 10:09:00
 * @version $Id$
 */
var xhr=new XMLHttpRequest();
if(window.ActiveXObject){
	xhr=window.ActiveXObject("Microsoft.XMLHTTP");
}
console.log(typeof xhr);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		document.body.innerHTML="<p>"+xhr.responseText+"</p>";
	}
}
xhr.open("GET","text.txt",true);
xhr.send();
