import './polyfills.server.mjs';
import{B as i}from"./chunk-YXLOMBLC.mjs";import{S as e,Y as n}from"./chunk-33RGZEIL.mjs";var p=(()=>{class t{constructor(){this._httpClient=n(i)}getAllbrands(){return this._httpClient.get("brands")}getBrandById(r){return this._httpClient.get("brands/"+r)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=e({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{p as a};
