import{a as je,b as Ie,c as Me,d as He,e as Ve,f as Ge,g as $e}from"./chunk-V4EUTLKG.js";import{a as h,b as be,d as Ce,e as j,f as we,g as V,h as G,l as Oe,m as De,n as Be,o as Ue}from"./chunk-E5MS6S7Q.js";import{a as Ee,b as _e,c as Pe,d as xe,e as Fe,f as Ae,g as ke,h as Le,i as Re,j as Te,k as Ne,l as qe,m as ze,n as We,o as Ze,p as Ke}from"./chunk-SCJUIYWH.js";import{A as H,B as ve,C as Se,a as me,b as pe,c as de,d as ue,e as he,f as ge,h as R,j as fe,k as S,l as T,n as K,o as N,p as y,r as q,s as O,v as D,x as B,y as U,z as ye}from"./chunk-CIJR3BYN.js";import"./chunk-AESYL7IM.js";import{$ as A,$a as ie,Bb as a,Cb as n,D as F,Db as d,Ec as ce,Ga as re,Jb as L,Lb as Z,Nc as x,Vb as c,X as se,Za as p,_ as C,_a as u,bb as ne,da as w,db as _,ea as M,eb as P,fb as ae,gb as le,ja as E,ka as k,ma as oe,p as ee,qb as f,s as te,sb as m}from"./chunk-LYM4HFW5.js";var J=be,$=(()=>{let e=class e{constructor(t,s){this.http=t,this.userStorageService=s}register(t){return this.http.post(J+"sign-up",t).pipe(F(this.handleError))}login(t,s){let r=new me().set("Content-Type","application/json"),l={username:t,password:s};return this.http.post(J+"authenticate",l,{headers:r,observe:"response"}).pipe(te(g=>{let v=g.headers.get("Authorization")?.substring(7),b=g.body;return v&&b?(this.userStorageService.saveToken(v),this.userStorageService.saveUser(b),b):null}),F(this.handleError))}logout(){h.signOut()}getOrderByTrackingId(t){return this.http.get(J+`order/${t}`).pipe(F(this.handleError))}handleError(t){let s="An unknown error occurred!";return t.error instanceof ErrorEvent?s=`Error: ${t.error.message}`:s=`Error Code: ${t.status}
Message: ${t.message}`,ee(()=>new Error(s))}};e.\u0275fac=function(s){return new(s||e)(w(pe),w(h))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var z=(()=>{let e=class e{constructor(t){this.renderer=t.createRenderer(null,null)}loadStyle(t){if(!document.querySelector(`link[href="${t}"]`)){let s=this.renderer.createElement("link");s.rel="stylesheet",s.href=t,this.renderer.appendChild(document.head,s)}}unloadStyle(t){let s=document.querySelector(`link[href="${t}"]`);s&&this.renderer.removeChild(document.head,s)}loadScript(t){return new Promise((s,r)=>{if(document.querySelector(`script[src="${t}"]`))s();else{let l=this.renderer.createElement("script");l.src=t,l.type="text/javascript",l.onload=()=>s(),l.onerror=()=>r(`Failed to load script ${t}`),this.renderer.appendChild(document.body,l)}})}unloadScript(t){let s=document.querySelector(`script[src="${t}"]`);s&&this.renderer.removeChild(document.body,s)}};e.\u0275fac=function(s){return new(s||e)(w(_))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function dt(o,e){o&1&&(a(0,"mat-error"),c(1," Please enter a valid email address. "),n())}function ut(o,e){o&1&&(a(0,"mat-error"),c(1," Please enter a valid password (minimum 8 characters). "),n())}var et=(()=>{let e=class e{constructor(t,s,r,l,g,v,b){this.formBuilder=t,this.authService=s,this.snackBar=r,this.router=l,this.styleManager=g,this.renderer=v,this.toastr=b,this.hidePassword=!0}ngOnInit(){this.loginForm=this.formBuilder.group({email:[null,[y.required,y.email]],password:[null,[y.required,y.minLength(8)]]})}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}onSubmit(){if(this.loginForm.invalid){this.toastr.error("Please fill out the form correctly.","Validation Error");return}let t=this.loginForm.get("email").value,s=this.loginForm.get("password").value;this.authService.login(t,s).subscribe(r=>{if(r){let l=r.name||t;this.toastr.success(`Welcome back, ${l}!`,"Login Successful"),h.isAdminLoggedIn()?this.router.navigateByUrl("admin/home"):h.isCustomerLoggedIn()&&this.router.navigateByUrl("customer/home")}else this.toastr.error("Login failed","ERROR")},r=>{let l="An error occurred. Please try again.";r.status===401?l="Invalid email or password.":r.status===409&&(l="User already exists."),this.toastr.error(l,"ERROR")})}ngAfterViewInit(){this.styleManager.loadStyle("http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all"),this.styleManager.loadStyle("http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all"),this.styleManager.loadStyle("assets/css-1/assets/plugins/font-awesome/css/font-awesome.min.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/bootstrap/css/bootstrap.min.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/animate.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/owl.carousel/assets/owl.carousel.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/components.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/slider.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/style-shop.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/style.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/style-responsive.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/themes/red.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/custom.css"),this.styleManager.loadScript("assets/css-1/assets/plugins/jquery.min.js").then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/jquery-migrate.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/bootstrap/js/bootstrap.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/corporate/scripts/back-to-top.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.pack.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/owl.carousel/owl.carousel.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/zoom/jquery.zoom.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/corporate/scripts/layout.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/pages/scripts/bs-carousel.js")).then(()=>{this.addInlineScript(`
          jQuery(document).ready(function() {
              Layout.init();
              Layout.initOWL();
              Layout.initImageZoom();
              Layout.initTouchspin();
              Layout.initTwitter();
          });
        `)}).catch(t=>{console.error("Script load error:",t)})}addInlineScript(t){let s=this.renderer.createElement("script");s.type="text/javascript",s.text=t,this.renderer.appendChild(document.body,s)}};e.\u0275fac=function(s){return new(s||e)(u(H),u($),u(Ce),u(S),u(z),u(P),u(j))},e.\u0275cmp=E({type:e,selectors:[["app-login"]],decls:53,vars:5,consts:[[1,"ecommerce"],[1,"main"],[1,"container"],[1,"breadcrumb"],["routerLink","/customer/customer-home"],[1,"active"],[1,"row","margin-bottom-40"],[1,"col-md-12","col-sm-12"],["id","checkout-page",1,"panel-group","checkout-page","accordion","scrollable"],["id","checkout",1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],["data-toggle","collapse","data-parent","#checkout-page","href","#checkout-content",1,"accordion-toggle"],["id","checkout-content",1,"panel-collapse","collapse","in"],[1,"panel-body","row"],[1,"col-md-6","col-sm-6"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","email-login"],["matInput","","formControlName","email","placeholder","Email","id","email-login",1,"form-control"],[4,"ngIf"],["for","password-login"],["matInput","","formControlName","password","placeholder","Password","id","password-login",1,"form-control",3,"type"],["href","javascript:;"],[1,"padding-top-20"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"login-socio"],[1,"text-muted"],[1,"social-icons"],["href","javascript:;","data-original-title","facebook","title","facebook",1,"facebook"],["href","javascript:;","data-original-title","Twitter","title","Twitter",1,"twitter"],["href","javascript:;","data-original-title","Google Plus","title","Google Plus",1,"googleplus"],["href","javascript:;","data-original-title","Linkedin","title","LinkedIn",1,"linkedin"]],template:function(s,r){s&1&&(a(0,"body",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li")(5,"a",4),c(6,"Home"),n()(),a(7,"li"),c(8,"Store"),n(),a(9,"li",5),c(10,"Login"),n()(),a(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"h2",11)(17,"a",12),c(18," Login "),n()()(),a(19,"div",13)(20,"div",14)(21,"div",15)(22,"h3"),c(23,"Login"),n(),a(24,"form",16),L("ngSubmit",function(){return r.onSubmit()}),a(25,"div",17)(26,"label",18),c(27,"E-Mail"),n(),d(28,"input",19),f(29,dt,2,0,"mat-error",20),n(),a(30,"div",17)(31,"label",21),c(32,"Password"),n(),d(33,"input",22),f(34,ut,2,0,"mat-error",20),n(),a(35,"a",23),c(36,"Forgotten Password?"),n(),a(37,"div",24)(38,"button",25),c(39,"Login"),n()(),d(40,"hr"),a(41,"div",26)(42,"p",27),c(43,"or login using:"),n(),a(44,"ul",28)(45,"li"),d(46,"a",29),n(),a(47,"li"),d(48,"a",30),n(),a(49,"li"),d(50,"a",31),n(),a(51,"li"),d(52,"a",32),n()()()()()()()()()()()()()()),s&2&&(p(24),m("formGroup",r.loginForm),p(5),m("ngIf",r.loginForm.get("email").invalid&&r.loginForm.get("email").touched),p(4),m("type",r.hidePassword?"password":"text"),p(),m("ngIf",r.loginForm.get("password").invalid&&r.loginForm.get("password").touched),p(4),m("disabled",r.loginForm.invalid))},dependencies:[x,T,D,N,q,O,B,U,V,G],styles:["mat-error[_ngcontent-%COMP%]{color:red}  .toast-success{background-color:#28a745!important;color:#fff!important}  .toast-error{background-color:#dc3545!important;color:#fff!important}  .toast-info{background-color:#17a2b8!important;color:#fff!important}  .toast-warning{background-color:#ffc107!important;color:#000!important}  .toast{border-radius:8px;font-size:14px}"]});let o=e;return o})();function ht(o,e){o&1&&(a(0,"mat-error"),c(1," Name is mandatory. "),n())}function gt(o,e){o&1&&(a(0,"mat-error"),c(1," Name should only contain alphabetic characters and spaces. "),n())}function ft(o,e){o&1&&(a(0,"mat-error"),c(1," Email is mandatory. "),n())}function yt(o,e){o&1&&(a(0,"mat-error"),c(1," Please provide a valid email address. "),n())}function vt(o,e){o&1&&(a(0,"mat-error"),c(1," Password is mandatory. "),n())}function St(o,e){o&1&&(a(0,"mat-error"),c(1," Password must be at least 8 characters long, and include one uppercase letter, one lowercase letter, one number, and one special character. "),n())}function bt(o,e){o&1&&(a(0,"mat-error"),c(1," Confirm Password is mandatory. "),n())}function Ct(o,e){o&1&&(a(0,"mat-error"),c(1," Passwords do not match. "),n())}var tt=(()=>{let e=class e{constructor(t,s,r,l,g,v){this.fb=t,this.toastr=s,this.authService=r,this.router=l,this.styleManager=g,this.renderer=v,this.hidePassword=!0,this.passwordMatcher=b=>{let at=b.get("password")?.value,lt=b.get("confirmPassword")?.value;return at!==lt?{mismatch:!0}:null}}ngOnInit(){this.signupForm=this.fb.group({name:[null,[y.required,y.pattern("^[A-Za-z\\s]+$")]],email:[null,[y.required,y.email]],password:[null,[y.required,y.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$")]],confirmPassword:[null,y.required]},{validators:this.passwordMatcher})}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}onSubmit(){this.signupForm.invalid||this.authService.register(this.signupForm.value).subscribe(t=>{let s=this.signupForm.get("name")?.value;this.toastr.success(`Sign up successful! Welcome, ${s}`,"Success",{closeButton:!0,progressBar:!0,progressAnimation:"increasing"}),this.router.navigateByUrl("/login")},t=>{this.toastr.error("Sign up failed. Please try again.","Error",{closeButton:!0,progressBar:!0,progressAnimation:"increasing"})})}ngAfterViewInit(){this.styleManager.loadStyle("http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all"),this.styleManager.loadStyle("http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all"),this.styleManager.loadStyle("assets/css-1/assets/plugins/font-awesome/css/font-awesome.min.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/bootstrap/css/bootstrap.min.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/animate.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.css"),this.styleManager.loadStyle("assets/css-1/assets/plugins/owl.carousel/assets/owl.carousel.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/components.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/slider.css"),this.styleManager.loadStyle("assets/css-1/assets/pages/css/style-shop.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/style.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/style-responsive.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/themes/red.css"),this.styleManager.loadStyle("assets/css-1/assets/corporate/css/custom.css"),this.styleManager.loadScript("assets/css-1/assets/plugins/jquery.min.js").then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/jquery-migrate.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/bootstrap/js/bootstrap.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/corporate/scripts/back-to-top.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.pack.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/owl.carousel/owl.carousel.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/zoom/jquery.zoom.min.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/corporate/scripts/layout.js")).then(()=>this.styleManager.loadScript("assets/css-1/assets/pages/scripts/bs-carousel.js")).then(()=>{this.addInlineScript(`
          jQuery(document).ready(function() {
              Layout.init();
              Layout.initOWL();
              Layout.initImageZoom();
              Layout.initTouchspin();
              Layout.initTwitter();
          });
        `)}).catch(t=>{console.error("Script load error:",t)})}addInlineScript(t){let s=this.renderer.createElement("script");s.type="text/javascript",s.text=t,this.renderer.appendChild(document.body,s)}};e.\u0275fac=function(s){return new(s||e)(u(H),u(j),u($),u(S),u(z),u(P))},e.\u0275cmp=E({type:e,selectors:[["app-signup"]],decls:52,vars:12,consts:[[1,"ecommerce"],[1,"main"],[1,"container"],[1,"breadcrumb"],["routerLink","/customer/customer-home"],[1,"active"],[1,"row","margin-bottom-40"],[1,"col-md-12","col-sm-12"],["id","checkout-page",1,"panel-group","checkout-page","accordion","scrollable"],["id","checkout",1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],["data-toggle","collapse","data-parent","#checkout-page","href","#checkout-content",1,"accordion-toggle"],["id","checkout-content",1,"panel-collapse","collapse","in"],[1,"panel-body","row"],[1,"col-md-6","col-sm-6"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["matInput","","formControlName","name","placeholder","Name","id","name","required","",1,"form-control"],[4,"ngIf"],["for","email"],["matInput","","formControlName","email","placeholder","Email","id","email","required","",1,"form-control"],["for","password"],["matInput","","formControlName","password","placeholder","Password","id","password","required","",1,"form-control",3,"type"],["for","confirmPassword"],["matInput","","formControlName","confirmPassword","placeholder","Confirm Password","id","confirmPassword","required","",1,"form-control",3,"type"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(s,r){s&1&&(a(0,"body",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li")(5,"a",4),c(6,"Home"),n()(),a(7,"li")(8,"a"),c(9,"Store"),n()(),a(10,"li",5),c(11,"Signup"),n()(),a(12,"div",6)(13,"div",7)(14,"div",8)(15,"div",9)(16,"div",10)(17,"h2",11)(18,"a",12),c(19," Signup "),n()()(),a(20,"div",13)(21,"div",14)(22,"div",15)(23,"h3"),c(24,"Signup"),n(),a(25,"form",16),L("ngSubmit",function(){return r.onSubmit()}),a(26,"div",17)(27,"label",18),c(28,"Name"),n(),d(29,"input",19),f(30,ht,2,0,"mat-error",20)(31,gt,2,0,"mat-error",20),n(),a(32,"div",17)(33,"label",21),c(34,"E-Mail"),n(),d(35,"input",22),f(36,ft,2,0,"mat-error",20)(37,yt,2,0,"mat-error",20),n(),a(38,"div",17)(39,"label",23),c(40,"Password"),n(),d(41,"input",24),f(42,vt,2,0,"mat-error",20)(43,St,2,0,"mat-error",20),n(),a(44,"div",17)(45,"label",25),c(46,"Confirm Password"),n(),d(47,"input",26),f(48,bt,2,0,"mat-error",20)(49,Ct,2,0,"mat-error",20),n(),a(50,"button",27),c(51,"Signup"),n()()()()()()()()()()()()),s&2&&(p(25),m("formGroup",r.signupForm),p(5),m("ngIf",r.signupForm.get("name").hasError("required")&&r.signupForm.get("name").touched),p(),m("ngIf",r.signupForm.get("name").hasError("pattern")&&r.signupForm.get("name").touched),p(5),m("ngIf",r.signupForm.get("email").hasError("required")&&r.signupForm.get("email").touched),p(),m("ngIf",r.signupForm.get("email").hasError("email")&&r.signupForm.get("email").touched),p(4),m("type",r.hidePassword?"password":"text"),p(),m("ngIf",r.signupForm.get("password").hasError("required")&&r.signupForm.get("password").touched),p(),m("ngIf",r.signupForm.get("password").hasError("pattern")&&r.signupForm.get("password").touched),p(4),m("type",r.hidePassword?"password":"text"),p(),m("ngIf",r.signupForm.get("confirmPassword").hasError("required")&&r.signupForm.get("confirmPassword").touched),p(),m("ngIf",r.signupForm.get("confirmPassword").hasError("mismatch")),p(),m("disabled",r.signupForm.invalid))},dependencies:[x,T,D,N,q,O,ye,B,U,V,G],styles:["mat-error[_ngcontent-%COMP%]{color:red}"]});let o=e;return o})();var st=(o,e)=>{let i=M(S),t=!!h.getToken(),s=h.getUserRole()==="ADMIN";return!t||!s?(i.navigate(["/login"]),!1):!0};var X=(o,e)=>{let i=M(S),t=M(j),s=!!h.getToken(),r=h.getUserRole()==="CUSTOMER";return console.log("Guard check:",{isLoggedIn:s,isCustomer:r}),!s||!r?(t.warning("Please log in as a customer to access this page."),i.navigate(["/login"],{queryParams:{returnUrl:e.url}}),!1):!0};var wt=[{path:"",component:Ee},{path:"login",component:et},{path:"signup",component:tt},{path:"customer/products-list",component:je},{path:"customer/wishlist",component:Ie,canActivate:[X]},{path:"cart",component:Me,canActivate:[X]},{path:"admin",loadChildren:()=>import("./chunk-RXLGJAUW.js").then(o=>o.AdminModule),canActivate:[st]},{path:"customer",loadChildren:()=>import("./chunk-WIX65N6F.js").then(o=>o.CustomerModule)},{path:"content/jewllery",component:ke},{path:"content/art-heritage",component:Pe},{path:"content/contact",component:Ne},{path:"content/ajanta",component:_e},{path:"content/north-east",component:Le},{path:"content/forts",component:Fe},{path:"content/walkthrough",component:qe},{path:"content/historic",component:Ae},{path:"content/site-cultural",component:Re},{path:"content/about",component:Te},{path:"content/cultural",component:xe},{path:"content",loadChildren:()=>import("./chunk-6QYJXMYG.js").then(o=>o.ContentModule)}],ot=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=k({type:e}),e.\u0275inj=A({imports:[K.forRoot(wt),K]});let o=e;return o})();var W=(()=>{let e=class e{constructor(t,s){this.rendererFactory=t,this.router=s,this.renderer=this.rendererFactory.createRenderer(null,null),this.router.events.subscribe(r=>{r instanceof R&&this.loadResources(r.urlAfterRedirects)})}loadResources(t){this.removeResources(),t.includes("admin")||t.includes("customer")?this.loadAdminCustomerResources():(t==="/"||t.includes("content"))&&this.loadContentResources()}loadAdminCustomerResources(){this.loadCss(["http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all","../../../assets/css-1/assets/plugins/font-awesome/css/font-awesome.min.css","../../../assets/css-1/assets/plugins/bootstrap/css/bootstrap.min.css","../../../assets/css-1/assets/pages/css/animate.css","../../../assets/css-1/assets/plugins/fancybox/source/jquery.fancybox.css","../../../assets/css-1/assets/plugins/owl.carousel/assets/owl.carousel.css","../../../assets/css-1/assets/pages/css/components.css","../../../assets/css-1/assets/pages/css/slider.css","../../../assets/css-1/assets/pages/css/style-shop.css","../../../assets/css-1/assets/corporate/css/style.css","../../../assets/css-1/assets/corporate/css/style-responsive.css","../../../assets/css-1/assets/corporate/css/themes/red.css","../../../assets/css-1/assets/corporate/css/custom.css"]),this.loadJs(["../../../assets/css-1/assets/plugins/jquery.min.js","../../../assets/css-1/assets/plugins/bootstrap/js/bootstrap.min.js","../../../assets/css-1/assets/corporate/scripts/layout.js"]).then(()=>{})}loadContentResources(){this.loadCss(["https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css","https://fonts.googleapis.com","https://fonts.gstatic.com","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css","https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css","https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&amp;display=swap","https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css","../../../assets/style.scss"]),this.loadJs(["https://code.jquery.com/jquery-3.5.1.slim.min.js","https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js","https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js","https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.js","https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js","https://code.jquery.com/jquery-3.5.1.min.js","https://cdnjs.cloudflare.com/ajax/libs/wow.js/1.1.2/wow.min.js"]).then(()=>{})}loadCss(t){t.forEach(s=>{let r=this.renderer.createElement("link");r.rel="stylesheet",r.href=s,this.renderer.appendChild(document.head,r)})}loadJs(t){return new Promise(s=>{let r=t.map(l=>new Promise(g=>{let v=this.renderer.createElement("script");v.src=l,v.onload=()=>g(),this.renderer.appendChild(document.head,v)}));Promise.all(r).then(()=>s())})}removeResources(){document.querySelectorAll('link[rel="stylesheet"]').forEach(r=>{let l=r.href;(l.includes("bootstrap")||l.includes("font-awesome")||l.includes("cdn.jsdelivr")||l.includes("cdnjs"))&&r.remove()}),document.querySelectorAll("script").forEach(r=>{let l=r.src;(l.includes("jquery")||l.includes("cdn.jsdelivr")||l.includes("cdnjs"))&&r.remove()})}};e.\u0275fac=function(s){return new(s||e)(w(_),w(S))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function It(o,e){o&1&&d(0,"customer-header")}function Mt(o,e){o&1&&d(0,"customer-header")}function Et(o,e){o&1&&d(0,"admin-header")}function _t(o,e){if(o&1&&(a(0,"div"),f(1,It,1,0,"customer-header",0)(2,Mt,1,0,"customer-header",0)(3,Et,1,0,"admin-header",0),n()),o&2){let i=Z();p(),m("ngIf",!i.isCustomerLoggedIn&&!i.isAdminLoggedIn),p(),m("ngIf",i.isCustomerLoggedIn),p(),m("ngIf",i.isAdminLoggedIn)}}function Pt(o,e){o&1&&(a(0,"div"),d(1,"content-navbar")(2,"content-header"),n())}function xt(o,e){o&1&&d(0,"customer-footer")}function Ft(o,e){o&1&&d(0,"customer-footer")}function At(o,e){o&1&&d(0,"admin-footer")}function kt(o,e){if(o&1&&(a(0,"div"),f(1,xt,1,0,"customer-footer",0)(2,Ft,1,0,"customer-footer",0)(3,At,1,0,"admin-footer",0),n()),o&2){let i=Z();p(),m("ngIf",!i.isCustomerLoggedIn&&!i.isAdminLoggedIn),p(),m("ngIf",i.isCustomerLoggedIn),p(),m("ngIf",i.isAdminLoggedIn)}}function Lt(o,e){o&1&&(a(0,"div"),d(1,"content-footer"),n())}var rt=(()=>{let e=class e{constructor(t,s,r,l){this.router=t,this.toastr=s,this.renderer=r,this.dynamicLoader=l,this.isCustomerLoggedIn=h.isCustomerLoggedIn(),this.isAdminLoggedIn=h.isAdminLoggedIn(),this.isHomePage=!1,this.isContentPage=!1}ngOnInit(){this.router.events.subscribe(t=>{if(t instanceof R){let s=t.urlAfterRedirects;console.log("Navigated to:",s),this.isHomePage=s==="/",this.isContentPage=this.checkIfContentPage(s),this.isCustomerLoggedIn=h.isCustomerLoggedIn(),this.isAdminLoggedIn=h.isAdminLoggedIn(),console.log("Is Home Page:",this.isHomePage),console.log("Is Content Page:",this.isContentPage),console.log("Is Customer Logged In:",this.isCustomerLoggedIn),console.log("Is Admin Logged In:",this.isAdminLoggedIn)}})}checkIfContentPage(t){return["/content/site-cultural","/","/content/cultural","/content/art-heritage","/content/site-cultural#Khajuraho","/content/site-cultural#Tanjore","/content/site-cultural#Ruins_of_Hampi","/content/about","/content/cultural#Kuchipudi","/site-cultural#Tirupati","/content/site-cultural#Sanchi_Stupa","/content/site-cultural#Somnath","/content/site-cultural#Tirupati","/content/site-cultural#Tajmahal","/content/cultural#Odissy","/content/cultural#Kathak","/content/cultural#Naga","/content/cultural#Kuttiyam","/content/cultural#Kathakali","/content/cultural#Kalaripayattu","/content/cultural#Ghoomer","/content/cultural#FolkPunjabi","/content/cultural#Mohiniattyam","/content/cultural#Manipuri","/content/cultural#DesertFestival","/content/art-heritage#Painting","/content/art-heritage#Texttiles","/content/art-heritage#Sculpture","/content/art-heritage#Pottery","/content/art-heritage#Jewelry","/content/art-heritage#WoodenCrafts","/content/jewllery","/content/ajanta","/content/north-east","/content/forts","/content/walkthrough","/content/historic"].includes(t)}};e.\u0275fac=function(s){return new(s||e)(u(S),u(j),u(P),u(W))},e.\u0275cmp=E({type:e,selectors:[["app-root"]],decls:5,vars:4,consts:[[4,"ngIf"]],template:function(s,r){s&1&&(f(0,_t,4,3,"div",0)(1,Pt,3,0,"div",0),d(2,"router-outlet"),f(3,kt,4,3,"div",0)(4,Lt,2,0,"div",0)),s&2&&(m("ngIf",!r.isHomePage&&!r.isContentPage),p(),m("ngIf",r.isContentPage),p(2),m("ngIf",!r.isHomePage&&!r.isContentPage),p(),m("ngIf",r.isContentPage))},dependencies:[x,fe,He,Ve,De,Be,ze,We,Ze]});let o=e;return o})();var Rt="@",Tt=(()=>{let e=class e{constructor(t,s,r,l,g){this.doc=t,this.delegate=s,this.zone=r,this.animationType=l,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=M(ne,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-KHW47NFO.js")).catch(s=>{throw new se(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:r})=>{this._engine=s(this.animationType,this.doc,this.scheduler);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,s){let r=this.delegate.createRenderer(t,s);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let l=new Y(r);return s?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let v=g.createRenderer(t,s);l.use(v)}).catch(g=>{l.use(r)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(s){ie()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let o=e;return o})(),Y=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,t,s){this.delegate.insertBefore(e,i,t,s)}removeChild(e,i,t){this.delegate.removeChild(e,i,t)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,t,s){this.delegate.setAttribute(e,i,t,s)}removeAttribute(e,i,t){this.delegate.removeAttribute(e,i,t)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,t,s){this.delegate.setStyle(e,i,t,s)}removeStyle(e,i,t){this.delegate.removeStyle(e,i,t)}setProperty(e,i,t){this.shouldReplay(i)&&this.replay.push(s=>s.setProperty(e,i,t)),this.delegate.setProperty(e,i,t)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,t){return this.shouldReplay(i)&&this.replay.push(s=>s.listen(e,i,t)),this.delegate.listen(e,i,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Rt)}};function it(o="animations"){return ae("NgAsyncAnimations"),oe([{provide:_,useFactory:(e,i,t)=>new Tt(e,i,t,o),deps:[ce,ue,le]},{provide:re,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var nt=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=k({type:e,bootstrap:[rt]}),e.\u0275inj=A({providers:[it(),[W]],imports:[ge,ot,de,ve,Se,Oe,$e,we.forRoot({timeOut:3e3,positionClass:"toast-top-right",newestOnTop:!1,preventDuplicates:!0,closeButton:!0,progressBar:!0}),Ue,Ge,Ke]});let o=e;return o})();he().bootstrapModule(nt).catch(o=>console.error(o));
