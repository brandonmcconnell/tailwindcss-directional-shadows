import o from"tailwindcss/plugin";var r=o(function({addUtilities:o,matchUtilities:r,theme:a}){["sm","","md","lg","xl","2xl"].forEach(r=>{["b","r","t","l"].forEach((s,w)=>{const d=w%2==0,t=a(`boxShadow.${r||"DEFAULT"}`).split(", ").map(o=>o.split(" ").slice(0,2).map((o,r)=>1===r&&w>1?`-${o}`:o)[d?"slice":"reverse"]().concat(o.split(" ").slice(2,4)).join(" ")).map(o=>`${o} var(--tw-shadow-color, rgb(0 0 0 / 0.1))`).join(", ");o({[`.shadow-${s}${r?`-${r}`:""}`]:{"--tw-shadow":t,"--tw-shadow-colored":t,"box-shadow":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}})})}),r({"shadow-border":o=>({boxShadow:`inset 0 0 0 ${o} var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-x":o=>({boxShadow:`inset ${o} 0 0 0 var(--tw-shadow-color, ${a("colors.gray.200")}), inset -${o} 0 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-y":o=>({boxShadow:`inset 0 ${o} 0 0 var(--tw-shadow-color, ${a("colors.gray.200")}), inset 0 -${o} 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-t":o=>({boxShadow:`inset 0 ${o} 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-b":o=>({boxShadow:`inset 0 -${o} 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-l":o=>({boxShadow:`inset ${o} 0 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`}),"shadow-border-r":o=>({boxShadow:`inset -${o} 0 0 0 var(--tw-shadow-color, ${a("colors.gray.200")})`})},{values:a("borderWidth")})});export{r as default};
//# sourceMappingURL=index.modern.js.map