(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(204),r=a(0),l=a.n(r),c=a(198),o=a(199);var s=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return l.a.createElement(c.b,{query:"104433648",render:function(e){return console.log(e),l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Onze Cases"),l.a.createElement("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map((function(e){var t=e.node;return l.a.createElement("div",{className:"row",key:t.id},l.a.createElement("div",{onClick:function(e){return window.location.pathname=t.fields.slug},className:"col-md-12 project"},l.a.createElement(c.a,{to:t.fields.slug},l.a.createElement("h3",null,t.frontmatter.title),l.a.createElement("h5",null,"Geschreven door ",l.a.createElement("b",null,l.a.createElement("i",null,t.frontmatter.author))," op ",l.a.createElement("b",null,l.a.createElement("i",null,t.frontmatter.date)))),l.a.createElement("p",null,t.excerpt)))}))))},data:n})},r}(l.a.Component)},197:function(e,t,a){var n;e.exports=(n=a(201))&&n.default||n},198:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),l=a(65),c=a.n(l);a.d(t,"a",(function(){return c.a}));a(197),a(7).default.enqueue;var o=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,(function(e){return r.a.createElement(s,{data:t,query:a,render:n||l,staticQueryData:e})}))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(200),r=a(0),l=a.n(r),c=a(198);var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return l.a.createElement(c.b,{query:"732529383",render:function(t){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm my-navbar"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.a,{className:"nav-link",to:"/#about"},"Leer ons kennen")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.a,{className:"nav-link",to:"/cases/"},"Cases")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.a,{className:"nav-link",to:"/#people"},"Onze mensen")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(c.a,{className:"nav-link",to:"/#contact"},"Contact"))),l.a.createElement(c.a,{className:"navbar-brand my-brand",to:"/"},l.a.createElement("img",{className:"img-logo",src:"/logo.jpg",alt:"logo"}))),l.a.createElement("div",{className:"content"},e.props.children))},data:n})},r}(l.a.Component)},200:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Schakel"}}}}')},201:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),l=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":1,"edges":[{"node":{"fields":{"slug":"/first/"},"id":"d510cd44-bbdd-52ac-ab4b-9ca3342a527f","frontmatter":{"title":"First Story","author":"Steven K","date":"19-09-2019"},"excerpt":"Dit is mijn eerste post Hallo"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-cases-js-31349ea67bc22bbbbc13.js.map