import './polyfills.server.mjs';
import{a as S}from"./chunk-JDFXN72T.mjs";import{k as b}from"./chunk-ZRVASMXO.mjs";import{a as y}from"./chunk-FR4FPR5Z.mjs";import"./chunk-EHNVOD2T.mjs";import{c as h,d as v}from"./chunk-UOETFI2Q.mjs";import"./chunk-J4BDXTMW.mjs";import"./chunk-H5VVROCV.mjs";import{t as f}from"./chunk-YXLOMBLC.mjs";import{Jb as m,Kb as g,Qb as d,Ra as o,Vb as u,Wb as C,Y as r,ba as s,bb as a,jb as n,rb as c,sb as l,tb as p}from"./chunk-33RGZEIL.mjs";import"./chunk-VVCT4QZE.mjs";var _=(()=>{class e{constructor(){this.categoriesList=a([]),this.searchVal="",this._CategoriesService=r(y)}ngOnInit(){this.getAllCategories()}getAllCategories(){this.getAllCategoriesSubscribe=this._CategoriesService.getAllCategories().subscribe({next:i=>{this.categoriesList.set(i.data)}})}ngOnDestroy(){this.getAllCategoriesSubscribe?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-categories"]],standalone:!0,features:[d],decls:4,vars:4,consts:[[1,"text-center","text-main","my-4"],["type","categories",3,"list"]],template:function(t,x){t&1&&(c(0,"h2",0),m(1),u(2,"translate"),l(),p(3,"app-cards",1)),t&2&&(o(),g(C(2,2,"categoriesPage.title")),o(2),n("list",x.categoriesList))},dependencies:[f,b,v,h,S]})}}return e})();export{_ as CategoriesComponent};
