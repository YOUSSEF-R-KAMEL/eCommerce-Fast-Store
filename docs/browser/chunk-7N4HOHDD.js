import{a as y}from"./chunk-IISYNXJG.js";import{a as S}from"./chunk-XIJFT6F7.js";import{k as h}from"./chunk-SVLOZMNO.js";import"./chunk-6BHLS2OG.js";import"./chunk-XAZLOLJU.js";import{o as v,p as b}from"./chunk-MTTJUQJL.js";import{r as f}from"./chunk-UVOI6WJ2.js";import{$a as a,Hb as m,Ib as g,Ob as d,Pa as o,Tb as u,Ub as C,Y as r,ba as s,hb as n,pb as c,qb as l,rb as p}from"./chunk-TQ5CUWMB.js";import"./chunk-CWTPBX7D.js";var _=(()=>{class e{constructor(){this.categoriesList=a([]),this.searchVal="",this._CategoriesService=r(y)}ngOnInit(){this.getAllCategories()}getAllCategories(){this.getAllCategoriesSubscribe=this._CategoriesService.getAllCategories().subscribe({next:i=>{this.categoriesList.set(i.data)}})}ngOnDestroy(){this.getAllCategoriesSubscribe?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-categories"]],standalone:!0,features:[d],decls:4,vars:4,consts:[[1,"text-center","text-main","my-4"],["type","categories",3,"list"]],template:function(t,x){t&1&&(c(0,"h2",0),m(1),u(2,"translate"),l(),p(3,"app-cards",1)),t&2&&(o(),g(C(2,2,"categoriesPage.title")),o(2),n("list",x.categoriesList))},dependencies:[f,h,b,v,S]})}}return e})();export{_ as CategoriesComponent};
