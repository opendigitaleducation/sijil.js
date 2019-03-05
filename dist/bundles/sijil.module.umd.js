!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/http"),require("rxjs/add/operator/toPromise")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/http","rxjs/add/operator/toPromise"],t):t(e.SijilModule=e.SijilModule||{},e.ng.core,e.ng.http)}(this,function(e,t,n){"use strict";function r(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function o(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}e.HttpRequireService=function(){function e(e){this.http=e}return e.prototype.load=function(e){return this.http.get(e).toPromise().then(function(e){return e.json()})},e}(),e.HttpRequireService=i([t.Injectable(),o("design:paramtypes",["function"==typeof(a=void 0!==n.Http&&n.Http)&&a||Object])],e.HttpRequireService);var a,u=function(){function e(){}return e}(),s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.message=t,r.fragment=n,r}return r(t,e),t}(Error),l=function(){function e(){}return e}(),p=function(){function e(){}return e.prototype.getParameter=function(e,t,n){return 1===t.split(/\s+/).length?"$"===t[0]?e[t.substr(1)]:n?t:void 0!==e[t]?e[t]:t:t.split(/\s+/).reduce(function(t,n){return t.push("$"===n[0]?e[n.substr(1)]:n),t},[]).join(" ")},e.prototype.compileFragment=function(e,t){e=e.replace(/{{|}}/g,"");var n,r;if(!((n=e.indexOf("?"))>0&&(r=e.lastIndexOf(":"))>1))return e=e.trim(),t[e];var i=e.substring(0,n).trim(),o=e.substring(n+1,r).trim(),a=e.substring(r+1).trim(),u=this.getParameter(t,o),l=this.getParameter(t,a),p=i.split(/\s+/);if(1===p.length){return t[p[0]]?u:l}if(3!==p.length)throw new s("Invalid condition for fragment : "+e,e);var c=this.getParameter(t,p[0],t instanceof Array),f=this.getParameter(t,p[2],t instanceof Array);switch(p[1]){case"==":return c==f?u:l;case">":return c>f?u:l;case">=":return c>=f?u:l;case"<":return c<f?u:l;case"<=":return c<=f?u:l;default:throw new s("Invalid conditional operator for fragment : "+e,e)}},e.prototype.compile=function(t,n,r){var i=t.split(e.delimRegexp),o=t.match(e.delimRegexp),a="";if(r||(r=e.defaultErrorCallback),o){for(var u=0;u<i.length;u++)if(a+=i[u],!(u>o.length-1))try{a+=this.compileFragment(o[u],n)}catch(e){a+=r(e)}}else a+=t;return a},e}();p.delimiters=["{{","}}"],p.delimRegexp=new RegExp(p.delimiters[0]+"[^}]+"+p.delimiters[1],"gm"),p.defaultErrorCallback=function(e){return console.error(e),e.fragment};var c=function(){function e(e,t,n){this.requireService=e,this.parser=t,this.bundles={},this.defaultLanguage=n.defaultLanguage,this.defaultLanguage||"undefined"==typeof window||(this.defaultLanguage=window.navigator.language.split("-")[0]),this.currentLanguage=this.defaultLanguage}return e.prototype.addToBundle=function(e,t){var n=t||this.currentLanguage||this.defaultLanguage||"en";this.bundles[n]||(this.bundles[n]={});var r={},i={};for(var o in e)r[o]=e[o];for(var o in i)r[o]=i[o];this.bundles[n]=r,this.currentLanguage||(this.currentLanguage=t)},e.prototype.loadBundle=function(e,t){var n=this;return this.requireService.load(e).then(function(e){n.addToBundle(e,t)})},e.prototype.loadBundles=function(e){var t=this;return Promise.all(e.map(function(e){return t.loadBundle(e.where,e.lang)}))},e.prototype.unloadBundle=function(e){delete this.bundles[e]},e.prototype.getLoadedLanguages=function(){return Object.keys(this.bundles)},e.prototype.translate=function(e,t,n){var r=n||this.currentLanguage,i=this.bundles[r]&&this.bundles[r][e]||this.defaultLanguage&&this.bundles[this.defaultLanguage]&&this.bundles[this.defaultLanguage][e]||e;return i!==e&&t?this.parser.compile(i,t,function(t){return console.error(t),e}):i},e}(),f=function(){function e(){}return e}(),d={defaultLanguage:window?window.navigator.language.split("-")[0]:void 0},g=function(){function e(e){this.bundlesService=e}return e.prototype.refreshTranslation=function(){var e=this.bundlesService.translate(this.value,this.parameters,this.fixedLanguage);this.displayedValue!==e&&(this.displayedValue=e,this.wrapperRef.nativeElement.innerHTML=this.displayedValue)},e.prototype.ngAfterViewInit=function(){this.value=this.wrapperRef.nativeElement.innerHTML.trim(),this.loaded=!0,this.refreshTranslation()},e.prototype.ngDoCheck=function(){this.loaded&&this.refreshTranslation()},e}();i([t.ViewChild("wrapper"),o("design:type","function"==typeof(h=void 0!==t.ElementRef&&t.ElementRef)&&h||Object)],g.prototype,"wrapperRef"),i([t.Input("s5l-params"),o("design:type",Object)],g.prototype,"parameters"),i([t.Input("s5l-lang"),o("design:type",String)],g.prototype,"fixedLanguage"),g=i([t.Component({selector:"s5l",template:"\n    <span #wrapper>\n        <ng-content></ng-content>\n    </span>",changeDetection:t.ChangeDetectionStrategy.OnPush}),o("design:paramtypes",["function"==typeof(v=void 0!==c&&c)&&v||Object])],g);var h,v,m=function(){function e(e){this.bundlesService=e}return e.prototype.transform=function(e,t,n){return this.bundlesService.translate(e,t,n)},e}();m=i([t.Pipe({name:"translate",pure:!1}),o("design:paramtypes",["function"==typeof(y=void 0!==c&&c)&&y||Object])],m);var y;e.SijilModule=b=function(){function t(){}return t.forRoot=function(t,n,r){return{ngModule:b,providers:[{provide:c,useClass:c,deps:[u,l,f]},{provide:u,useClass:t||e.HttpRequireService},{provide:l,useClass:n||p},{provide:f,useValue:r||d}]}},t.forChild=function(){return{ngModule:b,providers:[]}},t}(),e.SijilModule=b=i([t.NgModule({imports:[n.HttpModule],declarations:[g,m],providers:[],exports:[g,m]})],e.SijilModule);var b;e.RequireService=u,e.FragmentsParser=p,e.ParserError=s,e.Parser=l,e.BundlesService=c,e.defaultSijilOpts=d,e.SijilOpts=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=sijil.module.umd.js.map
