(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),i=a(0),o=a.n(i),l=a(166),c=a.n(l),s=a(172),u=(a(80),a(81),a(57)),p=a(183),m=a.n(p),d=a(184),f=a.n(d),g=a(517),h=a.n(g),E=a(175),v=a.n(E),y=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=this,t=[];return this.props.postEdges.forEach(function(a){e.props.categories.includes(a.node.frontmatter.category)&&t.push({path:a.node.fields.slug,tags:a.node.frontmatter.tags,category:a.node.frontmatter.category,cover:a.node.frontmatter.cover,title:a.node.frontmatter.title,titleJa:a.node.frontmatter.titleJa,date:a.node.fields.date,excerpt:a.node.excerpt,timeToRead:a.node.timeToRead})}),t},a.render=function(){var e=this.getPostList();return o.a.createElement(m.a,null,e.map(function(e){return o.a.createElement(f.a,{key:e.id,xs:12,sm:6,className:"p-3"},o.a.createElement(h.a,null,o.a.createElement(h.a.Img,{variant:"top",src:e.cover}),o.a.createElement(h.a.Body,null,o.a.createElement(h.a.Title,null,e.titleJa,o.a.createElement("br",null),e.title),o.a.createElement(h.a.Text,null,e.excerpt),o.a.createElement(u.Link,{to:e.path,key:e.title},o.a.createElement(v.a,{variant:"primary"},"Learn more")))))}))},t}(o.a.Component),b=a(261),x=a(164),C=a.n(x);a.d(t,"pageQuery",function(){return T});var k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(s.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,{title:C.a.siteTitle}),o.a.createElement(b.a,null),o.a.createElement("h1",{className:"pb-3"},"Sophia Schoolならできる外国語の習得を目指せ！"),o.a.createElement(y,{postEdges:e,categories:["Services"]})))},t}(o.a.Component),T=(t.default=k,"2918042956")},164:function(e,t,a){a(36);var n={siteTitle:"Sophia School",siteTitleShort:"Sophia School",siteTitleAlt:"Sophia School",siteLogo:"/logos/logo-1024.png",siteUrl:"https://temptemp3.github.io",pathPrefix:"/sophia",siteDescription:"Let me tell you about our Japanese courses. The English Language school operated by Sophia is where you can master &#39;genuine English.&#39; The website of Sophia Language School.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Sophia School",userEmail:"enquiry@sophia-school.com",userTwitter:"",userLocation:"",userAvatar:"",userDescription:"",userLinks:[],copyright:"Copyright © 2019. Sophia School",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},171:function(e,t,a){e.exports=a.p+"static/logo-3d7e338aeba850c6b19c5706b2403cc0.jpg"},172:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(0),o=a.n(i),l=a(166),c=a.n(l),s=a(164),u=a.n(s),p=(a(194),a(195),a(196),a(57)),m=a(197),d=a.n(m),f=a(169),g=a.n(f),h=a(201),E=a.n(h),v=(a(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{bg:"light",expand:"lg",fixed:this.props.fixed},o.a.createElement(d.a.Brand,{onClick:function(){Object(p.navigate)("/")}},u.a.siteTitle),o.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(g.a,{className:"mr-auto"},o.a.createElement(E.a,{title:"Lessons",id:"basic-nav-dropdown"},o.a.createElement(E.a.Item,{onClick:function(){Object(p.navigate)("private-lessons")}},"Private Lessons"),o.a.createElement(E.a.Divider,null),o.a.createElement(E.a.Item,{onClick:function(){Object(p.navigate)("group-lessons")}},"Group Lessons")),o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("corporate-classes")}},"Corporate Classes"),o.a.createElement(E.a,{title:"Courses",id:"basic-nav-dropdown"},o.a.createElement(E.a.Item,{onClick:function(){Object(p.navigate)("/special-course-test-prep#ielts対策コース")}},"IELTS Test Prep"),o.a.createElement(E.a.Item,{onClick:function(){Object(p.navigate)("/special-course-test-prep#toeic-and-toefl-コース")}},"TOEIC, TOEFL Test Prep"),o.a.createElement(E.a.Item,{onClick:function(){Object(p.navigate)("/special-course-test-prep#90-days-special-courses")}},"Special Courses"))),o.a.createElement(g.a,null,o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("/contact-us")}},"Contact Us")))))},t}(i.Component)),y=a(203),b=a.n(y),x=a(204),C=a.n(x),k=a(183),T=a.n(k),L=a(184),N=a.n(L),P=a(202),w=a.n(P);a.d(t,"a",function(){return S});var S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:u.a.siteDescription})),o.a.createElement(v,{fixed:"top"}),"　　　",o.a.createElement(w.a,{src:this.props.image?this.props.image:["images/shield-1519642_1920.jpg"][Math.floor(1*Math.random())],className:"img-fluid w-100"}),o.a.createElement(b.a,{className:"pt-5"},e),o.a.createElement(C.a,{className:"mb-0",fluid:!0},o.a.createElement(b.a,null,o.a.createElement("h2",null,u.a.siteTitle),o.a.createElement(T.a,{className:"text-left"},o.a.createElement(N.a,null,o.a.createElement(g.a,{defaultActiveKey:"#",className:"flex-column"},o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("private-lessons")}},"Private Lessons"),o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("group-lessons")}},"Group Lessons"),o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("corporate-classes")}},"Corporate Classes"))),o.a.createElement(N.a,null,o.a.createElement(g.a,{defaultActiveKey:"#",className:"flex-column"},o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("special-course-test-prep/#ielts対策コース")}},"Test Prep"),o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("special-course-test-prep/#90-days-special-courses")}},"Special Courses"))),o.a.createElement(N.a,null,o.a.createElement(g.a,{defaultActiveKey:"#",className:"flex-column"},o.a.createElement(g.a.Link,{onClick:function(){Object(p.navigate)("contact-us")}},"Contact Us")))))),o.a.createElement(T.a,{className:"p-3"},o.a.createElement(N.a,null,"Copyright © ",(new Date).getFullYear()," ",u.a.siteTitle)))},t}(o.a.Component)},209:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},261:function(e,t,a){"use strict";var n=a(9),r=a.n(n),i=a(0),o=a.n(i),l=a(166),c=a.n(l),s=a(209),u=a.n(s),p=a(164),m=a.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,s=r.postSEO;if(s){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=u()(m.a.siteUrl,m.a.pathPrefix,l)}else e=m.a.siteTitle,t=m.a.siteDescription,a=m.a.siteLogo;a=u()(m.a.siteUrl,m.a.pathPrefix,a);var d=u()(m.a.siteUrl,m.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return s&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:s?n:d}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=d},517:function(e,t,a){"use strict";var n=a(167),r=a(5);t.__esModule=!0,t.default=void 0;var i=r(a(56)),o=r(a(78)),l=r(a(163)),c=n(a(0)),s=a(165),u=r(a(231)),p=r(a(518)),m=r(a(271)),d=r(a(519)),f=(0,p.default)("h5"),g=(0,p.default)("h6"),h=(0,u.default)("card-body"),E=c.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,u=e.text,p=e.border,d=e.body,f=e.children,g=e.as,E=void 0===g?"div":g,v=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,s.useBootstrapPrefix)(a,"card"),b=(0,c.useMemo)(function(){return{cardHeaderBsPrefix:y+"-header"}},[y]);return c.default.createElement(m.default.Provider,{value:b},c.default.createElement(E,(0,i.default)({ref:t},v,{className:(0,l.default)(n,y,r&&"bg-"+r,u&&"text-"+u,p&&"border-"+p)}),d?c.default.createElement(h,null,f):f))});E.displayName="Card",E.defaultProps={body:!1},E.Img=d.default,E.Title=(0,u.default)("card-title",{Component:f}),E.Subtitle=(0,u.default)("card-subtitle",{Component:g}),E.Body=h,E.Link=(0,u.default)("card-link",{Component:"a"}),E.Text=(0,u.default)("card-text",{Component:"p"}),E.Header=(0,u.default)("card-header"),E.Footer=(0,u.default)("card-footer"),E.ImgOverlay=(0,u.default)("card-img-overlay");var v=E;t.default=v,e.exports=t.default},518:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(56)),i=n(a(0)),o=n(a(163));t.default=function(e){return i.default.forwardRef(function(t,a){return i.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,o.default)(t.className,e)}))})},e.exports=t.default},519:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(56)),i=n(a(78)),o=n(a(163)),l=n(a(0)),c=a(165),s=l.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,s=e.variant,u=e.as,p=void 0===u?"img":u,m=(0,i.default)(e,["bsPrefix","className","variant","as"]),d=(0,c.useBootstrapPrefix)(a,"card-img");return l.default.createElement(p,(0,r.default)({ref:t,className:(0,o.default)(s?d+"-"+s:d,n)},m))});s.displayName="CardImg",s.defaultProps={variant:null};var u=s;t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8655d5ac8b94956c1a9c.js.map