import{u as q,_ as G,f as x,o as d,c as l,a as t,t as a,F as $,r as P,g as T,h as B,n as v,i as e,j,k as D,l as E,b,w as F}from"./DLb8cOz5.js";import{u as L}from"./Cw73HsI1.js";function N(o,i){const{title:r,titleTemplate:c,...C}=o;return L({title:r,titleTemplate:c,_flatMeta:C},{...i,transform(g){const y=q({...g._flatMeta});return delete g._flatMeta,{...g,meta:y}}})}const V=["id"],z={key:0,class:"article-card__items"},H={__name:"ArticleCard",props:{sectionId:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},items:{type:Array,default:[]},finalDescription:{type:String,required:!0},tone:{type:String,default:"bg-white"}},setup(o){const i=o,r=x(()=>i.tone==="gray"?"bg-light-gray":"bg-white");return(c,C)=>(d(),l("section",{id:o.sectionId,class:v(["article-card",e(r)])},[t("h2",null,a(o.title),1),t("p",null,a(o.description),1),o.items&&o.items.length?(d(),l("ul",z,[(d(!0),l($,null,P(o.items,(g,y)=>(d(),l("li",{key:y},[t("strong",null,a(g.title),1),t("p",null,a(g.description),1)]))),128))])):T("",!0),B(c.$slots,"default",{},void 0),t("p",null,a(o.finalDescription),1)],10,V))}},w=G(H,[["__scopeId","data-v-c991918a"]]),O={class:"table-of-contents"},J={class:"table-of-contents__title"},K={class:"table-of-contents__list"},Q=["href"],R={__name:"IndexGuide",props:{title:{type:String,required:!0},items:{type:Object,required:!0}},setup(o){return(i,r)=>(d(),l("section",O,[t("h2",J,a(o.title),1),t("ul",K,[(d(!0),l($,null,P(o.items,(c,C)=>(d(),l("li",{key:C},[t("a",{class:"table-of-contents__list__item",href:c.id},a(c.text),9,Q)]))),128))])]))}},U=G(R,[["__scopeId","data-v-1b06dbf2"]]),W={key:0},X={__name:"CompaniesComparisionTable",setup(o){return(i,r)=>e(j)?T("",!0):(d(),l("table",W,r[0]||(r[0]=[t("thead",null,[t("tr",null,[t("th",null,"Casa"),t("th",null,"Precio"),t("th",null,"Tiempo de Entrega"),t("th",null,"Fiabilidad")])],-1),t("tbody",null,[t("tr",null,[t("td",null,"PSA"),t("td",null,"Alto"),t("td",null,"Largo"),t("td",null,"Alta")]),t("tr",null,[t("td",null,"APGrading"),t("td",null,"Moderado"),t("td",null,"Moderado"),t("td",null,"Alta")]),t("tr",null,[t("td",null,"PCAgrade"),t("td",null,"Bajo"),t("td",null,"Corto"),t("td",null,"Moderada")]),t("tr",null,[t("td",null,"EuropeanGrading"),t("td",null,"Moderado"),t("td",null,"Moderado"),t("td",null,"Alta")])],-1)])))}},Y={class:"grading-page"},Z={class:"grading-page__header"},tt={class:"grading-page__articles"},nt=D({__name:"index",setup(o){const{t:i,tm:r}=E(),c=[{id:"#what-is-grading",text:i("gradingSection.whatIsGrading.title")},{id:"#grading-criteria",text:i("gradingSection.gradingCriteria.title")},{id:"#grading-companies",text:i("gradingSection.bestCompanies.title")},{id:"#comparison",text:i("gradingSection.companiesComparision.title")},{id:"#how-to-protect",text:i("gradingSection.howToProtectCards.title")}],C=x(()=>r("gradingSection.bestCompanies.companies").map(n=>{var s,u,p,m,_,h,f,S,I,k,M,A;return{title:((u=(s=n.title)==null?void 0:s.body)==null?void 0:u.static)||((m=(p=n.title)==null?void 0:p.b)==null?void 0:m.s),description:((h=(_=n.description)==null?void 0:_.body)==null?void 0:h.static)||((S=(f=n.description)==null?void 0:f.b)==null?void 0:S.s),link:((k=(I=n.link)==null?void 0:I.body)==null?void 0:k.static)||((A=(M=n.link)==null?void 0:M.b)==null?void 0:A.s)}})),g=x(()=>r("gradingSection.gradingCriteria.criterias").map(n=>{var s,u,p,m,_,h,f,S;return{title:((u=(s=n.title)==null?void 0:s.body)==null?void 0:u.static)||((m=(p=n.title)==null?void 0:p.b)==null?void 0:m.s),description:((h=(_=n.description)==null?void 0:_.body)==null?void 0:h.static)||((S=(f=n.description)==null?void 0:f.b)==null?void 0:S.s)}})),y=x(()=>r("gradingSection.howToProtectCards.protectingItems").map(n=>{var s,u,p,m,_,h,f,S;return{title:((u=(s=n.title)==null?void 0:s.body)==null?void 0:u.static)||((m=(p=n.title)==null?void 0:p.b)==null?void 0:m.s),description:((h=(_=n.description)==null?void 0:_.body)==null?void 0:h.static)||((S=(f=n.description)==null?void 0:f.b)==null?void 0:S.s)}}));return N({title:i("gradingSection.seo.title"),ogTitle:i("gradingSection.seo.title"),description:i("gradingSection.seo.description")}),(n,s)=>(d(),l("div",Y,[t("header",Z,[t("h1",null,a(e(i)("gradingSection.seo.title")),1),t("p",null,a(e(i)("gradingSection.seo.description")),1)]),b(U,{title:e(i)("gradingSection.completeGuide"),items:c},null,8,["title"]),t("div",tt,[b(w,{"section-id":"what-is-grading",title:e(i)("gradingSection.whatIsGrading.title"),description:e(i)("gradingSection.whatIsGrading.description"),"final-description":e(i)("gradingSection.whatIsGrading.conclusion"),tone:"gray"},null,8,["title","description","final-description"]),b(w,{"section-id":"grading-criteria",title:e(i)("gradingSection.gradingCriteria.title"),description:e(i)("gradingSection.gradingCriteria.description"),items:e(g),"final-description":e(i)("gradingSection.gradingCriteria.conclusion")},null,8,["title","description","items","final-description"]),b(w,{"section-id":"grading-companies",title:e(i)("gradingSection.bestCompanies.title"),description:e(i)("gradingSection.bestCompanies.description"),items:e(C),"final-description":e(i)("gradingSection.bestCompanies.conclusion"),tone:"gray"},null,8,["title","description","items","final-description"]),b(w,{"section-id":"comparison",title:e(i)("gradingSection.companiesComparision.title"),description:e(i)("gradingSection.companiesComparision.description"),"final-description":e(i)("gradingSection.companiesComparision.conclusion")},{default:F(()=>[b(X)]),_:1},8,["title","description","final-description"]),b(w,{"section-id":"how-to-protect",title:e(i)("gradingSection.howToProtectCards.title"),description:e(i)("gradingSection.howToProtectCards.description"),items:e(y),"final-description":e(i)("gradingSection.howToProtectCards.conclusion"),tone:"gray"},null,8,["title","description","items","final-description"])])]))}});export{nt as default};