import{u as d,a as s}from"./private.use-form.c9c9e674.js";import{b as u,d as n,h as c,f as l,j as q}from"./index.4aad8486.js";var i=u({name:"QCard",props:{...d,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=s(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},l(r.default))}});export{i as Q};