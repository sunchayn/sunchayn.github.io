(function(e){function t(t){for(var a,r,o=t[0],s=t[1],l=t[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},i=[];function r(e){return o.p+"js/"+({"chunks/lazy.view.404":"chunks/lazy.view.404"}[e]||e)+"."+{"chunks/lazy.view.404":"64d8cedd"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=r(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025a":function(e,t,n){e.exports=n.p+"img/headshot.048ced8d.jpg"},"02c3":function(e,t,n){"use strict";n("8767")},"1d13":function(e,t,n){"use strict";n("5f3f")},"2c82":function(e){e.exports=JSON.parse('{"title":"Mazen Touati — Full-stack web developer","url":"https://sunchayn.github.io","locale":"en_US","author":"Mazen Touati","description":"I\'m a full-stack web developer who\'s enthusiastic about creating utility libraries for fellow developers. I enjoy building things using Laravel & VueJS.","square_preview":"https://sunchayn.github.io/square_preview.png","card_preview":"https://sunchayn.github.io/card_preview.jpg","twitter":{"handler":"@mazen_touati"}}')},"2cc5":function(e,t,n){},"371a":function(e,t,n){"use strict";n("2cc5")},"3a85":function(e){e.exports=JSON.parse('[{"id":1,"title":"Oriapi","role":"Full-stack web developer","company":"ALINAOUS","description":"Oriapi is the backbone of Oribiky\'s bike rental service. I\'ve worked on architecting and implementing a refactored version of the API that aims for performance and reliability while including many new features. My contribution has reduced the client\'s expenses and increased the overall performance.","skills":["Laravel","Vonage","TDD","OpenAPI","Stripe"],"thumbnail":"work/oribiky.png"},{"id":2,"title":"Oridash","role":"Full-stack web developer","company":"ALINAOUS","description":"Oridash is a control panel for Oribiky\'s bike rental service. I\'ve worked on building it with performance and interactivity in mind. The final result has presented the client with a rich experience and meaningful information.","skills":["Laravel","VueJS","Tailwind CSS","SCSS","Apex Charts"],"thumbnail":"work/oribiky.png"}]')},"3ba9":function(e,t,n){e.exports=n.p+"img/maft.202a8873.jpg"},"41fb":function(e,t,n){},"448a":function(e,t,n){},"45fb":function(e,t,n){},"4a37":function(e,t,n){},"4d8e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=n("7707"),i=n.n(c),r=n("ad2c"),o=n("552e");function s(e,t){var n=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["d"])(n)}const l={};l.render=s;var d=l,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u={class:"app flex"},p={class:"md:w-52 lg:w-64"},h={class:"app__wrapper flex-1"},v={class:"container max-w-5xl"},j={class:"app__content"};function f(e,t,n,c,i,r){var o=Object(a["z"])("TheSidebar"),s=Object(a["z"])("TheNavbar"),l=Object(a["z"])("IntroSlide"),d=Object(a["z"])("AboutSlide"),b=Object(a["z"])("ProjectsSlide"),f=Object(a["z"])("ContactSlide");return Object(a["s"])(),Object(a["d"])("div",u,[Object(a["h"])("div",p,[Object(a["h"])(o,{ref:"sidebar",onSlideTo:r.slideTo},null,8,["onSlideTo"])]),Object(a["h"])("div",h,[Object(a["h"])(s,{ref:"navbar",onToggleSidebar:t[1]||(t[1]=function(t){return e.$refs.sidebar.toggle()})},null,512),Object(a["h"])("div",v,[Object(a["h"])("div",j,[Object(a["h"])(l,{ref:r.setSlidesRef,"data-slug":"intro","data-title":"hello-world"},null,512),Object(a["h"])(d,{ref:r.setSlidesRef,"data-slug":"about","data-title":"about-me"},null,512),Object(a["h"])(b,{ref:r.setSlidesRef,"data-slug":"projects","data-title":"projects"},null,512),Object(a["h"])(f,{ref:r.setSlidesRef,"data-slug":"contact","data-title":"contact-me"},null,512)])])])])}n("a4d3"),n("e01a"),n("c740"),n("159b");var m=Object(a["I"])("data-v-02966cbc");Object(a["v"])("data-v-02966cbc");var g={class:"navbar"},O={class:"container max-w-5xl"},w={class:"icon text-current mr-0"},y={class:"ml-auto md:ml-0 page-name"},k=Object(a["g"])(" ~/"),_={class:"page-name__label"},x=Object(a["g"])("$ "),S=Object(a["h"])("div",{class:"hidden md:block ml-auto space-x-4"},[Object(a["h"])("span",null,[Object(a["g"])("[ "),Object(a["h"])("a",{href:"https://github.com/sunchayn",target:"_blank",rel:"noopener"},"github"),Object(a["g"])(" ]")]),Object(a["h"])("span",null,[Object(a["g"])("[ "),Object(a["h"])("a",{href:"https://dev.to/mazentouati",target:"_blank",rel:"noopener"},"blog"),Object(a["g"])(" ]")])],-1);Object(a["t"])();var I=m((function(e,t,n,c,i,r){var o=Object(a["z"])("MenuIcon");return Object(a["s"])(),Object(a["d"])("nav",g,[Object(a["h"])("div",O,[Object(a["h"])("button",{class:"md:hidden button button--icon","aria-label":"Open Menu",onClick:t[1]||(t[1]=function(t){return e.$emit("toggleSidebar")})},[Object(a["h"])("i",w,[Object(a["h"])(o)])]),Object(a["h"])("div",y,[k,Object(a["h"])("span",_,Object(a["C"])(i.currentSlide),1),x]),S])])})),C=n("9510"),z={components:{MenuIcon:C["b"]},emits:["toggleSidebar"],data:function(){return{currentSlide:"hello-world"}},methods:{activateSlide:function(e){e.$attrs["data-title"]?this.currentSlide=e.$attrs["data-title"]:this.currentSlide="hello-world"}}};n("bbc2");z.render=I,z.__scopeId="data-v-02966cbc";var T=z,A=n("9b19"),P=n.n(A),$=Object(a["I"])("data-v-6c2e6ed5");Object(a["v"])("data-v-6c2e6ed5");var M={class:"flex items-center min-h-[3rem] px-8"},L={class:"icon text-current"},q=Object(a["g"])(" Dismiss "),N={class:"flex-1 flex flex-col p-8"},R={class:"sidebar__menu flex-1 overflow-y-auto"},J=Object(a["h"])("span",{class:"sidebar__menu_link__indicator"},null,-1),D=Object(a["g"])(" About "),U=Object(a["h"])("span",{class:"sidebar__menu_link__indicator"},null,-1),E=Object(a["g"])(" Projects "),F=Object(a["h"])("span",{class:"sidebar__menu_link__indicator"},null,-1),H=Object(a["g"])(" Contact "),V=Object(a["h"])("div",{class:"md:hidden mb-4 space-x-4"},[Object(a["h"])("span",null,[Object(a["g"])("[ "),Object(a["h"])("a",{href:"https://github.com/sunchayn",target:"_blank",rel:"noopener"},"github"),Object(a["g"])(" ]")]),Object(a["h"])("span",null,[Object(a["g"])("[ "),Object(a["h"])("a",{href:"https://dev.to/mazentouati",target:"_blank",rel:"noopener"},"blog"),Object(a["g"])(" ]")])],-1),B=Object(a["h"])("div",{class:"flex flex-col"},[Object(a["h"])("p",{class:"text-on-surface-dimmed leading-none font-bold text-lg"},[Object(a["g"])(" honest"),Object(a["h"])("br"),Object(a["g"])("innovative &"),Object(a["h"])("br"),Object(a["g"])("minimalistic ")]),Object(a["h"])("img",{src:P.a,alt:"logo",class:"w-12",width:"48",height:"48"})],-1);Object(a["t"])();var G=$((function(e,t,n,c,i,r){var o=Object(a["z"])("ArrowNarrowLeftIcon");return Object(a["s"])(),Object(a["d"])("aside",{class:["sidebar flex flex-col",{"is-toggled":i.toggled}]},[Object(a["h"])("div",M,[Object(a["h"])("button",{class:"button button--link text-xs text-white md:hidden",onClick:t[1]||(t[1]=function(){return r.close&&r.close.apply(r,arguments)})},[Object(a["h"])("i",L,[Object(a["h"])(o)]),q])]),Object(a["h"])("div",N,[Object(a["h"])("small",{class:"open-to-work capitalize cursor-pointer",onClick:t[2]||(t[2]=function(t){return e.$emit("slideTo","contact")})},"open to work"),Object(a["h"])("nav",R,[Object(a["h"])("button",{type:"button",class:["sidebar__menu__link",{"is-active":"about"===i.currentSlide}],onClick:t[3]||(t[3]=function(t){return e.$emit("slideTo","about")})},[J,D],2),Object(a["h"])("button",{type:"button",class:["sidebar__menu__link",{"is-active":"projects"===i.currentSlide}],onClick:t[4]||(t[4]=function(t){return e.$emit("slideTo","projects")})},[U,E],2),Object(a["h"])("button",{type:"button",class:["sidebar__menu__link",{"is-active":"contact"===i.currentSlide}],onClick:t[5]||(t[5]=function(t){return e.$emit("slideTo","contact")})},[F,H],2)]),V,B])],2)})),W={components:{ArrowNarrowLeftIcon:C["a"]},emits:["slideTo"],data:function(){return{currentSlide:"",toggled:!1}},methods:{activateSlide:function(e){e.$attrs["data-slug"]&&(this.currentSlide=e.$attrs["data-slug"])},close:function(){this.toggled=!1},open:function(){this.toggled=!0},toggle:function(){this.toggled=!this.toggled}}};n("6769");W.render=G,W.__scopeId="data-v-6c2e6ed5";var K=W,Q=Object(a["I"])("data-v-24fd14ae");Object(a["v"])("data-v-24fd14ae");var X={class:"app__slide"},Y={class:"app__slide__content"},Z=Object(a["h"])("h1",{class:"leading-none mb-2"}," Hi, I'm Mazen ",-1),ee={class:"text-green mb-2 leading-none job-title"},te={ref:"jobTitle"},ne=Object(a["h"])("p",{class:"leading-snug text-base max-w-xl mb-4 sr-hook"}," An honest, innovative and minimalistic individual who enjoys talking to both computers and humans. ",-1),ae=Object(a["h"])("a",{href:"https://github.com/sunchayn/sunchayn.github.io/raw/master/public/static/Mazen%20Touati%20Résumé.pdf",class:"button sr-hook",rel:"noopener"},[Object(a["h"])("small",{class:"text-xs lowercase"},[Object(a["h"])("i",null,"pdf — ")]),Object(a["g"])("Resumé")],-1);Object(a["t"])();var ce=Q((function(e,t,n,c,i,r){return Object(a["s"])(),Object(a["d"])("div",X,[Object(a["h"])("div",Y,[Z,Object(a["h"])("h2",ee,[Object(a["h"])("span",te,null,512)]),ne,ae])])})),ie=n("10b3"),re=n.n(ie),oe={mounted:function(){this.typed=new re.a(this.$refs.jobTitle,{strings:["Full-stack web dev"],typeSpeed:40,cursorChar:"_",autoInsertCss:!0})},beforeUnmount:function(){this.typed.destroy()}};n("371a");oe.render=ce,oe.__scopeId="data-v-24fd14ae";var se=oe,le=Object(a["I"])("data-v-bc095308");Object(a["v"])("data-v-bc095308");var de={class:"app__slide"},be={class:"app__slide__content"},ue=Object(a["h"])("div",{class:"mb-4 leading-none sr-hook"},[Object(a["h"])("h2",null,"About Me"),Object(a["h"])("span",{class:"text-xs"},"Me, my mindset and how I approach things")],-1),pe={class:"md:flex"},he={class:"min-w-[40%] mb-4 md:mb-0 mr-4 lg:mr-0"},ve={class:"relative sr-hook"},je={class:"z-10 bg-red aspect-w-4 aspect-h-5 w-full bg-cover bg-center"},fe={class:"w-24 hidden lg:flex justify-center items-start sr-hook"},me=Object(a["f"])('<div class="relative z-10 text-on-surface-subdued" data-v-bc095308><small class="block mb-1 sr-hook" data-v-bc095308>36s Read time<br data-v-bc095308>·</small><p class="sr-hook" data-v-bc095308> Hi! I’m <strong class="text-white" data-v-bc095308>Mazen Touati</strong>. I’m a full-stack web developer from Tunisia. My passion for code started years ago when I wrote my first line of code back in <strong class="text-white" data-v-bc095308>2011</strong>. </p><p class="sr-hook" data-v-bc095308> I’ve acquired my Master’s degree in <strong class="text-white" data-v-bc095308>Media Engineering</strong> in 2019. Two years earlier, I got my Bachelor’s Degree in <strong class="text-white" data-v-bc095308>Computer Sciences</strong>. </p><p class="sr-hook" data-v-bc095308> I’m enthusiastic about creating utility libraries for fellow developers. I enjoy creating things with <strong class="text-white" data-v-bc095308>Laravel &amp; VueJS</strong>. </p><p class="sr-hook" data-v-bc095308> I&#39;m a sharer who is always delighted to exchange information. Recently, I&#39;ve been more attached to sharing what I know through <strong class="text-white" data-v-bc095308>blogging</strong>. </p><p class="sr-hook" data-v-bc095308> When it comes to my philosophy, I believe in <strong class="text-white" data-v-bc095308>authenticity</strong> and <strong class="text-white" data-v-bc095308>self-worth</strong>. These views made me more involved in pushing my acquaintances and peers toward <strong class="text-white" data-v-bc095308>growth</strong> through positive and practical <strong class="text-white" data-v-bc095308>encouragement</strong>. Additionally, I&#39;m always open to different <strong class="text-white" data-v-bc095308>ideas</strong> and <strong class="text-white" data-v-bc095308>approaches</strong>. </p></div>',1);Object(a["t"])();var ge=le((function(e,t,c,i,r,o){var s=Object(a["z"])("AppTagline"),l=Object(a["A"])("lazy");return Object(a["s"])(),Object(a["d"])("div",de,[Object(a["h"])("div",be,[ue,Object(a["h"])("div",pe,[Object(a["h"])("div",he,[Object(a["h"])("div",ve,[Object(a["H"])(Object(a["h"])("div",je,null,512),[[l,n("025a"),"background-image"]]),Object(a["h"])("div",{class:["about__circle",o.circleColorClass]},null,2)])]),Object(a["h"])("div",fe,[Object(a["h"])(s)]),me])])])})),Oe=Object(a["I"])("data-v-1cb071d1");Object(a["v"])("data-v-1cb071d1");var we=Object(a["h"])("div",{class:"tagline__line"},null,-1),ye={class:"font-body text-current text-xs lg:text-sm uppercase tracking-wide m-0 transform rotate-180"};Object(a["t"])();var ke=Oe((function(e,t,n,c,i,r){return Object(a["s"])(),Object(a["d"])("div",{class:["tagline",{"is-reversed":n.reversed}]},[we,Object(a["h"])("strong",ye,Object(a["C"])(n.content),1)],2)})),_e={props:{reversed:{type:Boolean,required:!1,default:!1},content:{type:String,required:!1,default:"Full Stack web developer"}},data:function(){return{}}};n("e750");_e.render=ke,_e.__scopeId="data-v-1cb071d1";var xe=_e,Se={components:{AppTagline:xe},data:function(){return{currentCircleColorIndex:0,circleColors:["red","green","blue"]}},computed:{circleColorClass:function(){return"is-".concat(this.circleColors[this.currentCircleColorIndex])}},mounted:function(){var e=this;this.$timer=setInterval((function(){var t=e.currentCircleColorIndex+1;e.currentCircleColorIndex=t>=e.circleColors.length?0:t}),1e4)},beforeUnmount:function(){clearInterval(this.$timer)}};n("02c3");Se.render=ge,Se.__scopeId="data-v-bc095308";var Ie=Se,Ce={class:"app__slide"},ze={class:"app__slide__content"},Te={class:"space-y-12"},Ae={class:"block mb-2 sr-hook"},Pe=Object(a["g"])(" --[ "),$e={class:"inline-block w-4 text-center"},Me=Object(a["g"])(" ]-- "),Le=Object(a["h"])("h2",{class:"leading-none mb-1 text-2xl sr-hook"}," Get in touch ",-1),qe=Object(a["h"])("p",{class:"text-on-surface-subdued text-base mb-4 sr-hook"}," Currently, I’m looking for a new opportunity abroad. I’m striving to develop my skillset and explore my potentials in a new challenging environment. Despite that, my inbox is always open for any type of inquiries or a friendly greeting. ",-1),Ne=Object(a["h"])("a",{href:"mailto:mazen_touati@hotmail.com",class:"button sr-hook",rel:"noopener"},"Hello, Mazen!",-1),Re=Object(a["f"])('<nav class="md:flex items-center md:space-x-4 sr-hook"><div class="flex items-center space-x-4"><a href="https://www.linkedin.com/in/mazentouati/" target="_blank" rel="noopener">Linkedin</a><a href="https://github.com/sunchayn" target="_blank" rel="noopener">Github</a><a href="https://twitter.com/mazen_touati" target="_blank" rel="noopener">Twitter</a></div><span class="hidden md:inline">/</span><div class="flex items-center mt-4 md:mt-0 space-x-4"><a href="https://www.facebook.com/mazyn.touati" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/zamengram/" target="_blank" rel="noopener">Instagram</a></div></nav><div><small class="text-on-surface-subdued sr-hook">Designed and developed by Mazen Touati @2021 – GNU GPLv3 License</small></div>',2);function Je(e,t,n,c,i,r){return Object(a["s"])(),Object(a["d"])("div",Ce,[Object(a["h"])("div",ze,[Object(a["h"])("div",Te,[Object(a["h"])("div",null,[Object(a["h"])("span",Ae,[Pe,Object(a["h"])("span",$e,Object(a["C"])(r.spinIndicator),1),Me]),Le,qe,Ne]),Re])])])}var De={data:function(){return{currentSpinIndicatorIndex:0,spinningSequence:["\\","/","–"]}},computed:{spinIndicator:function(){return this.spinningSequence[this.currentSpinIndicatorIndex]}},mounted:function(){var e=this;this.$timer=setInterval((function(){var t=e.currentSpinIndicatorIndex+1;e.currentSpinIndicatorIndex=t>=e.spinningSequence.length?0:t}),400)},beforeUnmount:function(){clearInterval(this.$timer)}};De.render=Je;var Ue=De,Ee=Object(a["I"])("data-v-bae873f4");Object(a["v"])("data-v-bae873f4");var Fe={class:"app__slide"},He={class:"app__slide__content"},Ve={class:"space-y-12 mb-12"},Be=Object(a["h"])("div",{class:"mb-4 leading-none"},[Object(a["h"])("h2",null,"Projects"),Object(a["h"])("span",{class:"text-xs"},"Notable public projects I made at work")],-1),Ge=Object(a["h"])("div",{class:"text-4xl my-4"}," *** ",-1),We={class:"space-y-12"},Ke=Object(a["h"])("div",{class:"mb-4 leading-none"},[Object(a["h"])("h2",null,"Side Projects"),Object(a["h"])("span",{class:"text-xs"},"some of the projects that I'm proud of")],-1),Qe=Object(a["h"])("div",{class:"text-4xl my-4 sr-hook"}," *** ",-1);Object(a["t"])();var Xe=Ee((function(e,t,n,c,i,r){var o=Object(a["z"])("AppProjectPreview");return Object(a["s"])(),Object(a["d"])("div",Fe,[Object(a["h"])("div",He,[Object(a["h"])("div",Ve,[Be,(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(i.workProjects,(function(e,t){return Object(a["s"])(),Object(a["d"])(a["a"],{key:e.id},[Object(a["h"])(o,{index:t,data:e},null,8,["index","data"]),Ge],64)})),128))]),Object(a["h"])("div",We,[Ke,(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(i.sideProjects,(function(e,t){return Object(a["s"])(),Object(a["d"])(a["a"],{key:e.id},[Object(a["h"])(o,{index:i.workProjects.length+t,data:e,class:"sr-hook"},null,8,["index","data"]),Qe],64)})),128))])])])})),Ye=Object(a["I"])("data-v-49df20f9");Object(a["v"])("data-v-49df20f9");var Ze={class:"project-preview__cover-container"},et={class:"project-preview__cover"},tt={class:"project-preview__content"},nt={class:"mb-4"},at={class:"leading-none mb-2"},ct={key:0,class:"text-sm text-on-surface-subdued"},it=Object(a["h"])("span",{class:"text-pink"},"*",-1),rt={key:0,class:"flex items-center"},ot={key:0,class:"capitalize"},st=Object(a["g"])("  at  "),lt={class:"text-green capitalize"},dt={class:"mb-4"},bt={key:0,class:"text-pink"},ut={class:"mb-2 space-y-1 flex items-center flex-wrap text-sm text-on-surface-subdued"},pt={key:1};Object(a["t"])();var ht=Ye((function(e,t,c,i,r,o){var s=Object(a["A"])("lazy");return Object(a["s"])(),Object(a["d"])("div",{class:["project-preview",o.getBgColor]},[Object(a["h"])("div",Ze,[Object(a["H"])(Object(a["h"])("div",et,null,512),[[s,n("cc1f")("./"+c.data.thumbnail),"background-image"]])]),Object(a["h"])("div",tt,[Object(a["h"])("div",nt,[Object(a["h"])("h2",at,[Object(a["g"])(Object(a["C"])(c.data.title)+" ",1),c.data.title_note?(Object(a["s"])(),Object(a["d"])("span",ct,[Object(a["g"])(Object(a["C"])(c.data.title_note),1),it])):Object(a["e"])("",!0)]),c.data.company||c.data.role?(Object(a["s"])(),Object(a["d"])("small",rt,[c.data.role?(Object(a["s"])(),Object(a["d"])("span",ot,Object(a["C"])(c.data.role),1)):Object(a["e"])("",!0),c.data.company?(Object(a["s"])(),Object(a["d"])(a["a"],{key:1},[st,Object(a["h"])("span",lt,Object(a["C"])(c.data.company),1)],64)):Object(a["e"])("",!0)])):Object(a["e"])("",!0)]),Object(a["h"])("p",dt,Object(a["C"])(c.data.description),1),c.data.title_note&&c.data.title_note_desc?(Object(a["s"])(),Object(a["d"])("p",bt," *"+Object(a["C"])(c.data.title_note_desc),1)):Object(a["e"])("",!0),Object(a["h"])("div",ut,[(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(c.data.skills,(function(e){return Object(a["s"])(),Object(a["d"])("span",{key:e,class:"inline-block mr-4"},Object(a["C"])(e),1)})),128))]),c.data.links?(Object(a["s"])(),Object(a["d"])("div",pt,[c.data.links.github?(Object(a["s"])(),Object(a["d"])("a",{key:0,href:c.data.links.github,class:"text-sm",target:"_blank",rel:"noopener"},"+ Github",8,["href"])):Object(a["e"])("",!0)])):Object(a["e"])("",!0)])],2)})),vt=(n("a9e3"),{props:{data:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{bgColors:["red","green","blue","white"]}},computed:{getBgColor:function(){var e=this.index%this.bgColors.length;return"is-".concat(this.bgColors[e])}}});n("9b26");vt.render=ht,vt.__scopeId="data-v-49df20f9";var jt=vt,ft=n("3a85"),mt=n("b2db"),gt={components:{AppProjectPreview:jt},data:function(){return{workProjects:ft,sideProjects:mt}}};n("1d13");gt.render=Xe,gt.__scopeId="data-v-bae873f4";var Ot=gt,wt=n("6e55"),yt=n("2ef0"),kt=n("2c82"),_t={components:{TheNavbar:T,TheSidebar:K,IntroSlide:se,AboutSlide:Ie,ContactSlide:Ue,ProjectsSlide:Ot},setup:function(){Object(o["b"])({title:kt.title,htmlAttrs:{lang:"en"},meta:[{key:"description",name:"description",content:kt.description},{key:"image",name:"image",content:kt.square_preview},{key:"thumbnail",name:"thumbnail",content:kt.square_preview},{key:"author",name:"author",content:kt.author},{key:"canonical",name:"canonical",content:kt.url},{itemprop:"name",content:kt.title},{itemprop:"description",content:kt.description},{itemprop:"image",content:kt.square_preview},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:kt.title},{name:"twitter:description",content:kt.description},{name:"twitter:site",content:kt.twitter.handler},{name:"twitter:creator",content:kt.twitter.handler},{name:"twitter:image:src",content:kt.card_preview},{name:"twitter:image",content:kt.card_preview},{property:"og:title",content:kt.title},{property:"og:description",content:kt.description},{property:"og:image",content:kt.card_preview},{property:"og:url",content:kt.url},{property:"og:site_name",content:kt.title},{property:"og:locale",content:kt.locale},{property:"og:type",content:"website"}]})},data:function(){return{currentSlide:null,slides:[]}},mounted:function(){var e=new wt["a"];e.reveal(".sr-hook",{origin:"bottom",distance:"20px",duration:2e3}),window.addEventListener("scroll",Object(yt["throttle"])(this.handleActiveSlide,300,{leading:!1}))},methods:{setSlidesRef:function(e){e&&this.slides.push(e)},slideTo:function(e){var t=this.slides.findIndex((function(t){return t.$attrs["data-slug"]===e})),n=-1!==t?this.slides[t]:null;n&&(this.$refs.sidebar.close(),n.$el.scrollIntoView({behavior:"smooth"}))},handleActiveSlide:function(){var e=this;this.slides.forEach((function(t){var n=t.$el;if(e.isInViewport(n,100)&&(e.activateSlide(t),n.getBoundingClientRect().top<=200))return e.activateSlide(t),!0}))},activateSlide:function(e){this.currentSlide&&this.currentSlide.$el&&this.currentSlide.$el.classList.remove("is-active"),this.currentSlide=e,this.$refs.sidebar&&this.$refs.sidebar.activateSlide(e),this.$refs.navbar&&this.$refs.navbar.activateSlide(e)},isInViewport:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.getBoundingClientRect(),a=n.top,c=n.bottom;return a+t<window.innerHeight&&c>=0}}};_t.render=f;var xt=_t,St=[{path:"/",name:"Home",component:xt},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return n.e("chunks/lazy.view.404").then(n.bind(null,"8cdb"))}}],It=Object(b["a"])({history:Object(b["b"])("/"),routes:St}),Ct=It;n("4a37");i.a.polyfill(),Object(a["c"])(d).use(r["a"],{observer:!0}).use(Object(o["a"])()).use(Ct).mount("#app")},"5f3f":function(e,t,n){},6037:function(e,t,n){e.exports=n.p+"img/monetize-js.2a45f1d3.png"},6769:function(e,t,n){"use strict";n("4d8e")},8767:function(e,t,n){},9860:function(e,t,n){e.exports=n.p+"img/received.92b31717.png"},"9b19":function(e,t,n){e.exports=n.p+"img/logo.3af295a5.svg"},"9b26":function(e,t,n){"use strict";n("448a")},b2db:function(e){e.exports=JSON.parse('[{"id":1,"title":"Monetize.js","title_note":"1st prize winner","title_note_desc":"Won Grant for the Web Hackathon.","description":"An event-driven library to manage and simulate Web Monetization.","skills":["Javascript","Jest","Webpack"],"thumbnail":"side/monetize-js.png","links":{"github":"https://github.com/sunchayn/monetize.js"}},{"id":2,"title":"Received","description":"A platform that enable people to reserve a storage space and create a public gateway to receives files from their friends, co-worker or themselves.","skills":["Laravel","VueJS","TDD","SCSS","Twillio API"],"thumbnail":"side/received.png","links":{"github":"https://github.com/sunchayn/received"}}]')},bbc2:function(e,t,n){"use strict";n("41fb")},cc1f:function(e,t,n){var a={"./side/monetize-js.png":"6037","./side/received.png":"9860","./work/maft.jpg":"3ba9","./work/oribiky.png":"ee49"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id="cc1f"},e750:function(e,t,n){"use strict";n("45fb")},ee49:function(e,t,n){e.exports=n.p+"img/oribiky.4dbcee5e.png"}});