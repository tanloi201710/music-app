(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),r=n.n(a),i=n(3),u=n(5),o=n(4),l=n(0);var j=function(e){var t,n=Object(c.useState)(0),s=Object(i.a)(n,2),a=s[0],r=s[1],j=Object(c.useState)(0),g=Object(i.a)(j,2),d=g[0],b=g[1],m=Object(c.useState)(0),O=Object(i.a)(m,2),x=O[0],p=O[1],f=Object(c.useRef)(),h=Object(c.useRef)(),v=Object(c.useRef)(),S=Object(c.useRef)();Object(c.useEffect)((function(){var t=f.current.getBoundingClientRect().width,n=h.current.getBoundingClientRect().width,c=n/100*e.percentage*-1,s=n+t/100*e.percentage-n/100*e.percentage;r(e.percentage),b(c),p(s)}),[e.percentage]);var N=function(e){if(!e)return"00:00";var t=e,n=parseInt(t/3600);t%=3600;var c=parseInt(t/60);t%=60;var s=parseInt(t);return s<10&&(s="0".concat(s)),c<10&&(c="0".concat(c)),n>0?"".concat(n,":").concat(c,":").concat(s):0===c?"00:".concat(s):"".concat(c,":").concat(s)};return Object(c.useEffect)((function(){e.isMuted?v.current.value=0:v.current.value=e.volume})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsx)("div",{className:"progress-bar-cover",style:{width:"".concat(x,"px")}}),Object(l.jsx)("div",{className:"thumb",ref:h,style:{left:"".concat(a,"%"),marginLeft:"".concat(d,"px")}}),Object(l.jsx)("input",{type:"range",step:"0.01",className:"timer-range",min:"0",max:"100",value:a,onChange:e.onChange,ref:f})]}),Object(l.jsxs)("div",{className:"controlTimes",children:[Object(l.jsx)("span",{className:"time",children:N(e.currentTime)}),Object(l.jsx)("span",{className:"time",children:N(e.duration)})]}),Object(l.jsxs)("div",{className:"c-player--controls",children:[Object(l.jsx)("button",{className:"playlist-btn",children:Object(l.jsx)(u.a,{icon:o.b})}),Object(l.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(l.jsx)(u.a,{icon:o.a})}),Object(l.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(l.jsx)(u.a,{icon:e.isPlaying?o.d:o.e,style:!e.isPlaying&&{transform:"translate(2px,0px)"}})}),Object(l.jsx)("button",{className:"skip-btn",ref:S,onClick:function(){return e.SkipSong()},children:Object(l.jsx)(u.a,{icon:o.c})}),Object(l.jsx)("button",{className:"volume-btn",onClick:e.muteControl,children:Object(l.jsx)(u.a,{icon:e.isMuted?o.f:o.g})}),Object(l.jsxs)("div",{className:"volumeSlider",children:[Object(l.jsx)("input",{type:"range",className:"volumeRange",min:"0",max:"100",onChange:e.onVolumeChange,ref:v}),Object(l.jsx)("div",{className:"cover",children:Object(l.jsx)("span",{className:"progress",style:{width:"".concat((null===v||void 0===v||null===(t=v.current)||void 0===t?void 0:t.value)?v.current.value:e.volume,"%")}})})]})]})]})};var g=function(e){return Object(l.jsxs)("div",{className:"c-player--details",children:[Object(l.jsx)("div",{className:e.isPlaying?"details-img rotate-player":"details-img",children:Object(l.jsx)("img",{src:e.song.img_src,alt:""})}),Object(l.jsx)("h3",{className:"details-title",children:e.song.title}),Object(l.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var d=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),s=Object(i.a)(n,2),a=s[0],r=s[1],u=Object(c.useState)(0),o=Object(i.a)(u,2),d=o[0],b=o[1],m=Object(c.useState)(0),O=Object(i.a)(m,2),x=O[0],p=O[1],f=Object(c.useState)(0),h=Object(i.a)(f,2),v=h[0],S=h[1],N=Object(c.useState)(0),y=Object(i.a)(N,2),T=y[0],C=y[1],I=Object(c.useState)(!1),k=Object(i.a)(I,2),E=k[0],P=k[1],R=Object(c.useCallback)((function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})),p(0)):(e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t})),p(0))}),[e]);return Object(c.useEffect)((function(){if(a){var e=t.current.play();void 0!==e&&e.then().catch((function(e){return console.log(e)}))}else t.current.pause()}),[R,a]),Object(l.jsxs)("div",{className:"c-player",children:[Object(l.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t,onTimeUpdate:function(e){var t=(e.currentTarget.currentTime/e.currentTarget.duration*100).toFixed(2),n=e.currentTarget.currentTime;isNaN(t)||p(+t),S(n.toFixed(2))},onLoadedData:function(e){b(e.currentTarget.duration.toFixed(2)),C(100*e.currentTarget.volume)},onEnded:function(){return R()}}),Object(l.jsx)("h4",{children:"\u0110ang ph\xe1t"}),Object(l.jsx)(g,{song:e.songs[e.currentSongIndex],isPlaying:a}),Object(l.jsx)(j,{isPlaying:a,setIsPlaying:r,SkipSong:R,percentage:x,onChange:function(e){var n=t.current;n.currentTime=n.duration/100*e.target.value,p(e.target.value)},duration:d,currentTime:v,volume:T,onVolumeChange:function(e){t.current.volume=(e.target.value/100).toFixed(2),C(e.target.value)},isMuted:E,muteControl:function(){t.current.muted=!E,P(!E)}}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Ti\u1ebfp theo:"})," ",e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist]})]})};n(20);var b=function(){var e=Object(c.useState)([{title:"R\u1ed3i T\u1edbi Lu\xf4n",artist:"Nal",img_src:"./assets/roitoiluon.jpg",src:"./sounds/RoiToiLuon.flac"},{title:"3107-3",artist:"W/n - Duongg - N\xe2u - Titie",img_src:"./assets/3107-3.jpg",src:"./sounds/3107-3.flac"},{title:"Qua Khung C\u1eeda S\u1ed5",artist:"Chillies",img_src:"./assets/quakhungcuaso.jpg",src:"./sounds/QuaKhungCuaSo.flac"},{title:"V\xf9ng K\xfd \u1ee8c",artist:"Chillies",img_src:"./assets/vungkyuc.jpg",src:"./sounds/VungKyUc.flac"},{title:"Tr\u1ed1n T\xecm",artist:"\u0110en - MTV",img_src:"./assets/trontim.jpg",src:"./sounds/TronTim.flac"},{title:"East Of Eden",artist:"someone",img_src:"./assets/eastofeden.jpg",src:"./sounds/EastOfEden.flac"},{title:"Thunder",artist:"Gabry Ponte - LUM!X - Prezioso",img_src:"./assets/thunder.jpg",src:"./sounds/Thunder.mp3"}]),t=Object(i.a)(e,1)[0],n=Object(c.useState)(0),s=Object(i.a)(n,2),a=s[0],r=s[1],u=Object(c.useState)(a+1),o=Object(i.a)(u,2),j=o[0],g=o[1];return Object(c.useEffect)((function(){g((function(){return a+1>t.length-1?0:a+1}))}),[a,t.length]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{currentSongIndex:a,setCurrentSongIndex:r,nextSongIndex:j,songs:t})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bf5532e1.chunk.js.map