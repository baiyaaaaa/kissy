/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Apr 29 14:57
*/
KISSY.add("combobox/multi-word",["./multi-word/cursor","combobox"],function(o,f){function j(a,c){return c&&-1!==a.indexOf(c)}function g(a){a.newVal&&a.target===this.get("menu")&&this.alignWithCursor()}function m(a){var c=a.get("input"),b=a.get("value"),d=[],e=[],q=a.get("literal"),r=a.get("separator"),a=a.get("separatorType"),k=!1,l=a!==h,c=c.prop("selectionStart"),g,i,f=-1;for(g=0;g<b.length;g++)(i=b.charAt(g),q&&i===q&&(k=!k),k)?e.push(i):(g===c&&(f=d.length),l&&n.test(i))?(e.length&&d.push(e.join("")),
e=[],e.push(i)):j(r,i)?a===h?(e.push(i),e.length&&d.push(e.join("")),e=[]):(e.length&&d.push(e.join("")),e=[],e.push(i)):e.push(i);e.length&&d.push(e.join(""));d.length||d.push("");-1===f&&(a===h&&j(r,i)&&d.push(""),f=d.length-1);return{tokens:d,cursorPosition:c,tokenIndex:f}}var h="suffix",n=/\s|\xa0/,b=f("./multi-word/cursor");return f("combobox").extend({syncUI:function(){var a;this.get("alignWithCursor")&&(a=this.get("menu"),a.setInternal("align",null),a.on("beforeVisibleChange",g,this))},getCurrentValue:function(){var a=
m(this),c=a.tokens,b=a.tokenIndex,a=this.get("separator"),d=this.get("separatorType"),c=c[b],b=c.length-1;if(d!==h)if(j(a,c.charAt(0)))c=c.slice(1);else return;else d===h&&j(a,c.charAt(b))&&(c=c.slice(0,b));return c},setCurrentValue:function(a,b){var p=this.get("input"),d=m(this),e=d.tokens,d=Math.max(0,d.tokenIndex),g=this.get("separator"),f;f=this.get("separatorType");var k=e[d+1]||"",l=e[d];if(f!==h){if(e[d]=l.charAt(0)+a,a&&(!k||!n.test(k.charAt(0))))e[d]+=" "}else e[d]=a,f=l.length-1,j(g,l.charAt(f))?
e[d]+=l.charAt(f):1===g.length&&(e[d]+=g);d=e.slice(0,d+1).join("").length;this.set("value",e.join(""),b);p.prop("selectionStart",d);p.prop("selectionEnd",d)},alignWithCursor:function(){var a=this.get("menu"),c;c=this.get("input");c=b(c);a.move(c.left,c.top)}},{ATTRS:{separator:{value:",;"},separatorType:{value:h},literal:{value:'"'},alignWithCursor:{}},xclass:"multi-value-combobox"})});
KISSY.add("combobox/multi-word/cursor",["node"],function(o,f){function j(b){var a=h;a||(a=g(m));"textarea"===""+b[0].type.toLowerCase()?a.css("width",b.css("width")):a.css("width",9999);o.each(n,function(c){a.css(c,b.css(c))});h||a.insertBefore(b[0].ownerDocument.body.firstChild);return h=a}var g=f("node").all,m='<div style="z-index:-9999;overflow:hidden;position: fixed;left:-9999px;top:-9999px;opacity:0;white-space:pre-wrap;word-wrap:break-word;"></div>',h,n="paddingLeft,paddingTop,paddingBottom,paddingRight,marginLeft,marginTop,marginBottom,marginRight,borderLeftStyle,borderTopStyle,borderBottomStyle,borderRightStyle,borderLeftWidth,borderTopWidth,borderBottomWidth,borderRightWidth,line-height,outline,height,fontFamily,fontSize,fontWeight,fontVariant,fontStyle".split(",");
return function(b){var a=g(b),b=a[0],c=b.ownerDocument,f=g(c),d=b.scrollTop,e=b.scrollLeft;if(c.selection)return b=c.selection.createRange(),{left:b.boundingLeft+e+f.scrollLeft(),top:b.boundingTop+d+b.boundingHeight+f.scrollTop()};f=a.offset();if("textarea"!==b.type)return f.top+=b.offsetHeight,f;c=j(a);a=b.selectionStart;c.html(o.escapeHtml(b.value.substring(0,a-1))+"<span>x</span>");c.offset(f);f=c.last();b=f.offset();b.top+=f.height();0<a&&(b.left+=f.width());b.top-=d;b.left-=e;return b}});