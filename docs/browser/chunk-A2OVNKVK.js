import{a as Y}from"./chunk-C2QVN7KV.js";import{e as T,o as E,p as P}from"./chunk-MTTJUQJL.js";import{p as D,r as M}from"./chunk-UVOI6WJ2.js";import{$a as h,Hb as o,Ib as s,Jb as C,La as b,Ob as I,Pa as i,Tb as f,Ub as S,Vb as B,Y as m,ba as _,fb as p,hb as g,lb as c,pb as a,qb as r,rb as y,zb as u}from"./chunk-TQ5CUWMB.js";import"./chunk-CWTPBX7D.js";function F(t,w){if(t&1&&(a(0,"div",3),y(1,"img",4),r(),a(2,"div",5)(3,"h3"),o(4),r(),a(5,"h6"),o(6),r(),a(7,"p"),o(8),f(9,"date"),r()()),t&2){let e,n,d,v,x,l=u(2);i(),g("src",(e=l.brand())==null?null:e.image,b)("alt",(n=l.brand())==null?null:n.name),i(3),s((d=l.brand())==null?null:d.name),i(2),s((v=l.brand())==null?null:v.slug),i(2),C("From: ",B(9,5,(x=l.brand())==null?null:x.createdAt,"dd/MM/YYYY"),"")}}function O(t,w){if(t&1&&(a(0,"section")(1,"div",0)(2,"h2",1),o(3),f(4,"translate"),r(),a(5,"div",2),p(6,F,10,8),r()()()),t&2){let e=u();i(3),s(S(4,2,"brandDetails.title")),i(3),c(6,e.brand()?6:-1)}}var J=(()=>{class t{constructor(){this.brandId="",this.brand=h(null),this._brandsService=m(Y),this.route=m(T),this.customOptions={loop:!0,rtl:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,smartSpeed:1e3,dots:!1,navSpeed:700,navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0}}ngOnInit(){this.brandId=this.route.snapshot.paramMap.get("id"),this.getbrandById()}getbrandById(){this.brandId&&this._brandsService.getBrandById(this.brandId).subscribe({next:e=>{this.brand.set(e.data)}})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=_({type:t,selectors:[["app-brand-details"]],standalone:!0,features:[I],decls:1,vars:1,consts:[[1,"container"],[1,"text-center","text-main","my-4"],[1,"row","mt-2","align-items-center"],[1,"col-12","col-md-4","text-center"],["height","400px",1,"w-100","rounded-3",3,"src","alt"],[1,"col-12","col-md-8","my-4"]],template:function(n,d){n&1&&p(0,O,7,4,"section"),n&2&&c(0,d.brand()?0:-1)},dependencies:[M,D,P,E],styles:["img[_ngcontent-%COMP%]{object-fit:contain}"]})}}return t})();export{J as BrandDetailsComponent};
