/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-05-10 09:03:24
 * @version $Id$
 */
//操作dom的时候使用文档碎片
var p,t,frag;

frag=document.createDocumentFragment();
p=document.createElement("p");
t=document.createTextNode("first progoph");

p.appendChild(t);
frag.appendChild(p);

p=document.createElement("p");
t=document.createTextNode("second pragaph");
p.appendChild(t);
frag.appendChild(p);

var view=document.getElementById("view");
view.appendChild(frag);

