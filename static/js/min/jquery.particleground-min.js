!function(t,e){"use strict";function i(t){t=t||{};for(var e=1;e<arguments.length;e++){var i=arguments[e];if(i)for(var a in i)i.hasOwnProperty(a)&&("object"==typeof i[a]?deepExtend(t[a],i[a]):t[a]=i[a])}return t}function a(a,n){function o(){if(m){y=e.createElement("canvas"),y.className="pg-canvas",y.style.display="block",a.insertBefore(y,a.firstChild),g=y.getContext("2d"),r();for(var i=Math.round(y.width*y.height/n.density),s=0;i>s;s++){var o=new f;o.setStackPos(s),v.push(o)}t.addEventListener("resize",function(){p()},!1),e.addEventListener("mousemove",function(t){X=t.pageX,Y=t.pageY},!1),k&&!M&&t.addEventListener("deviceorientation",function(){A=Math.min(Math.max(-event.beta,-30),30),F=Math.min(Math.max(-event.gamma,-30),30)},!0),h(),u("onInit")}}function r(){y.width=a.offsetWidth,y.height=a.offsetHeight,g.fillStyle=n.dotColor,g.strokeStyle=n.lineColor,g.lineWidth=n.lineWidth}function h(){if(m){O=t.innerWidth,S=t.innerHeight,g.clearRect(0,0,y.width,y.height);for(var e=0;e<v.length;e++)v[e].updatePosition();for(var e=0;e<v.length;e++)v[e].draw();C||(w=requestAnimationFrame(h))}}function p(){r();for(var t=a.offsetWidth,e=a.offsetHeight,i=v.length-1;i>=0;i--)(v[i].position.x>t||v[i].position.y>e)&&v.splice(i,1);var s=Math.round(y.width*y.height/n.density);if(s>v.length)for(;s>v.length;){var o=new f;v.push(o)}else s<v.length&&v.splice(s);for(i=v.length-1;i>=0;i--)v[i].setStackPos(i)}function l(){C=!0}function d(){C=!1,h()}function f(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*y.width),y:Math.ceil(Math.random()*y.height)},this.speed={},n.directionX){case"left":this.speed.x=+(-n.maxSpeedX+Math.random()*n.maxSpeedX-n.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*n.maxSpeedX+n.minSpeedX).toFixed(2);break;default:this.speed.x=+(-n.maxSpeedX/2+Math.random()*n.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?n.minSpeedX:-n.minSpeedX}switch(n.directionY){case"up":this.speed.y=+(-n.maxSpeedY+Math.random()*n.maxSpeedY-n.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*n.maxSpeedY+n.minSpeedY).toFixed(2);break;default:this.speed.y=+(-n.maxSpeedY/2+Math.random()*n.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?n.minSpeedY:-n.minSpeedY}}function c(t,e){return e?void(n[t]=e):n[t]}function x(){console.log("destroy"),y.parentNode.removeChild(y),u("onDestroy"),$&&$(a).removeData("plugin_"+s)}function u(t){void 0!==n[t]&&n[t].call(a)}var m=!!e.createElement("canvas").getContext,y,g,v=[],w,X=0,Y=0,O,S,M=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),k=!!t.DeviceOrientationEvent,F=0,b,P,A=0,C=!1;return n=i({},t[s].defaults,n),f.prototype.draw=function(){g.beginPath(),g.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,n.particleRadius/2,0,2*Math.PI,!0),g.closePath(),g.fill(),g.beginPath();for(var t=v.length-1;t>this.stackPos;t--){var e=v[t],i=this.position.x-e.position.x,a=this.position.y-e.position.y,s=Math.sqrt(i*i+a*a).toFixed(2);s<n.proximity&&(g.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),n.curvedLines?g.quadraticCurveTo(Math.max(e.position.x,e.position.x),Math.min(e.position.y,e.position.y),e.position.x+e.parallaxOffsetX,e.position.y+e.parallaxOffsetY):g.lineTo(e.position.x+e.parallaxOffsetX,e.position.y+e.parallaxOffsetY))}g.stroke(),g.closePath()},f.prototype.updatePosition=function(){if(n.parallax){if(k&&!M){var t=(O-0)/60;b=(F- -30)*t+0;var e=(S-0)/60;P=(A- -30)*e+0}else b=X,P=Y;this.parallaxTargX=(b-O/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(P-S/2)/(n.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var i=a.offsetWidth,s=a.offsetHeight;switch(n.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=i-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>i&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>i||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(n.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=s-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>s&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>s||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},f.prototype.setStackPos=function(t){this.stackPos=t},o(),{option:c,destroy:x,start:d,pause:l}}var s="particleground",$=t.jQuery;t[s]=function(t,e){return new a(t,e)},t[s].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},$&&($.fn[s]=function(t){if("string"==typeof arguments[0]){var e=arguments[0],i=Array.prototype.slice.call(arguments,1),n;return this.each(function(){$.data(this,"plugin_"+s)&&"function"==typeof $.data(this,"plugin_"+s)[e]&&(n=$.data(this,"plugin_"+s)[e].apply(this,i))}),void 0!==n?n:this}return"object"!=typeof t&&t?void 0:this.each(function(){$.data(this,"plugin_"+s)||$.data(this,"plugin_"+s,new a(this,t))})})}(window,document),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var a=(new Date).getTime(),s=Math.max(0,16-(a-t)),n=window.setTimeout(function(){e(a+s)},s);return t=a+s,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();