!function(a,b){"use strict";function c(b){a.fn.cycle.debug&&d(b)}function d(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function e(b,c,d){var e=a(b).data("cycle.opts");if(e){var f=!!b.cyclePause;f&&e.paused?e.paused(b,e,c,d):!f&&e.resumed&&e.resumed(b,e,c,d)}}function f(c,f,g){function i(b,c,e){if(!b&&c===!0){var f=a(e).data("cycle.opts");if(!f)return d("options not found, can not resume"),!1;e.cycleTimeout&&(clearTimeout(e.cycleTimeout),e.cycleTimeout=0),m(f.elements,f,1,!f.backwards)}}if(c.cycleStop===b&&(c.cycleStop=0),(f===b||null===f)&&(f={}),f.constructor==String){switch(f){case"destroy":case"stop":var j=a(c).data("cycle.opts");return j?(c.cycleStop++,c.cycleTimeout&&clearTimeout(c.cycleTimeout),c.cycleTimeout=0,j.elements&&a(j.elements).stop(),a(c).removeData("cycle.opts"),"destroy"==f&&h(c,j),!1):!1;case"toggle":return c.cyclePause=1===c.cyclePause?0:1,i(c.cyclePause,g,c),e(c),!1;case"pause":return c.cyclePause=1,e(c),!1;case"resume":return c.cyclePause=0,i(!1,g,c),e(c),!1;case"prev":case"next":return(j=a(c).data("cycle.opts"))?("string"==typeof g&&(j.oneTimeFx=g),a.fn.cycle[f](j),!1):(d('options not found, "prev/next" ignored'),!1);default:f={fx:f}}return f}if(f.constructor==Number){var k=f;return(f=a(c).data("cycle.opts"))?0>k||k>=f.elements.length?(d("invalid slide index: "+k),!1):(f.nextSlide=k,c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),"string"==typeof g&&(f.oneTimeFx=g),m(f.elements,f,1,k>=f.currSlide),!1):(d("options not found, can not advance slide"),!1)}return f}function g(b,c){if(!a.support.opacity&&c.cleartype&&b.style.filter)try{b.style.removeAttribute("filter")}catch(d){}}function h(b,c){c.next&&a(c.next).unbind(c.prevNextEvent),c.prev&&a(c.prev).unbind(c.prevNextEvent),(c.pager||c.pagerAnchorBuilder)&&a.each(c.pagerAnchors||[],function(){this.unbind().remove()}),c.pagerAnchors=null,a(b).unbind("mouseenter.cycle mouseleave.cycle"),c.destroy&&c.destroy(c)}function i(c,f,h,i,n){var r,s=a.extend({},a.fn.cycle.defaults,i||{},a.metadata?c.metadata():a.meta?c.data():{}),t=a.isFunction(c.data)?c.data(s.metaAttr):null;t&&(s=a.extend(s,t)),s.autostop&&(s.countdown=s.autostopCount||h.length);var u=c[0];if(c.data("cycle.opts",s),s.$cont=c,s.stopCount=u.cycleStop,s.elements=h,s.before=s.before?[s.before]:[],s.after=s.after?[s.after]:[],!a.support.opacity&&s.cleartype&&s.after.push(function(){g(this,s)}),s.continuous&&s.after.push(function(){m(h,s,0,!s.backwards)}),j(s),a.support.opacity||!s.cleartype||s.cleartypeNoBg||q(f),"static"==c.css("position")&&c.css("position","relative"),s.width&&c.width(s.width),s.height&&"auto"!=s.height&&c.height(s.height),s.startingSlide!==b?(s.startingSlide=parseInt(s.startingSlide,10),s.startingSlide>=h.length||s.startSlide<0?s.startingSlide=0:r=!0):s.startingSlide=s.backwards?h.length-1:0,s.random){s.randomMap=[];for(var v=0;v<h.length;v++)s.randomMap.push(v);if(s.randomMap.sort(function(){return Math.random()-.5}),r)for(var w=0;w<h.length;w++)s.startingSlide==s.randomMap[w]&&(s.randomIndex=w);else s.randomIndex=1,s.startingSlide=s.randomMap[1]}else s.startingSlide>=h.length&&(s.startingSlide=0);s.currSlide=s.startingSlide||0;var x=s.startingSlide;f.css({position:"absolute",top:0,left:0}).hide().each(function(b){var c;c=s.backwards?x?x>=b?h.length+(b-x):x-b:h.length-b:x?b>=x?h.length-(b-x):x-b:h.length-b,a(this).css("z-index",c)}),a(h[x]).css("opacity",1).show(),g(h[x],s),s.fit&&(s.aspect?f.each(function(){var b=a(this),c=s.aspect===!0?b.width()/b.height():s.aspect;s.width&&b.width()!=s.width&&(b.width(s.width),b.height(s.width/c)),s.height&&b.height()<s.height&&(b.height(s.height),b.width(s.height*c))}):(s.width&&f.width(s.width),s.height&&"auto"!=s.height&&f.height(s.height))),!s.center||s.fit&&!s.aspect||f.each(function(){var b=a(this);b.css({"margin-left":s.width?(s.width-b.width())/2+"px":0,"margin-top":s.height?(s.height-b.height())/2+"px":0})}),!s.center||s.fit||s.slideResize||f.each(function(){var b=a(this);b.css({"margin-left":s.width?(s.width-b.width())/2+"px":0,"margin-top":s.height?(s.height-b.height())/2+"px":0})});var y=(s.containerResize||s.containerResizeHeight)&&c.innerHeight()<1;if(y){for(var z=0,A=0,B=0;B<h.length;B++){var C=a(h[B]),D=C[0],E=C.outerWidth(),F=C.outerHeight();E||(E=D.offsetWidth||D.width||C.attr("width")),F||(F=D.offsetHeight||D.height||C.attr("height")),z=E>z?E:z,A=F>A?F:A}s.containerResize&&z>0&&A>0&&c.css({width:z+"px",height:A+"px"}),s.containerResizeHeight&&A>0&&c.css({height:A+"px"})}var G=!1;if(s.pause&&c.bind("mouseenter.cycle",function(){G=!0,this.cyclePause++,e(u,!0)}).bind("mouseleave.cycle",function(){G&&this.cyclePause--,e(u,!0)}),k(s)===!1)return!1;var H=!1;if(i.requeueAttempts=i.requeueAttempts||0,f.each(function(){var b=a(this);if(this.cycleH=s.fit&&s.height?s.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0,this.cycleW=s.fit&&s.width?s.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0,b.is("img")){var c=0===this.cycleH&&0===this.cycleW&&!this.complete;if(c){if(n.s&&s.requeueOnImageNotLoaded&&++i.requeueAttempts<100)return d(i.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){a(n.s,n.c).cycle(i)},s.requeueTimeout),H=!0,!1;d("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0}),H)return!1;if(s.cssBefore=s.cssBefore||{},s.cssAfter=s.cssAfter||{},s.cssFirst=s.cssFirst||{},s.animIn=s.animIn||{},s.animOut=s.animOut||{},f.not(":eq("+x+")").css(s.cssBefore),a(f[x]).css(s.cssFirst),s.timeout){s.timeout=parseInt(s.timeout,10),s.speed.constructor==String&&(s.speed=a.fx.speeds[s.speed]||parseInt(s.speed,10)),s.sync||(s.speed=s.speed/2);for(var I="none"==s.fx?0:"shuffle"==s.fx?500:250;s.timeout-s.speed<I;)s.timeout+=s.speed}if(s.easing&&(s.easeIn=s.easeOut=s.easing),s.speedIn||(s.speedIn=s.speed),s.speedOut||(s.speedOut=s.speed),s.slideCount=h.length,s.currSlide=s.lastSlide=x,s.random?(++s.randomIndex==h.length&&(s.randomIndex=0),s.nextSlide=s.randomMap[s.randomIndex]):s.nextSlide=s.backwards?0===s.startingSlide?h.length-1:s.startingSlide-1:s.startingSlide>=h.length-1?0:s.startingSlide+1,!s.multiFx){var J=a.fn.cycle.transitions[s.fx];if(a.isFunction(J))J(c,f,s);else if("custom"!=s.fx&&!s.multiFx)return d("unknown transition: "+s.fx,"; slideshow terminating"),!1}var K=f[x];return s.skipInitializationCallbacks||(s.before.length&&s.before[0].apply(K,[K,K,s,!0]),s.after.length&&s.after[0].apply(K,[K,K,s,!0])),s.next&&a(s.next).bind(s.prevNextEvent,function(){return o(s,1)}),s.prev&&a(s.prev).bind(s.prevNextEvent,function(){return o(s,0)}),(s.pager||s.pagerAnchorBuilder)&&p(h,s),l(s,h),s}function j(b){b.original={before:[],after:[]},b.original.cssBefore=a.extend({},b.cssBefore),b.original.cssAfter=a.extend({},b.cssAfter),b.original.animIn=a.extend({},b.animIn),b.original.animOut=a.extend({},b.animOut),a.each(b.before,function(){b.original.before.push(this)}),a.each(b.after,function(){b.original.after.push(this)})}function k(b){var e,f,g=a.fn.cycle.transitions;if(b.fx.indexOf(",")>0){for(b.multiFx=!0,b.fxs=b.fx.replace(/\s*/g,"").split(","),e=0;e<b.fxs.length;e++){var h=b.fxs[e];f=g[h],f&&g.hasOwnProperty(h)&&a.isFunction(f)||(d("discarding unknown transition: ",h),b.fxs.splice(e,1),e--)}if(!b.fxs.length)return d("No valid transitions named; slideshow terminating."),!1}else if("all"==b.fx){b.multiFx=!0,b.fxs=[];for(var i in g)g.hasOwnProperty(i)&&(f=g[i],g.hasOwnProperty(i)&&a.isFunction(f)&&b.fxs.push(i))}if(b.multiFx&&b.randomizeEffects){var j=Math.floor(20*Math.random())+30;for(e=0;j>e;e++){var k=Math.floor(Math.random()*b.fxs.length);b.fxs.push(b.fxs.splice(k,1)[0])}c("randomized fx sequence: ",b.fxs)}return!0}function l(b,c){b.addSlide=function(d,e){var f=a(d),g=f[0];b.autostopCount||b.countdown++,c[e?"unshift":"push"](g),b.els&&b.els[e?"unshift":"push"](g),b.slideCount=c.length,b.random&&(b.randomMap.push(b.slideCount-1),b.randomMap.sort(function(){return Math.random()-.5})),f.css("position","absolute"),f[e?"prependTo":"appendTo"](b.$cont),e&&(b.currSlide++,b.nextSlide++),a.support.opacity||!b.cleartype||b.cleartypeNoBg||q(f),b.fit&&b.width&&f.width(b.width),b.fit&&b.height&&"auto"!=b.height&&f.height(b.height),g.cycleH=b.fit&&b.height?b.height:f.height(),g.cycleW=b.fit&&b.width?b.width:f.width(),f.css(b.cssBefore),(b.pager||b.pagerAnchorBuilder)&&a.fn.cycle.createPagerAnchor(c.length-1,g,a(b.pager),c,b),a.isFunction(b.onAddSlide)?b.onAddSlide(f):f.hide()}}function m(d,e,f,g){function h(){{var a=0;e.timeout}e.timeout&&!e.continuous?(a=n(d[e.currSlide],d[e.nextSlide],e,g),"shuffle"==e.fx&&(a-=e.speedOut)):e.continuous&&i.cyclePause&&(a=10),a>0&&(i.cycleTimeout=setTimeout(function(){m(d,e,0,!e.backwards)},a))}var i=e.$cont[0],j=d[e.currSlide],k=d[e.nextSlide];if(f&&e.busy&&e.manualTrump&&(c("manualTrump in go(), stopping active transition"),a(d).stop(!0,!0),e.busy=0,clearTimeout(i.cycleTimeout)),e.busy)return void c("transition active, ignoring new tx request");if(i.cycleStop==e.stopCount&&(0!==i.cycleTimeout||f)){if(!f&&!i.cyclePause&&!e.bounce&&(e.autostop&&--e.countdown<=0||e.nowrap&&!e.random&&e.nextSlide<e.currSlide))return void(e.end&&e.end(e));var l=!1;if(!f&&i.cyclePause||e.nextSlide==e.currSlide)h();else{l=!0;var o=e.fx;j.cycleH=j.cycleH||a(j).height(),j.cycleW=j.cycleW||a(j).width(),k.cycleH=k.cycleH||a(k).height(),k.cycleW=k.cycleW||a(k).width(),e.multiFx&&(g&&(e.lastFx===b||++e.lastFx>=e.fxs.length)?e.lastFx=0:!g&&(e.lastFx===b||--e.lastFx<0)&&(e.lastFx=e.fxs.length-1),o=e.fxs[e.lastFx]),e.oneTimeFx&&(o=e.oneTimeFx,e.oneTimeFx=null),a.fn.cycle.resetState(e,o),e.before.length&&a.each(e.before,function(a,b){i.cycleStop==e.stopCount&&b.apply(k,[j,k,e,g])});var p=function(){e.busy=0,a.each(e.after,function(a,b){i.cycleStop==e.stopCount&&b.apply(k,[j,k,e,g])}),i.cycleStop||h()};c("tx firing("+o+"); currSlide: "+e.currSlide+"; nextSlide: "+e.nextSlide),e.busy=1,e.fxFn?e.fxFn(j,k,e,p,g,f&&e.fastOnEvent):a.isFunction(a.fn.cycle[e.fx])?a.fn.cycle[e.fx](j,k,e,p,g,f&&e.fastOnEvent):a.fn.cycle.custom(j,k,e,p,g,f&&e.fastOnEvent)}if(l||e.nextSlide==e.currSlide){var q;e.lastSlide=e.currSlide,e.random?(e.currSlide=e.nextSlide,++e.randomIndex==d.length&&(e.randomIndex=0,e.randomMap.sort(function(){return Math.random()-.5})),e.nextSlide=e.randomMap[e.randomIndex],e.nextSlide==e.currSlide&&(e.nextSlide=e.currSlide==e.slideCount-1?0:e.currSlide+1)):e.backwards?(q=e.nextSlide-1<0,q&&e.bounce?(e.backwards=!e.backwards,e.nextSlide=1,e.currSlide=0):(e.nextSlide=q?d.length-1:e.nextSlide-1,e.currSlide=q?0:e.nextSlide+1)):(q=e.nextSlide+1==d.length,q&&e.bounce?(e.backwards=!e.backwards,e.nextSlide=d.length-2,e.currSlide=d.length-1):(e.nextSlide=q?0:e.nextSlide+1,e.currSlide=q?d.length-1:e.nextSlide-1))}l&&e.pager&&e.updateActivePagerLink(e.pager,e.currSlide,e.activePagerClass)}}function n(a,b,d,e){if(d.timeoutFn){for(var f=d.timeoutFn.call(a,a,b,d,e);"none"!=d.fx&&f-d.speed<250;)f+=d.speed;if(c("calculated timeout: "+f+"; speed: "+d.speed),f!==!1)return f}return d.timeout}function o(b,c){var d=c?1:-1,e=b.elements,f=b.$cont[0],g=f.cycleTimeout;if(g&&(clearTimeout(g),f.cycleTimeout=0),b.random&&0>d)b.randomIndex--,-2==--b.randomIndex?b.randomIndex=e.length-2:-1==b.randomIndex&&(b.randomIndex=e.length-1),b.nextSlide=b.randomMap[b.randomIndex];else if(b.random)b.nextSlide=b.randomMap[b.randomIndex];else if(b.nextSlide=b.currSlide+d,b.nextSlide<0){if(b.nowrap)return!1;b.nextSlide=e.length-1}else if(b.nextSlide>=e.length){if(b.nowrap)return!1;b.nextSlide=0}var h=b.onPrevNextEvent||b.prevNextClick;return a.isFunction(h)&&h(d>0,b.nextSlide,e[b.nextSlide]),m(e,b,1,c),!1}function p(b,c){var d=a(c.pager);a.each(b,function(e,f){a.fn.cycle.createPagerAnchor(e,f,d,b,c)}),c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function q(b){function d(a){return a=parseInt(a,10).toString(16),a.length<2?"0"+a:a}function e(b){for(;b&&"html"!=b.nodeName.toLowerCase();b=b.parentNode){var c=a.css(b,"background-color");if(c&&c.indexOf("rgb")>=0){var e=c.match(/\d+/g);return"#"+d(e[0])+d(e[1])+d(e[2])}if(c&&"transparent"!=c)return c}return"#ffffff"}c("applying clearType background-color hack"),b.each(function(){a(this).css("background-color",e(this))})}var r="3.0.2";a.expr[":"].paused=function(a){return a.cyclePause},a.fn.cycle=function(b,e){var g={s:this.selector,c:this.context};return 0===this.length&&"stop"!=b?!a.isReady&&g.s?(d("DOM not ready, queuing slideshow"),a(function(){a(g.s,g.c).cycle(b,e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this):this.each(function(){var h=f(this,b,e);if(h!==!1){h.updateActivePagerLink=h.updateActivePagerLink||a.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var j=a(this),k=h.slideExpr?a(h.slideExpr,this):j.children(),l=k.get();if(l.length<2)return void d("terminating; too few slides: "+l.length);var o=i(j,k,l,h,g);if(o!==!1){var p=o.continuous?10:n(l[o.currSlide],l[o.nextSlide],o,!o.backwards);p&&(p+=o.delay||0,10>p&&(p=10),c("first timeout: "+p),this.cycleTimeout=setTimeout(function(){m(l,o,0,!h.backwards)},p))}}})},a.fn.cycle.resetState=function(b,c){c=c||b.fx,b.before=[],b.after=[],b.cssBefore=a.extend({},b.original.cssBefore),b.cssAfter=a.extend({},b.original.cssAfter),b.animIn=a.extend({},b.original.animIn),b.animOut=a.extend({},b.original.animOut),b.fxFn=null,a.each(b.original.before,function(){b.before.push(this)}),a.each(b.original.after,function(){b.after.push(this)});var d=a.fn.cycle.transitions[c];a.isFunction(d)&&d(b.$cont,a(b.elements),b)},a.fn.cycle.updateActivePagerLink=function(b,c,d){a(b).each(function(){a(this).children().removeClass(d).eq(c).addClass(d)})},a.fn.cycle.next=function(a){o(a,1)},a.fn.cycle.prev=function(a){o(a,0)},a.fn.cycle.createPagerAnchor=function(b,d,f,g,h){var i;if(a.isFunction(h.pagerAnchorBuilder)?(i=h.pagerAnchorBuilder(b,d),c("pagerAnchorBuilder("+b+", el) returned: "+i)):i='<a href="#">'+(b+1)+"</a>",i){var j=a(i);if(0===j.parents("body").length){var k=[];f.length>1?(f.each(function(){var b=j.clone(!0);a(this).append(b),k.push(b[0])}),j=a(k)):j.appendTo(f)}h.pagerAnchors=h.pagerAnchors||[],h.pagerAnchors.push(j);var l=function(c){c.preventDefault(),h.nextSlide=b;var d=h.$cont[0],e=d.cycleTimeout;e&&(clearTimeout(e),d.cycleTimeout=0);var f=h.onPagerEvent||h.pagerClick;a.isFunction(f)&&f(h.nextSlide,g[h.nextSlide]),m(g,h,1,h.currSlide<b)};/mouseenter|mouseover/i.test(h.pagerEvent)?j.hover(l,function(){}):j.bind(h.pagerEvent,l),/^click/.test(h.pagerEvent)||h.allowPagerClickBubble||j.bind("click.cycle",function(){return!1});var n=h.$cont[0],o=!1;h.pauseOnPagerHover&&j.hover(function(){o=!0,n.cyclePause++,e(n,!0,!0)},function(){o&&n.cyclePause--,e(n,!0,!0)})}},a.fn.cycle.hopsFromLast=function(a,b){var c,d=a.lastSlide,e=a.currSlide;return c=b?e>d?e-d:a.slideCount-d:d>e?d-e:d+a.slideCount-e},a.fn.cycle.commonReset=function(b,c,d,e,f,g){a(d.elements).not(b).hide(),"undefined"==typeof d.cssBefore.opacity&&(d.cssBefore.opacity=1),d.cssBefore.display="block",d.slideResize&&e!==!1&&c.cycleW>0&&(d.cssBefore.width=c.cycleW),d.slideResize&&f!==!1&&c.cycleH>0&&(d.cssBefore.height=c.cycleH),d.cssAfter=d.cssAfter||{},d.cssAfter.display="none",a(b).css("zIndex",d.slideCount+(g===!0?1:0)),a(c).css("zIndex",d.slideCount+(g===!0?0:1))},a.fn.cycle.custom=function(b,c,d,e,f,g){var h=a(b),i=a(c),j=d.speedIn,k=d.speedOut,l=d.easeIn,m=d.easeOut;i.css(d.cssBefore),g&&(j=k="number"==typeof g?g:1,l=m=null);var n=function(){i.animate(d.animIn,j,l,function(){e()})};h.animate(d.animOut,k,m,function(){h.css(d.cssAfter),d.sync||n()}),d.sync&&n()},a.fn.cycle.transitions={fade:function(b,c,d){c.not(":eq("+d.currSlide+")").css("opacity",0),d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.cssBefore.opacity=0}),d.animIn={opacity:1},d.animOut={opacity:0},d.cssBefore={top:0,left:0}}},a.fn.cycle.ver=function(){return r},a.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!a.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:b,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}}(jQuery),function(a){"use strict";a.fn.cycle.transitions.none=function(b,c,d){d.fxFn=function(b,c,d,e){a(c).show(),a(b).hide(),e()}},a.fn.cycle.transitions.fadeout=function(b,c,d){c.not(":eq("+d.currSlide+")").css({display:"block",opacity:1}),d.before.push(function(b,c,d,e,f,g){a(b).css("zIndex",d.slideCount+(g!==!0?1:0)),a(c).css("zIndex",d.slideCount+(g!==!0?0:1))}),d.animIn.opacity=1,d.animOut.opacity=0,d.cssBefore.opacity=1,d.cssBefore.display="block",d.cssAfter.zIndex=0},a.fn.cycle.transitions.scrollUp=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssBefore.top=e,d.cssBefore.left=0,d.cssFirst.top=0,d.animIn.top=0,d.animOut.top=-e},a.fn.cycle.transitions.scrollDown=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssFirst.top=0,d.cssBefore.top=-e,d.cssBefore.left=0,d.animIn.top=0,d.animOut.top=e},a.fn.cycle.transitions.scrollLeft=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0,d.cssBefore.left=e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=0-e},a.fn.cycle.transitions.scrollRight=function(b,c,d){b.css("overflow","hidden"),d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0,d.cssBefore.left=-e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=e},a.fn.cycle.transitions.scrollHorz=function(b,c,d){b.css("overflow","hidden").width(),d.before.push(function(b,c,d,e){d.rev&&(e=!e),a.fn.cycle.commonReset(b,c,d),d.cssBefore.left=e?c.cycleW-1:1-c.cycleW,d.animOut.left=e?-b.cycleW:b.cycleW}),d.cssFirst.left=0,d.cssBefore.top=0,d.animIn.left=0,d.animOut.top=0},a.fn.cycle.transitions.scrollVert=function(b,c,d){b.css("overflow","hidden"),d.before.push(function(b,c,d,e){d.rev&&(e=!e),a.fn.cycle.commonReset(b,c,d),d.cssBefore.top=e?1-c.cycleH:c.cycleH-1,d.animOut.top=e?b.cycleH:-b.cycleH}),d.cssFirst.top=0,d.cssBefore.left=0,d.animIn.top=0,d.animOut.left=0},a.fn.cycle.transitions.slideX=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide(),a.fn.cycle.commonReset(b,c,d,!1,!0),d.animIn.width=c.cycleW}),d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.width=0,d.animIn.width="show",d.animOut.width=0},a.fn.cycle.transitions.slideY=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide(),a.fn.cycle.commonReset(b,c,d,!0,!1),d.animIn.height=c.cycleH}),d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.height=0,d.animIn.height="show",d.animOut.height=0},a.fn.cycle.transitions.shuffle=function(b,c,d){var e,f=b.css("overflow","visible").width();for(c.css({left:0,top:0}),d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0)}),d.speedAdjusted||(d.speed=d.speed/2,d.speedAdjusted=!0),d.random=0,d.shuffle=d.shuffle||{left:-f,top:15},d.els=[],e=0;e<c.length;e++)d.els.push(c[e]);for(e=0;e<d.currSlide;e++)d.els.push(d.els.shift());d.fxFn=function(b,c,d,e,f){d.rev&&(f=!f);var g=a(f?b:c);a(c).css(d.cssBefore);var h=d.slideCount;g.animate(d.shuffle,d.speedIn,d.easeIn,function(){for(var c=a.fn.cycle.hopsFromLast(d,f),i=0;c>i;i++)f?d.els.push(d.els.shift()):d.els.unshift(d.els.pop());if(f)for(var j=0,k=d.els.length;k>j;j++)a(d.els[j]).css("z-index",k-j+h);else{var l=a(b).css("z-index");g.css("z-index",parseInt(l,10)+1+h)}g.animate({left:0,top:0},d.speedOut,d.easeOut,function(){a(f?this:b).hide(),e&&e()})})},a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})},a.fn.cycle.transitions.turnUp=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.cssBefore.top=c.cycleH,d.animIn.height=c.cycleH,d.animOut.width=c.cycleW}),d.cssFirst.top=0,d.cssBefore.left=0,d.cssBefore.height=0,d.animIn.top=0,d.animOut.height=0},a.fn.cycle.transitions.turnDown=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssFirst.top=0,d.cssBefore.left=0,d.cssBefore.top=0,d.cssBefore.height=0,d.animOut.height=0},a.fn.cycle.transitions.turnLeft=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.cssBefore.left=c.cycleW,d.animIn.width=c.cycleW}),d.cssBefore.top=0,d.cssBefore.width=0,d.animIn.left=0,d.animOut.width=0},a.fn.cycle.transitions.turnRight=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.animIn.width=c.cycleW,d.animOut.left=b.cycleW}),a.extend(d.cssBefore,{top:0,left:0,width:0}),d.animIn.left=0,d.animOut.width=0},a.fn.cycle.transitions.zoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!1,!0),d.cssBefore.top=c.cycleH/2,d.cssBefore.left=c.cycleW/2,a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH}),a.extend(d.animOut,{width:0,height:0,top:b.cycleH/2,left:b.cycleW/2})}),d.cssFirst.top=0,d.cssFirst.left=0,d.cssBefore.width=0,d.cssBefore.height=0},a.fn.cycle.transitions.fadeZoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!1),d.cssBefore.left=c.cycleW/2,d.cssBefore.top=c.cycleH/2,a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})}),d.cssBefore.width=0,d.cssBefore.height=0,d.animOut.opacity=0},a.fn.cycle.transitions.blindX=function(b,c,d){var e=b.css("overflow","hidden").width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.width=c.cycleW,d.animOut.left=b.cycleW}),d.cssBefore.left=e,d.cssBefore.top=0,d.animIn.left=0,d.animOut.left=e},a.fn.cycle.transitions.blindY=function(b,c,d){var e=b.css("overflow","hidden").height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssBefore.top=e,d.cssBefore.left=0,d.animIn.top=0,d.animOut.top=e},a.fn.cycle.transitions.blindZ=function(b,c,d){var e=b.css("overflow","hidden").height(),f=b.width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.animIn.height=c.cycleH,d.animOut.top=b.cycleH}),d.cssBefore.top=e,d.cssBefore.left=f,d.animIn.top=0,d.animIn.left=0,d.animOut.top=e,d.animOut.left=f},a.fn.cycle.transitions.growX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0),d.cssBefore.left=this.cycleW/2,d.animIn.left=0,d.animIn.width=this.cycleW,d.animOut.left=0}),d.cssBefore.top=0,d.cssBefore.width=0},a.fn.cycle.transitions.growY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1),d.cssBefore.top=this.cycleH/2,d.animIn.top=0,d.animIn.height=this.cycleH,d.animOut.top=0}),d.cssBefore.height=0,d.cssBefore.left=0},a.fn.cycle.transitions.curtainX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!1,!0,!0),d.cssBefore.left=c.cycleW/2,d.animIn.left=0,d.animIn.width=this.cycleW,d.animOut.left=b.cycleW/2,d.animOut.width=0}),d.cssBefore.top=0,d.cssBefore.width=0},a.fn.cycle.transitions.curtainY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!1,!0),d.cssBefore.top=c.cycleH/2,d.animIn.top=0,d.animIn.height=c.cycleH,d.animOut.top=b.cycleH/2,d.animOut.height=0}),d.cssBefore.height=0,d.cssBefore.left=0},a.fn.cycle.transitions.cover=function(b,c,d){var e=d.direction||"left",f=b.css("overflow","hidden").width(),g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d),d.cssAfter.display="","right"==e?d.cssBefore.left=-f:"up"==e?d.cssBefore.top=g:"down"==e?d.cssBefore.top=-g:d.cssBefore.left=f}),d.animIn.left=0,d.animIn.top=0,d.cssBefore.top=0,d.cssBefore.left=0},a.fn.cycle.transitions.uncover=function(b,c,d){var e=d.direction||"left",f=b.css("overflow","hidden").width(),g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0),"right"==e?d.animOut.left=f:"up"==e?d.animOut.top=-g:"down"==e?d.animOut.top=g:d.animOut.left=-f}),d.animIn.left=0,d.animIn.top=0,d.cssBefore.top=0,d.cssBefore.left=0},a.fn.cycle.transitions.toss=function(b,c,d){var e=b.css("overflow","visible").width(),f=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,!0,!0,!0),d.animOut.left||d.animOut.top?d.animOut.opacity=0:a.extend(d.animOut,{left:2*e,top:-f/2,opacity:0})}),d.cssBefore.left=0,d.cssBefore.top=0,d.animIn.left=0},a.fn.cycle.transitions.wipe=function(b,c,d){var e=b.css("overflow","hidden").width(),f=b.height();d.cssBefore=d.cssBefore||{};var g;if(d.clip)if(/l2r/.test(d.clip))g="rect(0px 0px "+f+"px 0px)";else if(/r2l/.test(d.clip))g="rect(0px "+e+"px "+f+"px "+e+"px)";else if(/t2b/.test(d.clip))g="rect(0px "+e+"px 0px 0px)";else if(/b2t/.test(d.clip))g="rect("+f+"px "+e+"px "+f+"px 0px)";else if(/zoom/.test(d.clip)){var h=parseInt(f/2,10),i=parseInt(e/2,10);g="rect("+h+"px "+i+"px "+h+"px "+i+"px)"}d.cssBefore.clip=d.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var j=d.cssBefore.clip.match(/(\d+)/g),k=parseInt(j[0],10),l=parseInt(j[1],10),m=parseInt(j[2],10),n=parseInt(j[3],10);d.before.push(function(b,c,d){if(b!=c){var g=a(b),h=a(c);a.fn.cycle.commonReset(b,c,d,!0,!0,!1),d.cssAfter.display="block";var i=1,j=parseInt(d.speedIn/13,10)-1;!function o(){var a=k?k-parseInt(i*(k/j),10):0,b=n?n-parseInt(i*(n/j),10):0,c=f>m?m+parseInt(i*((f-m)/j||1),10):f,d=e>l?l+parseInt(i*((e-l)/j||1),10):e;h.css({clip:"rect("+a+"px "+d+"px "+c+"px "+b+"px)"}),i++<=j?setTimeout(o,13):g.css("display","none")}()}}),a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0}),d.animIn={left:0},d.animOut={left:0}}}(jQuery);