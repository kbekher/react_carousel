(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(4),i=n.n(a),s=n(2),c=n(1),r=(n(9),n(10),n(0)),l=function(t){var e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,l=t.animationDuration,m=Object(c.useState)(0),u=Object(s.a)(m,2),o=u[0],j=u[1];Object(c.useEffect)((function(){return j(0)}),[i]);var b=e.length*i-a*i;return Object(r.jsxs)("div",{className:"Carousel",children:[Object(r.jsx)("div",{className:"Carousel__wrapper",style:{width:"".concat(i*a,"px")},children:Object(r.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(o,"px)"),transitionDuration:"".concat(l,"ms")},children:e.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:t,alt:"smile ".concat(e+1),width:i})},t)}))})}),Object(r.jsxs)("div",{className:"Carousel__buttons",style:{width:"".concat(i*a,"px")},children:[Object(r.jsx)("button",{type:"button",onClick:function(){j((function(t){return Math.min(t+i*n,0)}))},disabled:0===o,children:Object(r.jsx)("i",{className:"fa-solid fa-arrow-left"})}),Object(r.jsx)("button",{type:"button",onClick:function(){j((function(t){return Math.max(t-i*n,-b)}))},disabled:o===-b,"data-cy":"next",children:Object(r.jsx)("i",{className:"fa-solid fa-arrow-right"})})]})]})},m=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],u=function(){var t=Object(c.useState)(130),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(3),u=Object(s.a)(i,2),o=u[0],j=u[1],b=Object(c.useState)(3),d=Object(s.a)(b,2),p=d[0],g=d[1],h=Object(c.useState)(1e3),O=Object(s.a)(h,2),x=O[0],f=O[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",m.length," images"]}),Object(r.jsx)(l,{images:m,step:p,frameSize:3,itemWidth:n,animationDuration:x}),Object(r.jsxs)("div",{className:"App__settings",children:[Object(r.jsxs)("label",{htmlFor:"itemId",children:["Enter item width",Object(r.jsx)("input",{type:"number",name:"itemWidth",id:"itemId",value:n,className:"App__setting",onChange:function(t){return a(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"frameId",children:["Enter frame size",Object(r.jsx)("input",{type:"number",name:"frameSize",id:"frameId",value:o,className:"App__setting",min:1,max:m.length,onChange:function(t){return j(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"stepId",children:["Enter step",Object(r.jsx)("input",{type:"number",name:"step",id:"stepId",value:p,className:"App__setting",min:1,max:m.length-1,onChange:function(t){return g(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"animationId",children:["Enter animation duration",Object(r.jsx)("input",{type:"number",name:"animationDuration",id:"animationId",value:x,className:"App__setting",min:0,onChange:function(t){return f(+t.target.value)}})]})]})]})};i.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.18fbaa0d.chunk.js.map