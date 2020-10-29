(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),i=(a(0),a(94)),o={title:"Events"},c={unversionedId:"parsing/events",id:"parsing/events",isDocsHomePage:!1,title:"Events",description:"headers",source:"@site/docs/parsing/events.md",slug:"/parsing/events",permalink:"/fast-csv/docs/parsing/events",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/parsing/events.md",version:"current",sidebar:"docs",previous:{title:"Options",permalink:"/fast-csv/docs/parsing/options"},next:{title:"Methods",permalink:"/fast-csv/docs/parsing/methods"}},s=[{value:"<code>headers</code>",id:"headers",children:[]},{value:"<code>data</code>",id:"data",children:[]},{value:"data-invalid",id:"data-invalid",children:[]}],d={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"headers"},Object(i.b)("inlineCode",{parentName:"h2"},"headers")),Object(i.b)("p",null,"Emitted when the headers are parsed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/options#headers"}),"headers option")," is a function that transform headers, the array passed to this event will be the transformed headers "),Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/options#headers"}),"headers option")," is set to an array of headers, the emitted header will be the option passed in.                      "),Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/options#headers"}),"headers option")," is set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," the headers will be the parsed headers from the csv.                                ")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/parsing/options#headers"}),"headers option")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," or the csv has no rows then the event WILL NOT be emitted."))),Object(i.b)("h2",{id:"data"},Object(i.b)("inlineCode",{parentName:"h2"},"data")),Object(i.b)("p",null,"Emitted when a record is parsed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If headers are present then all rows will be an object.                                                                    "),Object(i.b)("li",{parentName:"ul"},"If headers are not present then all rows will be an array.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/parsing/options#objectmode"}),"objectMode")," is set to false then all rows will be a buffer with a JSON row."))),Object(i.b)("h2",{id:"data-invalid"},"data-invalid"),Object(i.b)("p",null,"Emitted if there was invalid row encounted;                                                             "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Emitted when a ",Object(i.b)("inlineCode",{parentName:"li"},"validate")," function is provided and an invalid row is encountered.                                          "),Object(i.b)("li",{parentName:"ul"},"Emitted when ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/options#strictcolumnhandling"}),"strictColumnHandling")," is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," and a row with a different number of fields than headers is encountered.     ")))}l.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(h,c(c({ref:t},d),{},{components:a})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);