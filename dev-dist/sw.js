if(!self.define){let e,t={};const o=(o,i)=>(o=new URL(o+".js",i).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const l=e=>o(e,r),c={module:{uri:r},exports:s,require:l};t[r]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"0.qsob3t2g80g"}],{directoryIndex:"index.html"}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{allowlist:[/^\//]}))}));