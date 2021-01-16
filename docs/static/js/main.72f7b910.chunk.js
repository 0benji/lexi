(this["webpackJsonplexi-web"]=this["webpackJsonplexi-web"]||[]).push([[0],{68:function(e,t,n){e.exports=n(78)},73:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8);n(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,i=n(15),l=n(54),s=n(119),u=n(44),p=n(120),m=n(117),d=n(118),f=n(104),E=n(59),h=n(116),y=n(80),g=n(103),O=n(105),S=n(106),b=n(107),v=n(108),N=n(109);!function(e){e[e.MEANS_LIKE=0]="MEANS_LIKE",e[e.SOUNDS_LIKE=1]="SOUNDS_LIKE",e[e.SPELLED_LIKE=2]="SPELLED_LIKE",e[e.MODIFIED_BY=3]="MODIFIED_BY",e[e.MODIFIES=4]="MODIFIES",e[e.SYNONYMS=5]="SYNONYMS",e[e.TRIGGERS=6]="TRIGGERS",e[e.ANTONYMS=7]="ANTONYMS",e[e.HYPERNYMS=8]="HYPERNYMS",e[e.HYPONYMS=9]="HYPONYMS",e[e.HOLONYMS=10]="HOLONYMS",e[e.MERONYMS=11]="MERONYMS",e[e.FOLLOWS=12]="FOLLOWS",e[e.PRECEDES=13]="PRECEDES",e[e.RHYMES=14]="RHYMES",e[e.NEAR_RHYMES=15]="NEAR_RHYMES",e[e.HOMOPHONES=16]="HOMOPHONES",e[e.CONSONANT_MATCHES=17]="CONSONANT_MATCHES"}(c||(c={}));var w,x=r.a.createElement(f.a,null,"merge_type"),j=r.a.createElement(f.a,null,"hearing"),M=r.a.createElement(f.a,null,"edit"),I=r.a.createElement(f.a,null,"arrow_forward"),Y=r.a.createElement(f.a,null,"arrow_backward"),H=r.a.createElement(f.a,null,"content_copy"),_=r.a.createElement(f.a,null,"description"),C=r.a.createElement(f.a,null,"swap_horiz"),D=r.a.createElement(f.a,null,"bubble_chart"),k=r.a.createElement(f.a,null,"extension"),T=[{type:c.MEANS_LIKE,icon:x,text:"meaning like",code:"ml",query:"ml"},{type:c.SOUNDS_LIKE,icon:j,text:"sounds like",code:"sl",query:"sl"},{type:c.SPELLED_LIKE,icon:M,text:"spelled like",code:"sp",query:"sp"},{type:c.MODIFIED_BY,icon:I,text:"modified by",code:"mb",query:"rel_jja"},{type:c.MODIFIES,icon:Y,text:"modifies",code:"m",query:"rel_jjb"},{type:c.SYNONYMS,icon:H,text:"synonym of",code:"sy",query:"rel_syn"},{type:c.TRIGGERS,icon:_,text:"occurs with",code:"w",query:"rel_trg"},{type:c.ANTONYMS,icon:C,text:"antonym of",code:"an",query:"rel_ant"},{type:c.HYPERNYMS,icon:D,text:"parent of",code:"men",query:"rel_spc"},{type:c.HYPONYMS,icon:D,text:"type of",code:"typ",query:"rel_gen"},{type:c.HOLONYMS,icon:k,text:"part of",code:"par",query:"rel_com"},{type:c.MERONYMS,icon:k,text:"comprises",code:"com",query:"rel_par"},{type:c.FOLLOWS,icon:I,text:"follows",code:"fol",query:"rel_bga"},{type:c.PRECEDES,icon:Y,text:"precedes",code:"pre",query:"rel_bgb"},{type:c.RHYMES,icon:j,text:"rhymes with",code:"rhy",query:"rel_rhy"},{type:c.NEAR_RHYMES,icon:j,text:"nearly rhymes with",code:"nry",query:"rel_nry"},{type:c.HOMOPHONES,icon:j,text:"homophone of",code:"hom",query:"rel_hom"},{type:c.CONSONANT_MATCHES,icon:M,text:"shares consonants with",code:"cns",query:"rel_cns"}],R=function(e){return T.find((function(t){return t.code==e}))},L=function(e){return T.find((function(t){return t.type==e}))},A={AA:"ah",AE:"a",AH:"uh",AO:"or",AW:"ow",AY:"eye",B:"b",CH:"ch",D:"d",DH:"th",EH:"eh",ER:"er",EY:"ay",F:"f",G:"g",HH:"h",IH:"ih",IY:"ee",JH:"j",K:"k",L:"l",M:"m",N:"n",NG:"ng",OW:"oh",OY:"oy",P:"p",R:"r",S:"s",SH:"sh",T:"t",TH:"th",UH:"u",UW:"ooh",V:"v",W:"w",Y:"y",Z:"z",ZH:"zsh"};!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOUN=1]="NOUN",e[e.ADJECTIVE=2]="ADJECTIVE",e[e.VERB=3]="VERB"}(w||(w={}));var q={n:w.NOUN,adj:w.ADJECTIVE,v:w.VERB},P=Object(g.a)((function(e){return{ipa:{whiteSpace:"nowrap"},pronunciation:{fontStyle:"italic",color:e.palette.action.disabled,whiteSpace:"nowrap"},partOfSpeech:{fontSize:12,color:e.palette.action.disabled,display:"block"},unknown:{color:e.palette.action.disabled},emptyIcon:{fontSize:e.spacing(20)}}}));function F(e){var t=e.words,n=P(),o=Object(a.useContext)(de).config;return void 0!==t?r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,"Word"),o.showPronunciations&&r.a.createElement(v.a,null,"Pronunciation"),o.showDefinitions&&r.a.createElement(v.a,null,"Meaning"))),r.a.createElement(N.a,null,t.map((function(e){return r.a.createElement(b.a,{key:e.word},r.a.createElement(v.a,null,e.word),o.showPronunciations&&r.a.createElement(v.a,null,r.a.createElement("span",{className:n.ipa},e.ipa),"\u2003",r.a.createElement("span",{className:n.pronunciation},e.phonemes)),o.showDefinitions&&r.a.createElement(v.a,null,e.meanings?function(e,t){return r.a.createElement("span",null,r.a.createElement("span",{className:t.partOfSpeech},w[e.partOfSpeech]),r.a.createElement("span",null,e.definition))}(e.meanings[0],n):r.a.createElement("span",{className:n.unknown},"unknown")))})))):function(e){return r.a.createElement(p.a,{style:{textAlign:"center",color:"#ddd"},alignSelf:"center"},r.a.createElement(f.a,{className:e.emptyIcon},"translate"),r.a.createElement(E.a,{variant:"h5"},"Add a filter to see results"))}(n)}var W=n(55),K=n(102),B=n(123),z=r.a.createElement(f.a,null,"help"),U=Object(g.a)((function(e){return{chip:{padding:e.spacing(.5),margin:e.spacing(1),height:"auto",fontSize:17,fontFamily:"monospace",color:e.palette.primary.light},inputChip:{cursor:"pointer"},exampleChip:{fontSize:14,color:e.palette.secondary.main},filterName:{color:e.palette.primary.light,marginRight:e.spacing(1)},filterQuery:{color:e.palette.primary.contrastText},filterInput:{outline:"none",backgroundColor:"transparent",border:"none",color:e.palette.common.black,fontFamily:"monospace",marginRight:e.spacing(1)},filterQueryInput:{color:e.palette.primary.contrastText},hidden:{display:"none"},error:{color:"red"}}}));function G(e){var t,n=U(),o=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useState)(void 0),s=Object(i.a)(l,2),u=s[0],p=s[1],m=function(){c.current&&o.current&&(c.current.innerText="",o.current.innerText="",o.current.focus(),c.current.classList.add(n.hidden)),p(void 0)},d=function(){void 0!==u?c.current&&c.current.focus():o.current&&o.current.focus()};return window.addEventListener("load",d),r.a.createElement(B.a,{tabIndex:-1,className:[n.chip,n.inputChip].join(" "),icon:void 0!==u?null===(t=L(u))||void 0===t?void 0:t.icon:z,clickable:!1,onClick:d,label:r.a.createElement("span",null,r.a.createElement("span",{contentEditable:!0,className:n.filterInput,onKeyDown:function(t){var n;"Backspace"==t.key&&0===(null===(n=window.getSelection())||void 0===n?void 0:n.getRangeAt(0).startOffset)?e.onDeletePrevious():"Enter"==t.key&&t.preventDefault()},onInput:function(e){if(e.currentTarget.innerHTML.includes("&nbsp;")){var t=R(e.currentTarget.innerText.trimEnd());if(!t)return e.currentTarget.classList.add(n.error);e.currentTarget.classList.remove(n.error),e.currentTarget.innerText=t.text,c.current.classList.remove(n.hidden),c.current&&c.current.focus(),p(t.type)}},ref:o}),r.a.createElement("span",{contentEditable:!0,className:[n.filterInput,n.hidden].join(" "),onKeyDown:function(e){var t;"Backspace"==e.key&&0===(null===(t=window.getSelection())||void 0===t?void 0:t.getRangeAt(0).startOffset)?m():"Enter"==e.key&&e.preventDefault()},onInput:function(t){t.currentTarget.innerHTML.includes("&nbsp;")&&(e.onAddFilter({type:u,query:t.currentTarget.innerText.trimEnd()}),m())},ref:c}))})}function V(e){var t=e.filter,n=e.onDelete,a=U(),o=L(t.type);return null==o?null:r.a.createElement(B.a,{className:a.chip,onDelete:n,icon:o.icon,label:r.a.createElement("span",null,r.a.createElement("span",{className:a.filterName},o.text),r.a.createElement("span",{className:a.filterQuery},t.query)),color:"primary"})}function J(e){var t=e.type,n=U(),a=L(t);return null==a?null:r.a.createElement(B.a,{variant:"outlined",className:[n.chip,n.exampleChip].join(" "),icon:a.icon,label:r.a.createElement("span",null,a.text),color:"secondary"})}var Q=n(121),Z=n(110),$=n(111),X=n(112),ee=n(113),te=Object(g.a)((function(e){return{helpCard:{padding:e.spacing(1),marginTop:e.spacing(1)}}}));function ne(){var e=te();return r.a.createElement(y.a,{className:e.helpCard,variant:"outlined"},Object.keys(c).map((function(e){return r.a.createElement(J,{key:e,type:c[e]})})))}var ae=Object(g.a)((function(e){return{queries:{padding:e.spacing(1),boxSizing:"border-box",marginTop:0},filterName:{color:e.palette.primary.light,marginRight:e.spacing(1)}}}));function re(e){var t=ae(),n=function(t){var n=e.filters.filter((function(e,n){return n!==t}));e.setFilters(n)};return r.a.createElement(y.a,{variant:"outlined",className:t.queries},r.a.createElement(p.a,null,e.filters.map((function(e,t){return r.a.createElement(V,{key:e.type,filter:e,onDelete:function(){return n(t)}})})),r.a.createElement(G,{onAddFilter:function(t){var n=[].concat(Object(W.a)(e.filters.filter((function(e){return e.type!==t.type}))),[t]);e.setFilters(n)},onDeletePrevious:function(){return n(e.filters.length-1)}})),r.a.createElement(K.a,{in:e.showHelp},r.a.createElement(ne,null)))}var oe=n(46),ce=n(114),ie=n(115),le=n(122);function se(e){var t=e.open,n=e.onClose,o=Object(a.useContext)(de),c=o.config,i=o.setConfig;return r.a.createElement(Q.a,{"aria-labelledby":"simple-dialog-title",onClose:n,open:t},r.a.createElement(Z.a,{id:"simple-dialog-title"},"Settings"),r.a.createElement($.a,null,r.a.createElement(ce.a,null,r.a.createElement(ie.a,{control:r.a.createElement(le.a,{checked:c.showPronunciations,onChange:function(){return i(Object(oe.a)({},c,{showPronunciations:!c.showPronunciations}))}}),label:"Show pronunciations"}),r.a.createElement(ie.a,{control:r.a.createElement(le.a,{checked:c.showDefinitions,onChange:function(){return i(Object(oe.a)({},c,{showDefinitions:!c.showDefinitions}))}}),label:"Show definitions"}))),r.a.createElement(X.a,null,r.a.createElement(ee.a,{onClick:n,color:"primary",autoFocus:!0},"Save")))}var ue=Object(g.a)((function(e){return{logo:{fontFamily:"monospace",marginLeft:e.spacing(2),fontWeight:"bold",flex:1},container:{display:"flex",flexDirection:"column"},footer:{padding:e.spacing(1)}}}));function pe(){var e,t=Object(u.b)().enqueueSnackbar,n=ue(),o=function(){return s.map((function(e){var t;return"".concat(null===(t=L(e.type))||void 0===t?void 0:t.code,"=").concat(e.query)})).join("&")},c=Object(a.useState)((e=window.location.hash)?e.split("#")[1].split("&").map((function(e){return e.split("=")})).filter((function(e){var t=Object(i.a)(e,2),n=t[0];return t[1],R(n)})).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return{type:R(n).type,query:a}})):[]),l=Object(i.a)(c,2),s=l[0],g=l[1],O=Object(a.useState)(void 0),S=Object(i.a)(O,2),b=S[0],v=S[1],N=function(e){v(e.map((function(e){var t,n,a=null===(t=e.tags.find((function(e){return e.startsWith("ipa_pron")})))||void 0===t?void 0:t.substring(9),r=null===(n=e.tags.find((function(e){return e.startsWith("pron")})))||void 0===n?void 0:n.substring(5).replace(/[0-9]/gi,"").trim().split(" ").map((function(e){return A[e]})).join("-"),o=e.defs?e.defs.map((function(e){return e.split("\t")})).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return{partOfSpeech:q[n],definition:a}})):void 0;return{word:e.word,meanings:o,ipa:a,phonemes:r,score:e.score}})))};Object(a.useEffect)((function(){if(window.location.hash=o(),s.length){var e="https://api.datamuse.com/words?"+s.map((function(e){var t;return"".concat(null===(t=L(e.type))||void 0===t?void 0:t.query,"=").concat(e.query)})).concat(["max=1000"]).concat(["md=dr"]).concat(["ipa=1"]).join("&");fetch(e).then((function(e){return e.json()})).then(N).catch(console.error)}else v(void 0)}),[s]);var w=Object(a.useState)(!1),x=Object(i.a)(w,2),j=x[0],M=x[1],I=function(){return M(!j)},Y=Object(a.useState)(!1),H=Object(i.a)(Y,2),_=H[0],C=H[1];return r.a.createElement(p.a,{height:"100%",className:n.container},r.a.createElement(m.a,{position:"sticky"},r.a.createElement(d.a,{className:"draggable"},r.a.createElement(f.a,{fontSize:"large"},"translate"),r.a.createElement(E.a,{variant:"h6",className:n.logo},"Lexi"),r.a.createElement(h.a,{edge:"end",color:"inherit",onClick:function(){var e="".concat("https://lexi.fyi/","#").concat(o());navigator.clipboard.writeText(e),t("Copied link: ".concat(e),{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"}})},tabIndex:-1,className:"not-draggable"},r.a.createElement(f.a,null,"link")),r.a.createElement(h.a,{edge:"end",color:"inherit",onClick:function(){return C(!_)},tabIndex:-1,className:"not-draggable"},r.a.createElement(f.a,null,"help")),r.a.createElement(h.a,{edge:"end",color:"inherit",onClick:I,tabIndex:-1,className:"not-draggable"},r.a.createElement(f.a,null,"settings"))),r.a.createElement(p.a,{p:2,paddingTop:0},r.a.createElement(re,{setFilters:g,showHelp:_,filters:s}))),r.a.createElement(se,{open:j,onClose:I}),r.a.createElement(p.a,{style:{overflow:"auto",flexGrow:1,scrollBehavior:"smooth"},display:"flex",justifyContent:"center"},r.a.createElement(F,{words:b})),r.a.createElement(y.a,{square:!0,className:n.footer,variant:"outlined"},r.a.createElement(E.a,{variant:"subtitle2",color:"inherit"},"".concat(void 0!==b?b.length:0," results"))))}var me={showPronunciations:!0,showDefinitions:!0},de=r.a.createContext({config:me,setConfig:function(){}});function fe(){var e=Object(l.a)({palette:{primary:{main:"#3f51b5"},contrastThreshold:3,tonalOffset:.2}}),t=Object(a.useState)(me),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement(de.Provider,{value:{config:o,setConfig:c}},r.a.createElement(s.a,{theme:e},r.a.createElement(u.a,{maxSnack:1},r.a.createElement(pe,null))))}var Ee=document.getElementById("root");(null===Ee||void 0===Ee?void 0:Ee.hasChildNodes())?Object(o.hydrate)(r.a.createElement(fe,null),Ee):Object(o.render)(r.a.createElement(fe,null),Ee),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.72f7b910.chunk.js.map