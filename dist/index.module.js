import o from"tailwindcss/plugin";module.exports=o(function(o){var r=o.addUtilities,a=o.matchUtilities,t=o.theme;["sm","","md","lg","xl","2xl"].forEach(function(o){["b","r","t","l"].forEach(function(a,s){var n,w=s%2==0,d=t("boxShadow."+(o||"DEFAULT")).split(", ").map(function(o){return o.split(" ").slice(0,2).map(function(o,r){return 1===r&&s>1?"-"+o:o})[w?"slice":"reverse"]().concat(o.split(" ").slice(2,4)).join(" ")}).map(function(o){return o+" var(--tw-shadow-color, rgb(0 0 0 / 0.1))"}).join(", ");r(((n={})[".shadow-"+a+(o?"-"+o:"")]={"--tw-shadow":d,"--tw-shadow-colored":d,"box-shadow":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},n))})}),a({"shadow-border":function(o){return{boxShadow:"inset 0 0 0 "+o+" var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-x":function(o){return{boxShadow:"inset "+o+" 0 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+"), inset -"+o+" 0 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-y":function(o){return{boxShadow:"inset 0 "+o+" 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+"), inset 0 -"+o+" 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-t":function(o){return{boxShadow:"inset 0 "+o+" 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-b":function(o){return{boxShadow:"inset 0 -"+o+" 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-l":function(o){return{boxShadow:"inset "+o+" 0 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}},"shadow-border-r":function(o){return{boxShadow:"inset -"+o+" 0 0 0 var(--tw-shadow-color, "+t("colors.gray.200")+")"}}},{values:t("borderWidth")})});
//# sourceMappingURL=index.module.js.map
