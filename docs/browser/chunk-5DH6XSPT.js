import{a as v,c as T}from"./chunk-BNMMIWDT.js";import{a as b}from"./chunk-F3GVCROK.js";import{a as x}from"./chunk-XIJFT6F7.js";import{k as S}from"./chunk-SVLOZMNO.js";import{c as y}from"./chunk-6BHLS2OG.js";import"./chunk-XAZLOLJU.js";import{o as _,p as g}from"./chunk-MTTJUQJL.js";import{r as C}from"./chunk-UVOI6WJ2.js";import{$a as d,Hb as m,Ib as l,Ob as f,Pa as i,Tb as h,Ub as P,Y as o,ba as a,hb as p,pb as s,qb as n,yb as u}from"./chunk-TQ5CUWMB.js";import"./chunk-CWTPBX7D.js";var z=(()=>{class r{constructor(){this.productsList=d([]),this.searchVal="",this._productsService=o(T),this._cartService=o(b),this._toastr=o(v)}ngOnInit(){this.getAllProducts()}getAllProducts(){this._productsService.getAllProducts().subscribe({next:e=>{this.productsList.set(e.data)}})}addProductToCart(e){this.getAllProductSubscribe=this._cartService.addProductToCart(e).subscribe({next:t=>{this._cartService.updateCartCount(t.numOfCartItems),this._toastr.success(t.message)}})}ngOnDestroy(){this.getAllProductSubscribe?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=a({type:r,selectors:[["app-products"]],standalone:!0,features:[f],decls:4,vars:4,consts:[[1,"text-center","text-main","my-4"],["type","product",3,"sendProductId","list"]],template:function(t,c){t&1&&(s(0,"h2",0),m(1),h(2,"translate"),n(),s(3,"app-cards",1),u("sendProductId",function(I){return c.addProductToCart(I)}),n()),t&2&&(i(),l(P(2,2,"productsPage.title")),i(2),p("list",c.productsList))},dependencies:[C,y,S,x,g,_]})}}return r})();export{z as ProductsComponent};
