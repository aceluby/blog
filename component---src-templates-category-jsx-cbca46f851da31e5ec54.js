(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(194),c=a.n(s),l=a(223),u=a(192),p=a.n(u),m=a(210),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.pageContext.category,n=e.data,r=n.allMarkdownRemark,o=n.authors,s=r.edges,u=o.edges;return i.a.createElement(m.a,{location:t},i.a.createElement("div",{className:"category-container"},i.a.createElement(c.a,{title:'Posts in category "'+a+'" | '+p.a.siteTitle}),i.a.createElement(l.a,{postEdges:s,postAuthors:u})))},t}(i.a.Component),f="1117444175";t.default=h},192:function(e,t){e.exports={blogPostDir:"posts",blogAuthorDir:"authors",blogAuthorId:"jake",siteTitle:"What I Learned Today",siteTitleAlt:"A Daily Engineering Blog",siteLogo:"https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png",siteUrl:"https://aceluby.github.io/",pathPrefix:"/blog",siteDescription:"A technology blog for software engineers",siteCover:"https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"What I Learned Today",sitePaginationLimit:10,googleAnalyticsID:"UA-111982167-1",siteSocialUrls:["https://aceluby.github.io/resume/","https://stackoverflow.com/users/11500664/jake-luby","https://twitter.com/aceluby","mailto:jake.luby@gmail.com"],postDefaultCategoryID:"Tech",userLinks:[{label:"Tag - Java",url:"/blog/tags/java"},{label:"Tag - ReactJs",url:"/blog/tags/reactjs"},{label:"Tag - Bash",url:"/blog/tags/bash"}],copyright:{label:"What I Learned Today"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},200:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(233),c=a.n(s),l=a(83),u=(a(234),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,a=e.tags;return a?i.a.createElement("span",null,t,a.map(function(e,t,a){return i.a.createElement("span",{key:e},i.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==a.length-1?", ":"")})):null},t}(o.Component));t.a=u},201:function(e,t,a){"use strict";a(36);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(83),c=(a(235),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.url;return t&&a?i.a.createElement(s.Link,{to:a},t):null},t}(i.a.Component));t.a=c},202:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=(a(236),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className;return i.a.createElement("article",{className:a},t)},t}(i.a.Component));t.a=s},203:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=(a(237),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},204:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(238),c=a.n(s),l=(a(239),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return i.a.createElement("time",{className:"post-date",dateTime:c()(new Date(e)).format("YYYY-MM-DD")},c()(new Date(e)).format("DD MMMM YYYY"))},t}(i.a.Component));t.a=l},205:function(e,t,a){"use strict";a(224);var n=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var a=r(e);return Boolean(a.find(n(t)))},e.getAuthor=function(e,t,a){var o=r(e);return this.hasAuthor(e,t)?o.find(n(t)):o.find(n(a))},e}();t.a=o},210:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(126),a(127),a(9);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(194),c=a.n(s),l=(a(247),a(192)),u=a.n(l),p=(a(248),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",a=this.props.location.pathname.replace(t,"").replace("/",""),n="";if(""===a)n="Home";else if("tags/"===a)n="Tags";else if("categories/"===a)n="Categories";else if("about/"===a)n="About";else if(a.includes("posts"))n="Article";else if(a.includes("tags/")){n="Tagged in "+e(a.replace("tags/","").replace("/","").replace("-"," "))}else if(a.includes("categories/")){n=""+e(a.replace("categories/","").replace("/","").replace("-"," "))}return n},a.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(i.a.Component))},223:function(e,t,a){"use strict";a(36);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(83),c=(a(250),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,a=e.name;return t&&a?i.a.createElement("img",{className:"author-thumb",src:t,alt:a,"data-pin-nopin":"true"}):null},t}(i.a.Component)),l=a(200),u=a(192),p=a.n(u),m=a(201),h=a(202),f=a(203),g=a(204),d=a(205),y=(a(251),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=function(e,t){return e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:d.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}})}(e.postEdges,e.postAuthors);return i.a.createElement("div",null,t.map(function(e){var t=e.title,a=e.path,n=e.excerpt,r=e.author,o=e.tags,u=e.date,p=e.post_class?e.post_class:"post";return i.a.createElement(h.a,{className:p,key:t},i.a.createElement(f.a,null,i.a.createElement("h2",{className:"post-title"},i.a.createElement(s.Link,{to:a},t))),i.a.createElement("section",{className:"post-excerpt"},i.a.createElement("p",null,n+" ",i.a.createElement(s.Link,{className:"read-more",to:a},"»"))),i.a.createElement("footer",{className:"post-meta"},i.a.createElement(c,{avatar:r.image,name:r.name}),i.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),i.a.createElement(l.a,{prefix:" on ",tags:o}),i.a.createElement(g.a,{date:u})))}))},t}(i.a.Component));t.a=y}}]);
//# sourceMappingURL=component---src-templates-category-jsx-cbca46f851da31e5ec54.js.map