!function(a,b){function c(a,b){var c,d=a.cssRules?a.cssRules:a.media,e=[],f=0,g=d.length;for(f;g>f;f++)c=d[f],b(c)&&e.push(c);return e}function d(a){return c(a,function(a){return a.constructor===CSSMediaRule})}function e(c){var d=a.location,e=b.createElement("a");return e.href=c,e.hostname===d.hostname&&e.protocol===d.protocol}function f(a){return a.ownerNode.constructor===HTMLStyleElement}function g(a){return a.href&&e(a.href)}function h(){var a,c=b.styleSheets,d=c.length,e=0,h=[];for(e;d>e;e++)a=c[e],(g(a)||f(a))&&h.push(a);return h}b.addEventListener&&b.addEventListener("DOMContentLoaded",function(){a.mqGenie=function(){var c=b.documentElement;c.style.overflowY="scroll";var e=a.innerWidth-c.clientWidth,f={adjusted:e>0,fontSize:parseFloat(a.getComputedStyle(c).getPropertyValue("font-size")),width:e};if(f.adjusted){if("WebkitAppearance"in c.style){var g,i=/Chrome\/(\d*?\.\d*?\.\d*?\.\d*?)\s/g,j=navigator.userAgent.match(i);if(j?(j=j[0].replace(i,"$1"),g=j.split("."),g[0]=parseInt(g[0]),g[2]=parseInt(g[2]),g[3]=parseInt(g[3]),g[0]<=29&&(29===g[0]&&g[2]<1548&&g[3]<57?f.adjusted=!1:g[0]<29&&(f.adjusted=!1))):f.adjusted=!1,!f.adjusted)return f}var k,l,m=h(),n=m.length,o=0;for(o;n>o;o++){k=d(m[o]),l=k.length;for(var p=0;l>p;p++)k[p].media.mediaText=k[p].media.mediaText.replace(/m(in|ax)-width:\s*(\d|\.)+(px|em)/gi,function(a){return a.match("px")?a.replace(/\d+px/gi,function(a){return parseInt(a,10)+f.width+"px"}):a.replace(/\d.+?em/gi,function(a){return(parseFloat(a)*f.fontSize+f.width)/f.fontSize+"em"})})}}return f}(),a.mqAdjust=function(a){if(!mqGenie.adjusted)return a;var b=a.replace(/\d+px/gi,function(a){return parseInt(a,10)+mqGenie.width+"px"});return b=b.replace(/\d.+?em/gi,function(a){return(parseFloat(a)*mqGenie.fontSize+mqGenie.width)/mqGenie.fontSize+"em"})}})}(window,document);