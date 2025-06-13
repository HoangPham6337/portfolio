var Bm=Object.defineProperty;var Nm=(e,t,r)=>t in e?Bm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Rs=(e,t,r)=>Nm(e,typeof t!="symbol"?t+"":t,r);import{g as Rm,w as vd,a as xd,b as Mm,r as le,i as hr,c as $a,d as Wt,I as Dm,u as Yr,j as C,e as Pm,f as Um,L as Ti,h as Ms,l as Ds,R as Ot,k as We,m as jm,F as Wm}from"./index-BgS8kKQq.js";var va,Ps;function qm(){return Ps||(Ps=1,va={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),va}var Lm=qm();const Vm=Rm(Lm);var Hm=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function Us(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},r=e.match(/<\/?([^\s]+?)[/\s>]/);if(r&&(t.name=r[1],(Vm[r[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var i=e.indexOf("-->");return{type:"comment",comment:i!==-1?e.slice(4,i):""}}for(var n=new RegExp(Hm),a=null;(a=n.exec(e))!==null;)if(a[0].trim())if(a[1]){var s=a[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),t.attrs[u[0]]=u[1],n.lastIndex--}else a[2]&&(t.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return t}var Gm=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Fm=/^\s*$/,Km=Object.create(null);function kd(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(r){var i=[];for(var n in r)i.push(n+'="'+r[n]+'"');return i.length?" "+i.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(kd,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var Zm={parse:function(e,t){t||(t={}),t.components||(t.components=Km);var r,i=[],n=[],a=-1,s=!1;if(e.indexOf("<")!==0){var u=e.indexOf("<");i.push({type:"text",content:u===-1?e:e.substring(0,u)})}return e.replace(Gm,function(l,d){if(s){if(l!=="</"+r.name+">")return;s=!1}var c,h=l.charAt(1)!=="/",f=l.startsWith("<!--"),g=d+l.length,y=e.charAt(g);if(f){var $=Us(l);return a<0?(i.push($),i):((c=n[a]).children.push($),i)}if(h&&(a++,(r=Us(l)).type==="tag"&&t.components[r.name]&&(r.type="component",s=!0),r.voidElement||s||!y||y==="<"||r.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),a===0&&i.push(r),(c=n[a-1])&&c.children.push(r),n[a]=r),(!h||r.voidElement)&&(a>-1&&(r.voidElement||r.name===l.slice(2,-1))&&(a--,r=a===-1?i:n[a]),!s&&y!=="<"&&y)){c=a===-1?i:n[a].children;var v=e.indexOf("<",g),w=e.slice(g,v===-1?void 0:v);Fm.test(w)&&(w=" "),(v>-1&&a+c.length>=0||w!==" ")&&c.push({type:"text",content:w})}}),i},stringify:function(e){return e.reduce(function(t,r){return t+kd("",r)},"")}};const xa=(e,t)=>{var i;if(!e)return!1;const r=((i=e.props)==null?void 0:i.children)??e.children;return t?r.length>0:!!r},ka=e=>{var r,i;if(!e)return[];const t=((r=e.props)==null?void 0:r.children)??e.children;return(i=e.props)!=null&&i.i18nIsDynamicList?qt(t):t},Xm=e=>Array.isArray(e)&&e.every(le.isValidElement),qt=e=>Array.isArray(e)?e:[e],Qm=(e,t)=>{const r={...t};return r.props=Object.assign(e.props,t.props),r},Sd=(e,t,r,i)=>{if(!e)return"";let n="";const a=qt(e),s=t!=null&&t.transSupportBasicHtmlNodes?t.transKeepBasicHtmlNodesFor??[]:[];return a.forEach((u,l)=>{if(hr(u)){n+=`${u}`;return}if(le.isValidElement(u)){const{props:d,type:c}=u,h=Object.keys(d).length,f=s.indexOf(c)>-1,g=d.children;if(!g&&f&&!h){n+=`<${c}/>`;return}if(!g&&(!f||h)||d.i18nIsDynamicList){n+=`<${l}></${l}>`;return}if(f&&h===1&&hr(g)){n+=`<${c}>${g}</${c}>`;return}const y=Sd(g,t,r,i);n+=`<${l}>${y}</${l}>`;return}if(u===null){$a(r,"TRANS_NULL_VALUE","Passed in a null value as child",{i18nKey:i});return}if(Wt(u)){const{format:d,...c}=u,h=Object.keys(c);if(h.length===1){const f=d?`${h[0]}, ${d}`:h[0];n+=`{{${f}}}`;return}$a(r,"TRANS_INVALID_OBJ","Invalid child - Object should only have keys {{ value, format }} (format is optional).",{i18nKey:i,child:u});return}$a(r,"TRANS_INVALID_VAR","Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",{i18nKey:i,child:u})}),n},Ym=(e,t,r,i,n,a)=>{if(t==="")return[];const s=i.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(s.map(v=>`<${v}`).join("|")).test(t);if(!e&&!u&&!a)return[t];const l={},d=v=>{qt(v).forEach(_=>{hr(_)||(xa(_)?d(ka(_)):Wt(_)&&!le.isValidElement(_)&&Object.assign(l,_))})};d(e);const c=Zm.parse(`<0>${t}</0>`),h={...l,...n},f=(v,w,_)=>{var T;const S=ka(v),k=y(S,w.children,_);return Xm(S)&&k.length===0||(T=v.props)!=null&&T.i18nIsDynamicList?S:k},g=(v,w,_,S,k)=>{v.dummy?(v.children=w,_.push(le.cloneElement(v,{key:S},k?void 0:w))):_.push(...le.Children.map([v],T=>{const I={...T.props};return delete I.i18nIsDynamicList,le.createElement(T.type,{...I,key:S,ref:T.ref},k?null:w)}))},y=(v,w,_)=>{const S=qt(v);return qt(w).reduce((T,I,z)=>{var B,j;const O=((j=(B=I.children)==null?void 0:B[0])==null?void 0:j.content)&&r.services.interpolator.interpolate(I.children[0].content,h,r.language);if(I.type==="tag"){let G=S[parseInt(I.name,10)];_.length===1&&!G&&(G=_[0][I.name]),G||(G={});const q=Object.keys(I.attrs).length!==0?Qm({props:I.attrs},G):G,F=le.isValidElement(q),ie=F&&xa(I,!0)&&!I.voidElement,re=u&&Wt(q)&&q.dummy&&!F,L=Wt(e)&&Object.hasOwnProperty.call(e,I.name);if(hr(q)){const Z=r.services.interpolator.interpolate(q,h,r.language);T.push(Z)}else if(xa(q)||ie){const Z=f(q,I,_);g(q,Z,T,z)}else if(re){const Z=y(S,I.children,_);g(q,Z,T,z)}else if(Number.isNaN(parseFloat(I.name)))if(L){const Z=f(q,I,_);g(q,Z,T,z,I.voidElement)}else if(i.transSupportBasicHtmlNodes&&s.indexOf(I.name)>-1)if(I.voidElement)T.push(le.createElement(I.name,{key:`${I.name}-${z}`}));else{const Z=y(S,I.children,_);T.push(le.createElement(I.name,{key:`${I.name}-${z}`},Z))}else if(I.voidElement)T.push(`<${I.name} />`);else{const Z=y(S,I.children,_);T.push(`<${I.name}>${Z}</${I.name}>`)}else if(Wt(q)&&!F){const Z=I.children[0]?O:null;Z&&T.push(Z)}else g(q,O,T,z,I.children.length!==1||!O)}else if(I.type==="text"){const G=i.transWrapTextNodes,q=a?i.unescape(r.services.interpolator.interpolate(I.content,h,r.language)):r.services.interpolator.interpolate(I.content,h,r.language);G?T.push(le.createElement(G,{key:`${I.name}-${z}`},q)):T.push(q)}return T},[])},$=y([{dummy:!0,children:e||[]}],c,qt(e||[]));return ka($[0])},Td=(e,t,r)=>{const i=e.key||t,n=le.cloneElement(e,{key:i});if(!n.props||!n.props.children||r.indexOf(`${t}/>`)<0&&r.indexOf(`${t} />`)<0)return n;function a(){return le.createElement(le.Fragment,null,n)}return le.createElement(a,{key:i})},Jm=(e,t)=>e.map((r,i)=>Td(r,i,t)),eg=(e,t)=>{const r={};return Object.keys(e).forEach(i=>{Object.assign(r,{[i]:Td(e[i],i,t)})}),r},tg=(e,t,r,i)=>e?Array.isArray(e)?Jm(e,t):Wt(e)?eg(e,t):(vd(r,"TRANS_INVALID_COMPONENTS",'<Trans /> "components" prop expects an object or array',{i18nKey:i}),null):null;function rg({children:e,count:t,parent:r,i18nKey:i,context:n,tOptions:a={},values:s,defaults:u,components:l,ns:d,i18n:c,t:h,shouldUnescape:f,...g}){var q,F,ie,re,L,Z;const y=c||xd();if(!y)return vd(y,"NO_I18NEXT_INSTANCE","Trans: You need to pass in an i18next instance using i18nextReactModule",{i18nKey:i}),e;const $=h||y.t.bind(y)||(K=>K),v={...Mm(),...(q=y.options)==null?void 0:q.react};let w=d||$.ns||((F=y.options)==null?void 0:F.defaultNS);w=hr(w)?[w]:w||["translation"];const _=Sd(e,v,y,i),S=u||_||v.transEmptyNodeValue||i,{hashTransKey:k}=v,T=i||(k?k(_||S):_||S);(re=(ie=y.options)==null?void 0:ie.interpolation)!=null&&re.defaultVariables&&(s=s&&Object.keys(s).length>0?{...s,...y.options.interpolation.defaultVariables}:{...y.options.interpolation.defaultVariables});const I=s||t!==void 0&&!((Z=(L=y.options)==null?void 0:L.interpolation)!=null&&Z.alwaysFormat)||!e?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},z={...a,context:n||a.context,count:t,...s,...I,defaultValue:S,ns:w},O=T?$(T,z):S,B=tg(l,O,y,i),j=Ym(B||e,O,y,v,z,f),G=r??v.defaultTransParent;return G?le.createElement(G,g,j):j}function Le({children:e,count:t,parent:r,i18nKey:i,context:n,tOptions:a={},values:s,defaults:u,components:l,ns:d,i18n:c,t:h,shouldUnescape:f,...g}){var _;const{i18n:y,defaultNS:$}=le.useContext(Dm)||{},v=c||y||xd(),w=h||(v==null?void 0:v.t.bind(v));return rg({children:e,count:t,parent:r,i18nKey:i,context:n,tOptions:a,values:s,defaults:u,components:l,ns:d||(w==null?void 0:w.ns)||$||((_=v==null?void 0:v.options)==null?void 0:_.defaultNS),i18n:v,t:h,shouldUnescape:f,...g})}const ag="/portfolio/assets/home-light-DWwPdAxq.png",ig="/portfolio/assets/home-dark-CyyPiODU.png",ng=()=>{const{t:e,i18n:t}=Yr(),r=()=>localStorage.getItem("language")||navigator.language.split("-")[0]||"en",[i,n]=le.useState(r()),a=()=>{const c=localStorage.getItem("theme");return c?c==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},[s,u]=le.useState(a()),l=c=>{n(c),t.changeLanguage(c),localStorage.setItem("language",c)};le.useEffect(()=>{s?(document.documentElement.classList.add("darkmode"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("darkmode"),localStorage.setItem("theme","light")),n(t.language)},[s,t.language]);const d=()=>{u(c=>!c)};return C.jsx("nav",{className:"fixed top-0 w-full z-40 backdrop-blur-lg border-b",style:{backgroundColor:"rgba(var(--base-color-rgb), 0.8)",borderColor:"var(--secondary-text)"},children:C.jsx("div",{className:"max-w-5xl mx-auto px-4",children:C.jsxs("div",{className:"flex justify-between items-center h-16",children:[C.jsxs("a",{href:"https://github.com/HoangPham6337",className:"flex items-center gap-2 font-bold transition-all",children:[C.jsx("img",{src:s?Pm:Um,alt:"github_logo",className:"w-6 h-6 object-contain"}),C.jsx("span",{className:"leading-none text-lg transition-colors",style:{color:"var(--highlight-green)"},onMouseEnter:c=>c.currentTarget.style.color="var(--highlight-orange)",onMouseLeave:c=>c.currentTarget.style.color="var(--highlight-green)",children:"HoangPham6337"})]}),C.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[C.jsxs(Ti,{to:"/",state:{skipLoadingAnimation:!0},className:"transition-colors",style:{color:"var(--text-color)",transition:"color 0.3s ease-in-out"},onMouseEnter:c=>c.currentTarget.style.color="var(--accent-color)",onMouseLeave:c=>c.currentTarget.style.color="var(--text-color)",children:["← ",e("navbar.return_portfolio")]}),C.jsx("button",{onClick:d,className:"p-2 rounded-full transition bg-transparent cursor-pointer",style:{transition:"color 0.3s ease-in-out"},onMouseEnter:c=>{const h=c.currentTarget.querySelector("img");h&&(h.style.filter="brightness(2)")},onMouseLeave:c=>{const h=c.currentTarget.querySelector("img");h&&(h.style.filter="brightness(1)")},children:C.jsx("img",{src:s?Ms:Ds,alt:"theme-toggle",className:"w-6 h-6"})}),C.jsxs("select",{value:i,onChange:c=>l(c.target.value),className:"border p-2 rounded bg-transparent",children:[C.jsx("option",{value:"vi",style:{backgroundColor:"var(--base-color)"},children:"🇻🇳 Tiếng Việt"}),C.jsx("option",{value:"en",style:{backgroundColor:"var(--base-color)"},children:"🇬🇧 English"}),C.jsx("option",{value:"fr",style:{backgroundColor:"var(--base-color)"},children:"🇫🇷 Français"})]})]}),C.jsxs("div",{className:"flex items-center gap-4 md:hidden",children:[C.jsxs("select",{value:i,onChange:c=>l(c.target.value),className:"w-14 h-10 md:w-auto md:h-auto bg-transparent border-0 md:border p-2 rounded cursor-pointer",children:[C.jsx("option",{value:"vi",style:{backgroundColor:"var(--base-color)"},children:"🇻🇳"}),C.jsx("option",{value:"en",style:{backgroundColor:"var(--base-color)"},children:"🇬🇧"}),C.jsx("option",{value:"fr",style:{backgroundColor:"var(--base-color)"},children:"🇫🇷"})]}),C.jsx("button",{onClick:d,className:"p-2 rounded-full transition bg-transparent cursor-pointer",style:{transition:"color 0.3s ease-in-out"},onMouseEnter:c=>{const h=c.currentTarget.querySelector("img");h&&(h.style.filter="brightness(2)")},onMouseLeave:c=>{const h=c.currentTarget.querySelector("img");h&&(h.style.filter="brightness(1)")},children:C.jsx("img",{src:s?Ms:Ds,alt:"theme-toggle",className:"w-6 h-6"})}),C.jsx(Ti,{to:"/",state:{skipLoadingAnimation:!0},className:"p-2 rounded-full transition bg-transparent cursor-pointer",children:C.jsx("img",{src:s?ig:ag,alt:"Return Home",className:"w-6 h-6"})})]})]})})})};var Id={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},js=Ot.createContext&&Ot.createContext(Id),sg=["attr","size","title"];function og(e,t){if(e==null)return{};var r=ug(e,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function ug(e,t){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},qr.apply(this,arguments)}function Ws(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function Lr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ws(Object(r),!0).forEach(function(i){lg(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ws(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function lg(e,t,r){return t=dg(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dg(e){var t=pg(e,"string");return typeof t=="symbol"?t:t+""}function pg(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ed(e){return e&&e.map((t,r)=>Ot.createElement(t.tag,Lr({key:r},t.attr),Ed(t.child)))}function Vi(e){return t=>Ot.createElement(cg,qr({attr:Lr({},e.attr)},t),Ed(e.child))}function cg(e){var t=r=>{var{attr:i,size:n,title:a}=e,s=og(e,sg),u=n||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),Ot.createElement("svg",qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,s,{className:l,style:Lr(Lr({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&Ot.createElement("title",null,a),e.children)};return js!==void 0?Ot.createElement(js.Consumer,null,r=>t(r)):t(Id)}function hg(e){return Vi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function qs(e){return Vi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}function fg(e){return Vi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}const mg=[{label:"MobileNetV3 (Full)",accuracy:75.2,f1:78.4,color:"#2E8B57"},{label:"ConvNeXt-XL (Full)",accuracy:88.2,f1:91.8,color:"#D35400"},{label:"Hybrid (50% Dom.)",accuracy:86.9,f1:89.1,color:"#C0392B"},{label:"Hybrid (80% Dom.)",accuracy:85.2,f1:85.4,color:"#C0392B"},{label:"Hybrid (90% Dom.)",accuracy:84.7,f1:84.5,color:"#C0392B"}],gg=({metric:e})=>{const t=le.useRef(null);le.useEffect(()=>{const n=We.context(()=>{We.set(".bar-fill",{width:0}),We.utils.toArray(".bar-container").forEach(a=>{const s=a.querySelector(".bar-fill"),u=a.querySelector(".bar-value"),l=parseFloat(a.dataset.value);We.to(s,{width:`${l}%`,ease:"power2.out",duration:1,scrollTrigger:{trigger:a,start:"top bottom",toggleActions:"play none none reverse"},onUpdate:function(){if(u){const d=s.offsetWidth/s.parentElement.offsetWidth*100;u.textContent=`${d.toFixed(1)}%`}},onComplete:function(){u&&(u.textContent=`${l.toFixed(1)}%`)}})})},t);return()=>n.revert()},[e]);const r=e==="accuracy"?"Accuracy Evaluation Result":"Macro F1 Evaluation Result",i=`(Values in % based on ${e==="accuracy"?"Accuracy":"Macro F1"})`;return C.jsxs("div",{className:"my-8 rounded-xl pb-4 pr-4 pl-4 pt-0.5 shadow-xl relative",ref:t,style:{backgroundImage:"linear-gradient(to right, #007AFF, #1E3A8A)"},children:[C.jsx("div",{className:"absolute inset-0 z-0 rounded-xl",style:{backgroundColor:"var(--aero-color)",backdropFilter:"blur(10px) saturate(100%) brightness(90%)",WebkitBackdropFilter:"blur(10px) saturate(100%) brightness(90%)"}}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h3",{className:"text-xl font-bold mt-0 pt-0 mb-4 text-center",style:{color:"var(--text-color)"},children:r}),C.jsx("p",{className:"text-sm md:text-lg text-center",style:{color:"var(--text-color)"},children:i}),C.jsx("p",{className:"text-sm md:text-lg text-center",style:{color:"var(--text-color)"},children:"Hybrid = MobileNetV3 + ConvNeXt"}),C.jsx("div",{className:"space-y-4",children:mg.map((n,a)=>C.jsxs("div",{className:"flex items-center space-x-4 bar-container","data-value":n[e],children:[C.jsx("div",{className:"w-1/4 text-right pr-4 text-sm font-medium",children:n.label}),C.jsx("div",{className:"relative flex-1 bg-gray-200 h-8 rounded-full overflow-hidden",children:C.jsx("div",{className:"bar-fill h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-semibold",style:{backgroundColor:n.color},children:C.jsx("span",{className:"text-sm bar-value",children:"0%"})})})]},a))})]})]})},yg=()=>{const{pathname:e}=jm();return le.useEffect(()=>{window.scrollTo(0,0)},[e]),null},_g=[{label:"MobileNetV3 (light)",inferenceTime:.078,color:"#2E8B57"},{label:"ConvNeXt-XL (heavy)",inferenceTime:3.159,color:"#D35400"}],bg=()=>{const e=le.useRef(null);return le.useEffect(()=>{const n=We.context(()=>{We.set(".bar-fill",{width:0}),We.utils.toArray(".bar-container").forEach(a=>{const s=a.querySelector(".bar-fill"),u=a.querySelector(".bar-value"),l=parseFloat(a.dataset.value),d=l/4*100;We.to(s,{width:`${d}%`,ease:"power2.out",duration:1,scrollTrigger:{trigger:a,start:"top bottom",toggleActions:"play none none reverse"},onUpdate:function(){if(u&&s.offsetWidth>0){const h=s.offsetWidth/s.parentElement.offsetWidth*l;u.textContent=`${h.toFixed(3)}s`}},onComplete:function(){u&&(u.textContent=`${l.toFixed(3)}s`)}})})},e);return()=>n.revert()},[]),C.jsxs("div",{className:"my-8 rounded-xl pb-4 pr-4 pl-4 pt-0.5 shadow-xl relative",ref:e,style:{backgroundImage:"linear-gradient(to right, #007AFF, #1E3A8A)"},children:[C.jsx("div",{className:"absolute inset-0 z-0 rounded-xl",style:{backgroundColor:"var(--aero-color)",backdropFilter:"blur(10px) saturate(100%) brightness(90%)",WebkitBackdropFilter:"blur(10px) saturate(100%) brightness(90%)"}}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h3",{className:"text-xl font-bold mt-0 pt-0 mb-4 text-center",style:{color:"var(--text-color)"},children:"Inference Time for 1 Image"}),C.jsx("p",{className:"text-sm md:text-lg mb-6 text-center",style:{color:"var(--text-color)"},children:"Results measured on Raspberry Pi 4B with 8GB of RAM"}),C.jsx("div",{className:"space-y-4",children:_g.map((i,n)=>C.jsxs("div",{className:"flex items-center space-x-4 bar-container","data-value":i.inferenceTime,children:[C.jsx("div",{className:"w-1/4 text-right pr-4 text-sm font-medium",style:{color:"var(--text-color)"},children:i.label}),C.jsx("div",{className:"relative flex-1 bg-gray-200 h-8 rounded-full overflow-hidden",children:C.jsx("div",{className:"bar-fill h-full rounded-full",style:{backgroundColor:i.color}})}),C.jsx("div",{className:"w-20",children:C.jsx("span",{className:"text-sm font-bold bar-value",children:"0.000s"})})]},n))})]})]})},wg=[{label:"Save All Images",imageSaved:4518,color:"#2E8B57"},{label:"Hybrid (50% Dom.)",imageSaved:8961,color:"#D35400"},{label:"Hybrid (80% Dom.)",imageSaved:19447,color:"#D35400"},{label:"Hybrid (90% Dom.)",imageSaved:35777,color:"#C0392B"}],$g=()=>{const e=le.useRef(null);return le.useEffect(()=>{const n=We.context(()=>{We.set(".bar-fill",{width:0}),We.utils.toArray(".bar-container").forEach(a=>{const s=a.querySelector(".bar-fill"),u=a.querySelector(".bar-value"),l=parseFloat(a.dataset.value),d=l/35777*100;We.to(s,{width:`${d}%`,ease:"power2.out",duration:1,scrollTrigger:{trigger:a,start:"top bottom",toggleActions:"play none none reverse"},onUpdate:function(){if(u&&s.offsetWidth>0){const h=s.offsetWidth/s.parentElement.offsetWidth*l;u.textContent=`${h.toFixed(0)} imgs`}},onComplete:function(){u&&(u.textContent=`${l} imgs`)}})})},e);return()=>n.revert()},[]),C.jsxs("div",{className:"my-8 rounded-xl pb-4 pr-4 pl-4 pt-0.5 shadow-xl relative",ref:e,style:{backgroundImage:"linear-gradient(to right, #007AFF, #1E3A8A)"},children:[C.jsx("div",{className:"absolute inset-0 z-0 rounded-xl",style:{backgroundColor:"var(--aero-color)",backdropFilter:"blur(10px) saturate(100%) brightness(90%)",WebkitBackdropFilter:"blur(10px) saturate(100%) brightness(90%)"}}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h3",{className:"text-xl font-bold mt-0 pt-0 mb-4 text-center",style:{color:"var(--text-color)"},children:"Total number of images processed before storing 1 GB of images"}),C.jsx("p",{className:"text-sm md:text-lg mb-6 text-center",style:{color:"var(--text-color)"},children:"Average image size: 232.192 KB"}),C.jsx("div",{className:"space-y-4",children:wg.map((i,n)=>C.jsxs("div",{className:"flex items-center space-x-4 bar-container","data-value":i.imageSaved,children:[C.jsx("div",{className:"w-1/4 text-right pr-4 text-sm font-medium",style:{color:"var(--text-color)"},children:i.label}),C.jsx("div",{className:"relative flex-1 bg-gray-200 h-8 rounded-full overflow-hidden",children:C.jsx("div",{className:"bar-fill h-full rounded-full",style:{backgroundColor:i.color}})}),C.jsx("div",{className:"w-20",children:C.jsx("span",{className:"text-sm font-bold bar-value",children:"0.000s"})})]},n))})]})]})};/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Hi=Object.defineProperty,vg=Object.getOwnPropertyDescriptor,xg=Object.getOwnPropertyNames,kg=Object.prototype.hasOwnProperty,Sg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),Ft=(e,t)=>{for(var r in t)Hi(e,r,{get:t[r],enumerable:!0})},Tg=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of xg(t))!kg.call(e,n)&&n!==r&&Hi(e,n,{get:()=>t[n],enumerable:!(i=vg(t,n))||i.enumerable});return e},fr=e=>Tg(Hi({},"__esModule",{value:!0}),e),Qt,gt,Lt,Ls,Cd,zd=U(()=>{Qt=new Map,gt=[],Lt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Qt.get(e);if(i===void 0)Qt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=gt.indexOf(e);n!==-1&&gt.splice(n,1);for(let a=0;a<gt.length;a++)if(Qt.get(gt[a]).priority<=r){gt.splice(a,0,e);return}gt.push(e)}return}throw new TypeError("not a valid backend")},Ls=async e=>{let t=Qt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Cd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?gt:r,n,a=[],s=new Set;for(let l of i){let d=await Ls(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Ig=U(()=>{zd()}),Od,Eg=U(()=>{Od="1.22.0"}),Sa,je,Ad=U(()=>{Eg(),Sa="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:Od},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Sa=e}},get logLevel(){return Sa}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),we,Cg=U(()=>{Ad(),we=je}),Bd,Nd,zg=U(()=>{Bd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=a*n,h=0,f=c,g=c*2,y=-1;s==="RGBA"?(h=0,f=c,g=c*2,y=c*3):s==="RGB"?(h=0,f=c,g=c*2):s==="RBG"&&(h=0,g=c,f=c*2);for(let $=0;$<a;$++)for(let v=0;v<n;v++){let w=(e.data[h++]-d[0])*l[0],_=(e.data[f++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],k=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+w+","+_+","+S+","+k+")",i.fillRect(v,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Nd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,g=0,y=1,$=2,v=3,w=0,_=h,S=h*2,k=-1;u==="RGBA"?(w=0,_=h,S=h*2,k=h*3):u==="RGB"?(w=0,_=h,S=h*2):u==="RBG"&&(w=0,S=h,_=h*2),i=r.createImageData(n,a);for(let T=0;T<a*n;g+=f,y+=f,$+=f,v+=f,T++)i.data[g]=(e.data[w++]-c[0])*d[0],i.data[y]=(e.data[_++]-c[1])*d[1],i.data[$]=(e.data[S++]-c[2])*d[2],i.data[v]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Ir,Rd,Md,Dd,Pd,Ud,Og=U(()=>{Gi(),Ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,f=0,g=1,y=2,$=3,v=0,w=d,_=d*2,S=-1;u==="RGB"&&(h=3,f=0,g=1,y=2,$=-1),l==="RGBA"?S=d*3:l==="RBG"?(v=0,_=d,w=d*2):l==="BGR"&&(_=0,w=d,v=d*2);for(let k=0;k<d;k++,f+=h,y+=h,g+=h,$+=h)c[v++]=(e[f]+s[0])/a[0],c[w++]=(e[g]+s[1])/a[1],c[_++]=(e[y]+s[2])/a[2],S!==-1&&$!==-1&&(c[S++]=(e[$]+s[3])/a[3]);return l==="RGBA"?new De("float32",c,[1,4,r,i]):new De("float32",c,[1,3,r,i])},Rd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=f,u.width=g}else u.tensorFormat="RGBA",u.height=f,u.width=g;h.drawImage(e,0,0),s=h.getImageData(0,0,g,f).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let f=l();f.width=h,f.height=c;let g=d(f);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,g=e.width;return h.drawImage(e,0,0,g,f),s=h.getImageData(0,0,g,f).data,u.height=f,u.width=g,Ir(s,u)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,h)=>{let f=l(),g=d(f);if(!e||!g)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,g.drawImage(y,0,0,f.width,f.height);let $=g.getImageData(0,0,f.width,f.height);u.height=f.height,u.width=f.width,c(Ir($.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Ir(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Md=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new De({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Dd=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new De({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Pd=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new De({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Ud=(e,t,r)=>new De({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Et,ur,Ta,jd,Ag=U(()=>{Et=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ur=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ta=!1,jd=()=>{if(!Ta){Ta=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Et.set("int64",BigInt64Array),ur.set(BigInt64Array,"int64")),t&&(Et.set("uint64",BigUint64Array),ur.set(BigUint64Array,"uint64")),i?(Et.set("float16",r),ur.set(r,"float16")):Et.set("float16",Uint16Array)}}}),Wd,qd,Bg=U(()=>{Gi(),Wd=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},qd=(e,t)=>{switch(e.location){case"cpu":return new De(e.type,e.data,t);case"cpu-pinned":return new De({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new De({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new De({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new De({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),De,Gi=U(()=>{zg(),Og(),Ag(),Bg(),De=class{constructor(e,t,r){jd();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Et.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Et.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=ur.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let a=Wd(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Rd(e,t)}static fromTexture(e,t){return Md(e,t)}static fromGpuBuffer(e,t){return Dd(e,t)}static fromMLTensor(e,t){return Pd(e,t)}static fromPinnedBuffer(e,t,r){return Ud(e,t,r)}toDataURL(e){return Bd(this,e)}toImageData(e){return Nd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return qd(this,e)}}}),Xe,Ld=U(()=>{Gi(),Xe=De}),Vr,Ia,at,Qe,Vd=U(()=>{Ad(),Vr=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ia=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Vr("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},at=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Ia("BEGIN",e)},Qe=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Ia("END",e)}}),Hd,Ng=U(()=>{zd(),Ld(),Vd(),Hd=class Gd{constructor(t){this.handler=t}async run(t,r,i){at();let n={},a={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let f=r[h];(f===null||f instanceof Xe)&&(d=!0,s=!1,n[h]=f)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,a),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Xe?l[d]=c:l[d]=new Xe(c.type,c.data,c.dims)}return Qe(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){at();let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-h,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Cd(s),d=await u.createInferenceSessionHandler(a,l);return Qe(),new Gd(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Fi,Rg=U(()=>{Ng(),Fi=Hd}),Mg=U(()=>{}),Dg=U(()=>{}),Pg=U(()=>{}),Ug=U(()=>{}),Fd={};Ft(Fd,{InferenceSession:()=>Fi,TRACE:()=>Vr,TRACE_FUNC_BEGIN:()=>at,TRACE_FUNC_END:()=>Qe,Tensor:()=>Xe,env:()=>we,registerBackend:()=>Lt});var Ye=U(()=>{Ig(),Cg(),Rg(),Ld(),Mg(),Dg(),Vd(),Pg(),Ug()}),Ki=U(()=>{}),Kd={};Ft(Kd,{default:()=>Zd});var Ea,Ca,Zd,jg=U(()=>{var e;ef(),Rt(),Zi(),Ea="ort-wasm-proxy-worker",Ca=((e=globalThis.self)==null?void 0:e.name)===Ea,Ca&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Xi(i.wasm).then(()=>{fn(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;mn(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=Qr(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;gn(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":yn(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:u,options:l}=i;_n(n,a,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},wn([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":bn(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Zd=Ca?null:t=>new Worker(t??Me,{type:"module",name:Ea})}),Xd={};Ft(Xd,{default:()=>Qd});var za,Oa,Qd,Vs,Wg=U(()=>{var e,t;Oa=(za=import.meta.url,async function(r={}){var Ns;var i,n,a=r,s=new Promise((o,p)=>{i=o,n=p}),u=typeof window=="object",l=typeof WorkerGlobalScope<"u",d=l&&((Ns=self.name)==null?void 0:Ns.startsWith("em-pthread"));a.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(a.Fb||(a.Fb=new Map)).set(o,p)},a.unmountExternalData=()=>{delete a.Fb};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let h=o=>async(...p)=>{var m;try{if(a.Gb)throw Error("Session already started");let b=a.Gb={ec:p[0],errors:[]},x=await o(...p);if(a.Gb!==b)throw Error("Session mismatch");(m=a.Kb)==null||m.flush();let E=b.errors;if(0<E.length){let N=await Promise.all(E);if(N=N.filter(P=>P),0<N.length)throw Error(N.join(`
`))}return x}finally{a.Gb=null}};a.jsepInit=(o,p)=>{if(o==="webgpu"){[a.Kb,a.Vb,a.Zb,a.Lb,a.Yb,a.kb,a.$b,a.bc,a.Wb,a.Xb,a.ac]=p;let m=a.Kb;a.jsepRegisterBuffer=(b,x,E,N)=>m.registerBuffer(b,x,E,N),a.jsepGetBuffer=b=>m.getBuffer(b),a.jsepCreateDownloader=(b,x,E)=>m.createDownloader(b,x,E),a.jsepOnCreateSession=b=>{m.onCreateSession(b)},a.jsepOnReleaseSession=b=>{m.onReleaseSession(b)},a.jsepOnRunStart=b=>m.onRunStart(b),a.cc=(b,x)=>{m.upload(b,x)}}else if(o==="webnn"){let m=p[0];[a.oc,a.Ob,a.webnnEnsureTensor,a.Pb,a.webnnDownloadTensor]=p.slice(1),a.webnnReleaseTensorId=a.Ob,a.webnnUploadTensor=a.Pb,a.webnnOnRunStart=b=>m.onRunStart(b),a.webnnOnRunEnd=m.onRunEnd.bind(m),a.webnnRegisterMLContext=(b,x)=>{m.registerMLContext(b,x)},a.webnnOnReleaseSession=b=>{m.onReleaseSession(b)},a.webnnCreateMLTensorDownloader=(b,x)=>m.createMLTensorDownloader(b,x),a.webnnRegisterMLTensor=(b,x,E,N)=>m.registerMLTensor(b,x,E,N),a.webnnCreateMLContext=b=>m.createMLContext(b),a.webnnRegisterMLConstant=(b,x,E,N,P,H)=>m.registerMLConstant(b,x,E,N,P,a.Fb,H),a.webnnRegisterGraphInput=m.registerGraphInput.bind(m),a.webnnIsGraphInput=m.isGraphInput.bind(m),a.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),a.webnnIsGraphOutput=m.isGraphOutput.bind(m),a.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),a.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let f=()=>{let o=(p,m,b)=>(...x)=>{let E=et,N=m==null?void 0:m();x=p(...x);let P=m==null?void 0:m();return N!==P&&(p=P,b(N),m=b=null),et!=E?new Promise((H,Y)=>{ha={resolve:H,reject:Y}}):x};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])a[p]=o(a[p],()=>a[p],m=>a[p]=m)})(),h!==void 0&&(a._OrtRun=h(a._OrtRun),a._OrtRunWithBinding=h(a._OrtRunWithBinding)),f=void 0};a.asyncInit=()=>{f==null||f()};var g,y,$=Object.assign({},a),v=(o,p)=>{throw p},w="";(u||l)&&(l?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),za&&(w=za),w=w.startsWith("blob:")?"":w.slice(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(y=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),g=async o=>{if(M(o))return new Promise((m,b)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):b(x.status)},x.onerror=b,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var _=console.log.bind(console),S=console.error.bind(console),k=_,T=S;Object.assign(a,$),$=null;var I,z,O,B,j,G,q,F,ie,re,L,Z,K,J=a.wasmBinary,ye=!1,M=o=>o.startsWith("file://");function W(){return I.buffer!=B.buffer&&me(),B}function V(){return I.buffer!=B.buffer&&me(),j}function ne(){return I.buffer!=B.buffer&&me(),G}function Ee(){return I.buffer!=B.buffer&&me(),q}function D(){return I.buffer!=B.buffer&&me(),F}function fe(){return I.buffer!=B.buffer&&me(),ie}function Dt(){return I.buffer!=B.buffer&&me(),re}function Oe(){return I.buffer!=B.buffer&&me(),K}if(d){let o=function(p){try{var m=p.data,b=m.Cb;if(b==="load"){let x=[];self.onmessage=E=>x.push(E),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let E of x)o(E);self.onmessage=o};for(let E of m.Sb)a[E]&&!a[E].proxy||(a[E]=(...N)=>{postMessage({Cb:"callHandler",Rb:E,args:N})},E=="print"&&(k=a[E]),E=="printErr"&&(T=a[E]));I=m.lc,me(),qe(m.mc)}else if(b==="run"){mf(m.Bb),ya(m.Bb,0,0,1,0,0),En(),pa(m.Bb),it||(vs(),it=!0);try{gf(m.hc,m.Ib)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(b==="checkMailbox"?it&&gr():b&&(T(`worker: received unknown command ${b}`),T(m)))}catch(x){throw xs(),x}};var qe,it=!1;T=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:kr()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function me(){var o=I.buffer;a.HEAP8=B=new Int8Array(o),a.HEAP16=G=new Int16Array(o),a.HEAPU8=j=new Uint8Array(o),a.HEAPU16=q=new Uint16Array(o),a.HEAP32=F=new Int32Array(o),a.HEAPU32=ie=new Uint32Array(o),a.HEAPF32=re=new Float32Array(o),a.HEAPF64=K=new Float64Array(o),a.HEAP64=L=new BigInt64Array(o),a.HEAPU64=Z=new BigUint64Array(o)}function ve(){d?startWorker(a):te.Da()}d||(I=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),me());var Re,$t=0,vt=null;function $n(){if(--$t==0&&vt){var o=vt;vt=null,o()}}function dt(o){throw T(o="Aborted("+o+")"),ye=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),n(o),o}function vn(){return{a:{L:ff,Aa:hf,b:_f,$:An,A:Rn,pa:Mn,X:Pn,Z:Un,qa:jn,na:Wn,ga:qn,ma:Ln,J:Vn,Y:Hn,V:Gn,oa:Fn,W:Kn,va:bf,E:wf,Q:$f,O:xf,D:Sf,v:Tf,r:If,P:Ef,z:Rf,R:Mf,ja:Df,T:Pf,aa:Uf,M:jf,F:Wf,ia:pa,sa:qf,t:Lf,Ca:Vf,w:Ff,o:Kf,m:Xf,c:ua,Ba:Qf,n:Yf,j:tm,u:rm,p:am,f:im,s:nm,l:sm,e:om,k:um,h:lm,g:dm,d:pm,da:cm,ea:hm,fa:fm,ba:us,ca:ls,N:ds,xa:gm,ua:_m,i:bm,C:wm,G:$m,ta:ym,x:vm,ra:xm,U:km,q:mm,y:Sm,K:Tm,S:Im,za:Em,ya:Cm,ka:fs,la:ms,_:ia,B:gs,I:ys,ha:_s,H:bs,a:I,wa:aa}}}var ea={840156:(o,p,m,b,x)=>{if(a===void 0||!a.Fb)return 1;if((o=Se(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=a.Fb.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),b=Number(b>>>0),p+m>o.byteLength)return 3;try{let E=o.subarray(p,p+m);switch(x){case 0:V().set(E,b>>>0);break;case 1:a.nc?a.nc(b,E):a.cc(b,E);break;default:return 4}return 0}catch{return 4}},840980:(o,p,m)=>{a.Pb(o,V().subarray(p>>>0,p+m>>>0))},841044:()=>a.oc(),841086:o=>{a.Ob(o)},841123:()=>{a.Wb()},841154:()=>{a.Xb()},841183:()=>{a.ac()},841208:o=>a.Vb(o),841241:o=>a.Zb(o),841273:(o,p,m)=>{a.Lb(Number(o),Number(p),Number(m),!0)},841336:(o,p,m)=>{a.Lb(Number(o),Number(p),Number(m))},841393:()=>typeof wasmOffsetConverter<"u",841450:o=>{a.kb("Abs",o,void 0)},841501:o=>{a.kb("Neg",o,void 0)},841552:o=>{a.kb("Floor",o,void 0)},841605:o=>{a.kb("Ceil",o,void 0)},841657:o=>{a.kb("Reciprocal",o,void 0)},841715:o=>{a.kb("Sqrt",o,void 0)},841767:o=>{a.kb("Exp",o,void 0)},841818:o=>{a.kb("Erf",o,void 0)},841869:o=>{a.kb("Sigmoid",o,void 0)},841924:(o,p,m)=>{a.kb("HardSigmoid",o,{alpha:p,beta:m})},842003:o=>{a.kb("Log",o,void 0)},842054:o=>{a.kb("Sin",o,void 0)},842105:o=>{a.kb("Cos",o,void 0)},842156:o=>{a.kb("Tan",o,void 0)},842207:o=>{a.kb("Asin",o,void 0)},842259:o=>{a.kb("Acos",o,void 0)},842311:o=>{a.kb("Atan",o,void 0)},842363:o=>{a.kb("Sinh",o,void 0)},842415:o=>{a.kb("Cosh",o,void 0)},842467:o=>{a.kb("Asinh",o,void 0)},842520:o=>{a.kb("Acosh",o,void 0)},842573:o=>{a.kb("Atanh",o,void 0)},842626:o=>{a.kb("Tanh",o,void 0)},842678:o=>{a.kb("Not",o,void 0)},842729:(o,p,m)=>{a.kb("Clip",o,{min:p,max:m})},842798:o=>{a.kb("Clip",o,void 0)},842850:(o,p)=>{a.kb("Elu",o,{alpha:p})},842908:o=>{a.kb("Gelu",o,void 0)},842960:o=>{a.kb("Relu",o,void 0)},843012:(o,p)=>{a.kb("LeakyRelu",o,{alpha:p})},843076:(o,p)=>{a.kb("ThresholdedRelu",o,{alpha:p})},843146:(o,p)=>{a.kb("Cast",o,{to:p})},843204:o=>{a.kb("Add",o,void 0)},843255:o=>{a.kb("Sub",o,void 0)},843306:o=>{a.kb("Mul",o,void 0)},843357:o=>{a.kb("Div",o,void 0)},843408:o=>{a.kb("Pow",o,void 0)},843459:o=>{a.kb("Equal",o,void 0)},843512:o=>{a.kb("Greater",o,void 0)},843567:o=>{a.kb("GreaterOrEqual",o,void 0)},843629:o=>{a.kb("Less",o,void 0)},843681:o=>{a.kb("LessOrEqual",o,void 0)},843740:(o,p,m,b,x)=>{a.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},843915:(o,p,m,b,x)=>{a.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844089:(o,p,m,b,x)=>{a.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844263:(o,p,m,b,x)=>{a.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844438:(o,p,m,b,x)=>{a.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844612:(o,p,m,b,x)=>{a.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844785:(o,p,m,b,x)=>{a.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},844958:(o,p,m,b,x)=>{a.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},845135:(o,p,m,b,x)=>{a.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},845315:(o,p,m,b,x)=>{a.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},845495:o=>{a.kb("Where",o,void 0)},845548:(o,p,m)=>{a.kb("Transpose",o,{perm:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},845672:(o,p,m,b)=>{a.kb("DepthToSpace",o,{blocksize:p,mode:Se(m),format:b?"NHWC":"NCHW"})},845805:(o,p,m,b)=>{a.kb("DepthToSpace",o,{blocksize:p,mode:Se(m),format:b?"NHWC":"NCHW"})},845938:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce,Ut)=>{a.kb("ConvTranspose",o,{format:H?"NHWC":"NCHW",autoPad:p,dilations:[m],group:b,kernelShape:[x],pads:[E,N],strides:[P],wIsConst:()=>!!W()[Y>>>0],outputPadding:ue?Array.from(D().subarray(Number(ue)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from(D().subarray(Number(_e)>>>0,Number(Ce)>>>0)):[],activation:Se(Ut)})},846371:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:b,kernelShape:Array.from(D().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(D().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(D().subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!W()[H>>>0],outputPadding:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],outputShape:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Se(Ce)})},847032:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce,Ut)=>{a.kb("ConvTranspose",o,{format:H?"NHWC":"NCHW",autoPad:p,dilations:[m],group:b,kernelShape:[x],pads:[E,N],strides:[P],wIsConst:()=>!!W()[Y>>>0],outputPadding:ue?Array.from(D().subarray(Number(ue)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from(D().subarray(Number(_e)>>>0,Number(Ce)>>>0)):[],activation:Se(Ut)})},847465:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:b,kernelShape:Array.from(D().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(D().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(D().subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!W()[H>>>0],outputPadding:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],outputShape:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Se(Ce)})},848126:(o,p)=>{a.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848217:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("AveragePool",o,{format:Ce?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:b,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[],kernel_shape:P?Array.from(D().subarray(Number(P)>>>0,Number(H)>>>0)):[],pads:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},848696:(o,p)=>{a.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848787:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("AveragePool",o,{format:Ce?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:b,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[],kernel_shape:P?Array.from(D().subarray(Number(P)>>>0,Number(H)>>>0)):[],pads:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},849266:(o,p)=>{a.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849353:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("MaxPool",o,{format:Ce?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:b,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[],kernel_shape:P?Array.from(D().subarray(Number(P)>>>0,Number(H)>>>0)):[],pads:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},849828:(o,p)=>{a.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849915:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce)=>{a.kb("MaxPool",o,{format:Ce?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:b,storage_order:x,dilations:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[],kernel_shape:P?Array.from(D().subarray(Number(P)>>>0,Number(H)>>>0)):[],pads:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(D().subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},850390:(o,p,m,b,x)=>{a.kb("Gemm",o,{alpha:p,beta:m,transA:b,transB:x})},850494:o=>{a.kb("MatMul",o,void 0)},850548:(o,p,m,b)=>{a.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:b})},850656:(o,p,m,b)=>{a.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:b})},850764:(o,p)=>{a.kb("Softmax",o,{axis:p})},850827:(o,p)=>{a.kb("Concat",o,{axis:p})},850887:(o,p,m,b,x)=>{a.kb("Split",o,{axis:p,numOutputs:m,splitSizes:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},851043:o=>{a.kb("Expand",o,void 0)},851097:(o,p)=>{a.kb("Gather",o,{axis:Number(p)})},851168:(o,p)=>{a.kb("GatherElements",o,{axis:Number(p)})},851247:(o,p)=>{a.kb("GatherND",o,{batch_dims:Number(p)})},851326:(o,p,m,b,x,E,N,P,H,Y,ue)=>{a.kb("Resize",o,{antialias:p,axes:m?Array.from(D().subarray(Number(m)>>>0,Number(b)>>>0)):[],coordinateTransformMode:Se(x),cubicCoeffA:E,excludeOutside:N,extrapolationValue:P,keepAspectRatioPolicy:Se(H),mode:Se(Y),nearestMode:Se(ue)})},851688:(o,p,m,b,x,E,N)=>{a.kb("Slice",o,{starts:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[],axes:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[]})},851952:o=>{a.kb("Tile",o,void 0)},852004:(o,p,m)=>{a.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},852118:(o,p,m)=>{a.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},852232:o=>{a.kb("Range",o,void 0)},852285:(o,p)=>{a.kb("Einsum",o,{equation:Se(p)})},852366:(o,p,m,b,x)=>{a.kb("Pad",o,{mode:p,value:m,pads:b?Array.from(D().subarray(Number(b)>>>0,Number(x)>>>0)):[]})},852509:(o,p,m,b,x,E)=>{a.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!b,format:E?"NHWC":"NCHW"})},852678:(o,p,m,b,x,E)=>{a.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!b,format:E?"NHWC":"NCHW"})},852847:(o,p,m)=>{a.kb("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},852944:(o,p,m)=>{a.kb("DequantizeLinear",o,{axis:p,blockSize:m})},853034:(o,p,m,b,x)=>{a.kb("GridSample",o,{align_corners:p,mode:Se(m),padding_mode:Se(b),format:x?"NHWC":"NCHW"})},853204:(o,p,m,b,x)=>{a.kb("GridSample",o,{align_corners:p,mode:Se(m),padding_mode:Se(b),format:x?"NHWC":"NCHW"})},853374:(o,p)=>{a.kb("ScatterND",o,{reduction:Se(p)})},853459:(o,p,m,b,x,E,N,P,H)=>{a.kb("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:b,scale:x,doRotary:E,qkvHiddenSizes:N?Array.from(D().subarray(Number(P)>>>0,Number(P)+N>>>0)):[],pastPresentShareBuffer:!!H})},853731:o=>{a.kb("BiasAdd",o,void 0)},853786:o=>{a.kb("BiasSplitGelu",o,void 0)},853847:o=>{a.kb("FastGelu",o,void 0)},853903:(o,p,m,b,x,E,N,P,H,Y,ue,pe,_e,Ce,Ut,Am)=>{a.kb("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(D().subarray(Number(m)>>>0,Number(b)>>>0)):[],group:x,kernel_shape:E?Array.from(D().subarray(Number(E)>>>0,Number(N)>>>0)):[],pads:P?Array.from(D().subarray(Number(P)>>>0,Number(H)>>>0)):[],strides:Y?Array.from(D().subarray(Number(Y)>>>0,Number(ue)>>>0)):[],w_is_const:()=>!!W()[Number(_e)>>>0],activation:Se(Ce),activation_params:Ut?Array.from(Dt().subarray(Number(Ut)>>>0,Number(Am)>>>0)):[]})},854487:o=>{a.kb("Gelu",o,void 0)},854539:(o,p,m,b,x,E,N,P,H)=>{a.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:b,softcap:x,doRotary:E,rotaryInterleaved:N,smoothSoftmax:P,localWindowSize:H})},854756:(o,p,m,b)=>{a.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!b})},854867:(o,p,m,b)=>{a.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!b})},854978:(o,p,m,b,x,E)=>{a.kb("MatMulNBits",o,{k:p,n:m,accuracyLevel:b,bits:x,blockSize:E})},855105:(o,p,m,b,x,E)=>{a.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:b,scale:x,doRotary:E})},855264:(o,p)=>{a.kb("QuickGelu",o,{alpha:p})},855328:(o,p,m,b,x)=>{a.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:b,scale:x})},855467:(o,p,m)=>{a.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},855569:(o,p,m)=>{a.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},855671:(o,p,m,b)=>{a.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:b})},855792:o=>{a.$b(o)},855826:(o,p)=>a.bc(Number(o),Number(p),a.Gb.ec,a.Gb.errors)};function hf(o,p,m){return rs(async()=>{await a.Yb(Number(o),Number(p),Number(m))})}function ff(){return typeof wasmOffsetConverter<"u"}class ta{constructor(p){Rs(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var xn=o=>{o.terminate(),o.onmessage=()=>{}},ra=[],kn=o=>{ct.length==0&&(zn(),Cn(ct[0]));var p=ct.pop();if(!p)return 6;Kt.push(p),xt[o.Bb]=p,p.Bb=o.Bb;var m={Cb:"run",hc:o.fc,Ib:o.Ib,Bb:o.Bb};return p.postMessage(m,o.Nb),0},pt=0,$e=(o,p,...m)=>{for(var b=2*m.length,x=wa(),E=ba(8*b),N=E>>>3,P=0;P<m.length;P++){var H=m[P];typeof H=="bigint"?(L[N+2*P]=1n,L[N+2*P+1]=H):(L[N+2*P]=0n,Oe()[N+2*P+1>>>0]=H)}return o=ks(o,0,b,E,p),Tr(x),o};function aa(o){if(d)return $e(0,1,o);if(O=o,!(0<pt)){for(var p of Kt)xn(p);for(p of ct)xn(p);ct=[],Kt=[],xt={},ye=!0}v(0,new ta(o))}function Sn(o){if(d)return $e(1,0,o);ia(o)}var ia=o=>{if(O=o,d)throw Sn(o),"unwind";aa(o)},ct=[],Kt=[],Tn=[],xt={},In=o=>{var p=o.Bb;delete xt[p],ct.push(o),Kt.splice(Kt.indexOf(o),1),o.Bb=0,Ss(p)};function En(){Tn.forEach(o=>o())}var Cn=o=>new Promise(p=>{o.onmessage=x=>{var E=(x=x.data).Cb;if(x.Hb&&x.Hb!=kr()){var N=xt[x.Hb];N?N.postMessage(x,x.Nb):T(`Internal error! Worker sent a message "${E}" to target pthread ${x.Hb}, but that thread no longer exists!`)}else E==="checkMailbox"?gr():E==="spawnThread"?kn(x):E==="cleanupThread"?In(xt[x.ic]):E==="loaded"?(o.loaded=!0,p(o)):E==="alert"?alert(`Thread ${x.jc}: ${x.text}`):x.target==="setimmediate"?o.postMessage(x):E==="callHandler"?a[x.Rb](...x.args):E&&T(`worker sent an unknown command ${E}`)},o.onerror=x=>{throw T(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,b=[];for(m of[])a.propertyIsEnumerable(m)&&b.push(m);o.postMessage({Cb:"load",Sb:b,lc:I,mc:z})});function zn(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ct.push(o)}var mf=o=>{me();var p=fe()[o+52>>>2>>>0];o=fe()[o+56>>>2>>>0],Es(p,p-o),Tr(p)},gf=(o,p)=>{pt=0,o=Cs(o,p),0<pt?O=o:_a(o)};class yf{constructor(p){this.Jb=p-24}}function _f(o,p,m){var b=new yf(o>>>=0);throw p>>>=0,m>>>=0,fe()[b.Jb+16>>>2>>>0]=0,fe()[b.Jb+4>>>2>>>0]=p,fe()[b.Jb+8>>>2>>>0]=m,o}function On(o,p,m,b){return d?$e(2,1,o,p,m,b):An(o,p,m,b)}function An(o,p,m,b){if(o>>>=0,m>>>=0,b>>>=0,c===void 0)return 6;var x=[];return d&&x.length===0?On(o,p>>>=0,m,b):(o={fc:m,Bb:o,Ib:b,Nb:x},d?(o.Cb="spawnThread",postMessage(o,x),0):kn(o))}var Bn=typeof TextDecoder<"u"?new TextDecoder:void 0,Nn=(o,p=0,m=NaN)=>{var b=(p>>>=0)+m;for(m=p;o[m]&&!(m>=b);)++m;if(16<m-p&&o.buffer&&Bn)return Bn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(b="";p<m;){var x=o[p++];if(128&x){var E=63&o[p++];if((224&x)==192)b+=String.fromCharCode((31&x)<<6|E);else{var N=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|N:(7&x)<<18|E<<12|N<<6|63&o[p++])?b+=String.fromCharCode(x):(x-=65536,b+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else b+=String.fromCharCode(x)}return b},Se=(o,p)=>(o>>>=0)?Nn(V(),o,p):"";function Rn(o,p,m){return d?$e(3,1,o,p,m):0}function Mn(o,p){if(d)return $e(4,1,o,p)}var Dn=o=>{for(var p=0,m=0;m<o.length;++m){var b=o.charCodeAt(m);127>=b?p++:2047>=b?p+=2:55296<=b&&57343>=b?(p+=4,++m):p+=3}return p},Pt=(o,p,m)=>{var b=V();if(p>>>=0,0<m){var x=p;m=p+m-1;for(var E=0;E<o.length;++E){var N=o.charCodeAt(E);if(55296<=N&&57343>=N&&(N=65536+((1023&N)<<10)|1023&o.charCodeAt(++E)),127>=N){if(p>=m)break;b[p++>>>0]=N}else{if(2047>=N){if(p+1>=m)break;b[p++>>>0]=192|N>>6}else{if(65535>=N){if(p+2>=m)break;b[p++>>>0]=224|N>>12}else{if(p+3>=m)break;b[p++>>>0]=240|N>>18,b[p++>>>0]=128|N>>12&63}b[p++>>>0]=128|N>>6&63}b[p++>>>0]=128|63&N}}b[p>>>0]=0,o=p-x}else o=0;return o};function Pn(o,p){if(d)return $e(5,1,o,p)}function Un(o,p,m){if(d)return $e(6,1,o,p,m)}function jn(o,p,m){return d?$e(7,1,o,p,m):0}function Wn(o,p){if(d)return $e(8,1,o,p)}function qn(o,p,m){if(d)return $e(9,1,o,p,m)}function Ln(o,p,m,b){if(d)return $e(10,1,o,p,m,b)}function Vn(o,p,m,b){if(d)return $e(11,1,o,p,m,b)}function Hn(o,p,m,b){if(d)return $e(12,1,o,p,m,b)}function Gn(o){if(d)return $e(13,1,o)}function Fn(o,p){if(d)return $e(14,1,o,p)}function Kn(o,p,m){if(d)return $e(15,1,o,p,m)}var Zn,ht,bf=()=>dt(""),Je=o=>{for(var p="";V()[o>>>0];)p+=Zn[V()[o++>>>0]];return p},na={},sa={};function nt(o,p,m={}){return function(b,x,E={}){var N=x.name;if(!b)throw new ht(`type "${N}" must have a positive integer typeid pointer`);if(sa.hasOwnProperty(b)){if(E.Tb)return;throw new ht(`Cannot register type '${N}' twice`)}sa[b]=x,na.hasOwnProperty(b)&&(x=na[b],delete na[b],x.forEach(P=>P()))}(o,p,m)}var Xn=(o,p,m)=>{switch(p){case 1:return m?b=>W()[b>>>0]:b=>V()[b>>>0];case 2:return m?b=>ne()[b>>>1>>>0]:b=>Ee()[b>>>1>>>0];case 4:return m?b=>D()[b>>>2>>>0]:b=>fe()[b>>>2>>>0];case 8:return m?b=>L[b>>>3]:b=>Z[b>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function wf(o,p,m){m>>>=0,nt(o>>>=0,{name:p=Je(p>>>0),fromWireType:b=>b,toWireType:function(b,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":(b=typeof x)=="object"||b==="array"||b==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},Db:ft,readValueFromPointer:Xn(p,m,p.indexOf("u")==-1),Eb:null})}var ft=8;function $f(o,p,m,b){nt(o>>>=0,{name:p=Je(p>>>0),fromWireType:function(x){return!!x},toWireType:function(x,E){return E?m:b},Db:ft,readValueFromPointer:function(x){return this.fromWireType(V()[x>>>0])},Eb:null})}var oa=[],st=[];function ua(o){9<(o>>>=0)&&--st[o+1]==0&&(st[o]=void 0,oa.push(o))}var Ae=o=>{if(!o)throw new ht("Cannot use deleted val. handle = "+o);return st[o]},Ue=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=oa.pop()||st.length;return st[p]=o,st[p+1]=1,p}};function la(o){return this.fromWireType(fe()[o>>>2>>>0])}var vf={name:"emscripten::val",fromWireType:o=>{var p=Ae(o);return ua(o),p},toWireType:(o,p)=>Ue(p),Db:ft,readValueFromPointer:la,Eb:null};function xf(o){return nt(o>>>0,vf)}var kf=(o,p)=>{switch(p){case 4:return function(m){return this.fromWireType(Dt()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(Oe()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Sf(o,p,m){m>>>=0,nt(o>>>=0,{name:p=Je(p>>>0),fromWireType:b=>b,toWireType:(b,x)=>x,Db:ft,readValueFromPointer:kf(p,m),Eb:null})}function Tf(o,p,m,b,x){if(o>>>=0,m>>>=0,p=Je(p>>>0),x===-1&&(x=4294967295),x=P=>P,b===0){var E=32-8*m;x=P=>P<<E>>>E}var N=p.includes("unsigned")?function(P,H){return H>>>0}:function(P,H){return H};nt(o,{name:p,fromWireType:x,toWireType:N,Db:ft,readValueFromPointer:Xn(p,m,b!==0),Eb:null})}function If(o,p,m){function b(E){var N=fe()[E>>>2>>>0];return E=fe()[E+4>>>2>>>0],new x(W().buffer,E,N)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];nt(o>>>=0,{name:m=Je(m>>>0),fromWireType:b,Db:ft,readValueFromPointer:b},{Tb:!0})}function Ef(o,p){nt(o>>>=0,{name:p=Je(p>>>0),fromWireType:function(m){for(var b,x=fe()[m>>>2>>>0],E=m+4,N=E,P=0;P<=x;++P){var H=E+P;P!=x&&V()[H>>>0]!=0||(N=Se(N,H-N),b===void 0?b=N:(b+="\0",b+=N),N=H+1)}return tt(m),b},toWireType:function(m,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var x=typeof b=="string";if(!(x||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array))throw new ht("Cannot pass non-string to std::string");var E=x?Dn(b):b.length,N=Sr(4+E+1),P=N+4;if(fe()[N>>>2>>>0]=E,x)Pt(b,P,E+1);else if(x)for(x=0;x<E;++x){var H=b.charCodeAt(x);if(255<H)throw tt(N),new ht("String has UTF-16 code units that do not fit in 8 bits");V()[P+x>>>0]=H}else for(x=0;x<E;++x)V()[P+x>>>0]=b[x];return m!==null&&m.push(tt,N),N},Db:ft,readValueFromPointer:la,Eb(m){tt(m)}})}var Qn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Cf=(o,p)=>{for(var m=o>>1,b=m+p/2;!(m>=b)&&Ee()[m>>>0];)++m;if(32<(m<<=1)-o&&Qn)return Qn.decode(V().slice(o,m));for(m="",b=0;!(b>=p/2);++b){var x=ne()[o+2*b>>>1>>>0];if(x==0)break;m+=String.fromCharCode(x)}return m},zf=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var b=p;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var E=o.charCodeAt(x);ne()[p>>>1>>>0]=E,p+=2}return ne()[p>>>1>>>0]=0,p-b},Of=o=>2*o.length,Af=(o,p)=>{for(var m=0,b="";!(m>=p/4);){var x=D()[o+4*m>>>2>>>0];if(x==0)break;++m,65536<=x?(x-=65536,b+=String.fromCharCode(55296|x>>10,56320|1023&x)):b+=String.fromCharCode(x)}return b},Bf=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var b=p;m=b+m-4;for(var x=0;x<o.length;++x){var E=o.charCodeAt(x);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&o.charCodeAt(++x)),D()[p>>>2>>>0]=E,(p+=4)+4>m)break}return D()[p>>>2>>>0]=0,p-b},Nf=o=>{for(var p=0,m=0;m<o.length;++m){var b=o.charCodeAt(m);55296<=b&&57343>=b&&++m,p+=4}return p};function Rf(o,p,m){if(o>>>=0,p>>>=0,m=Je(m>>>=0),p===2)var b=Cf,x=zf,E=Of,N=P=>Ee()[P>>>1>>>0];else p===4&&(b=Af,x=Bf,E=Nf,N=P=>fe()[P>>>2>>>0]);nt(o,{name:m,fromWireType:P=>{for(var H,Y=fe()[P>>>2>>>0],ue=P+4,pe=0;pe<=Y;++pe){var _e=P+4+pe*p;pe!=Y&&N(_e)!=0||(ue=b(ue,_e-ue),H===void 0?H=ue:(H+="\0",H+=ue),ue=_e+p)}return tt(P),H},toWireType:(P,H)=>{if(typeof H!="string")throw new ht(`Cannot pass non-string to C++ string type ${m}`);var Y=E(H),ue=Sr(4+Y+p);return fe()[ue>>>2>>>0]=Y/p,x(H,ue+4,Y+p),P!==null&&P.push(tt,ue),ue},Db:ft,readValueFromPointer:la,Eb(P){tt(P)}})}function Mf(o,p){nt(o>>>=0,{Ub:!0,name:p=Je(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function Df(o){ya(o>>>0,!l,1,!u,131072,!1),En()}var da=o=>{if(!ye)try{if(o(),!(0<pt))try{d?_a(O):ia(O)}catch(p){p instanceof ta||p=="unwind"||v(0,p)}}catch(p){p instanceof ta||p=="unwind"||v(0,p)}};function pa(o){o>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(D(),o>>>2,o).value.then(gr),o+=128,Atomics.store(D(),o>>>2,1))}var gr=()=>{var o=kr();o&&(pa(o),da(Is))};function Pf(o,p){(o>>>=0)==p>>>0?setTimeout(gr):d?postMessage({Hb:o,Cb:"checkMailbox"}):(o=xt[o])&&o.postMessage({Cb:"checkMailbox"})}var ca=[];function Uf(o,p,m,b,x){for(p>>>=0,b/=2,ca.length=b,m=x>>>0>>>3,x=0;x<b;x++)ca[x]=L[m+2*x]?L[m+2*x+1]:Oe()[m+2*x+1>>>0];return(p?ea[p]:Om[o])(...ca)}var jf=()=>{pt=0};function Wf(o){o>>>=0,d?postMessage({Cb:"cleanupThread",ic:o}):In(xt[o])}function qf(o){}var yr=(o,p)=>{var m=sa[o];if(m===void 0)throw o=$s(o),m=Je(o),tt(o),new ht(`${p} has unknown type ${m}`);return m},Yn=(o,p,m)=>{var b=[];return o=o.toWireType(b,m),b.length&&(fe()[p>>>2>>>0]=Ue(b)),o};function Lf(o,p,m){return p>>>=0,m>>>=0,o=Ae(o>>>0),p=yr(p,"emval::as"),Yn(p,m,o)}function Vf(o,p){return p>>>=0,o=Ae(o>>>0),(p=yr(p,"emval::as")).toWireType(null,o)}var _r=o=>{try{o()}catch(p){dt(p)}},mt=0,et=null,Jn=0,br=[],es={},ts={},Hf=0,ha=null,Gf=[];function rs(o){return function(p){if(!ye){if(mt===0){var m=!1,b=!1;p((x=0)=>{if(!ye&&(Jn=x,m=!0,b)){mt=2,_r(()=>As(et)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),x=!1;try{var E=function(){var H=D()[et+8>>>2>>>0];return H=te[ts[H]],--pt,H()}()}catch(H){E=H,x=!0}var N=!1;if(!et){var P=ha;P&&(ha=null,(x?P.reject:P.resolve)(E),N=!0)}if(x&&!N)throw E}}),b=!0,m||(mt=1,et=function(){var x=Sr(65548),E=x+12;fe()[x>>>2>>>0]=E,fe()[x+4>>>2>>>0]=E+65536,E=br[0];var N=es[E];return N===void 0&&(N=Hf++,es[E]=N,ts[N]=E),E=N,D()[x+8>>>2>>>0]=E,x}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),_r(()=>zs(et)))}else mt===2?(mt=0,_r(Bs),tt(et),et=null,Gf.forEach(da)):dt(`invalid state: ${mt}`);return Jn}}(p=>{o().then(p)})}function Ff(o){return o>>>=0,rs(async()=>{var p=await Ae(o);return Ue(p)})}var wr=[];function Kf(o,p,m,b){return m>>>=0,b>>>=0,(o=wr[o>>>0])(null,p=Ae(p>>>0),m,b)}var Zf={},$r=o=>{var p=Zf[o];return p===void 0?Je(o):p};function Xf(o,p,m,b,x){return m>>>=0,b>>>=0,x>>>=0,(o=wr[o>>>0])(p=Ae(p>>>0),p[m=$r(m)],b,x)}function Qf(o,p){return p>>>=0,(o=Ae(o>>>0))==Ae(p)}var as=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Yf(o){return(o>>>=0)==0?Ue(as()):(o=$r(o),Ue(as()[o]))}var Jf=o=>{var p=wr.length;return wr.push(o),p},em=(o,p)=>{for(var m=Array(o),b=0;b<o;++b)m[b]=yr(fe()[p+4*b>>>2>>>0],"parameter "+b);return m},is=(o,p)=>Object.defineProperty(p,"name",{value:o});function tm(o,p,m){var b=(p=em(o,p>>>0)).shift();o--;var x=`return function (obj, func, destructorsRef, args) {
`,E=0,N=[];m===0&&N.push("obj");for(var P=["retType"],H=[b],Y=0;Y<o;++Y)N.push("arg"+Y),P.push("argType"+Y),H.push(p[Y]),x+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${E?"+"+E:""});
`,E+=p[Y].Db;return x+=`  var rv = ${m===1?"new func":"func.call"}(${N.join(", ")});
`,b.Ub||(P.push("emval_returnValue"),H.push(Yn),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),P.push(x+`};
`),o=function(ue){var pe=Function;if(!(pe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof pe} which is not a function`);var _e=is(pe.name||"unknownFunctionName",function(){});return _e.prototype=pe.prototype,_e=new _e,(ue=pe.apply(_e,ue))instanceof Object?ue:_e}(P)(...H),m=`methodCaller<(${p.map(ue=>ue.name).join(", ")}) => ${b.name}>`,Jf(is(m,o))}function rm(o){return o=$r(o>>>0),Ue(a[o])}function am(o,p){return p>>>=0,o=Ae(o>>>0),p=Ae(p),Ue(o[p])}function im(o){9<(o>>>=0)&&(st[o+1]+=1)}function nm(){return Ue([])}function sm(o){o=Ae(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Ue(p)}function om(o){return Ue($r(o>>>0))}function um(){return Ue({})}function lm(o){for(var p=Ae(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ua(o)}function dm(o,p,m){p>>>=0,m>>>=0,o=Ae(o>>>0),p=Ae(p),m=Ae(m),o[p]=m}function pm(o,p){return p>>>=0,o=(o=yr(o>>>0,"_emval_take_value")).readValueFromPointer(p),Ue(o)}function cm(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),D()[p>>>2>>>0]=o.getUTCSeconds(),D()[p+4>>>2>>>0]=o.getUTCMinutes(),D()[p+8>>>2>>>0]=o.getUTCHours(),D()[p+12>>>2>>>0]=o.getUTCDate(),D()[p+16>>>2>>>0]=o.getUTCMonth(),D()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,D()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[p+28>>>2>>>0]=o}var ns=o=>o%4==0&&(o%100!=0||o%400==0),ss=[0,31,60,91,121,152,182,213,244,274,305,335],os=[0,31,59,90,120,151,181,212,243,273,304,334];function hm(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),D()[p>>>2>>>0]=o.getSeconds(),D()[p+4>>>2>>>0]=o.getMinutes(),D()[p+8>>>2>>>0]=o.getHours(),D()[p+12>>>2>>>0]=o.getDate(),D()[p+16>>>2>>>0]=o.getMonth(),D()[p+20>>>2>>>0]=o.getFullYear()-1900,D()[p+24>>>2>>>0]=o.getDay();var m=(ns(o.getFullYear())?ss:os)[o.getMonth()]+o.getDate()-1|0;D()[p+28>>>2>>>0]=m,D()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var b=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=b&&o.getTimezoneOffset()==Math.min(b,m)),D()[p+32>>>2>>>0]=o}function fm(o){o>>>=0;var p=new Date(D()[o+20>>>2>>>0]+1900,D()[o+16>>>2>>>0],D()[o+12>>>2>>>0],D()[o+8>>>2>>>0],D()[o+4>>>2>>>0],D()[o>>>2>>>0],0),m=D()[o+32>>>2>>>0],b=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(E,x);return 0>m?D()[o+32>>>2>>>0]=+(x!=E&&N==b):0<m!=(N==b)&&(x=Math.max(E,x),p.setTime(p.getTime()+6e4*((0<m?N:x)-b))),D()[o+24>>>2>>>0]=p.getDay(),m=(ns(p.getFullYear())?ss:os)[p.getMonth()]+p.getDate()-1|0,D()[o+28>>>2>>>0]=m,D()[o>>>2>>>0]=p.getSeconds(),D()[o+4>>>2>>>0]=p.getMinutes(),D()[o+8>>>2>>>0]=p.getHours(),D()[o+12>>>2>>>0]=p.getDate(),D()[o+16>>>2>>>0]=p.getMonth(),D()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function us(o,p,m,b,x,E,N){return d?$e(16,1,o,p,m,b,x,E,N):-52}function ls(o,p,m,b,x,E){if(d)return $e(17,1,o,p,m,b,x,E)}var Zt={},mm=()=>performance.timeOrigin+performance.now();function ds(o,p){if(d)return $e(18,1,o,p);if(Zt[o]&&(clearTimeout(Zt[o].id),delete Zt[o]),!p)return 0;var m=setTimeout(()=>{delete Zt[o],da(()=>Ts(o,performance.timeOrigin+performance.now()))},p);return Zt[o]={id:m,rc:p},0}function gm(o,p,m,b){o>>>=0,p>>>=0,m>>>=0,b>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var N=Math.max(E,x);fe()[o>>>2>>>0]=60*N,D()[p>>>2>>>0]=+(E!=x),o=(p=P=>{var H=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(H/60)).padStart(2,"0")}${String(H%60).padStart(2,"0")}`})(E),p=p(x),x<E?(Pt(o,m,17),Pt(p,b,17)):(Pt(o,b,17),Pt(p,m,17))}var ym=()=>Date.now();function _m(o,p,m){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),L[m>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var fa=[],ps=(o,p)=>{fa.length=0;for(var m;m=V()[o++>>>0];){var b=m!=105;p+=(b&=m!=112)&&p%8?4:0,fa.push(m==112?fe()[p>>>2>>>0]:m==106?L[p>>>3]:m==105?D()[p>>>2>>>0]:Oe()[p>>>3>>>0]),p+=b?8:4}return fa};function bm(o,p,m){return o>>>=0,p=ps(p>>>0,m>>>0),ea[o](...p)}function wm(o,p,m){return o>>>=0,p=ps(p>>>0,m>>>0),ea[o](...p)}var $m=()=>{};function vm(o,p){return T(Se(o>>>0,p>>>0))}var xm=()=>{throw pt+=1,"unwind"};function km(){return 4294901760}var Sm=()=>navigator.hardwareConcurrency;function Tm(){return dt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Im(o){o>>>=0;var p=V().length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var b=p*(1+.2/m);b=Math.min(b,o+100663296);e:{b=(Math.min(4294901760,65536*Math.ceil(Math.max(o,b)/65536))-I.buffer.byteLength+65535)/65536|0;try{I.grow(b),me();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}var vr=()=>(dt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Xt={},cs=o=>{o.forEach(p=>{vr()})};function Em(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),cs(o),Xt.Mb=vr(),Xt.dc=o,Xt.Mb}function Cm(o,p,m){if(o>>>=0,p>>>=0,Xt.Mb==o)var b=Xt.dc;else(b=Error().stack.toString().split(`
`))[0]=="Error"&&b.shift(),cs(b);for(var x=3;b[x]&&vr()!=o;)++x;for(o=0;o<m&&b[o+x];++o)D()[p+4*o>>>2>>>0]=vr();return o}var ma,ga={},hs=()=>{if(!ma){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ga)ga[o]===void 0?delete p[o]:p[o]=ga[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);ma=m}return ma};function fs(o,p){if(d)return $e(19,1,o,p);o>>>=0,p>>>=0;var m=0;return hs().forEach((b,x)=>{var E=p+m;for(x=fe()[o+4*x>>>2>>>0]=E,E=0;E<b.length;++E)W()[x++>>>0]=b.charCodeAt(E);W()[x>>>0]=0,m+=b.length+1}),0}function ms(o,p){if(d)return $e(20,1,o,p);o>>>=0,p>>>=0;var m=hs();fe()[o>>>2>>>0]=m.length;var b=0;return m.forEach(x=>b+=x.length+1),fe()[p>>>2>>>0]=b,0}function gs(o){return d?$e(21,1,o):52}function ys(o,p,m,b){return d?$e(22,1,o,p,m,b):52}function _s(o,p,m,b){return d?$e(23,1,o,p,m,b):70}var zm=[null,[],[]];function bs(o,p,m,b){if(d)return $e(24,1,o,p,m,b);p>>>=0,m>>>=0,b>>>=0;for(var x=0,E=0;E<m;E++){var N=fe()[p>>>2>>>0],P=fe()[p+4>>>2>>>0];p+=8;for(var H=0;H<P;H++){var Y=V()[N+H>>>0],ue=zm[o];Y===0||Y===10?((o===1?k:T)(Nn(ue)),ue.length=0):ue.push(Y)}x+=P}return fe()[b>>>2>>>0]=x,0}d||function(){for(var o=a.numThreads-1;o--;)zn();ra.unshift(()=>{$t++,function(p){d?p():Promise.all(ct.map(Cn)).then(p)}(()=>$n())})}();for(var ws=Array(256),xr=0;256>xr;++xr)ws[xr]=String.fromCharCode(xr);Zn=ws,ht=a.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},a.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},st.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>st.length/2-5-oa.length;var te,Om=[aa,Sn,On,Rn,Mn,Pn,Un,jn,Wn,qn,Ln,Vn,Hn,Gn,Fn,Kn,us,ls,ds,fs,ms,gs,ys,_s,bs];(async function(){function o(b,x){return te=b.exports,te=function(){var E=te,N={};for(let[P,H]of Object.entries(E))N[P]=typeof H=="function"?(...Y)=>{br.push(P);try{return H(...Y)}finally{ye||(br.pop(),et&&mt===1&&br.length===0&&(mt=0,pt+=1,_r(Os),typeof Fibers<"u"&&Fibers.sc()))}}:H;return N}(),te=function(){var E=te,N=H=>Y=>H(Y)>>>0,P=H=>()=>H()>>>0;return(E=Object.assign({},E)).Ea=N(E.Ea),E.gb=P(E.gb),E.ib=N(E.ib),E.ub=N(E.ub),E.vb=P(E.vb),E.__cxa_get_exception_ptr=N(E.__cxa_get_exception_ptr),E}(),Tn.push(te.jb),z=x,$n(),te}$t++;var p=vn();if(a.instantiateWasm)return new Promise(b=>{a.instantiateWasm(p,(x,E)=>{o(x,E),b(x.exports)})});if(d)return new Promise(b=>{qe=x=>{var E=new WebAssembly.Instance(x,vn());b(o(E,x))}});Re??(Re=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("/portfolio/assets/ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href);try{var m=await async function(b){var x=Re;if(!J&&typeof WebAssembly.instantiateStreaming=="function"&&!M(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,b)}catch(N){T(`wasm streaming compile failed: ${N}`),T("falling back to ArrayBuffer instantiation")}return async function(N,P){try{var H=await async function(Y){if(!J)try{var ue=await g(Y);return new Uint8Array(ue)}catch{}if(Y==Re&&J)Y=new Uint8Array(J);else{if(!y)throw"both async and sync fetching of the wasm failed";Y=y(Y)}return Y}(N);return await WebAssembly.instantiate(H,P)}catch(Y){T(`failed to asynchronously prepare wasm: ${Y}`),dt(Y)}}(x,b)}(p);return o(m.instance,m.module)}catch(b){return n(b),Promise.reject(b)}})();var $s=o=>($s=te.Ea)(o),vs=()=>(vs=te.Fa)();a._OrtInit=(o,p)=>(a._OrtInit=te.Ga)(o,p),a._OrtGetLastError=(o,p)=>(a._OrtGetLastError=te.Ha)(o,p),a._OrtCreateSessionOptions=(o,p,m,b,x,E,N,P,H,Y)=>(a._OrtCreateSessionOptions=te.Ia)(o,p,m,b,x,E,N,P,H,Y),a._OrtAppendExecutionProvider=(o,p,m,b,x)=>(a._OrtAppendExecutionProvider=te.Ja)(o,p,m,b,x),a._OrtAddFreeDimensionOverride=(o,p,m)=>(a._OrtAddFreeDimensionOverride=te.Ka)(o,p,m),a._OrtAddSessionConfigEntry=(o,p,m)=>(a._OrtAddSessionConfigEntry=te.La)(o,p,m),a._OrtReleaseSessionOptions=o=>(a._OrtReleaseSessionOptions=te.Ma)(o),a._OrtCreateSession=(o,p,m)=>(a._OrtCreateSession=te.Na)(o,p,m),a._OrtReleaseSession=o=>(a._OrtReleaseSession=te.Oa)(o),a._OrtGetInputOutputCount=(o,p,m)=>(a._OrtGetInputOutputCount=te.Pa)(o,p,m),a._OrtGetInputOutputMetadata=(o,p,m,b)=>(a._OrtGetInputOutputMetadata=te.Qa)(o,p,m,b),a._OrtFree=o=>(a._OrtFree=te.Ra)(o),a._OrtCreateTensor=(o,p,m,b,x,E)=>(a._OrtCreateTensor=te.Sa)(o,p,m,b,x,E),a._OrtGetTensorData=(o,p,m,b,x)=>(a._OrtGetTensorData=te.Ta)(o,p,m,b,x),a._OrtReleaseTensor=o=>(a._OrtReleaseTensor=te.Ua)(o),a._OrtCreateRunOptions=(o,p,m,b)=>(a._OrtCreateRunOptions=te.Va)(o,p,m,b),a._OrtAddRunConfigEntry=(o,p,m)=>(a._OrtAddRunConfigEntry=te.Wa)(o,p,m),a._OrtReleaseRunOptions=o=>(a._OrtReleaseRunOptions=te.Xa)(o),a._OrtCreateBinding=o=>(a._OrtCreateBinding=te.Ya)(o),a._OrtBindInput=(o,p,m)=>(a._OrtBindInput=te.Za)(o,p,m),a._OrtBindOutput=(o,p,m,b)=>(a._OrtBindOutput=te._a)(o,p,m,b),a._OrtClearBoundOutputs=o=>(a._OrtClearBoundOutputs=te.$a)(o),a._OrtReleaseBinding=o=>(a._OrtReleaseBinding=te.ab)(o),a._OrtRunWithBinding=(o,p,m,b,x)=>(a._OrtRunWithBinding=te.bb)(o,p,m,b,x),a._OrtRun=(o,p,m,b,x,E,N,P)=>(a._OrtRun=te.cb)(o,p,m,b,x,E,N,P),a._OrtEndProfiling=o=>(a._OrtEndProfiling=te.db)(o),a._JsepOutput=(o,p,m)=>(a._JsepOutput=te.eb)(o,p,m),a._JsepGetNodeName=o=>(a._JsepGetNodeName=te.fb)(o);var kr=()=>(kr=te.gb)(),tt=a._free=o=>(tt=a._free=te.hb)(o),Sr=a._malloc=o=>(Sr=a._malloc=te.ib)(o),ya=(o,p,m,b,x,E)=>(ya=te.lb)(o,p,m,b,x,E),xs=()=>(xs=te.mb)(),ks=(o,p,m,b,x)=>(ks=te.nb)(o,p,m,b,x),Ss=o=>(Ss=te.ob)(o),_a=o=>(_a=te.pb)(o),Ts=(o,p)=>(Ts=te.qb)(o,p),Is=()=>(Is=te.rb)(),Es=(o,p)=>(Es=te.sb)(o,p),Tr=o=>(Tr=te.tb)(o),ba=o=>(ba=te.ub)(o),wa=()=>(wa=te.vb)(),Cs=a.dynCall_ii=(o,p)=>(Cs=a.dynCall_ii=te.wb)(o,p),zs=o=>(zs=te.xb)(o),Os=()=>(Os=te.yb)(),As=o=>(As=te.zb)(o),Bs=()=>(Bs=te.Ab)();return a.stackSave=()=>wa(),a.stackRestore=o=>Tr(o),a.stackAlloc=o=>ba(o),a.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":W()[o>>>0]=p;break;case"i16":ne()[o>>>1>>>0]=p;break;case"i32":D()[o>>>2>>>0]=p;break;case"i64":L[o>>>3]=BigInt(p);break;case"float":Dt()[o>>>2>>>0]=p;break;case"double":Oe()[o>>>3>>>0]=p;break;case"*":fe()[o>>>2>>>0]=p;break;default:dt(`invalid type for setValue: ${m}`)}},a.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return W()[o>>>0];case"i16":return ne()[o>>>1>>>0];case"i32":return D()[o>>>2>>>0];case"i64":return L[o>>>3];case"float":return Dt()[o>>>2>>>0];case"double":return Oe()[o>>>3>>>0];case"*":return fe()[o>>>2>>>0];default:dt(`invalid type for getValue: ${p}`)}},a.UTF8ToString=Se,a.stringToUTF8=Pt,a.lengthBytesUTF8=Dn,function o(){if(0<$t)vt=o;else if(d)i(a),ve();else{for(;0<ra.length;)ra.shift()(a);0<$t?vt=o:(a.calledRun=!0,ye||(ve(),i(a)))}}(),a.PTR_SIZE=4,s}),Qd=Oa,Vs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Vs&&Oa()}),Aa,Ii,Hs,Me,Yd,Er,Gs,Fs,Ba,Ks,Na,Jd,Ra,ep,Zi=U(()=>{Ki(),Aa=typeof location>"u"?void 0:location.origin,Ii=import.meta.url>"file:"&&import.meta.url<"file;",Hs=()=>{{if(Ii){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Aa).href}return import.meta.url}},Me=Hs(),Yd=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},Er=(e,t)=>{try{let r=t??Me;return(r?new URL(e,r):new URL(e)).origin===Aa}catch{return!1}},Gs=(e,t)=>{let r=t??Me;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Fs=(e,t)=>`${t??"./"}${e}`,Ba=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ks=async e=>(await import(e)).default,Na=(jg(),fr(Kd)).default,Jd=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Er(Me))return[void 0,Na()];let e=await Ba(Me);return[e,Na(e)]},Ra=(Wg(),fr(Xd)).default,ep=async(e,t,r)=>{if(!e&&!t&&Ra&&Me&&Er(Me))return[void 0,Ra];{let i="ort-wasm-simd-threaded.jsep.mjs",n=e??Gs(i,t),a=r&&n&&!Er(n,t),s=a?await Ba(n):n??Fs(i,t);return[a?s:void 0,await Ks(s)]}}}),Ma,Cr,Yt,Da,Zs,Xs,Qs,Xi,be,Rt=U(()=>{Zi(),Cr=!1,Yt=!1,Da=!1,Zs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Xs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Qs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Xi=async e=>{if(Cr)return Promise.resolve();if(Yt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Da)throw new Error("previous call to 'initializeWebAssembly()' failed.");Yt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Qs())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Xs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Zs();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,u=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,f]=await ep(u,a,r>1),g=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{g=!0,$()},t)})),y.push(new Promise(($,v)=>{let w={numThreads:r};if(c)w.wasmBinary=c;else if(d||a)w.locateFile=_=>d??a+_;else if(u&&u.indexOf("blob:")!==0)w.locateFile=_=>new URL(_,u).href;else if(h){let _=Yd();_&&(w.locateFile=S=>_+S)}f(w).then(_=>{Yt=!1,Cr=!0,Ma=_,$(),h&&URL.revokeObjectURL(h)},_=>{Yt=!1,Da=!0,v(_)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Cr&&Ma)return Ma;throw new Error("WebAssembly is not initialized yet.")}}),Ze,Hr,ge,Qi=U(()=>{Rt(),Ze=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Hr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")Hr(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ge=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),tp,qg=U(()=>{Rt(),Qi(),tp=e=>{let t=be(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Ze(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Hr(e.extra,"",new WeakSet,(s,u)=>{let l=Ze(s,i),d=Ze(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&ge(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Ys,Js,eo,Jt,to,rp,Lg=U(()=>{Rt(),Qi(),Ys=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Js=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},eo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Jt=(e,t,r,i)=>{let n=Ze(t,i),a=Ze(r,i);be()._OrtAddSessionConfigEntry(e,n,a)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},to=async(e,t,r)=>{for(let i of t){let n=typeof i=="string"?i:i.name,a=[];switch(n){case"webnn":if(n="WEBNN",typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&Jt(e,"deviceType",c,r)}break;case"webgpu":if(n="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Jt(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let s=Ze(n,r),u=a.length,l=0,d=0;if(u>0){l=be()._malloc(u*be().PTR_SIZE),r.push(l),d=be()._malloc(u*be().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)be().setValue(l+c*be().PTR_SIZE,a[c][0],"*"),be().setValue(d+c*be().PTR_SIZE,a[c][1],"*")}await be()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&ge(`Can't append execution provider: ${n}.`)}},rp=async e=>{let t=be(),r=0,i=[],n=e||{};eo(n);try{let a=Ys(n.graphOptimizationLevel??"all"),s=Js(n.executionMode??"sequential"),u=typeof n.logId=="string"?Ze(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Ze(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,u,l,d,c),r===0&&ge("Can't create session options."),n.executionProviders&&await to(r,n.executionProviders,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Jt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,f]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let g=Ze(h,i);t._OrtAddFreeDimensionOverride(r,g,f)!==0&&ge(`Can't set a free dimension override: ${h} - ${f}.`)}return n.extra!==void 0&&Hr(n.extra,"",new WeakSet,(h,f)=>{Jt(r,h,f,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Ct,ut,zt,Jr,Gr,Yi,Ji,Ei,ae=U(()=>{Ct=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},zt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},Jr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Gr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Yi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ji=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ei=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),en,ap=U(()=>{Ki(),en=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ro,ao,io,no,tn,so,de,lt=U(()=>{ae(),ro=["V","I","W","E","F"],ao=(e,t)=>{console.log(`[${ro[e]},${new Date().toISOString()}]${t}`)},tn=(e,t)=>{io=e,no=t},so=(e,t)=>{let r=Gr(e),i=Gr(io);r>=i&&ao(r,typeof t=="function"?t():t)},de=(...e)=>{no&&so(...e)}}),oo,Ht,A,Fr,ip,np,sp,se=U(()=>{oo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ht=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let u=oo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[a-2],s[a-1]]=u}for(let u=r?3:1;u<=a;u++){let l=i-u<0?1:e[i-u],d=n-u<0?1:t[n-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[a-u]=Math.max(l,d);else{if(c>1)return;s[a-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},A=class jr{static size(t){return jr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Fr=class lr{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,u){if(u){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)lr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,n,a,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return lr.computeShapeHelper(t,r,l,i,n,a,s,u),l}static computeConvOutputShape(t,r,i,n,a,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return lr.computeShapeHelper(!1,t,l,i,n,a,s,u),l}static computeShapeHelper(t,r,i,n,a,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(lr.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,u,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),a[u]=c-a[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[u]-d)/r+1)}},ip=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,u;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Ht.isValidBroadcast(n,[a,u]))throw new Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},np=-34028234663852886e22,sp=34028234663852886e22}),rn,op=U(()=>{ae(),rn=(e,t)=>new(Jr(t))(e)}),Pa,Ci,Ua,uo,ja,lo,Wa,qa,La,po,up,Vg=U(()=>{ae(),lt(),Pa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ci=(e,t)=>{if(t==="int32")return e;let r=Pa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(Jr(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let u=0;u<n;u++){let l=a[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ua=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},uo=1,ja=()=>uo++,lo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Wa=(e,t)=>{let r=Pa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},qa=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Wa(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ua(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},La=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a;if(!n.opSupportLimits().input.dataTypes.includes(t)){if(a=lo.get(t),!a||!n.opSupportLimits().input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Wa(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ci(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Ua(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},po=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=ja();return this.tensorTrackersById.set(e,new La(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=ja(),s=new qa({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new La(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new qa({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},up=(...e)=>new po(...e)}),er,co,lp,Hg=U(()=>{ae(),Rt(),op(),Vg(),lt(),er=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),co=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},lp=class{constructor(e){this.tensorManager=up(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,tn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>co(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=er.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=er.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return rn(r,t)}}registerMLTensor(e,t,r,i){let n=er.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=a.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let h=Ci(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),n=er.get(Ct(t));return typeof n>"u"?!1:r?!!(i!=null&&i.opSupportLimits().input.dataTypes.includes(n)):!!(i!=null&&i.opSupportLimits().output.dataTypes.includes(n))}flush(){}}}),an=U(()=>{}),Va,zr,Or,ho,fo,Ha,zi,mo,dp,Gg=U(()=>{lt(),an(),Va=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),zr=[],Or=e=>Math.ceil(Number(e)/16)*16,ho=e=>{for(let t=0;t<zr.length;t++){let r=zr[t];if(e<=r)return r}return Math.ceil(e/16)*16},fo=1,Ha=()=>fo++,zi=async(e,t,r,i)=>{let n=Or(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let u=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{a.destroy()}},mo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Va)zr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Or(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Or(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ha();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ho(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ha(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await zi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Va.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},dp=(...e)=>new mo(...e)}),go,he,ke=U(()=>{go=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new go(e)}),Gt,Ar,Te,ze,ee,xe,Oi,Vt,bt,Q,tr,R,X,pp,nn,yo,cp,oe=U(()=>{ae(),se(),Gt=64,Ar=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:A.computeStrides(r)})}),t},xe=e=>e%4===0?4:e%2===0?2:1,Oi=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Vt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,bt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,tr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Ar(t,n),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],f={indices:l,value:c,storage:h,tensor:t},g=M=>typeof M=="string"?M:`${M}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=a?"uniforms.":"",v=`${$}${e}_shape`,w=`${$}${e}_strides`,_="";for(let M=0;M<s-1;M++)_+=`
    let dim${M} = current / ${Q(w,M,s)};
    let rest${M} = current % ${Q(w,M,s)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;_+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${_}
    return indices;
  }`,k=M=>(y.offsetToIndices=!0,s<2?M:`o2i_${e}(${M})`),T=[];if(s>=2)for(let M=s-1;M>=0;M--)T.push(`${Q(w,M,s)} * (indices[${M}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=M=>(y.indicesToOffset=!0,s<2?M:`i2o_${e}(${M})`),O=(...M)=>s===0?"0u":`${f.indices}(${M.map(g).join(",")})`,B=(M,W)=>s<2?`${M}`:`${Q(M,W,s)}`,j=(M,W,V)=>s<2?`${M}=${V};`:`${Q(M,W,s)}=${V};`,G={},q=(M,W)=>{y.broadcastedIndicesToOffset=!0;let V=`${W.name}broadcastedIndicesTo${e}Offset`;if(V in G)return`${V}(${M})`;let ne=[];for(let Ee=s-1;Ee>=0;Ee--){let D=W.indicesGet("outputIndices",Ee+W.rank-s);ne.push(`${B(w,Ee)} * (${D} % ${B(v,Ee)})`)}return G[V]=`fn ${V}(outputIndices: ${W.type.indices}) -> u32 {
             return ${ne.length>0?ne.join("+"):"0u"};
           }`,`${V}(${M})`},F=(M,W)=>(()=>{if(f.storage===f.value)return`${e}[${M}]=${W};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${W}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),ie=M=>(()=>{if(f.storage===f.value)return`${e}[${M}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${M}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${M}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),re=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${ie(`i2o_${e}(indices)`)};
  }`,L=s<2?"":(()=>{let M=u.map(V=>`d${V}: u32`).join(", "),W=u.map(V=>`d${V}`).join(", ");return`
  fn get_${e}(${M}) -> ${c} {
    return get_${e}ByIndices(${O(W)});
  }`})(),Z=(...M)=>{if(M.length!==s)throw new Error(`indices length must be ${s}`);let W=M.map(g).join(",");return s===0?ie("0u"):s===1?ie(W[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${W})`)},K=M=>s<2?ie(M):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${M})`),J=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,ye=s<2?"":(()=>{let M=u.map(V=>`d${V}: u32`).join(", "),W=u.map(V=>`d${V}`).join(", ");return`
  fn set_${e}(${M}, value: ${c}) {
    set_${e}ByIndices(${O(W)}, value);
  }`})();return{impl:()=>{let M=[],W=!1;return y.offsetToIndices&&(M.push(S),W=!0),y.indicesToOffset&&(M.push(I),W=!0),y.broadcastedIndicesToOffset&&(Object.values(G).forEach(V=>M.push(V)),W=!0),y.set&&(M.push(ye),W=!0),y.setByIndices&&(M.push(J),W=!0),y.get&&(M.push(L),W=!0),y.getByIndices&&(M.push(re),W=!0),!a&&W&&M.unshift(`const ${v} = ${f.indices}(${r.join(",")});`,`const ${w} = ${f.indices}(${A.computeStrides(r).join(",")});`),M.join(`
`)},type:f,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:q,indices:O,indicesGet:B,indicesSet:j,set:(...M)=>{if(M.length!==s+1)throw new Error(`indices length must be ${s}`);let W=M[s];if(typeof W!="string")throw new Error("value must be string");let V=M.slice(0,s).map(g).join(",");return s===0?F("0u",W):s===1?F(V[0],W):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${V}, ${W})`)},setByOffset:F,setByIndices:(M,W)=>s<2?F(M,W):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${W});`),get:Z,getByOffset:ie,getByIndices:K,usage:i,name:e,strides:w,shape:v,rank:s}},R=(e,t,r,i=1)=>tr(e,t,r,"input",i),X=(e,t,r,i=1)=>tr(e,t,r,"output",i),pp=(e,t,r)=>tr(e,t,r,"atomicOutput",1),nn=(e,t,r,i=1)=>tr(e,t,r,"internal",i),yo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Gt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},cp=(e,t)=>new yo(e,t)}),_o,Ga,bo,wo,$o,vo,Pe,hp,fp,wt=U(()=>{ae(),se(),ke(),oe(),_o=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ga=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),bo=(e,t)=>A.sortBasedOnPerm(e,Ga(e.length,t)),wo=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},$o=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},vo=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Ga(i,t),a=bo(e.dims,n),s=e.dims,u=a,l=i<2||vo(n,e.dims),d;if(l)return d=y=>{let $=R("input",r,s,4),v=X("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,v)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=A.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=$o(e.dims,n),f=A.areEqual(h,[2,3,1]),g=A.areEqual(h,[3,1,2]);if(c.length===2||f||g){s=f?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=$=>{let v=R("a",r,s.length),w=X("output",r,u.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(v,w)}
  var<workgroup> tile : array<array<${w.type.value}, ${y+1}>, ${y}>;
  ${$.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${w.setByIndices(`${w.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=A.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:$},...ee(s,u)]}},getShaderSource:d}}return d=y=>{let $=R("a",r,s.length),v=X("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,v)}

  ${wo(n,i,$,v)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=A.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(s,u)]}},getShaderSource:d}},hp=(e,t)=>{_o(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},fp=e=>he({perm:e.perm})}),xo,ko,So,To,Io,Eo,Co,zo,Oo,Ao,Ve,mp,gp,yp,_p,bp,wp,$p,vp,xp,kp,Fg=U(()=>{ae(),se(),oe(),sn(),wt(),xo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ko={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},So={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},To={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Io=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Eo=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},Co=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},zo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Oo=(e,t)=>{let r=[];if(!zo(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ao=(e,t,r,i,n,a,s)=>{let u=r[0].dims,l=A.size(a),d=A.size(s),c=R("_A",r[0].dataType,u),h=X("output",n,a),f=64;l===1&&(f=256);let g=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${So[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${xo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ko[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${To[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ve=(e,t,r,i)=>{let n=e.inputs.length===1?r:Ai(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,y)=>y));let s=A.normalizeAxes(a,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Oo(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Pe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Io(u.length,l.dims.length));let[c,h]=Eo(l.dims,u),f=c;n.keepDims&&(f=Co(c,s)),e.compute(Ao(t,n.cacheKey,[l],i,e.inputs[0].dataType,f,h),{inputs:[l]})},mp=(e,t)=>{Ve(e,"ReduceMeanShared",t,"mean")},gp=(e,t)=>{Ve(e,"ReduceL1Shared",t,"l1")},yp=(e,t)=>{Ve(e,"ReduceL2Shared",t,"l2")},_p=(e,t)=>{Ve(e,"ReduceLogSumExpShared",t,"logSumExp")},bp=(e,t)=>{Ve(e,"ReduceMaxShared",t,"max")},wp=(e,t)=>{Ve(e,"ReduceMinShared",t,"min")},$p=(e,t)=>{Ve(e,"ReduceProdShared",t,"prod")},vp=(e,t)=>{Ve(e,"ReduceSumShared",t,"sum")},xp=(e,t)=>{Ve(e,"ReduceSumSquareShared",t,"sumSquare")},kp=(e,t)=>{Ve(e,"ReduceLogSumShared",t,"logSum")}}),He,Bo,Kr,Ai,Ge,No,Ro,Mo,Do,Po,Uo,jo,Wo,qo,Lo,Fe,Sp,Tp,Ip,Ep,Cp,zp,Op,Ap,Bp,Np,sn=U(()=>{ae(),se(),ke(),oe(),Fg(),He=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Bo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Kr=(e,t,r,i,n,a,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=A.normalizeAxes(n,c),f=!u&&h.length===0;d.forEach(($,v)=>{f||h.indexOf(v)>=0?s&&l.push(1):l.push($)});let g=l.length,y=A.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let v=[],w=R("_A",r[0].dataType,c),_=X("output",a,g),S=i(w,_,h),k=S[2];for(let T=0,I=0;T<c;T++)f||h.indexOf(T)>=0?(s&&I++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${w.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(v.push(`${w.indicesSet("input_indices",T,_.indicesGet("output_indices",I))};`),I++);return`

        ${$.registerUniform("output_size","u32").declareVariables(w,_)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${w.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?_.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(d,l)]})}},Ai=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ge=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Ai(n,r);e.compute(Kr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?Bo:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},No=(e,t)=>{He(e.inputs),Ge(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Ro=(e,t)=>{He(e.inputs),Ge(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Mo=(e,t)=>{He(e.inputs),Ge(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Do=(e,t)=>{He(e.inputs),Ge(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Po=(e,t)=>{He(e.inputs),Ge(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Uo=(e,t)=>{He(e.inputs),Ge(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},jo=(e,t)=>{He(e.inputs),Ge(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Wo=(e,t)=>{He(e.inputs),Ge(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},qo=(e,t)=>{He(e.inputs),Ge(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Lo=(e,t)=>{He(e.inputs),Ge(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Fe=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},Sp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):mp(e,t)},Tp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):gp(e,t)},Ip=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):yp(e,t)},Ep=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):_p(e,t)},Cp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):bp(e,t)},zp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):wp(e,t)},Op=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wo(e,t):$p(e,t)},Ap=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qo(e,t):vp(e,t)},Bp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):xp(e,t)},Np=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):kp(e,t)}}),Fa,Rp,Mp,Bi,Kg=U(()=>{ae(),ke(),sn(),Fa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Rp=(e,t)=>{Fa(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Kr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Mp=(e,t)=>{Fa(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Kr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Bi=e=>he(e)}),Vo,Br,Ho,Go,Fo,mr,Ko,Dp,on=U(()=>{ae(),se(),an(),oe(),Vo=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,f=h,g=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=d;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+f+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(f!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let v=y+$,w=-1,_=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:w,inputHiddenSize:c,hiddenSize:h,vHiddenSize:g,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Br=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Ho=(e,t,r,i,n,a,s,u)=>{let l=xe(s?1:a),d=64,c=a/l;c<d&&(d=32);let h=Math.ceil(a/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:h}],g=Te(e.dataType,l),y=ze(1,l),$=["type"];s&&$.push("type"),u&&$.push("type");let v=w=>{let _=X("x",e.dataType,e.dims,l),S=[_],k=s?R("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let T=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let I=ze(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${w.registerUniforms(z).declareVariables(...S)}
  ${w.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Br(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:$},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},Go=(e,t,r,i,n,a,s,u,l)=>{let d=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,d],h=e>1&&i,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=h?[a.batchSize,f,d,a.headSize]:void 0,y=a.nReps?a.nReps:1,$=a.scale===0?1/Math.sqrt(a.headSize):a.scale,v=xe(a.headSize),w=a.headSize/v,_=12,S={x:Math.ceil(d/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:w},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:y}],T=h&&i&&A.size(i.dims)>0,I=["type","type"];T&&I.push("type"),n&&I.push("type"),u&&I.push("type"),l&&I.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&z.push({dims:g,dataType:t.dataType,gpuDataType:0});let O=B=>{let j=R("q",t.dataType,t.dims,v),G=R("key",r.dataType,r.dims,v),q=[j,G];if(T){let J=R("past_key",i.dataType,i.dims,v);q.push(J)}n&&q.push(R("attention_bias",n.dataType,n.dims));let F=u?R("seq_lens",u.dataType,u.dims):void 0;F&&q.push(F);let ie=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;ie&&q.push(ie);let re=X("output",t.dataType,c),L=[re];h&&L.push(X("present_key",t.dataType,g,v));let Z=ze(1,v),K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${j.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${j.type.storage}, ${_*_}>;
  ${B.registerUniforms(K).declareVariables(...q,...L)}
  ${B.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Br(F,ie,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${re.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${n!==void 0};${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:z,dispatchGroup:S,programUniforms:k}),getShaderSource:O}},Fo=(e,t,r,i,n,a,s=void 0,u=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,h=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=h?[n.batchSize,f,l,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,c],$=12,v={x:Math.ceil(n.vHeadSize/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},w=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],_=h&&i&&A.size(i.dims)>0,S=["type","type"];_&&S.push("type"),s&&S.push("type"),u&&S.push("type");let k=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=I=>{let z=R("probs",t.dataType,t.dims),O=R("v",r.dataType,r.dims),B=[z,O];_&&B.push(R("past_value",i.dataType,i.dims));let j=s?R("seq_lens",s.dataType,s.dims):void 0;s&&B.push(j);let G=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;u&&B.push(G);let q=[X("output",t.dataType,y)];h&&q.push(X("present_value",t.dataType,g));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${z.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${z.type.value}, ${$*$}>;
  ${I.registerUniforms(F).declareVariables(...B,...q)}
  ${I.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Br(j,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:v,programUniforms:w}),getShaderSource:T}},mr=(e,t,r,i,n,a,s,u,l,d,c=void 0,h=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=f>1?d.pastSequenceLength:0,y=g+d.kvSequenceLength,$=l&&A.size(l.dims)>0?l:void 0,v=[t,r];f>1&&s&&A.size(s.dims)>0&&v.push(s),$&&v.push($),c&&v.push(c),h&&v.push(h);let w=e.compute(Go(f,t,r,s,$,d,g,c,h),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Ho(w,d.batchSize,d.numHeads,g,d.sequenceLength,y,c,h),{inputs:c&&h?[w,c,h]:[w],outputs:[]});let _=[w,i];f>1&&u&&A.size(u.dims)>0&&_.push(u),c&&_.push(c),h&&_.push(h),e.compute(Fo(f,w,i,u,d,g,c,h),{inputs:_,outputs:f>1?[0,2]:[0]})},Ko=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let f=X("output_q",l[0].dataType,r),g=X("output_k",l[0].dataType,r),y=X("output_v",l[0].dataType,r),$=R("input",l[0].dataType,l[0].dims),v=R("weight",l[1].dataType,l[1].dims),w=R("bias",l[2].dataType,l[2].dims),_=$.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${h.registerUniforms(S).declareVariables($,v,w,f,g,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Dp=(e,t)=>{let r=Vo(e.inputs,t),[i,n,a]=Ko(e,r);return mr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Zo,Xo,Qo,Pp,Zg=U(()=>{Ye(),ae(),se(),ke(),oe(),Zo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Xo=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?xe(a[a.length-1]):1,u=n==="NHWC"&&a.length>1?s:1,l=A.size(a)/s,d=i,c=d?a.length:a,h=R("x",e[0].dataType,e[0].dims,s),f=R("scale",e[1].dataType,e[1].dims,u),g=R("bias",e[2].dataType,e[2].dims,u),y=R("inputMean",e[3].dataType,e[3].dims,u),$=R("inputVar",e[4].dataType,e[4].dims,u),v=X("y",e[0].dataType,c,s),w=()=>{let S="";if(i)S=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")S=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let k=1;k<f.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return S},_=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(h,f,g,y,$,v)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${s}`)};
    ${w()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ee(a)]:[{type:12,data:l}]})}},Qo=e=>he(e),Pp=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Qo({...t,outputCount:i});if(we.webgpu.validateInputContent&&Zo(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xo(r,n))}}),Yo,Jo,Up,Xg=U(()=>{se(),oe(),Yo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Jo=e=>{let t=e[0].dims,r=e[0].dims[2],i=A.size(t)/4,n=e[0].dataType,a=R("input",n,t,4),s=R("bias",n,[r],4),u=R("residual",n,t,4),l=X("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Up=e=>{Yo(e.inputs),e.compute(Jo(e.inputs))}}),eu,ce,jp,Wp,qp,Lp,Vp,Hp,Gp,Fp,Kp,tu,Zp,Xp,Qp,Yp,dr,Jp,Wr,ec,tc,rc,ac,ic,nc,sc,oc,uc,lc,dc,pc,cc,hc,fc,mc,Ka,gc,Ni,Ri,yc,_c,bc,ru,au,wc,un=U(()=>{ae(),se(),ke(),oe(),eu=(e,t,r,i,n,a,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=R("inputData",r,[u],4),c=X("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(A.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>eu(d,A.size(e.dims),e.dataType,a,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(A.size(d[0].dims)/64/4)},programUniforms:l})}},jp=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Wp=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},qp=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},Lp=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Vp=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Hp=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Gp=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Fp=e=>he(e),Kp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},tu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Zp=(e,t)=>{let r=t||tu(e.inputs),i=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Xp=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Qp=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Yp=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},dr=e=>he(e),Jp=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Wr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,ec=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Wr(t)))},tc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},rc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},ac=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Wr(t)))},ic=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},nc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},sc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},oc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},uc=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},lc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},dc=e=>he(e),pc=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},cc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},hc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},fc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},mc=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Ka=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,gc=e=>{e.compute(ce(e.inputs[0],"Tanh",Ka))},Ni=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ka("v")};
}
`,Ri=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,yc=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Ri,Ni(t),void 0,e.inputs[0].dataType))},_c=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},bc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},ru=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,au=e=>`quick_gelu_impl(${e})`,wc=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",au,ru(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),iu,nu,$c,Qg=U(()=>{se(),oe(),un(),iu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},nu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),i=R("bias",e[0].dataType,[e[0].dims[2]],4),n=X("output",e[0].dataType,t,4),a=A.size(t)/4,s=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,n)}

  ${Wr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},$c=e=>{iu(e.inputs),e.compute(nu(e.inputs))}}),su,ou,Ke,vc,xc,kc,Sc,Tc,Ic,Ec,Cc,zc,Oc,Yg=U(()=>{ae(),se(),oe(),su=(e,t,r,i,n,a,s,u,l,d,c,h)=>{let f,g;typeof u=="string"?f=g=(_,S)=>`${u}((${_}),(${S}))`:typeof u=="function"?f=g=u:(f=u.scalar,g=u.vector);let y=X("outputData",c,i.length,4),$=R("aData",l,t.length,4),v=R("bData",d,r.length,4),w;if(n)if(a){let _=A.size(t)===1,S=A.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;_||S?w=y.setByOffset("global_idx",g(_?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),S?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):w=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(s||k?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else w=y.setByOffset("global_idx",g($.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(S,k,T="")=>{let I=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${y.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let offsetB${k} = ${v.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${T}(${f(I,z)});
          `};c===9?w=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:w=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,v,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${w}
      }`},ou=(e,t,r,i,n,a,s=r.dataType)=>{let u=r.dims.map($=>Number($)??1),l=i.dims.map($=>Number($)??1),d=!A.areEqual(u,l),c=u,h=A.size(u),f=!1,g=!1,y=[d];if(d){let $=Ht.calcShape(u,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");c=$.slice(),h=A.size(c);let v=A.size(u)===1,w=A.size(l)===1,_=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;y.push(v),y.push(w),y.push(_),y.push(S);let k=1;for(let T=1;T<c.length;T++){let I=u[u.length-T],z=l[l.length-T];if(I===z)k*=I;else break}k%4===0?(g=!0,f=!0):(v||w||_||S)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>su($,u,l,c,f,d,g,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(A.size(c)/4)},...ee(u,l,c)]})}},Ke=(e,t,r,i,n,a)=>{e.compute(ou(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},vc=e=>{Ke(e,"Add",(t,r)=>`${t}+${r}`)},xc=e=>{Ke(e,"Div",(t,r)=>`${t}/${r}`)},kc=e=>{Ke(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Sc=e=>{Ke(e,"Mul",(t,r)=>`${t}*${r}`)},Tc=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ke(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Ic=e=>{Ke(e,"Sub",(t,r)=>`${t}-${r}`)},Ec=e=>{Ke(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Cc=e=>{Ke(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},zc=e=>{Ke(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Oc=e=>{Ke(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),uu,lu,du,pu,Ac,Bc,Jg=U(()=>{ae(),se(),ke(),oe(),uu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},lu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,du=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},pu=(e,t,r,i)=>{let n=A.size(r),a=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:n}];for(let $=0;$<e.length;++$)u+=e[$].dims[t],a[$]=u,d.push(e[$].dims.length),s[$]=R(`input${$}`,i,d[$]),l.push("rank"),c.push({type:12,data:a[$]});for(let $=0;$<e.length;++$)c.push(...ee(e[$].dims));c.push(...ee(r));let h=X("output",i,r.length),f=h.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),y=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)$.registerUniform(`sizeInConcatAxis${v}`,"u32");return $.declareVariables(...s,h)})()}

  ${lu(a.length,g)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${du(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:y}},Ac=(e,t)=>{let r=e.inputs,i=r[0].dims,n=A.normalizeAxis(t.axis,i.length);uu(r,n);let a=i.slice();a[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(u=>A.size(u.dims)>0);e.compute(pu(s,n,a,r[0].dataType),{inputs:s})},Bc=e=>he({axis:e.axis})}),At,Bt,Nt,ln,Mt=U(()=>{ae(),se(),At=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Bt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Nt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ln=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[np,sp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ie,Nc,dn=U(()=>{Ie=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Nc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Rc,e0=U(()=>{Rc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),cr,pn,cn=U(()=>{ae(),se(),oe(),Mt(),cr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${Q(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Q(n,u+a,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},pn=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=xe(d),f=xe(c),g=xe(l),y=A.size(r)/h/g,$=e.length>2,v=i?i.slice(0,-2):r.slice(0,-2),w=[A.size(v),l,d],_=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Bt(t,_),_.push(...ee(v,s,u)),$&&_.push(...ee(e[2].dims)),_.push(...ee(w));let S=k=>{let T=nn("batch_dims",e[0].dataType,v.length),I=R("a",e[0].dataType,s.length,f),z=R("b",e[1].dataType,u.length,h),O=X("output",e[0].dataType,w.length,h),B=Te(O.type.tensor),j=At(t,O.type.value,B),G=[I,z],q="";if($){let re=n?h:1;G.push(R("bias",e[2].dataType,e[2].dims.length,re)),q=`${n?`value += bias[col / ${re}];`:`value += ${O.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Nt(t,F);let ie=()=>{let re=`var a_data: ${I.type.value};`;for(let L=0;L<f;L++)re+=`
              let b_data${L} = b[(b_offset + (k + ${L}) * uniforms.N + col) / ${h}];`;for(let L=0;L<g;L++){re+=`a_data = a[(a_offset + (row + ${L}) * uniforms.K + k) / ${f}];`;for(let Z=0;Z<f;Z++)re+=`
            values[${L}] = fma(${z.type.value}(a_data${f===1?"":`[${Z}]`}), b_data${Z}, values[${L}]);
`}return re};return`
  ${k.registerUniforms(F).registerInternalVariables(T).declareVariables(...G,O)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${cr("a_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${cr("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${ie()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${q}
      ${j}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${f};${g};${n}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:S}}}),cu,hu,Mi,Za,fu,Di,mu,Zr,hn=U(()=>{ae(),se(),oe(),Mt(),cn(),dn(),cu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,hu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Mi=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:a,h=n?a:l,f=c/t[0],g=a/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${c/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${cu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${hu(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Za=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,fu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Di=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=n?d:a,f=n?a:d;if(!(f%t[1]===0&&h%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=f/t[1],y=h/t[0],$=a/t[1],v=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Za(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Za(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${fu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${v}
  }
`},mu=(e,t,r,i,n=!1)=>{let[a,s,u,l]=i,d=Te(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ie(e,d)} {
      var value = ${Ie(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${cr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ie(e,d)} {
      var value = ${Ie(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${cr("bIndices",u,u.rank-2,a.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ie(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ie(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Zr=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=A.size(c),f=s[s.length-2],g=s[s.length-1],y=u[u.length-1],$=g%4===0&&y%4===0,v=f<=8?[4,1,1]:[4,4,1],w=[8,8,1],_=[Math.ceil(y/w[0]/v[0]),Math.ceil(f/w[1]/v[1]),Math.ceil(h/w[2]/v[2])],S=$?4:1,k=[...l,f,g/S],T=k.length,I=[...d,g,y/S],z=I.length,O=[h,f,y/S],B=[{type:6,data:f},{type:6,data:y},{type:6,data:g}];Bt(t,B),B.push(...ee(c,k,I));let j=["rank","rank"],G=e.length>2;G&&(B.push(...ee(e[2].dims)),j.push("rank")),B.push(...ee(O));let q=F=>{let ie=c.length,re=nn("batchDims",e[0].dataType,ie,1),L=Te(e[0].dataType),Z=R("a",e[0].dataType,T,S),K=R("b",e[1].dataType,z,S),J=X("result",e[0].dataType,O.length,S),ye=[Z,K];if(G){let Ee=n?S:1;ye.push(R("bias",e[2].dataType,e[2].dims.length,Ee))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Nt(t,M);let W=Te(J.type.tensor),V=At(t,J.type.value,W),ne=mu(S,G,V,[re,Z,K,J],n);return`
  ${F.registerUniforms(M).registerInternalVariables(re).declareVariables(...ye,J)}
  ${ne}
  ${$?Mi(v,w,L,re):Di(v,w,L,re)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${$};${n}`,inputDependencies:j},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:B}),getShaderSource:q}}}),gu,Mc,t0=U(()=>{ae(),lt(),oe(),Mt(),dn(),e0(),hn(),gu=(e,t,r,i,n=!1,a,s=4,u=4,l=4,d="f32")=>{let c=B=>{switch(B){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},h=B=>{switch(B){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${B} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",w=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${w} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${w} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${w} % inChannels;
    var resData = ${Ie(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${$}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${Ie(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${Ie(s,d)}(0.0);`,k=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ie(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ie(u,d)}(0.0);`,T=Ie(l,d),I=Ie(e?s:u,d),z=Ie(e?u:s,d),O=At(a,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Nc(n)}
      ${O}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Mc=(e,t,r,i,n,a,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],f=d?r[2]:r[3],g=d?r[1]:r[2],y=d?r[3]:r[1],$=d&&(c%4===0||c%3===0)&&y%4===0,v=d?y:f*g,w=d?f*g:y,_=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(v/_[0]/S[0]),Math.ceil(w/_[1]/S[1]),Math.ceil(h/_[2]/S[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=$?d&&c%4!==0?3:4:1,I=_[1]*S[1],z=_[0]*S[0],O=Math.max(_[0]*T,_[1]),B=i%I===0,j=n%z===0,G=a%O===0,q=$?[T,4,4]:[1,1,1],F=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Bt(t,F),F.push(...ee(e[0].dims,e[1].dims));let ie=["rank","rank"];s&&(F.push(...ee(e[2].dims)),ie.push("rank")),F.push(...ee(r));let re=L=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Nt(t,Z);let K=$?4:1,J=Te(e[0].dataType),ye=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${J}>`:J}) {
        result[flatIndex] = ${$?`vec4<${J}>`:J}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${J}>`:J}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,M=R("x",e[0].dataType,e[0].dims.length,T===3?1:T),W=R("w",e[1].dataType,e[1].dims.length,K),V=[M,W],ne=X("result",e[0].dataType,r.length,K);if(s){let Ee=R("bias",e[2].dataType,e[2].dims.length,K);V.push(Ee),ye+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${J}>`:J} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Rc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${L.registerUniforms(Z).declareVariables(...V,ne)}
        ${ye}
        ${gu(d,B,j,G,s,t,q[0],q[1],q[2],J)}
        ${$?Mi(S,_,J,void 0,!d,O):Di(S,_,J,void 0,!d,O,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${$};${B};${j};${G};${I};${z};${O}`,inputDependencies:ie},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:F}),getShaderSource:re}}}),yu,Xa,rr,_u,Qa,bu,Dc,Pc,r0=U(()=>{ae(),lt(),se(),oe(),Mt(),dn(),yu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Xa=e=>typeof e=="number"?[e,e,e]:e,rr=(e,t)=>t<=1?e:e+(e-1)*(t-1),_u=(e,t,r,i=1)=>{let n=rr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Qa=(e,t,r,i,n)=>{n==null&&(n=_u(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},bu=(e,t,r,i,n,a,s,u,l,d)=>{let c,h,f,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Qa([t,r,i,1],[u,l,d],1,[n,a,s],e);h=y[0],f=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every(($,v,w)=>$===w[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Qa([t,r,i,1],[u,l,d],1,[n,a,s],e[0]);h=y[0],f=y[1],g=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),f=Math.ceil(r/a),g=Math.ceil(i/s);let y=(h-1)*n+u-t,$=(f-1)*a+l-r,v=(g-1)*s+d-i,w=Math.floor(y/2),_=y-w,S=Math.floor($/2),k=$-S,T=Math.floor(v/2),I=v-T;c={top:S,bottom:k,left:T,right:I,front:w,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:f,outWidth:g}},Dc=(e,t,r,i,n,a=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,g,y,$]=t,[v,w,_]=Xa(r),[S,k,T]=Xa(i),I=rr(g,S),z=rr(y,k),O=rr($,T),{padInfo:B,outDepth:j,outHeight:G,outWidth:q}=bu(n,l,d,c,v,w,_,I,z,O),F=a?f*h:f,ie=[0,0,0,0,0];return s==="channelsFirst"?ie=[u,F,j,G,q]:s==="channelsLast"&&(ie=[u,j,G,q,F]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:j,outHeight:G,outWidth:q,outChannels:F,padInfo:B,strideDepth:v,strideHeight:w,strideWidth:_,filterDepth:g,filterHeight:y,filterWidth:$,effectiveFilterDepth:I,effectiveFilterHeight:z,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:k,dilationWidth:T,inShape:e,outShape:ie,filterShape:t}},Pc=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((v,w)=>w)},d=[Math.ceil(yu(l.x.map(v=>r[v]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=A.size(r),f=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Bt(t,f),f.push(...ee(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(f.push(...ee(e[2].dims)),g.push("rank")),f.push(...ee(r));let $=v=>{let w=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Nt(t,w);let _=1,S=Te(e[0].dataType),k=R("x",e[0].dataType,e[0].dims.length,c),T=R("W",e[1].dataType,e[1].dims.length,_),I=[k,T],z=X("result",e[0].dataType,r.length,_),O="";if(y){let G=R("bias",e[2].dataType,e[2].dims.length,_);I.push(G),O+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?Q("coords",4,5):Q("coords",1,5)}];
        }`}let B=Ie(c,S),j=At(t,B,S);return`
            ${O}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${v.registerUniforms(w).declareVariables(...I,z)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,k.rank)};
              let d2 = ${s?Q("coords",k.rank-1,k.rank):Q("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?Q("coords",1,k.rank):Q("coords",2,k.rank)},
              ${s?Q("coords",2,k.rank):Q("coords",3,k.rank)},
              ${s?Q("coords",3,k.rank):Q("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Q("uniforms.x_shape",1,k.rank):Q("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?Q("uniforms.x_shape",2,k.rank):Q("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?Q("uniforms.x_shape",3,k.rank):Q("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?Q("uniforms.x_shape",4,k.rank):Q("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${j}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:$}}}),Uc,jc,a0=U(()=>{ae(),se(),oe(),Mt(),Uc=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?xe(d):1,f=A.size(r)/h,g=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Bt(t,g),g.push(...ee(s,[u[0],u[1],u[2],u[3]/h]));let y=n?["rank","rank","rank"]:["rank","rank"];g.push(...ee([r[0],r[1],r[2],r[3]/h]));let $=v=>{let w=X("output",e[0].dataType,r.length,h),_=Te(w.type.tensor),S=At(t,w.type.value,_),k=R("x",e[0].dataType,s.length),T=R("w",e[1].dataType,u.length,h),I=[k,T];n&&I.push(R("b",e[2].dataType,e[2].dims,h));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Nt(t,z);let O=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(z).declareVariables(...I,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${w.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${w.type.value} = ${w.type.value}(0);
    ${O}
    ${a}
    ${S}
    ${w.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:$}},jc=(e,t,r,i)=>{let n=e.length>2,a=xe(r[3]),s=xe(r[2]),u=A.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Bt(t,h),h.push(...ee(l,d,c));let f=(s-1)*t.strides[1]+d[1],g=y=>{let $=X("output",e[0].dataType,c.length,a),v=Te($.type.tensor),w=At(t,$.type.value,v),_=R("x",e[0].dataType,l.length,a),S=R("w",e[1].dataType,d.length,a),k=[_,S];n&&k.push(R("b",e[2].dataType,e[2].dims,a));let T=n?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Nt(t,I),`
  ${y.registerUniforms(I).declareVariables(...k,$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${f}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${w}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}}}),wu,Nr,$u,Rr,Pi,Ya,vu,xu,Ui,i0=U(()=>{se(),t0(),r0(),hn(),a0(),Mt(),cn(),wt(),wu=(e,t,r,i,n,a)=>{let s=e[0],u=e.slice(a?1:2,a?3:4),l=u.length,d=t[0],c=t.slice(2).map((f,g)=>f+(f-1)*(r[g]-1)),h=u.map((f,g)=>f+i[g]+i[g+l]).map((f,g)=>Math.floor((f-c[g]+n[g])/n[g]));return h.splice(0,0,s),h.splice(a?3:1,0,d),h},Nr=[2,3,1,0],$u=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Rr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Fr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Pi=e=>{let t=ln(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ya=(e,t,r,i)=>{let n=r.format==="NHWC",a=wu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let I=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(Pe(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),I.push(z)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(jc(I,r,a,i),{inputs:I}):e.compute(Uc(I,r,a,i),{inputs:I});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],h=t[1].dims[3],f=a[n?1:2],g=a[n?2:3],y=a[n?3:1],$=n&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if($||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=a[0],z,O,B,j=[];if(n){let F=e.kernelCustomData.wT??e.compute(Pe(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),$){let ie=u*l*d;z=t[0].reshape([1,I,ie]),O=F.reshape([1,ie,y]),B=[1,I,y]}else z=t[0].reshape([I,u*l,d]),O=F.reshape([1,d,y]),B=[I,f*g,y];j.push(z),j.push(O)}else z=t[0].reshape([I,d,u*l]),O=t[1].reshape([1,y,d]),B=[I,y,f*g],j.push(O),j.push(z);s&&j.push(t[2]);let G=B[2],q=j[0].dims[j[0].dims.length-1];G<8&&q<8?e.compute(pn(j,r,a,B,n,i),{inputs:j}):e.compute(Zr(j,r,a,B,n,i),{inputs:j});return}let v=!0,w=e.kernelCustomData.wT??e.compute(Pe(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=w);let _=[t[0],w];s&&_.push(t[2]);let S=n?f*g:y,k=n?y:f*g,T=c*h*d;e.compute(Mc(_,r,a,S,k,T,s,v,i),{inputs:_})},vu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Rr({...t,pads:n,strides:a,dilations:s,kernelShape:u},i);Ya(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},xu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Rr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Dc(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Pc(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Ui=(e,t)=>{if($u(e.inputs,t),e.inputs[0].dims.length===3)vu(e,t);else if(e.inputs[0].dims.length===5)xu(e,e.inputs,t);else{let r=Rr(t,e.inputs);Ya(e,e.inputs,r)}}}),Wc,n0=U(()=>{ae(),lt(),se(),oe(),Wc=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=a?xe(l):1,h=a&&d===1&&l>=4,f=h?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-f,y=a?xe(d):1,$=a?d===1?c:y:1,v=A.size(n)/y,w=[Math.ceil(v/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let _=["rank","rank"],S=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],I=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:12,data:v},{type:12,data:S},{type:12,data:k},{type:12,data:T},{type:12,data:I},{type:6,data:z},{type:12,data:f},{type:12,data:l},{type:12,data:d},...ee(e[0].dims,e[1].dims)];i&&(O.push(...ee(e[2].dims)),_.push("rank")),O.push(...ee(n));let B=j=>{let G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],q=Te(e[0].dataType),F=a?1:2,ie=a?2:3,re=a?3:1,L=R("W",e[1].dataType,e[1].dims.length,$),Z=R("Dy",e[0].dataType,e[0].dims.length,c),K=[Z,L];i&&K.push(R("bias",e[2].dataType,[n[re]].length,y));let J=X("result",e[0].dataType,n.length,y),ye=()=>{let V="";if(h)c===4?V+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${L.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?V+=`
          dotProd = dotProd + dot(vec4<${q}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${q}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(V+=`
          dotProd = dotProd + dot(vec4<${q}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${q}>(${L.getByOffset("w_offset")}, ${L.getByOffset("w_offset + 1u")}, ${L.getByOffset("w_offset + 2u")}, ${L.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(V+=`
                  let xValue = ${a?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)V+=`
          let w_offset = ${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${L.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ne=0;ne<c;ne++)V+=`
            let wValue${ne} = ${L.getByOffset(`${L.indicesToOffset(`${L.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ne}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${ne}] * wValue${ne};`;return V},M=()=>{if(g===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let V="";if(c===1){V+="dotProd = dotProd";for(let ne=0;ne<g;ne++)V+=`
            + ${Z.getByOffset(`x_offset + ${ne}`)} * ${L.getByOffset(`w_offset + ${ne}`)}`;V+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);V+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${L.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return V},W=`
            let outputIndices = ${J.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${J.indicesGet("outputIndices",0)};
            let d1 = ${J.indicesGet("outputIndices",re)};
            let r = ${J.indicesGet("outputIndices",F)};
            let c = ${J.indicesGet("outputIndices",ie)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${J.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${q}(dyRCorner) + ${q}(wR)) / ${q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${q}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${q}(dyCCorner) + ${q}(wC)) / ${q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${q}(uniforms.Dy_shape[${ie}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${L.indicesToOffset(`${L.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${ye()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${M()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${J.setByOffset("global_idx","value")};
          `;return`
    ${j.registerUniforms(G).declareVariables(...K,J)}
      ${j.mainStart()}
      ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${$}${y}${h}${g}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:B}}}),ku,Su,Tu,Ja,qc,Iu,ei,Eu,Lc,s0=U(()=>{n0(),Mt(),wt(),ku=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,Su=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},Tu=(e,t,r,i,n,a,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let f=e[0],g=t[u?3:1]*n;for(let y=0,$=e.length-c-(u?1:0);y<c;++y,++$){let v=e[$],w=h?v*s[y]:d[y],_=ku(v,s[y],a[y],t[$],r[y],w);Su(_,i,a,y,y+c),h&&d.push(s[y]*(v-1)+l[y]+(t[$]-1)*r[y]+1-a[y]-a[y+c])}d.splice(0,0,f),d.splice(u?3:1,0,g)},Ja=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,f)=>h*f,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}Tu(u,r,l,e.autoPad,e.group,n,d,i,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),c},qc=e=>{let t=ln(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Iu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ei=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Wc(a,r,i),{inputs:a})},Eu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=Ja({...t,pads:u,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);ei(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Lc=(e,t)=>{if(Iu(e.inputs,t),e.inputs[0].dims.length===3)Eu(e,t);else{let r=Ja(t,e.inputs);ei(e,e.inputs,r)}}}),Cu,Vc,Hc,o0=U(()=>{ae(),se(),ke(),oe(),Cu=(e,t,r,i)=>{let n=A.size(t),a=t.length,s=R("input",e,a),u=X("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=A.normalizeAxis(l,a),c=h=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=Q("uniforms.input_shape","uniforms.axis",a),y=i.reverse?f+(i.exclusive?" + 1":""):"0",$=i.reverse?g:f+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ee(t,t)]}),getShaderSource:c}},Vc=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Cu(i,r,n,t),{inputs:[0]})},Hc=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),zu,Ou,Au,Gc,Fc,u0=U(()=>{ae(),se(),ke(),oe(),zu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ou=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},Au=(e,t)=>{let r,i,n,a,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=c?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),f=h.dims.length,g=e.dataType,y=R("a",g,f),$=X("output",g,f),v=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(y,$)}

  ${Ou(u,f,y,$)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:w=>{let _=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],S=A.size(_),k=h.dims,T=A.sortBasedOnPerm(k,u);return{outputs:[{dims:_,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ee(k,T)]}},getShaderSource:v}},Gc=(e,t)=>{zu(e.inputs),e.compute(Au(e.inputs[0],t))},Fc=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Mr,ar,ti,Bu,Nu,Ru,Mu,ri,Du,Kc,Zc,l0=U(()=>{ae(),se(),ke(),oe(),Mr="[a-zA-Z]|\\.\\.\\.",ar="("+Mr+")+",ti="^"+ar+"$",Bu="("+ar+",)*"+ar,Nu="^"+Bu+"$",Ru=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Mu=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Nu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let u=e[s].dims.slice();if(!a.match(RegExp(ti)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(ar)))throw new Error("Invalid RHS");(n=i.match(RegExp(Mr,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],u=0;if(!e.match(RegExp(ti))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Mr,"g")),d=new Ru(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=n-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let y=String.fromCharCode(48+g);d.addSymbol(y,h+g),this.addSymbol(y,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},ri=e=>e+"_max",Du=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),a=A.size(i),s=X("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",f="var sum = 0.0;",g="sum += prod;",y=[],$=[],v=[],w=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var I;if(r.rhs.symbolToIndices.has(T)){let z=(I=r.rhs.symbolToIndices.get(T))==null?void 0:I[0];z!==void 0&&r.lhs.forEach((O,B)=>{if(k.inputIndices.includes(B)){let j=O.symbolToIndices.get(T);if(j===void 0)throw new Error("Invalid symbol error");j.forEach(G=>{c.push(`${n[B].indicesSet(`input${B}Indices`,G,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,O)=>{if(k.inputIndices.includes(O)){let B=z.symbolToIndices.get(T);if(B===void 0)throw new Error("Invalid symbol error");B.forEach(j=>{y.push(`${n[O].indicesSet(`input${O}Indices`,j,`${T}`)}`)}),w.push(`prod *= ${n[O].getByIndices(`input${O}Indices`)};`)}}),$.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${ri(T)}; ${T}++) {`),v.push("}")});let S=_?[...c,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,f,...$,...y,h,...w,g,...v];return`
            ${d.registerUniforms(u.map(k=>({name:`${ri(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var f;return{type:12,data:((f=r.symbolToInfo.get(h))==null?void 0:f.dimValue)||0}});d.push({type:12,data:a});let c=e.map((h,f)=>[...ee(h)]).reduce((h,f)=>h.concat(f),d);return c.push(...ee(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:l}},Kc=(e,t)=>{let r=new Mu(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Du(n,e.inputs[0].dataType,r,i))},Zc=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Pu,ai,Uu,ju,Xc,d0=U(()=>{ae(),se(),oe(),Pu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ai=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Uu=(e,t)=>e.length>t.length?ai(e,t):ai(t,e),ju=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Uu(t,r),n=e[0].dataType,a=n===9||A.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(A.size(i)/u),d=h=>{let f=R("input",n,t.length,s),g=X("output",n,i.length,u),y;if(n===9){let $=(v,w,_="")=>`
          let outputIndices${w} = ${g.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${f.broadcastedIndicesToOffset(`outputIndices${w}`,g)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${v}[${w}] = ${_}(${f.getByOffset(`index${w}`)}[component${w}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,g)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...ee(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Xc=e=>{Pu(e.inputs),e.compute(ju(e.inputs),{inputs:[0]})}}),Wu,Qc,p0=U(()=>{ae(),se(),oe(),un(),Wu=e=>{let t=e[0].dataType,r=A.size(e[0].dims),i=A.size(e[1].dims),n=i%4===0,a=s=>{let u=R("x",t,[1],4),l=R("bias",t,[1],4),d=X("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,f=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Ni(ze(t))}

    ${s.mainStart(Gt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Ri("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Gt/4)}})}},Qc=e=>{e.inputs.length<2||A.size(e.inputs[1].dims)===0?yc(e):e.compute(Wu(e.inputs))}}),qu,Lu,Yc,Jc,c0=U(()=>{ae(),se(),ke(),oe(),qu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Lu=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=A.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let u=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(A.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:a},...ee(e[0].dims,e[1].dims,s)],h=f=>{let g=R("data",e[0].dataType,e[0].dims.length,l),y=R("inputIndices",e[1].dataType,e[1].dims.length),$=X("output",e[0].dataType,s.length,l),v=_=>{let S=i.length,k=`var indicesIndices${_}  = ${y.type.indices}(0);`;for(let T=0;T<S;T++)k+=`${S>1?`indicesIndices${_}[${T}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${T}]`:`outputIndices${_}`};`;k+=`
          var idx${_} = ${y.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${g.type.indices};
        `;for(let T=0,I=0;T<n;T++)T===a?(k+=`${n>1?`dataIndices${_}[${T}]`:`dataIndices${_}`} = u32(idx${_});`,I+=S):(k+=`${n>1?`dataIndices${_}[${T}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${I}]`:`outputIndices${_}`};`,I++);return k},w;if(e[0].dataType===9){let _=(S,k,T="")=>`
          let outputIndices${k} = ${$.offsetToIndices(`outputOffset + ${k}u`)};
          ${v(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${T}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else w=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${g.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,$)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${w}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},Yc=e=>he({axis:e.axis}),Jc=(e,t)=>{let r=e.inputs;qu(r),e.compute(Lu(e.inputs,t))}}),Vu,eh,th,h0=U(()=>{ae(),se(),oe(),Vu=(e,t,r,i,n,a,s,u,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[a];d.push(...ee(t.dims,c));let h=f=>{let g=R("indices_data",t.dataType,t.dims.length),y=X("input_slice_offsets_data",12,1,1),$=[g,y],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(...$)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},eh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],u=A.sizeToDimension(a,a.length-1),l=A.sizeFromDimension(i,t.batchDims+s),d=A.sizeToDimension(i,t.batchDims),c=A.sizeFromDimension(i,t.batchDims),h=u/d,f=new Array(s),g=l;for(let k=0;k<s;++k)f[s-1-k]=g,g*=i[t.batchDims+s-1-k];let y=Vu(e,r[1],f,t.batchDims,i,u,h,c,s),$=t.batchDims+s;if($>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=a.slice(0,-1).concat(i.slice($)),w=A.size(v),_=[{type:12,data:w},{type:12,data:l},...ee(r[0].dims,y.dims,v)],S=k=>{let T=R("data",r[0].dataType,r[0].dims.length),I=R("slice_offsets",12,y.dims.length),z=X("output",r[0].dataType,v.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,I,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:n}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:_}),getShaderSource:S},{inputs:[r[0],y]})},th=e=>({batchDims:e.batch_dims,cacheKey:""})}),Hu,Gu,rh,ah,f0=U(()=>{ae(),se(),ke(),oe(),Hu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=A.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/i)===a.dims[l]:u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((u,l)=>u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Gu=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=A.normalizeAxis(t.gatherAxis,n),s=A.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(a,1,...i);let l=A.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ee(...e.map((g,y)=>g.dims),u)],f=g=>{let y=R("data",e[0].dataType,e[0].dims.length),$=R("inputIndices",e[1].dataType,e[1].dims.length),v=R("scales",e[2].dataType,e[2].dims.length),w=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=X("output",d,u.length),S=[y,$,v];w&&S.push(w);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,_)}
        ${g.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${v.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${v.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${v.getByIndices("scale_indices")};
        ${w?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${w.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${w.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(d)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,y)=>y!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:f}},rh=(e,t)=>{let r=e.inputs;Hu(r,t),e.compute(Gu(e.inputs,t))},ah=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Fu,Ku,ih,nh,m0=U(()=>{ae(),se(),ke(),oe(),Fu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ku=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,u=A.normalizeAxis(t.axis,n),l=r[u],d=a.slice(0),c=A.size(d),h=R("input",i,n),f=R("indicesInput",s,a.length),g=X("output",i,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...ee(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,g)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},ih=e=>he({axis:e.axis}),nh=(e,t)=>{let r=e.inputs;Fu(r),e.compute(Ku(e.inputs,t))}}),Zu,Xu,sh,oh,g0=U(()=>{ae(),se(),oe(),Zu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Xu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=ip.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[n,a];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),c=Math.ceil(n/l),h=!0,f=A.size(u),g=[{type:12,data:h?d:f},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(g.push(...ee(e[2].dims)),y.push("rank")),g.push(...ee(u));let $=w=>{let _="";t.transA&&t.transB?_="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?_="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?_="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(_="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=R("a",e[0].dataType,e[0].dims),T=R("b",e[1].dataType,e[1].dims),I=k.type.value,z=null,O=[k,T];e.length===3&&(z=R("c",e[2].dataType,e[2].dims.length),O.push(z));let B=X("output",e[0].dataType,u.length);O.push(B);let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${w.registerUniforms(j).declareVariables(...O)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${_}
    }

    ${S}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",B)}; value += ${I}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=w=>{let _=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),k=null,T=[_,S];e.length===3&&(k=R("c",e[2].dataType,e[2].dims.length),T.push(k));let I=X("output",e[0].dataType,u.length);T.push(I);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],O="",B="";t.transA&&t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(B=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(B=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let j=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${w.registerUniforms(z).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${w.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${B}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${O}
      }
      workgroupBarrier();
    }

    ${j}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:$}},sh=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},oh=(e,t)=>{Zu(e.inputs),e.compute(Xu(e.inputs,t))}}),rt,ot,kt,St,Qu,Yu,Ju,el,tl,rl,al,il,uh,lh,y0=U(()=>{ae(),se(),ke(),oe(),[rt,ot,kt,St]=[0,1,2,3],Qu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Yu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Ju=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,el=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,tl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,rl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${kt}] = u32(r);
            indices[${St}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${kt}] = u32(clamp(r, 0, H - 1));
          indices[${St}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${kt}] = gs_reflect(r, border[1], border[3]);
          indices[${St}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,al=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${ot}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,il=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=R("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,ot,kt,St]=[0,3,1,2]);let s=X("output",e[0].dataType,a.length),u=r.type.value,l=A.size(a),d=[{type:12,data:l},...ee(e[0].dims,i,a)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Yu}
  ${Ju(u)}
  ${el(t)}
  ${tl(t)}
  ${rl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${kt}]);
      let W_in = i32(uniforms.x_shape[${St}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${rt}], indices[${kt}], indices[${St}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${al(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=A.size(a);return{outputs:[{dims:a,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},uh=(e,t)=>{Qu(e.inputs),e.compute(il(e.inputs,t))},lh=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,nl,dh,ii,sl,pr,ph,ch=U(()=>{ae(),se(),ke(),an(),on(),oe(),wt(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,nl=(e,t)=>{let r=e[0],i=Be(e,1),n=Be(e,2),a=Be(e,3),s=Be(e,4),u=Be(e,5),l=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=h,y=0,$=0,v=Math.floor(f/t.numHeads);if(l&&d&&A.size(l.dims)&&A.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],$=l.dims[2]}else if(l&&A.size(l.dims)||d&&A.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w;if(i&&A.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');w=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');w=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}if(a&&A.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=y+g,S=0;if(s&&A.size(s.dims)>0){S=8;let z=s.dims;throw z.length===1?z[0]===c?S=1:z[0]===3*c+2&&(S=3):z.length===2&&z[0]===c&&z[1]===_&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=f;if(n&&A.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let I=!1;if(s&&A.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&A.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:I,passPastInKv:k,qkvFormat:w}},dh=e=>he({...e}),ii=he({perm:[0,2,1,3]}),sl=(e,t,r,i,n,a,s)=>{let u=[i,n,a],l=A.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],c=h=>{let f=X("qkv_with_bias",t.dataType,u),g=R("qkv",t.dataType,u),y=R("bias",r.dataType,u),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms($).declareVariables(g,y,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},pr=(e,t,r,i,n,a,s,u)=>{let l=a;if(s&&A.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=sl(e,a,s,t,i,r*n,u),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Pe(l,ii.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Pe(l,ii.perm),{inputs:[l],outputs:[-1]})[0]},ph=(e,t)=>{let r=nl(e.inputs,t),i=e.inputs[0],n=Be(e.inputs,1),a=Be(e.inputs,2),s=Be(e.inputs,3),u=Be(e.inputs,4),l=Be(e.inputs,5),d=Be(e.inputs,6),c=Be(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&a&&n.dims.length===4&&a.dims.length===4,f=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return mr(e,f,n,a,u,void 0,d,c,l,r);if(!n||!a)throw new Error("key and value must be provided");let g=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);mr(e,f,g,y,u,void 0,d,c,l,r)}}),ol,ul,ll,dl,ji,hh,fh,mh=U(()=>{ae(),se(),ke(),oe(),ol=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ul=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},ll=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,dl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ji=(e,t)=>{let r=e[0].dims,i=A.size(r),n=e[0].dataType,a=A.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=R("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,f=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let $=r.slice();$[a]=t.splitSizes[y],c.push($),s[y]=X(`output${y}`,n,$.length),d.push({dims:c[y],dataType:e[0].dataType})}f.push({type:12,data:l},...ee(r,...c));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${ll(l.length)}
  ${dl(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},hh=(e,t)=>{ol(e.inputs);let r=e.inputs.length===1?t:ul(e.inputs,t);e.compute(ji(e.inputs,r),{inputs:[0]})},fh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),pl,Xr,gh,yh=U(()=>{ae(),se(),ke(),oe(),pl=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!A.areEqual(i.dims,[])&&!A.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!A.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],h=A.sizeFromDimension(r.dims,1)/d,f=u===0?n.dims[1]*2:h/s;if(u>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(f/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Xr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],u=A.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=n===0?c*2:d/i,f=new Array(s,l,d/h,h-c),g=A.computeStrides(f),y=[{type:1,data:a},{type:12,data:f},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=v=>{let w=R("input",e[0].dataType,e[0].dims.length),_=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),k=R("sin_cache",e[3].dataType,e[3].dims.length),T=X("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${v.declareVariables(w,_,S,k,T)}

        ${v.mainStart(Gt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",X("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${w.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${w.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${w.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${w.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",w.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(f)/Gt)},programUniforms:y})}},gh=(e,t)=>{pl(e.inputs,t),e.compute(Xr(e.inputs,t))}}),cl,hl,ni,fl,_h,_0=U(()=>{ke(),ae(),on(),ch(),mh(),wt(),yh(),oe(),cl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,f=0,g=!i||i.dims.length===0,y=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=y*t.numHeads);let $=a&&a.dims.length!==0,v=s&&s.dims.length!==0;if($&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&v){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if($||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}let _=0,S=!1,k=t.kvNumHeads?y*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:y,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:w}},hl=he({perm:[0,2,1,3]}),ni=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Pe(i,hl.perm),{inputs:[i],outputs:[-1]})[0]),i},fl=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=R("seq_lens",r.dataType,r.dims),f=R("total_seq_lens",i.dataType,i.dims),g=X("pos_ids",n,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(h,f,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},_h=(e,t)=>{var k;let r=cl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[f,g,y]=!n&&!a?e.compute(ji([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],$,v;if(t.doRotary){let T=e.compute(fl(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],z=e.inputs[8],O=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),B=[f,T,I,z],j=[-1];$=e.compute(Xr(B,O),{inputs:B,outputs:j})[0],B.splice(0,1,g);let G=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});v=e.compute(Xr(B,G),{inputs:B,outputs:j})[0]}let w=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:f,void 0,0),_=ni(e,t.doRotary?v:g,r),S=ni(e,y,r);mr(e,w,_,S,void 0,void 0,s,u,void 0,r,l,d)}}),si,ml,gl,bh,b0=U(()=>{ae(),se(),wt(),oe(),si=(e,t,r,i,n,a,s,u)=>{let l=xe(a),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=n*s,f=64;h===1&&(f=256);let g=[n,s,a/l],y=[n,s,2],$=["rank","type","type"],v=[];v.push(...ee(g,y));let w=_=>{let S=R("x",t.dataType,3,l),k=R("scale",r.dataType,r.dims),T=R("bias",i.dataType,i.dims),I=X("output",1,3,2),z=[S,k,T,I];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${_.declareVariables(...z)}
  ${_.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${bt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${bt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${f}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:v}),getShaderSource:w},{inputs:[t,r,i],outputs:[-1]})[0]},ml=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],u=i[1],l=A.sizeFromDimension(i,a),d=xe(l),c=A.size(n)/d,h=si(e,t[0],t[1],t[2],s,l,u,r.epsilon),f=[s,u,l/d],g=[s,u],y=["type","none"],$=v=>{let w=R("x",t[0].dataType,f.length,d),_=R("scale_shift",1,g.length,2),S=X("output",t[0].dataType,f.length,d),k=[w,_,S];return`
  ${v.registerUniform("output_size","u32").declareVariables(...k)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${w.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ee(f,g,f)]}),getShaderSource:$},{inputs:[t[0],h]})},gl=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],u=A.sizeFromDimension(i,1)/s,l=xe(s),d=A.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],f=!1,g=[0,i.length-1];for(let w=0;w<i.length-2;w++)f=f||i[w+1]!==1,g.push(w+1);f=f&&i[i.length-1]!==1;let y=f?e.compute(Pe(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(w,_)=>i[g[_]])),$=si(e,y,t[1],t[2],a,u,s,r.epsilon),v=w=>{let _=Te(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=z=>{let O=z===0?"x":"y",B=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${_}(${B}(scale.${O}))`;case 2:return`vec2<${_}>(${B}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${_}>(${B}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=R("input",t[0].dataType,t[0].dims,l),I=X("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${w.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:v},{inputs:[t[0],$]})},bh=(e,t)=>{t.format==="NHWC"?gl(e,e.inputs,t):ml(e,e.inputs,t)}}),yl,_l,wh,w0=U(()=>{ae(),se(),oe(),yl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},_l=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],u=n,l=A.normalizeAxis(t.axis,n.length),d=A.sizeToDimension(n,l),c=A.sizeFromDimension(n,l),h=A.size(a.dims),f=s?A.size(s.dims):0;if(h!==c||s&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let g=[];for(let T=0;T<n.length;++T)T<l?g.push(n[T]):g.push(1);let y=xe(c),$=["type","type"],v=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&$.push("type");let w=r>1,_=r>2,S=T=>{let I=Te(e[0].dataType),z=[R("x",e[0].dataType,e[0].dims,y),R("scale",a.dataType,a.dims,y)];s&&z.push(R("bias",s.dataType,s.dims,y)),z.push(X("output",e[0].dataType,u,y)),w&&z.push(X("mean_data_output",1,g)),_&&z.push(X("inv_std_output",1,g));let O=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(O).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Oi("f32",y)};
    var mean_square_vector = ${Oi("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Vt(I,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${bt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${bt("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Vt(I,y,"x[j + offset]")};
      let f32scale = ${Vt(I,y,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Vt(I,y,"bias[j]")}`:""}
      );
    }

    ${w?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return w&&k.push({dims:g,dataType:1}),_&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:$},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:v}),getShaderSource:S}},wh=(e,t)=>{yl(e.inputs),e.compute(_l(e.inputs,t,e.outputCount))}}),bl,$h,$0=U(()=>{se(),cn(),hn(),bl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},$h=e=>{bl(e.inputs);let t=Ht.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(pn(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=A.size(e.inputs[0].dims.slice(0,-2)),s=A.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],c=[u,l];e.compute(Zr(c,{activation:""},t,d),{inputs:c})}else e.compute(Zr(e.inputs,{activation:""},t))}}}),wl,$l,vl,vh,xh,v0=U(()=>{ae(),se(),ke(),oe(),wl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!A.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(A.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(A.size(l)!==d)throw new Error("zeroPoints input size error.")}},$l=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=A.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=xe(t.k),f=xe(d),g=xe(s),y=u.concat([n,s]),$=n>1&&s/g%2===0?2:1,v=A.size(y)/g/$,w=64,_=[],S=[l,n,a/h],k=A.convertShape(e[1].dims).slice();k.splice(-1,1,d/f),_.push(...ee(S)),_.push(...ee(k)),_.push(...ee(e[2].dims)),e.length===4&&_.push(...ee(A.convertShape(e[3].dims)));let T=[l,n,s/g];_.push(...ee(T));let I=z=>{let O=S.length,B=R("a",e[0].dataType,O,h),j=R("b",12,k.length,f),G=R("scales",e[2].dataType,e[2].dims.length),q=[B,j,G],F=e.length===4?R("zero_points",12,e[3].dims.length):void 0;F&&q.push(F);let ie=T.length,re=X("output",e[0].dataType,ie,g),L=Te(e[0].dataType),Z=(()=>{switch(h){case 1:return`array<${L}, 8>`;case 2:return`mat4x2<${L}>`;case 4:return`mat2x4<${L}>`;default:throw new Error(`${h}-component is not supported.`)}})(),K=()=>{let M=`
          // reuse a data
            var input_offset = ${B.indicesToOffset(`${B.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Z};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${B.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<g*$;W++)M+=`
            b_value = ${f===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Z}(${Array.from({length:4},(V,ne)=>`${L}(b_value_lower[${ne}]), ${L}(b_value_upper[${ne}])`).join(", ")});
            b_dequantized_values = ${h===1?`${Z}(${Array.from({length:8},(V,ne)=>`(b_quantized_values[${ne}] - ${F?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${F?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(W/g)}]${g>1?`[${W%g}]`:""} += ${Array.from({length:8/h},(V,ne)=>`${h===1?`a_data[${ne}] * b_dequantized_values[${ne}]`:`dot(a_data[${ne}], b_dequantized_values[${ne}])`}`).join(" + ")};
          `;return M},J=()=>{let M=`
            var col_index = col * ${g};
            ${F?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${L}(8);`}
            `;for(let W=0;W<g*$;W++)M+=`
            let scale${W} = ${G.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${L}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},ye=()=>{let M=`col_index = col * ${g};`;for(let W=0;W<g*$;W++)M+=`
            let b${W}_data = ${j.getByIndices(`${j.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,M};return`
        var<workgroup> workgroup_shared: array<${re.type.value}, ${$*w}>;
        ${z.declareVariables(...q,re)}
        ${z.mainStart([w,1,1])}
          let output_indices = ${re.offsetToIndices(`(global_idx / ${w}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${w}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${J()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${ye()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${K()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${w}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${re.setByIndices(`${re.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${f};${g};${$};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:v},programUniforms:_}),getShaderSource:I}},vl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=A.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=xe(t.k),f=xe(d),g=u.concat([n,s]),y=128,$=s%8===0?8:s%4===0?4:1,v=y/$,w=v*f*8,_=w/h,S=w/t.blockSize,k=A.size(g)/$,T=[],I=[l,n,a/h],z=A.convertShape(e[1].dims).slice();z.splice(-1,1,d/f),T.push(...ee(I)),T.push(...ee(z)),T.push(...ee(e[2].dims)),e.length===4&&T.push(...ee(A.convertShape(e[3].dims)));let O=[l,n,s];T.push(...ee(O));let B=j=>{let G=I.length,q=R("a",e[0].dataType,G,h),F=R("b",12,z.length,f),ie=R("scales",e[2].dataType,e[2].dims.length),re=[q,F,ie],L=e.length===4?R("zero_points",12,e[3].dims.length):void 0;L&&re.push(L);let Z=O.length,K=X("output",e[0].dataType,Z),J=Te(e[0].dataType),ye=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${q.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${K.type.value}, ${v}>, ${$}>;
        ${j.declareVariables(...re,K)}
        ${j.mainStart([v,$,1])}
          let output_indices = ${K.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${q.getByIndices(`${q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${L?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${J}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${J}(8);`}
            let scale = ${ie.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${F.getByIndices(`${F.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${ye()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(M,W)=>`${J}(b_value_lower[${W}]), ${J}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${K.setByIndices(`${K.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${f};${v};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:k},programUniforms:T}),getShaderSource:B}},vh=(e,t)=>{wl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(vl(e.inputs,t)):e.compute($l(e.inputs,t))},xh=e=>he(e)}),xl,kl,Sl,Tl,Il,El,Cl,zl,kh,x0=U(()=>{ae(),se(),oe(),xl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},kl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Sl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Tl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k = i32(${Q("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Il=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k -= i32(${Q("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},El=(e,t,r)=>{switch(r.mode){case 0:return kl(e,t,r.pads.length);case 1:return Sl(e,t,r.pads.length);case 2:return Tl(e,t,r.pads.length);case 3:return Il(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Cl=(e,t)=>{let r=A.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=A.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ee(e[0].dims,r));let u=["rank"],l=d=>{let c=X("output",e[0].dataType,r.length),h=R("x",e[0].dataType,i.length),f=h.type.value,g=El(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(r)/64)},programUniforms:a}),getShaderSource:l}},zl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)a[Number(u[l])]=Number(r[l]),a[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>a[Number(l)]=Number(u));let s=[];return a.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},kh=(e,t)=>{xl(e.inputs);let r=zl(e.inputs,t);e.compute(Cl(e.inputs,r),{inputs:[0]})}}),ir,oi,ui,li,di,Ol,Al,pi,ci,Sh,Th,hi,Ih,Eh,fi,Ch,zh,Oh,Ah,k0=U(()=>{Ye(),ae(),se(),oe(),ir=e=>{if(we.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},oi=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Fr.adjustPoolAttributes(r,n,s,u,l,d);let c=Fr.computePoolOutputShape(r,n,u,l,s,d,t.autoPad),h=Object.assign({},t);a?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[h,i?f:c]},ui=(e,t)=>{let r=t.format==="NHWC",i=A.size(e),n=A.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);a.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];f=!!($+v),a.push({type:12,data:g},{type:12,data:y},{type:12,data:$},{type:12,data:v}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,h,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=A.computeStrides(t.kernelShape);a.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[a,s,!!l,!1,!1]}},li=(e,t,r,i,n,a,s,u,l,d,c,h)=>{let f=n.format==="NHWC",g=t.type.value,y=X("output",t.type.tensor,i);if(n.kernelShape.length<=2){let $="",v="",w="",_=r-(f?2:1);if(c?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let S=r-(f?3:2);h?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,w=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${v}
              ${$}
              ${w}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=n.kernelShape.length,v=n.pads.length,w="";return d?w=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:w=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Q("uniforms.pads","j - 2u",v)};
                  ${w}
              }
              ${s}

              output[global_idx] = value;
            }`}},di=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ol=e=>`${di(e)};${e.countIncludePad}`,Al=e=>`${di(e)};${e.storageOrder};${e.dilations}`,pi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ci=(e,t,r,i)=>{let[n,a]=oi(t,i,r),s=R("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,f,g,y]=ui(a,n);c.push(...ee(t.dims,a));let $=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${g};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(a)/64)},programUniforms:c}),getShaderSource:v=>li(v,s,t.dims.length,a.length,n,l,d,0,h,f,g,y)}},Sh=e=>{let t=e.count_include_pad!==0,r=pi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Ol(i)}},Th=(e,t)=>{ir(e.inputs),e.compute(ci("AveragePool",e.inputs[0],!1,t))},hi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ih=e=>{let t=e.format;return{format:t,...hi,cacheKey:t}},Eh=(e,t)=>{ir(e.inputs),e.compute(ci("GlobalAveragePool",e.inputs[0],!0,t))},fi=(e,t,r,i)=>{let[n,a]=oi(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,h,f,g,y]=ui(a,n);return c.push(...ee(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${g};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(a)/64)},programUniforms:c}),getShaderSource:$=>li($,l,t.dims.length,a.length,n,s,u,t.dataType===10?-65504:-1e5,h,f,g,y)}},Ch=(e,t)=>{ir(e.inputs),e.compute(fi("MaxPool",e.inputs[0],!1,t))},zh=e=>{let t=e.storage_order,r=e.dilations,i=pi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Al(n)}},Oh=e=>{let t=e.format;return{format:t,...hi,cacheKey:t}},Ah=(e,t)=>{ir(e.inputs),e.compute(fi("GlobalMaxPool",e.inputs[0],!0,t))}}),Bl,Nl,Bh,Nh,S0=U(()=>{ae(),se(),ke(),oe(),Bl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Nl=(e,t)=>{let r=A.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,u=A.size(a),l=i===3||i===2,d=l?[Math.ceil(A.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,f=h?l?[Math.ceil(A.size(h.dims)/4)]:h.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,y=g===!1&&c.length===1,$=xe(u),v=g&&(!l||$===4),w=v?$:1,_=v&&!l?$:1,S=R("input",l?12:i,d.length,_),k=R("scale",s,c.length),T=h?R("zero_point",l?12:i,f.length):void 0,I=X("output",s,a.length,w),z=[S,k];T&&z.push(T);let O=[d,c];h&&O.push(f);let B=[{type:12,data:u/w},{type:12,data:r},{type:12,data:t.blockSize},...ee(...O,a)],j=G=>{let q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(q).declareVariables(...z,I)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${w===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:y?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:y?l?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:j,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(u/w/64),y:1,z:1},programUniforms:B})}},Bh=(e,t)=>{Bl(e.inputs,t),e.compute(Nl(e.inputs,t))},Nh=e=>he({axis:e.axis,blockSize:e.blockSize})}),Rl,Ml,Rh,T0=U(()=>{Ye(),ae(),oe(),Rl=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Ml=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ee(a)],l=d=>{let c=X("output",i,a.length),h=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Rh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),we.webgpu.validateInputContent&&Rl(t,r,i),e.compute(Ml(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Dl,mi,gi,Pl,Mh,Dh,I0=U(()=>{ae(),se(),ke(),oe(),Dl=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},mi=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,gi=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${Dl(e.reduction,"output[data_offset + i]","value",t)}
      }`,Pl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(A.size(i)/a),u=i[i.length-1],l=A.sizeFromDimension(r,u),d=A.sizeFromDimension(i,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...ee(e[1].dims,e[2].dims,n)],h=f=>{let g=R("indices",e[1].dataType,e[1].dims.length),y=R("updates",e[2].dataType,e[2].dims.length,a),$=t.reduction!=="none"&&t.reduction!==""?pp("output",e[0].dataType,n.length):X("output",e[0].dataType,n.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,$)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${mi(r.length,!1)}
      }
      ${gi(t,$.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${mi(r.length,!0)}
  }
  ${gi(t,$.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:h}},Mh=e=>he({reduction:e.reduction}),Dh=(e,t)=>{e.compute(Pl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ul,jl,Wl,yi,ql,Ll,Vl,Hl,Gl,Fl,Kl,Zl,_i,Xl,Ql,Yl,Jl,ed,Ph,Uh,E0=U(()=>{ae(),se(),ke(),oe(),Ul=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},jl=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Wl=(e,t,r,i,n,a)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ul(i,t),t.axes.length>0&&jl(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},yi=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,ql=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${yi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${yi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ll=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Vl=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Hl=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Gl=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Fl=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",i)};
        var roi_low = ${Q("uniforms.roi","i",n)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Kl=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",a)};
          var roi_hi = ${Q("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Zl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,_i=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Xl=(e,t,r,i,n)=>{let[a,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${_i(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ql=(e,t,r,i,n,a,s,u,l,d)=>{let c=r.length===2,[h,f]=c?[0,1]:[2,3],g=e.type.value,y=$=>{let v=$===h?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[$]},
        ${i[$]}, ${r[$]}, ${a[$]}, ${a[$]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${g} = originalIdx + ${g}(i);
          if (${v} < 0 || ${v} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${v} = max(0, min(${v}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${v})`)};
          data[i + 1] = ${$===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(f)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Yl=(e,t,r,i,n)=>{let[a,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${_i(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Jl=(e,t,r,i,n,a)=>{let s=e.dims,u=Vl(a,t.axes,s.length),l=Hl(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((_,S)=>_===0?1:l[S]/_),t.keepAspectRatioPolicy!=="stretch"&&(l=Gl(s,d,t)));let c=X("output",e.dataType,l.length),h=R("input",e.dataType,s.length),f=A.size(l),g=s.length===l.length&&s.every((_,S)=>_===l[S]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,v=h.type.value,w=_=>`
      ${g?"":`
      ${ql(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Zl(h,s)};
              ${Ll(t.nearestMode,r,v)};
              ${Kl(h,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${Fl(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Xl(h,c,s,y,$)}`;if(s.length===3||s.length===5)return`${Yl(h,c,s,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Ql(h,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:u},...ee(s,l)]})}},ed=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ph=(e,t)=>{let r=[],i=[],n=[],a=ed(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Wl(e.inputs,t,a,r,i,n),e.compute(Jl(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Uh=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),td,rd,jh,C0=U(()=>{ae(),se(),oe(),td=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},rd=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=A.size(a),u=a,l=s,d=a.slice(-1)[0],c=i?a.slice(0,-1).concat(1):[],h=!n&&e.length>3,f=e.length>4,g=i&&r>1,y=i&&r>2,$=r>3,v=64,w=xe(d),_=[{type:12,data:l},{type:12,data:w},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[R("x",e[0].dataType,e[0].dims,w),R("skip",e[1].dataType,e[1].dims,w),R("gamma",e[2].dataType,e[2].dims,w)];h&&z.push(R("beta",e[3].dataType,e[3].dims,w)),f&&z.push(R("bias",e[4].dataType,e[4].dims,w)),z.push(X("output",e[0].dataType,u,w)),g&&z.push(X("mean_output",1,c)),y&&z.push(X("inv_std_output",1,c)),$&&z.push(X("input_skip_bias_sum",e[0].dataType,u,w));let O=Te(e[0].dataType),B=Te(1,w);return`

      ${T.registerUniforms(I).declareVariables(...z)}
      var<workgroup> sum_shared : array<${B}, ${v}>;
      var<workgroup> sum_squared_shared : array<${B}, ${v}>;

      ${T.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":O+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Vt(O,w,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${bt("sum",w)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${bt("square_sum",w)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${O}(mean)`}) *
            ${O}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${w};${g};${y};${$}`,inputDependencies:e.map((T,I)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:_})}},jh=(e,t)=>{td(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(rd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),ad,nr,id,bi,nd,sd,Wh,qh,z0=U(()=>{ae(),se(),ke(),oe(),ad=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},nr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},id=(e,t)=>{if(e.length>1){let r=nr(e,1),i=nr(e,2),n=nr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},bi=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},nd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
            let steps_i = ${Q("uniforms.steps","i",r.length)};
            let signs_i = ${Q("uniforms.signs","i",r.length)};
            let starts_i = ${Q("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,sd=(e,t)=>{let r=e[0].dims,i=A.size(r),n=t.axes.length>0?A.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=nr(e,4);a.forEach(w=>w!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((w,_)=>bi(w,_,r,n,a)),u=t.ends.map((w,_)=>bi(w,_,r,n,a));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let w=0;w<r.length;++w)n.includes(w)||(s.splice(w,0,0),u.splice(w,0,r[w]),a.splice(w,0,1));let l=a.map(w=>Math.sign(w));a.forEach((w,_,S)=>{if(w<0){let k=(u[_]-s[_])/w,T=s[_],I=T+k*a[_];s[_]=I,u[_]=T,S[_]=-w}});let d=r.slice(0);n.forEach((w,_)=>{d[w]=Math.ceil((u[w]-s[w])/a[w])});let c={dims:d,dataType:e[0].dataType},h=X("output",e[0].dataType,d.length),f=R("input",e[0].dataType,e[0].dims.length),g=A.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],$=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:a},...ee(e[0].dims,d)],v=w=>`
      ${w.registerUniforms(y).declareVariables(f,h)}
        ${nd(f,h,r)}
        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:$})}},Wh=(e,t)=>{ad(e.inputs,t);let r=id(e.inputs,t);e.compute(sd(e.inputs,r),{inputs:[0]})},qh=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),od,ud,Lh,Vh,O0=U(()=>{ae(),se(),ke(),wt(),oe(),od=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ud=(e,t)=>{let r=e.inputs[0],i=r.dims,n=A.size(i),a=i.length,s=A.normalizeAxis(t.axis,a),u=s<i.length-1,l,d=[];u?(d=Array.from({length:a},(z,O)=>O),d[s]=a-1,d[a-1]=s,l=e.compute(Pe(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[a-1],f=n/h,g=xe(h),y=h/g,$=64;f===1&&($=256);let v=(z,O)=>O===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:O===2?`max(${z}.x, ${z}.y)`:O===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,w=R("x",l.dataType,l.dims,g),_=X("result",l.dataType,l.dims,g),S=w.type.value,k=Te(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=z=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(w,_)}
      ${z.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${v("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${bt("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${g};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Pe(I,d),{inputs:[I]})},Lh=(e,t)=>{od(e.inputs),ud(e,t)},Vh=e=>he({axis:e.axis})}),wi,ld,dd,pd,Hh,A0=U(()=>{ae(),se(),oe(),wi=e=>Array.from(e.getBigInt64Array(),Number),ld=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(wi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},dd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},pd=(e,t)=>{let r=e[0].dims,i=t??wi(e[1]),n=dd(r,i),a=A.size(n),s=e[0].dataType,u=R("input",s,r.length),l=X("output",s,n.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ee(e[0].dims,n)]}),getShaderSource:d}},Hh=e=>{ld(e.inputs),e.compute(pd(e.inputs),{inputs:[0]})}}),cd,hd,Gh,B0=U(()=>{ae(),se(),oe(),cd=(e,t,r,i,n)=>{let a=X("output_data",n,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),u=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,f,g)=>`select(${f}, ${h}, ${g})`;if(!i)d=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(f,g,y="")=>{let $=`a_data[index_a${g}][component_a${g}]`,v=`b_data[index_b${g}][component_b${g}]`,w=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${a.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${f}[${g}] = ${y}(${c($,v,w)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},hd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(A.areEqual(t,r)&&A.areEqual(r,i)),s=t,u=A.size(t);if(a){let d=Ht.calcShape(Ht.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=A.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>cd(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ee(i,t,r,s)]})}},Gh=e=>{e.compute(hd(e.inputs))}}),Fh,N0=U(()=>{Kg(),on(),Zg(),Xg(),Qg(),Yg(),Jg(),i0(),s0(),o0(),u0(),l0(),d0(),p0(),c0(),h0(),f0(),m0(),g0(),y0(),_0(),b0(),w0(),$0(),v0(),ch(),x0(),k0(),S0(),T0(),I0(),sn(),E0(),yh(),C0(),z0(),O0(),mh(),A0(),wt(),un(),B0(),Fh=new Map([["Abs",[jp]],["Acos",[Wp]],["Acosh",[qp]],["Add",[vc]],["ArgMax",[Mp,Bi]],["ArgMin",[Rp,Bi]],["Asin",[Lp]],["Asinh",[Vp]],["Atan",[Hp]],["Atanh",[Gp]],["Attention",[Dp]],["AveragePool",[Th,Sh]],["BatchNormalization",[Pp]],["BiasAdd",[Up]],["BiasSplitGelu",[$c]],["Cast",[Kp,Fp]],["Ceil",[Xp]],["Clip",[Zp]],["Concat",[Ac,Bc]],["Conv",[Ui,Pi]],["ConvTranspose",[Lc,qc]],["Cos",[Qp]],["Cosh",[Yp]],["CumSum",[Vc,Hc]],["DepthToSpace",[Gc,Fc]],["DequantizeLinear",[Bh,Nh]],["Div",[xc]],["Einsum",[Kc,Zc]],["Elu",[Jp,dr]],["Equal",[kc]],["Erf",[ec]],["Exp",[tc]],["Expand",[Xc]],["FastGelu",[Qc]],["Floor",[rc]],["FusedConv",[Ui,Pi]],["Gather",[Jc,Yc]],["GatherElements",[nh,ih]],["GatherBlockQuantized",[rh,ah]],["GatherND",[eh,th]],["Gelu",[ac]],["Gemm",[oh,sh]],["GlobalAveragePool",[Eh,Ih]],["GlobalMaxPool",[Ah,Oh]],["Greater",[Ec]],["GreaterOrEqual",[zc]],["GridSample",[uh,lh]],["GroupQueryAttention",[_h]],["HardSigmoid",[pc,dc]],["InstanceNormalization",[bh]],["LayerNormalization",[wh]],["LeakyRelu",[ic,dr]],["Less",[Cc]],["LessOrEqual",[Oc]],["Log",[bc]],["MatMul",[$h]],["MatMulNBits",[vh,xh]],["MaxPool",[Ch,zh]],["Mul",[Sc]],["MultiHeadAttention",[ph,dh]],["Neg",[sc]],["Not",[nc]],["Pad",[kh]],["Pow",[Tc]],["QuickGelu",[wc,dr]],["Range",[Rh]],["Reciprocal",[oc]],["ReduceMin",[zp]],["ReduceMean",[Sp]],["ReduceMax",[Cp]],["ReduceSum",[Ap]],["ReduceProd",[Op]],["ReduceL1",[Tp]],["ReduceL2",[Ip]],["ReduceLogSum",[Np]],["ReduceLogSumExp",[Ep]],["ReduceSumSquare",[Bp]],["Relu",[uc]],["Resize",[Ph,Uh]],["RotaryEmbedding",[gh]],["ScatterND",[Dh,Mh]],["Sigmoid",[lc]],["Sin",[cc]],["Sinh",[hc]],["Slice",[Wh,qh]],["SkipLayerNormalization",[jh]],["Split",[hh,fh]],["Sqrt",[fc]],["Softmax",[Lh,Vh]],["Sub",[Ic]],["Tan",[mc]],["Tanh",[gc]],["ThresholdedRelu",[_c,dr]],["Tile",[Hh]],["Transpose",[hp,fp]],["Where",[Gh]]])}),Kh,R0=U(()=>{Ye(),lt(),oe(),Kh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){at(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){at(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=cp(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,u=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Zh={};Ft(Zh,{WebGpuBackend:()=>Xh});var fd,md,gd,Xh,M0=U(()=>{Ye(),ae(),lt(),op(),Gg(),N0(),R0(),fd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},md=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${fd(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},gd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Xh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=a=>t.features.has(a)&&r.push(a)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new gd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=dp(this),this.programManager=new Kh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,tn(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;at(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=a.programName,h=a.inputTensorViews,f=a.outputTensorViews,g=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let $=Number(g-this.queryTimeBase),v=Number(y-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(w=>({dims:w.dims,dataType:ut(w.dataType)})),outputsMetadata:f.map(w=>({dims:w.dims,dataType:ut(w.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:$,endTime:v});else{let w="";h.forEach((S,k)=>{w+=`input[${k}]: [${S.dims}] | ${ut(S.dataType)}, `});let _="";f.forEach((S,k)=>{_+=`output[${k}]: [${S.dims}] | ${ut(S.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${w}${_}execution time: ${v-$} ns`)}Vr("GPU",`${c}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,r,i,n,a){at(e.name);let s=[];for(let _=0;_<t.length;++_){let S=t[_].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((_,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],f=[];for(let _=0;_<u.length;++_){if(!Number.isInteger(c[_])||c[_]<-3||c[_]>=a)throw new Error(`Invalid output index: ${c[_]}`);if(c[_]===-3)continue;let S=c[_]===-1,k=c[_]===-2,T=S||k?n(u[_].dataType,u[_].dims):i(c[_],u[_].dataType,u[_].dims);if(h.push(T),T.data===0)continue;let I=this.gpuDataManager.get(T.data);if(!I)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(I),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(I)}f.push(I)}if(s.length!==t.length||f.length!==h.length){if(f.length===0)return Qe(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let _=0,S=[];d.forEach(z=>{let O=typeof z.data=="number"?[z.data]:z.data;if(O.length===0)return;let B=z.type===10?2:4,j,G;z.type===10?(G=O.length>4?16:O.length>2?8:O.length*B,j=O.length>4?16:B*O.length):(G=O.length<=2?O.length*B:16,j=16),_=Math.ceil(_/G)*G,S.push(_);let q=z.type===10?8:4;_+=O.length>4?Math.ceil(O.length/q)*j:O.length*B});let k=16;_=Math.ceil(_/k)*k;let T=new ArrayBuffer(_);d.forEach((z,O)=>{let B=S[O],j=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,B,j.length).set(j);else if(z.type===12)new Uint32Array(T,B,j.length).set(j);else if(z.type===10)new Uint16Array(T,B,j.length).set(j);else if(z.type===1)new Float32Array(T,B,j.length).set(j);else throw new Error(`Unsupported uniform type: ${ut(z.type)}`)});let I=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,T,0,_),this.gpuDataManager.release(I.id),g={offset:0,size:_,buffer:I.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),$=y[1]===1&&y[2]===1,v=md(e,t,$),w=this.programManager.getArtifact(v);if(w||(w=this.programManager.build(e,y),this.programManager.setArtifact(v,w),de("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),d&&w.uniformVariablesInfo){if(d.length!==w.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${w.uniformVariablesInfo.length}, got ${d.length} in program "${w.programInfo.name}".`);for(let _=0;_<d.length;_++){let S=d[_],k=S.type,T=typeof S.data=="number"?1:S.data.length,[I,z]=w.uniformVariablesInfo[_];if(k!==I||T!==z)throw new Error(`Uniform variable ${_} mismatch: expect type ${I} with size ${z}, got type ${k} with size ${T} in program "${w.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:w.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(w,s,f,y,g),Qe(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Fh.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await zi(this,e,t);return rn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Qh={};Ft(Qh,{init:()=>Yh});var Dr,yd,Yh,D0=U(()=>{ae(),lt(),se(),Hg(),Dr=class Jh{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(A.size(t)!==A.size(this.dims))throw new Error("Invalid new shape");return new Jh(this.module,this.dataType,this.data,t)}},yd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),c=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,a)),f=[];for(let g=0;g<h;g++)f.push(Number(e.getValue(i*n++,a)));u.push(new Dr(e,d,c,f))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(u,l,d)=>new Dr(this.module,l,this.output(u,d),d),a=(u,l)=>{let d=zt(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Dr(this.module,u,c,l)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Yh=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(M0(),fr(Zh)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),h)}},async(u,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new yd(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new lp(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,u,l,d,c)=>a.ensureTensor(s,u,l,d,c),(s,u)=>{a.uploadTensor(s,u)},async(s,u)=>a.downloadTensor(s,u)])}}}),_d,fn,mn,yt,bd,$i,Qr,gn,yn,vi,_n,bn,wn,ef=U(()=>{qg(),Lg(),ae(),Rt(),Qi(),ap(),_d=(e,t)=>{be()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},fn=async e=>{_d(e.wasm.numThreads,Gr(e.logLevel))},mn=async(e,t)=>{var r,i;(i=(r=be()).asyncInit)==null||i.call(r);{let n=(D0(),fr(Qh)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let u=e.webgpu.forceFallbackAdapter;if(u!==void 0&&typeof u!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${u}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:u}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await n("webgpu",be(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await n("webnn",be(),e)}}},yt=new Map,bd=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&ge("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},$i=(e,t)=>{let r=be(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&ge("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[u,0];let d=r.HEAPU32[n/4+1],c=[];for(let h=0;h<d;h++){let f=Number(r.getValue(n+8+h*a,"*"));c.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(h+d)*a,"*")))}return[u,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Qr=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},gn=async(e,t)=>{var h,f,g,y;let r,i,n=be();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Qr(e);let a=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await rp(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let O=[];for(let B of t.externalData){let j=typeof B=="string"?B:B.path;O.push(en(typeof B=="string"?B:B.data).then(G=>{n.mountExternalData(j,G)}))}await Promise.all(O)}for(let O of(t==null?void 0:t.executionProviders)??[])if((typeof O=="string"?O:O.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof O!="string"){let B=O,j=B==null?void 0:B.context,G=B==null?void 0:B.gpuDevice,q=B==null?void 0:B.deviceType,F=B==null?void 0:B.powerPreference;j?n.currentContext=j:G?n.currentContext=await n.webnnCreateMLContext(G):n.currentContext=await n.webnnCreateMLContext({deviceType:q,powerPreference:F})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(h=n.webgpuOnCreateSession)==null||h.call(n,a),a===0&&ge("Can't create a session."),(f=n.jsepOnCreateSession)==null||f.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[$,v]=bd(a),w=!!(t!=null&&t.enableGraphCapture),_=[],S=[],k=[],T=[],I=[];for(let O=0;O<$;O++){let[B,j,G]=$i(a,O);B===0&&ge("Can't get an input name."),d.push(B);let q=n.UTF8ToString(B);_.push(q),k.push(j===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:ut(j),shape:G})}for(let O=0;O<v;O++){let[B,j,G]=$i(a,O+$);B===0&&ge("Can't get an output name."),c.push(B);let q=n.UTF8ToString(B);S.push(q),T.push(j===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:ut(j),shape:G});{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[q])??"cpu",ie=n.webnnIsGraphOutput;if(F==="cpu"&&ie&&ie(a,q)){I.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if(w&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(F)}}let z=null;return I.some(O=>O==="gpu-buffer"||O==="ml-tensor"||O==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(a),u===0&&ge("Can't create IO binding."),z={handle:u,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(O=>O==="ml-tensor-cpu-output"?"ml-tensor":O).map(O=>Ei(O))}),yt.set(a,[a,d,c,z,w,!1]),[a,_,S,k,T]}catch($){throw d.forEach(v=>n._OrtFree(v)),c.forEach(v=>n._OrtFree(v)),u!==0&&n._OrtReleaseBinding(u)!==0&&ge("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&ge("Can't release session."),$}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&ge("Can't release session options."),l.forEach($=>n._free($)),(y=n.unmountExternalData)==null||y.call(n)}},yn=e=>{var l,d,c;let t=be(),r=yt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ge("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(h=>t._OrtFree(h)),a.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&ge("Can't release session."),yt.delete(e)},vi=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],f=h,g,y;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let w=e[2].gpuBuffer;y=zt(Ct(d),c);{let _=u.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=_(i,a,w,y)}}else if(h==="ml-tensor"){let w=e[2].mlTensor;y=zt(Ct(d),c);let _=u.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=_(i,w,Ct(d),c)}else{let w=e[2];if(Array.isArray(w)){y=l*w.length,g=u._malloc(y),r.push(g);for(let _=0;_<w.length;_++){if(typeof w[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);u.setValue(g+_*l,Ze(w[_],r),"*")}}else{let _=u.webnnIsGraphInput,S=u.webnnIsGraphOutput;if(d!=="string"&&_&&S){let k=u.UTF8ToString(n);if(_(i,k)||S(i,k)){let T=Ct(d);y=zt(T,c),f="ml-tensor";let I=u.webnnCreateTemporaryTensor,z=u.webnnUploadTensor;if(!I||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await I(i,T,c);z(O,new Uint8Array(w.buffer,w.byteOffset,w.byteLength)),g=O}else y=w.byteLength,g=u._malloc(y),r.push(g),u.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),g)}else y=w.byteLength,g=u._malloc(y),r.push(g),u.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),g)}}let $=u.stackSave(),v=u.stackAlloc(4*c.length);try{c.forEach((_,S)=>u.setValue(v+S*l,_,l===4?"i32":"i64"));let w=u._OrtCreateTensor(Ct(d),g,y,v,c.length,Ei(f));w===0&&ge(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(w)}finally{u.stackRestore($)}},_n=async(e,t,r,i,n,a)=>{var G,q,F,ie;let s=be(),u=s.PTR_SIZE,l=yt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],f=l[3],g=l[4],y=l[5],$=t.length,v=i.length,w=0,_=[],S=[],k=[],T=[],I=s.stackSave(),z=s.stackAlloc($*u),O=s.stackAlloc($*u),B=s.stackAlloc(v*u),j=s.stackAlloc(v*u);try{[w,_]=tp(a);for(let K=0;K<$;K++)await vi(r[K],S,T,e,c[t[K]],t[K],g);for(let K=0;K<v;K++)await vi(n[K],k,T,e,h[i[K]],$+i[K],g);for(let K=0;K<$;K++)s.setValue(z+K*u,S[K],"*"),s.setValue(O+K*u,c[t[K]],"*");for(let K=0;K<v;K++)s.setValue(B+K*u,k[K],"*"),s.setValue(j+K*u,h[i[K]],"*");if(f&&!y){let{handle:K,outputPreferredLocations:J,outputPreferredLocationsEncoded:ye}=f;if(c.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${c.length}).`);for(let M=0;M<$;M++){let W=t[M];await s._OrtBindInput(K,c[W],S[M])!==0&&ge(`Can't bind input[${M}] for session=${e}.`)}for(let M=0;M<v;M++){let W=i[M];(G=n[M])!=null&&G[3]?s._OrtBindOutput(K,h[W],k[M],0)!==0&&ge(`Can't bind pre-allocated output[${M}] for session=${e}.`):s._OrtBindOutput(K,h[W],0,ye[W])!==0&&ge(`Can't bind output[${M}] to ${J[M]} for session=${e}.`)}yt.set(e,[d,c,h,f,g,!0])}(q=s.jsepOnRunStart)==null||q.call(s,d),(F=s.webnnOnRunStart)==null||F.call(s,d);let re;f?re=await s._OrtRunWithBinding(d,f.handle,v,B,w):re=await s._OrtRun(d,O,z,$,j,v,B,w),re!==0&&ge("failed to call OrtRun().");let L=[],Z=[];for(let K=0;K<v;K++){let J=Number(s.getValue(B+K*u,"*"));if(J===k[K]){L.push(n[K]);continue}let ye=s.stackSave(),M=s.stackAlloc(4*u),W=!1,V,ne=0;try{s._OrtGetTensorData(J,M,M+u,M+2*u,M+3*u)!==0&&ge(`Can't access output tensor data on index ${K}.`);let Ee=u===4?"i32":"i64",D=Number(s.getValue(M,Ee));ne=s.getValue(M+u,"*");let fe=s.getValue(M+u*2,"*"),Dt=Number(s.getValue(M+u*3,Ee)),Oe=[];for(let me=0;me<Dt;me++)Oe.push(Number(s.getValue(fe+me*u,Ee)));s._OrtFree(fe)!==0&&ge("Can't free memory for tensor dims.");let qe=Oe.reduce((me,ve)=>me*ve,1);V=ut(D);let it=f==null?void 0:f.outputPreferredLocations[i[K]];if(V==="string"){if(it==="gpu-buffer"||it==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let ve=0;ve<qe;ve++){let Re=s.getValue(ne+ve*u,"*"),$t=s.getValue(ne+(ve+1)*u,"*"),vt=ve===qe-1?void 0:$t-Re;me.push(s.UTF8ToString(Re,vt))}L.push([V,Oe,me,"cpu"])}else if(it==="gpu-buffer"&&qe>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ve=me(ne),Re=zt(D,qe);if(Re===void 0||!Yi(V))throw new Error(`Unsupported data type: ${V}`);W=!0,L.push([V,Oe,{gpuBuffer:ve,download:s.jsepCreateDownloader(ve,Re,V),dispose:()=>{s._OrtReleaseTensor(J)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(it==="ml-tensor"&&qe>0){let me=s.webnnEnsureTensor,ve=s.webnnIsGraphInputOutputTypeSupported;if(!me||!ve)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zt(D,qe)===void 0||!Ji(V))throw new Error(`Unsupported data type: ${V}`);if(!ve(e,V,!1))throw new Error(`preferredLocation "ml-tensor" for ${V} output is not supported by current WebNN Context.`);let Re=await me(e,ne,D,Oe,!1);W=!0,L.push([V,Oe,{mlTensor:Re,download:s.webnnCreateMLTensorDownloader(ne,V),dispose:()=>{s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(J)}},"ml-tensor"])}else if(it==="ml-tensor-cpu-output"&&qe>0){let me=s.webnnCreateMLTensorDownloader(ne,V)(),ve=L.length;W=!0,Z.push((async()=>{let Re=[ve,await me];return s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(J),Re})()),L.push([V,Oe,[],"cpu"])}else{let me=Jr(V),ve=new me(qe);new Uint8Array(ve.buffer,ve.byteOffset,ve.byteLength).set(s.HEAPU8.subarray(ne,ne+ve.byteLength)),L.push([V,Oe,ve,"cpu"])}}finally{s.stackRestore(ye),V==="string"&&ne&&s._free(ne),W||s._OrtReleaseTensor(J)}}f&&!g&&(s._OrtClearBoundOutputs(f.handle)!==0&&ge("Can't clear bound outputs."),yt.set(e,[d,c,h,f,g,!1]));for(let[K,J]of await Promise.all(Z))L[K][2]=J;return L}finally{(ie=s.webnnOnRunEnd)==null||ie.call(s,d),s.stackRestore(I),S.forEach(re=>s._OrtReleaseTensor(re)),k.forEach(re=>s._OrtReleaseTensor(re)),T.forEach(re=>s._free(re)),w!==0&&s._OrtReleaseRunOptions(w),_.forEach(re=>s._free(re))}},bn=e=>{let t=be(),r=yt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&ge("Can't get an profile file name."),t._OrtFree(n)},wn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),_t,Ne,jt,sr,or,Pr,xi,Ur,Tt,It,wd,tf,rf,af,nf,sf,of,uf,lf=U(()=>{Ye(),ef(),Rt(),Zi(),_t=()=>!!we.wasm.proxy&&typeof document<"u",jt=!1,sr=!1,or=!1,Ur=new Map,Tt=(e,t)=>{let r=Ur.get(e);r?r.push(t):Ur.set(e,[t])},It=()=>{if(jt||!sr||or||!Ne)throw new Error("worker not ready")},wd=e=>{switch(e.data.type){case"init-wasm":jt=!1,e.data.err?(or=!0,xi[1](e.data.err)):(sr=!0,xi[0]()),Pr&&(URL.revokeObjectURL(Pr),Pr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ur.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},tf=async()=>{if(!sr){if(jt)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(jt=!0,_t())return new Promise((e,t)=>{Ne==null||Ne.terminate(),Jd().then(([r,i])=>{try{Ne=i,Ne.onerror=a=>t(a),Ne.onmessage=wd,xi=[e,t];let n={type:"init-wasm",in:we};!n.in.wasm.wasmPaths&&(r||Ii)&&(n.in.wasm.wasmPaths={wasm:new URL("/portfolio/assets/ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href}),Ne.postMessage(n),Pr=r}catch(n){t(n)}},t)});try{await Xi(we.wasm),await fn(we),sr=!0}catch(e){throw or=!0,e}finally{jt=!1}}},rf=async e=>{if(_t())return It(),new Promise((t,r)=>{Tt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:we}};Ne.postMessage(i)});await mn(we,e)},af=async e=>_t()?(It(),new Promise((t,r)=>{Tt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ne.postMessage(i,[e.buffer])})):Qr(e),nf=async(e,t)=>{if(_t()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return It(),new Promise((r,i)=>{Tt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ne.postMessage(n,a)})}else return gn(e,t)},sf=async e=>{if(_t())return It(),new Promise((t,r)=>{Tt("release",[t,r]);let i={type:"release",in:e};Ne.postMessage(i)});yn(e)},of=async(e,t,r,i,n,a)=>{if(_t()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return It(),new Promise((s,u)=>{Tt("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Ne.postMessage(d,wn(l))})}else return _n(e,t,r,i,n,a)},uf=async e=>{if(_t())return It(),new Promise((t,r)=>{Tt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ne.postMessage(i)});bn(e)}}),ki,$d,df,P0=U(()=>{Ye(),lf(),ae(),Ki(),ap(),ki=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},$d=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Yi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Ji(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},df=class{async fetchModelAndCopyToWasmMemory(e){return af(await en(e))}async loadModel(e,t){at();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await nf(r,t),Qe()}async dispose(){return sf(this.sessionId)}async run(e,t,r){at();let i=[],n=[];Object.entries(e).forEach(h=>{let f=h[0],g=h[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);i.push(g),n.push(y)});let a=[],s=[];Object.entries(t).forEach(h=>{let f=h[0],g=h[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);a.push(g),s.push(y)});let u=i.map((h,f)=>ki(h,()=>`input "${this.inputNames[n[f]]}"`)),l=a.map((h,f)=>h?ki(h,()=>`output "${this.outputNames[s[f]]}"`):null),d=await of(this.sessionId,n,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=a[h]??$d(d[h]);return Qe(),c}startProfiling(){}endProfiling(){uf(this.sessionId)}}}),pf={};Ft(pf,{OnnxruntimeWebAssemblyBackend:()=>qi,initializeFlags:()=>Wi,wasmBackend:()=>cf});var Wi,qi,cf,U0=U(()=>{Ye(),lf(),P0(),Wi=()=>{(typeof we.wasm.initTimeout!="number"||we.wasm.initTimeout<0)&&(we.wasm.initTimeout=0);let e=we.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),we.wasm.simd=!1),typeof we.wasm.proxy!="boolean"&&(we.wasm.proxy=!1),typeof we.wasm.trace!="boolean"&&(we.wasm.trace=!1),typeof we.wasm.numThreads!="number"||!Number.isInteger(we.wasm.numThreads)||we.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)we.wasm.numThreads=1;else{let t=typeof navigator>"u"?Sg("node:os").cpus().length:navigator.hardwareConcurrency;we.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},qi=class{async init(e){Wi(),await tf(),await rf(e)}async createInferenceSessionHandler(e,t){let r=new df;return await r.loadModel(e,t),r}},cf=new qi});Ye();Ye();Ye();var j0="1.22.0",W0=Fd;{let e=(U0(),fr(pf)).wasmBackend;Lt("webgpu",e,5),Lt("webnn",e,5),Lt("cpu",e,10),Lt("wasm",e,10)}Object.defineProperty(we.versions,"web",{value:j0,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q0="/portfolio/assets/Anas%20platyrhynchos-BRKnqU9-.jpg",L0="/portfolio/assets/Apis%20mellifera-Ck4FQGVd.jpg",V0="/portfolio/assets/Tringa%20ochropus-UbrdPxiH.jpg",H0="/portfolio/assets/Coccinella%20septempunctata-BjTzhOBA.jpg",G0="/portfolio/assets/Evergestis%20pallidata-BrEhOEg4.jpg",F0="/portfolio/assets/Streptopelia%20turtur-CULKlDyI.jpg",K0=()=>{const[e,t]=le.useState(!1);return le.useEffect(()=>{const r="ontouchstart"in window||navigator.maxTouchPoints>0;t(r)},[]),e},Z0=[{src:q0,alt:"Anas platyrhynchos"},{src:L0,alt:"Apis mellifera"},{src:V0,alt:"Tringa ochropus"},{src:H0,alt:"Coccinella septempunctata"},{src:G0,alt:"Evergestis pallidata"},{src:F0,alt:"Streptopelia turtur"}],X0=({onSampleSelect:e})=>{const{t}=Yr(),r=K0(),i=(n,a)=>{n.dataTransfer.setData("application/x-image-url",a)};return C.jsxs("div",{className:"my-8",children:[C.jsx("h4",{className:"text-xl font-bold mb-4 text-center",style:{color:"var(--text-color)"},children:t("internshipBlog.demo.trySamples")}),C.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Z0.map((n,a)=>C.jsx("img",{src:n.src,alt:n.alt,draggable:!r,onDragStart:s=>i(s,n.src),onClick:()=>e(n.src),className:"w-24 h-24 object-cover rounded-lg shadow-md cursor-grab transition-transform hover:scale-105"},a))}),r&&C.jsx("p",{className:"text-center text-sm mt-2",style:{color:"var(--secondary-text)"},children:t("internshipBlog.demo.tapToTry")})]})},Si="/portfolio",Li=Si.endsWith("/")?Si:`${Si}/`;W0.env.wasm.wasmPaths=Li;const Q0=e=>{const t=Math.max(...e),r=Array.from(e).map(n=>Math.exp(n-t)),i=r.reduce((n,a)=>n+a);return r.map(n=>n/i)},Y0=()=>{const{t:e}=Yr(),[t,r]=le.useState(null),[i,n]=le.useState({model:!0,predicting:!1}),[a,s]=le.useState(null),[u,l]=le.useState(null),[d,c]=le.useState(null),h=le.useRef(null);le.useEffect(()=>{(async()=>{try{const w=`${Li}mobilenet_v3_large_80.onnx`,_=await Fi.create(w,{executionProviders:["wasm"],graphOptimizationLevel:"all"});r(_)}catch(w){s("Failed to load the AI model. It might be a network issue."),console.error(w)}finally{n({model:!1,predicting:!1})}})()},[]);const f=le.useCallback(async v=>{if(!t)return;n({model:!1,predicting:!0}),c(null);const w=224,_=224,S=.875,k=document.createElement("canvas"),T=k.getContext("2d");if(!T)return;const I=v.width,z=v.height,O=Math.floor(I*S),B=Math.floor(z*S),j=(I-O)/2,G=(z-B)/2;k.width=w,k.height=_,T.drawImage(v,j,G,O,B,0,0,w,_);const q=T.getImageData(0,0,w,_),{data:F}=q,ie=new Float32Array(1*3*w*_);for(let L=0,Z=0;L<F.length;L+=4,Z++){const K=F[L],J=F[L+1],ye=F[L+2],M=(K/255-.5)*2,W=(J/255-.5)*2,V=(ye/255-.5)*2;ie[Z]=M,ie[Z+w*_]=W,ie[Z+2*(w*_)]=V}const re=new Xe("float32",ie,[1,3,224,224]);try{const L={[t.inputNames[0]]:re},K=(await t.run(L))[t.outputNames[0]],J=Q0(K.data),ye=Math.max(...J),M=J.indexOf(ye),W=`${Li}labels.json`,V=await(await fetch(W)).json();c({label:V[M],confidence:ye})}catch(L){s("An error occurred during prediction."),console.error(L)}finally{n({model:!1,predicting:!1})}},[t]),g=le.useCallback(v=>{if(!v.type.startsWith("image/")){s("Please upload an image file.");return}s(null);const w=new FileReader;w.onload=_=>{var k;const S=new Image;S.onload=()=>f(S),S.src=(k=_.target)==null?void 0:k.result,l(S.src)},w.readAsDataURL(v)},[f]),y=le.useCallback(v=>{s(null);const w=new Image;w.crossOrigin="anonymous",w.onload=()=>f(w),w.src=v,l(v)},[f]),$=v=>{if(v.preventDefault(),v.stopPropagation(),v.dataTransfer.files&&v.dataTransfer.files.length>0)g(v.dataTransfer.files[0]);else{const w=v.dataTransfer.getData("application/x-image-url");w&&y(w)}};return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"my-16 p-6 rounded-xl shadow-xl relative border",style:{borderColor:"var(--highlight-green)"},children:[C.jsx("h3",{className:"text-2xl font-bold  text-center",style:{color:"var(--accent-color)"},children:e("internshipBlog.demo.title")}),C.jsx("div",{className:"text-center mb-4",children:C.jsx("p",{children:e("internshipBlog.demo.modelExplanation")})}),i.model?C.jsxs("div",{className:"text-center p-8",children:[C.jsx(qs,{className:"animate-spin text-4xl mx-auto mb-4"}),C.jsx("p",{children:e("internshipBlog.demo.loadingModel")})]}):C.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[C.jsxs("div",{className:"flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg h-64 text-center cursor-pointer transition hover:border-green-500 bg-[var(--base-variant)]",onClick:()=>{var v;return(v=h.current)==null?void 0:v.click()},onDrop:$,onDragOver:v=>v.preventDefault(),children:[C.jsx("input",{type:"file",accept:"image/*",ref:h,className:"hidden",onChange:v=>v.target.files&&g(v.target.files[0])}),C.jsx(fg,{className:"text-4xl text-gray-400 mb-3"}),C.jsx("p",{className:"text-sm font-normal",children:"Model: MobileNetV3 - Dom 80%"}),C.jsx("p",{className:"text-sm font-semibold",children:e("internshipBlog.demo.dragOrClick")}),C.jsx("p",{className:"text-sm font-normal",style:{color:"var(--secondary-text)"},children:e("internshipBlog.demo.uploadHint")})]}),C.jsxs("div",{className:"flex flex-col items-center justify-center h-64",children:[i.predicting&&C.jsx(qs,{className:"animate-spin text-5xl text-green-500"}),a&&C.jsx("p",{className:"text-red-500 font-bold",children:a}),u&&!i.predicting&&C.jsxs("div",{className:"w-full text-center",children:[C.jsx("img",{src:u,alt:"Upload preview",className:"max-h-40 mx-auto mb-4 rounded-lg shadow-md border"}),d&&C.jsxs("div",{children:[C.jsx("p",{className:"text-xl font-bold",style:{color:"var(--highlight-green)"},children:d.label}),C.jsxs("p",{className:"text-md",style:{color:"var(--secondary-text)"},children:[e("internshipBlog.demo.confidence"),": ",(d.confidence*100).toFixed(1),"%"]}),d.confidence<.5&&d.label!=="Other"&&C.jsx("p",{className:"text-sm mt-2",style:{color:"var(--highlight-red)"},children:e("internshipBlog.demo.unsure")})]})]}),!u&&!i.predicting&&!a&&C.jsx("p",{style:{color:"var(--secondary-text)"},children:e("internshipBlog.demo.waiting")})]})]})]}),!i.model&&C.jsx(X0,{onSampleSelect:y})]})},J0="/portfolio/assets/entomoscope-DecnH9vL.jpg",ey="/portfolio/assets/current_approach-B7EbDwgt.png",ty="/portfolio/assets/new_approach_with_model-CKC2Blep.png",ry="/portfolio/assets/inat_2017_Aves_ppf-BKffkLdv.png",ny=()=>{const{t:e}=Yr();return C.jsxs("div",{className:"isolate min-h-screen relative z-10",style:{color:"var(--text-color)"},children:[C.jsx(yg,{}),C.jsx(ng,{}),C.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-20 relative",children:[C.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl mx-auto px-4 py-8 md:py-15 z-10 font-extrabold text-center",style:{color:"var(--base-color)",backgroundImage:"linear-gradient(to right, var(--accent-color), var(--highlight-orange))"},children:e("internshipBlog.pageTitle")}),C.jsxs("div",{className:"prose-sm md:prose-lg dark:prose-invert font-normal",style:{color:"var(--text-color)"},children:[C.jsx("h1",{className:"font-bold",children:e("internshipBlog.postTitle")}),C.jsxs("p",{children:[e("internshipBlog.authorPrefix")," ",C.jsx("a",{href:"https://www.linkedin.com/in/xuan-hoang-pham",target:"_blank",className:"font-bold",style:{color:"var(--accent-color)"},rel:"noreferrer",children:e("internshipBlog.authorName")})," ","· ",e("internshipBlog.postDate")," ","· ",e("internshipBlog.translate")]}),C.jsx("div",{className:"my-8 text-center",children:C.jsxs("a",{href:"#demo",className:"btn-jump-to-demo",children:[C.jsx(hg,{className:"mr-3"}),e("internshipBlog.jumpToDemo")]})}),C.jsx("p",{children:e("internshipBlog.intro_p1")}),C.jsx("h2",{className:"mt-12 mb-4",children:e("internshipBlog.challenge_title")}),C.jsx("p",{children:e("internshipBlog.challenge_p1")}),C.jsxs("figure",{className:"my-8",children:[C.jsx("img",{src:J0,alt:"Picture of the equipment for capturing images of wildlife.",className:"w-70 md:w-110 h-auto rounded-xl shadow-lg block mx-auto border-2",style:{borderColor:"var(--highlight-red)"}}),C.jsx("figcaption",{className:"text-center text-sm mt-2",style:{color:"var(--secondary-text)"},children:e("internshipBlog.challenge_fig1_caption")})]}),C.jsx("p",{children:e("internshipBlog.challenge_p2")}),C.jsxs("figure",{className:"my-8",children:[C.jsx("div",{className:"overflow-x-auto md:overflow-visible",children:C.jsx("img",{src:ey,alt:"Overview of the current biodiversity monitoring pipeline.",className:"md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none",style:{borderColor:"var(--highlight-red)",maxWidth:"800px"}})}),C.jsx("figcaption",{className:"text-center text-sm mt-2",style:{color:"var(--secondary-text)"},children:e("internshipBlog.challenge_fig2_caption")})]}),C.jsx("p",{children:e("internshipBlog.challenge_p3")}),C.jsx("ul",{className:"list-disc pl-5 my-6",children:e("internshipBlog.challenge_list",{returnObjects:!0}).map((t,r)=>C.jsx("li",{dangerouslySetInnerHTML:{__html:t}},r))}),C.jsx("p",{className:"italic font-bold",style:{color:"var(--highlight-red)"},children:e("internshipBlog.challenge_conclusion")}),C.jsx("h2",{className:"mt-12 mb-4",children:e("internshipBlog.aha_title")}),C.jsx("p",{children:C.jsxs(Le,{i18nKey:"internshipBlog.aha_p1",children:["Our solution was inspired by the ",C.jsx("strong",{children:"Pareto Principle"}),", or the 80/20 rule. In many natural environments, a small percentage of species accounts for the vast majority of observations. Think about it: you'll likely see many sparrows and pigeons, but very few rare raptors, even in a diverse area."]})}),C.jsx("p",{children:e("internshipBlog.aha_p2")}),C.jsx("p",{className:"font-bold",style:{color:"var(--highlight-red)"},children:e("internshipBlog.aha_hypothesis")}),C.jsx("h2",{className:"mt-12 mb-4",children:e("internshipBlog.ppf_section.title")}),C.jsxs("figure",{className:"my-8",children:[C.jsx("img",{src:ry,alt:"Cumulative Composition Plot for Aves in iNaturalist 2017",className:"md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2",style:{borderColor:"var(--highlight-green)",backgroundColor:"#FFFFFF"}}),C.jsx("figcaption",{className:"text-center text-sm mt-2",style:{color:"var(--secondary-text)"},children:e("internshipBlog.ppf_section.caption")})]}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.p1"})}),C.jsx("h4",{className:"font-semibold",children:e("internshipBlog.ppf_section.tour_title")}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.tour_p1"})}),C.jsx("h4",{className:"font-semibold",children:e("internshipBlog.ppf_section.story_title")}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.story_p1"})}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.story_p2"})}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.story_p3"})}),C.jsx("h4",{className:"font-semibold",children:e("internshipBlog.ppf_section.conclusion_title")}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.conclusion_p1"})}),C.jsxs("ul",{className:"list-disc pl-5 my-6",children:[C.jsx("li",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.conclusion_list_item1"})}),C.jsx("li",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.conclusion_list_item2"})})]}),C.jsx("p",{children:C.jsx(Le,{i18nKey:"internshipBlog.ppf_section.conclusion_p2"})}),C.jsx("h2",{className:"mt-12 mb-4",children:e("internshipBlog.solution_title")}),C.jsxs("figure",{className:"my-8",children:[C.jsx("div",{className:"overflow-x-auto md:overflow-visible",children:C.jsx("img",{src:ty,alt:"Overall conceptual framework of the context-aware hybrid classification strategy",className:"md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none",style:{borderColor:"var(--highlight-red)",maxWidth:"600px",backgroundColor:"#FFFFFF"}})}),C.jsx("figcaption",{className:"text-center text-sm mt-2",style:{color:"var(--secondary-text)"},children:e("internshipBlog.solution_fig3_caption")})]}),C.jsx("p",{children:C.jsxs(Le,{i18nKey:"internshipBlog.solution_p1",children:["I focused on developing a ",C.jsx("strong",{children:"context-aware hybrid classification strategy"}),". Here's how it works:"]})}),C.jsx("ol",{className:"list-decimal pl-5 my-6",children:e("internshipBlog.solution_list",{returnObjects:!0}).map((t,r)=>C.jsx("li",{dangerouslySetInnerHTML:{__html:t}},r))}),C.jsx("p",{style:{color:"var(--highlight-red)"},children:e("internshipBlog.solution_conclusion")}),C.jsx("h2",{className:"mt-12 mb-4",children:e("internshipBlog.impact_title")}),C.jsx(gg,{metric:"accuracy"}),C.jsx(bg,{}),C.jsx($g,{}),C.jsx("p",{children:e("internshipBlog.impact_p1")}),C.jsx("ul",{className:"list-disc pl-5 my-6",children:e("internshipBlog.impact_list",{returnObjects:!0}).map((t,r)=>C.jsx("li",{dangerouslySetInnerHTML:{__html:t}},r))}),C.jsx("h3",{className:"mt-12 mb-4",children:e("internshipBlog.journey_title")}),C.jsx("p",{children:e("internshipBlog.journey_p1")}),C.jsx("p",{children:e("internshipBlog.journey_p2")})]}),C.jsx("section",{id:"demo",children:C.jsx(Y0,{})}),C.jsx(Ti,{to:"/",state:{skipLoadingAnimation:!0},className:"inline-block mt-8 text-lg transition-colors",style:{color:"var(--highlight-orange)"},onMouseEnter:t=>t.currentTarget.style.color="var(--accent-color)",onMouseLeave:t=>t.currentTarget.style.color="var(--highlight-orange)",dangerouslySetInnerHTML:{__html:e("internshipBlog.back_link")}})]}),C.jsx(Wm,{})]})};export{ny as InternshipPage};
