(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(194),l=n.n(s),c=n(274),u=n(192),p=n.n(u),m=n(215),h=n(216),f=n(217),d=n(218),g=n(212),y=n(222),E=n(213),v=n(240),b=n(203),N=n(202),C=n(204),k=(n(365),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("footer",{className:"post-footer"},e)},t}(i.a.Component)),x=n(288),T=(n(36),n(83)),w=(n(366),n(289)),A=n(290),S=n(291),D=n(201),L=function(e){var t=e.bio,n=e.morePostsUrl;return t?i.a.createElement("p",null,t):i.a.createElement("p",null,"Read",i.a.createElement(T.Link,{to:n},"more posts"),"by this author.")},P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.author,a=n.uid,r=n.name,o=n.image,s=n.bio,l=n.url,c=n.location,u=t?t+"/"+a:a;return o?i.a.createElement("section",{className:"author"},i.a.createElement("h4",null,i.a.createElement(D.a,{url:u,name:r})),i.a.createElement(L,{bio:s,morePostsUrl:u}),i.a.createElement(w.a,null,i.a.createElement(A.a,{location:c}),i.a.createElement(S.a,{url:l}))):null},t}(i.a.Component),O=n(367),I=(n(428),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.postNode,r=n.postPath,o=n.config,s=a.frontmatter,l=(e=o.siteUrl,t=o.pathPrefix,e+("/"===t?"":t)+r),c=O.ShareButtons.FacebookShareButton,u=O.ShareButtons.GooglePlusShareButton,p=O.ShareButtons.TwitterShareButton;return i.a.createElement("section",{className:"share"},i.a.createElement("h4",null,"Share this post"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(p,{url:l,title:s.title},i.a.createElement("span",{className:"hidden"},"Twitter")),i.a.createElement(c,{url:l,quote:s.title},i.a.createElement("span",{className:"hidden"},"Facebook")),i.a.createElement(u,{url:l},i.a.createElement("span",{className:"hidden"},"Google+"))))},t}(i.a.Component)),j=(n(429),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.subscribers,n=e.blog;return t&&n?i.a.createElement("section",{className:"gh-subscribe"},i.a.createElement("h3",{className:"gh-subscribe-title"},"Subscribe to",n.title),i.a.createElement("p",null,"Get the latest posts delivered right to your inbox."),i.a.createElement("span",{className:"gh-subscribe-rss"},"or subscribe ",i.a.createElement("a",{href:"http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"},"via RSS")," with Feedly!")):null},t}(i.a.Component)),M=n(191),B=n.n(M),U=(n(430),function(e){var t=e.post;if(t){var n=t.path,a=t.cover,r=t.title,o=t.excerpt,s=a?{backgroundImage:"url("+a}:null,l=B()("read-next-story",e.className,{"no-cover":!a});return i.a.createElement(T.Link,{className:l,style:s,to:n},i.a.createElement("section",{className:"post"},i.a.createElement("h2",null,r),i.a.createElement("p",null,o+"&hellip;")))}return null}),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.next,n=e.prev;return i.a.createElement("aside",{className:"read-next"},i.a.createElement(U,{post:t}),i.a.createElement(U,{className:"prev",post:n}))},t}(o.Component),Y=n(200),G=n(214),R=n(205),F=n(71),J=n.n(F),W=n(431),q=n.n(W),H=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(J()(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(J()(n)),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts;this.setState({toasts:e.slice(1)})},n.notifyAboutComment=function(){var e=this.state.toasts.concat();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!p.a.disqusShortname)return null;var t=e.frontmatter,n=p.a.siteUrl+p.a.pathPrefix+e.fields.slug;return i.a.createElement(q.a,{shortname:p.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(o.Component),Q=n(210);n.d(t,"pageQuery",function(){return K});var V=function(e){return{path:e.fields.slug,title:e.frontmatter.title,cover:e.frontmatter.cover,excerpt:e.excerpt}},z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){var n=t.state.menuOpen;e.stopPropagation(),n?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data,a=e.pageContext,r=a.slug,o=a.next,s=a.prev,u=this.state.menuOpen,T=n.markdownRemark,w=function(e,t){var n=e;return n.id||(n.id=t),n.id||(n.category_id=p.a.postDefaultCategoryID),n}(T.frontmatter,r),A=w.cover,S=w.title,D=w.date,L=w.author,O=w.tags,M=w.post_class?w.post_class:"post",B=R.a.getAuthor(n.authors.edges,L,p.a.blogAuthorId);return i.a.createElement(Q.a,{location:t},i.a.createElement(g.a,{className:"post-template",isOpen:u},i.a.createElement(l.a,null,i.a.createElement("title",null,w.title+" | "+p.a.siteTitle)),i.a.createElement(c.a,{postPath:r,postNode:T,postSEO:!0}),i.a.createElement(y.a,{config:p.a,onClose:this.handleOnClose}),i.a.createElement(E.a,null,i.a.createElement(m.a,{className:"post-head",cover:A},i.a.createElement(h.a,null,i.a.createElement(f.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),i.a.createElement(d.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick}))),i.a.createElement(v.a,null,i.a.createElement(N.a,{className:M},i.a.createElement(b.a,null,i.a.createElement("h1",{className:"post-title"},S),i.a.createElement("section",{className:"post-meta"},i.a.createElement(C.a,{date:D}),i.a.createElement(Y.a,{prefix:" on ",tags:O}))),i.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:T.html}}),i.a.createElement(k,null,i.a.createElement(x.a,{author:B}),i.a.createElement(P,{prefix:"/author",author:B}),i.a.createElement(I,{postNode:T,postPath:t.pathname,config:p.a}),i.a.createElement(j,null),i.a.createElement(H,{postNode:T})))),i.a.createElement(_,{next:o?V(n.next):null,prev:s?V(n.prev):null}),i.a.createElement(G.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(i.a.Component),K="1770909871";t.default=z},192:function(e,t){e.exports={blogPostDir:"posts",blogAuthorDir:"authors",blogAuthorId:"jake",siteTitle:"What I Learned Today",siteTitleAlt:"A Daily Engineering Blog",siteLogo:"https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png",siteUrl:"https://aceluby.github.io/",pathPrefix:"/blog",siteDescription:"A technology blog for software engineers",siteCover:"https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"What I Learned Today",sitePaginationLimit:10,googleAnalyticsID:"UA-111982167-1",siteSocialUrls:["https://aceluby.github.io/resume/","https://stackoverflow.com/users/11500664/jake-luby","https://twitter.com/aceluby","mailto:jake.luby@gmail.com"],postDefaultCategoryID:"Tech",userLinks:[{label:"Tag - Java",url:"/blog/tags/java"},{label:"Tag - ReactJs",url:"/blog/tags/reactjs"},{label:"Tag - Bash",url:"/blog/tags/bash"},{label:"Tag - Javascript",url:"/blog/tags/javascript"},{label:"Tag - Misc",url:"/blog/tags/misc"}],copyright:{label:"What I Learned Today"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},200:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(233),l=n.n(s),c=n(83),u=(n(234),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?i.a.createElement("span",null,t,n.map(function(e,t,n){return i.a.createElement("span",{key:e},i.a.createElement(c.Link,{key:e,to:"/tags/"+l.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=u},201:function(e,t,n){"use strict";n(36);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(83),l=(n(235),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=l},202:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(236),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return i.a.createElement("article",{className:n},t)},t}(i.a.Component));t.a=s},203:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(237),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},204:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(238),l=n.n(s),c=(n(239),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return i.a.createElement("time",{className:"post-date",dateTime:l()(new Date(e)).format("YYYY-MM-DD")},l()(new Date(e)).format("DD MMMM YYYY"))},t}(i.a.Component));t.a=c},205:function(e,t,n){"use strict";n(224);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var o=r(e);return this.hasAuthor(e,t)?o.find(a(t)):o.find(a(n))},e}();t.a=o},210:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(126),n(127),n(9);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(194),l=n.n(s),c=(n(247),n(192)),u=n.n(c),p=(n(248),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(i.a.Component))},212:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(191),l=n.n(s),c=(n(252),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=l()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=c},213:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(255),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},214:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(256),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.promoteGatsby,n=e.copyright,a=n.label,r=n.url,o=n.year||(new Date).getFullYear();return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:r||"/"},""+a)," ","©",""+o),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:t}))},t}(o.Component));t.a=s},215:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(191),l=n.n(s),c=(n(257),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=e.className,r=l()("main-header",a,{"no-cover":!n});return i.a.createElement("header",{className:r,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=c},216:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(191),l=n.n(s),c=(n(258),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=c},217:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(83),l=(n(259),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=l},218:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(260),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},222:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=(n(19),n(125)),i=n.n(o),s=n(0),l=n.n(s),c=n(83);var u=function(e){var t=[{primaryText:"Home",component:c.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:c.Link,to:"/about/"}),t},p=(n(253),n(254),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?l.a.createElement("a",{className:"subscribe-button icon-feed",href:e},"Subscribe"):null},t}(l.a.Component)),m=function(){return null},h=function(e){var t=e.primaryText;return l.a.createElement("h3",null,t)},f=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return l.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},d=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(f,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,l=t.nestedItems,c=i()(t,["divider","subheader","nestedItems"]);a=r?m:o?h:f;var u=Object.assign({},c,{key:t.key||n});return l&&(u.nestedItems=l.map(e)),Object(s.createElement)(a,u)},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h3",{className:"nav-title"},"Menu"),l.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},l.a.createElement("span",{className:"hidden"},"Close")),l.a.createElement("ul",null,a.map(d)),l.a.createElement(p,{url:t.siteRss})),l.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=g},240:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(191),l=n.n(s),c=(n(277),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("content",n);return i.a.createElement("main",{id:"content",className:a,role:"main"},t)},t}(i.a.Component));t.a=c},274:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(194),l=n.n(s),c=n(192),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var h=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:c?a:h}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=p},288:function(e,t,n){"use strict";n(36);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(317),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},i.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(i.a.Component));t.a=s},289:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(191),l=n.n(s),c=(n(318),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("author-meta",n);return i.a.createElement("div",{className:a},t)},t}(i.a.Component));t.a=c},290:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?i.a.createElement("span",{className:"author-location icon-location"},e):null},t}(i.a.Component);t.a=s},291:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?i.a.createElement("span",{className:"author-link icon-link"},i.a.createElement("a",{href:e},e)):null},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-templates-post-jsx-0878a7f8ad22333b39f8.js.map