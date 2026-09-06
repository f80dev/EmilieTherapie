import{a as Ln,b as Bn}from"./chunk-VURE2A75.js";import{A as _i,B as vt,C as fi,D as bi,E as vi,a as Zn,b as Jn,c as ei,f as ti,g as ni,h as ii,i as ai,k as oi,l as ri,m as si,n as _t,o as ft,q as ci,r as li,s as di,t as mi,u as pi,v as bt,w as hi,x as ui,y as gi}from"./chunk-PTL6MJZR.js";import{a as yi,c as Ci,d as yt,f as ot,j as Ht,l as ki,m as Yt,n as qt,o as jt,p as xt,q as Mi,r as wi}from"./chunk-BB2JBKAL.js";import{a as Ai}from"./chunk-NEIOBOEO.js";import{a as kt,b as Di,c as Oi,d as Ei,e as Si,f as Pi}from"./chunk-KEQAGVPV.js";import{a as Ct,e as zt,f as xi}from"./chunk-US24ASOA.js";import{a as $n,b as Xn}from"./chunk-HJUTIZYW.js";import{A as ae,B as jn,C as Gn,D as U,E as Kn,F as Bt,G as Wn,I as G,K as Nt,L as Qn,M as Ge,N as Un,O as le,P as it,Q as Ke,R as at,S as gt,a as ut,e as Fn,f as Vn,i as ie,j as W,k as Lt,m as je,n as Nn,o as Q,p as Oe,s as zn,x as Hn,y as Yn,z as qn}from"./chunk-XRJGO5NH.js";import{d as Rn}from"./chunk-7QHS2PXQ.js";import{h as An,i as In,m as Tn}from"./chunk-OIANLZVG.js";import{$b as ne,Ab as u,Bb as s,Ca as kn,Cb as r,Db as p,E as It,Eb as V,Fb as B,Gb as pt,Hb as ee,Ib as K,Jb as h,Kb as ht,Lb as g,Mb as N,N as se,Nb as S,O as Je,Ob as ve,P as F,Pb as L,Qb as v,Rb as y,Sa as Rt,Ta as Mn,U as ze,V as ke,Va as m,Vb as Ye,W as z,Wb as qe,Xb as x,Y as w,Yb as te,Z as Cn,Zb as o,_ as d,_a as He,_b as Y,a as Pe,ac as Ae,b as vn,bb as Me,bc as Ie,cc as Te,da as A,db as wn,dc as Re,ea as I,eb as Ft,ec as ce,f as Ze,fa as me,fc as En,ga as et,ha as fe,i as T,ia as tt,ib as k,ic as Sn,jb as H,kb as he,la as b,ma as be,mb as Vt,mc as we,n as dt,nb as nt,nc as Pn,pb as Dn,qa as _,r as At,sc as P,ua as pe,ub as M,uc as C,va as Tt,vb as D,vc as De,w as yn,wb as O,xa as R,xb as On,y as de,ya as xn,yb as ue,z as mt,zb as ge}from"./chunk-PZ4HKJWI.js";var ya=["mat-internal-form-field",""],Ca=["*"],Ii=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&x("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ya,ngContentSelectors:Ca,decls:1,vars:0,template:function(t,n){t&1&&(N(),S(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var xa=["input"],ka=["label"],Ma=["*"],Gt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},wa=new w("mat-checkbox-default-options",{providedIn:"root",factory:()=>Gt}),q=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(q||{}),Kt=class{source;checked},Wt=(()=>{class i{_elementRef=d(R);_changeDetectorRef=d(P);_ngZone=d(be);_animationsDisabled=G();_options=d(wa,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Kt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new b;indeterminateChange=new b;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=q.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(Q).load(le);let e=d(new we("tabindex"),{optional:!0});this._options=this._options||Gt,this.color=this._options.color||Gt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(U).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(q.Indeterminate):this._transitionCheckState(this.checked?q.Checked:q.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=_(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?q.Checked:q.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case q.Init:if(t===q.Checked)return this._animationClasses.uncheckedToChecked;if(t==q.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case q.Unchecked:return t===q.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case q.Checked:return t===q.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case q.Indeterminate:return t===q.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&L(xa,5)(ka,5),t&2){let a;v(a=y())&&(n._inputElement=a.first),v(a=y())&&(n._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(K("id",n.id),M("tabindex",null)("aria-label",null)("aria-labelledby",null),te(n.color?"mat-"+n.color:"mat-accent"),x("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",C],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",C],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:De(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],indeterminate:[2,"indeterminate","indeterminate",C]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ce([{provide:ft,useExisting:ze(()=>i),multi:!0},{provide:ci,useExisting:i,multi:!0}]),pe],ngContentSelectors:Ma,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(N(),s(0,"div",3),h("click",function(l){return n._preventBubblingFromLabel(l)}),s(1,"div",4,0)(3,"div",5),h("click",function(){return n._onTouchTargetClick()}),r(),s(4,"input",6,1),h("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(l){return n._onInteractionEvent(l)}),r(),p(6,"div",7),s(7,"div",8),me(),s(8,"svg",9),p(9,"path",10),r(),et(),p(10,"div",11),r(),p(11,"div",12),r(),s(12,"label",13,2),S(14),r()()),t&2){let a=Ye(2);u("labelPosition",n.labelPosition),m(4),x("mdc-checkbox--selected",n.checked),u("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),M("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),m(7),u("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),m(),u("for",n.inputId)}},dependencies:[Ge,Ii],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),Ti=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Wt,W]})}return i})();var Qt=new w("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>d(Sn)}),We="Method not implemented",X=class{locale;_localeChanges=new T;localeChanges=this._localeChanges;setTime(c,e,t,n){throw new Error(We)}getHours(c){throw new Error(We)}getMinutes(c){throw new Error(We)}getSeconds(c){throw new Error(We)}parseTime(c,e){throw new Error(We)}addSeconds(c,e){throw new Error(We)}getValidDateOrNull(c){return this.isDateInstance(c)&&this.isValid(c)?c:null}deserialize(c){return c==null||this.isDateInstance(c)&&this.isValid(c)?c:this.invalid()}setLocale(c){this.locale=c,this._localeChanges.next()}compareDate(c,e){return this.getYear(c)-this.getYear(e)||this.getMonth(c)-this.getMonth(e)||this.getDate(c)-this.getDate(e)}compareTime(c,e){return this.getHours(c)-this.getHours(e)||this.getMinutes(c)-this.getMinutes(e)||this.getSeconds(c)-this.getSeconds(e)}sameDate(c,e){if(c&&e){let t=this.isValid(c),n=this.isValid(e);return t&&n?!this.compareDate(c,e):t==n}return c==e}sameTime(c,e){if(c&&e){let t=this.isValid(c),n=this.isValid(e);return t&&n?!this.compareTime(c,e):t==n}return c==e}clampDate(c,e,t){return e&&this.compareDate(c,e)<0?e:t&&this.compareDate(c,t)>0?t:c}},Fe=new w("mat-date-formats");var Oa=["tooltip"],Ea=20;var Sa=new w("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(fe);return()=>ot(i,{scrollThrottle:Ea})}}),Pa=new w("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ri="tooltip-panel",Aa={passive:!0},Ia=8,Ta=8,Ra=24,Fa=200,Fi=(()=>{class i{_elementRef=d(R);_ngZone=d(be);_platform=d(ut);_ariaDescriber=d(Wn);_focusMonitor=d(je);_dir=d(ie);_injector=d(fe);_viewContainerRef=d(Ft);_mediaMatcher=d(zn);_document=d(tt);_renderer=d(Me);_animationsDisabled=G();_defaultOptions=d(Pa,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Va;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Nt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Nt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Lt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Lt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ia}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(F(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new Ct(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=n.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(F(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let l=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&l._origin instanceof R)return this._overlayRef;this._detach()}let t=this._injector.get(yi).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Ri}`,a=Ht(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(F(this._destroyed)).subscribe(l=>{this._updateCurrentPositionClass(l.connectionPair),this._tooltipInstance&&l.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Yt(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Sa)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(F(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(F(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(F(this._destroyed)).subscribe(l=>{l.preventDefault(),l.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(F(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(Pe(Pe({},n.main),a.main)),this._addOffset(Pe(Pe({},n.fallback),a.fallback))])}_addOffset(e){let t=Ta,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:a,y:l}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:a,originY:l}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:a,y:l}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:a,overlayY:l}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),He(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:a}=e,l;if(t==="center"?this._dir&&this._dir.value==="rtl"?l=n==="end"?"left":"right":l=n==="start"?"left":"right":l=t==="bottom"&&a==="top"?"above":"below",l!==this._currentPosition){let f=this._overlayRef;if(f){let E=`${this._cssClassPrefix}-${Ri}-`;f.removePanelClass(E+this._currentPosition),f.addPanelClass(E+l)}this._currentPosition=l}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Aa))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||He({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ae(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=he({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&x("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Va=(()=>{class i{_changeDetectorRef=d(P);_elementRef=d(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=G();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ra&&e.width>=Fa}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:n),t.classList.add(e?n:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let l=getComputedStyle(t);(l.getPropertyValue("animation-duration")==="0s"||l.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&L(Oa,7),t&2){let a;v(a=y())&&(n._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&h("mouseleave",function(l){return n._handleMouseLeave(l)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(V(0,"div",1,0),ht("animationend",function(l){return n._handleAnimationEnd(l)}),V(2,"div",2),o(3),B()()),t&2&&(te(n.tooltipClass),x("mdc-tooltip--multiline",n._isMultiline),m(3),Y(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ba=["mat-calendar-body",""];function Na(i,c){return this._trackRow(c)}var Hi=(i,c)=>c.id;function za(i,c){if(i&1&&(V(0,"tr",0)(1,"td",3),o(2),B()()),i&2){let e=g();m(),qe("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),M("colspan",e.numCols),m(),ne(" ",e.label," ")}}function Ha(i,c){if(i&1&&(V(0,"td",3),o(1),B()),i&2){let e=g(2);qe("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),M("colspan",e._firstRowOffset),m(),ne(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Ya(i,c){if(i&1){let e=ee();V(0,"td",6)(1,"button",7),ht("click",function(n){let a=A(e).$implicit,l=g(2);return I(l._cellClicked(a,n))})("focus",function(n){let a=A(e).$implicit,l=g(2);return I(l._emitActiveDateChange(a,n))}),V(2,"span",8),o(3),B(),pt(4,"span",9),B()()}if(i&2){let e=c.$implicit,t=c.$index,n=g().$index,a=g();qe("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),M("data-mat-row",n)("data-mat-col",t),m(),te(e.cssClasses),x("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(n,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,n,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,n,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),K("tabIndex",a._isActiveCell(n,t)?0:-1),M("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),m(),x("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),m(),ne(" ",e.displayValue," ")}}function qa(i,c){if(i&1&&(V(0,"tr",1),D(1,Ha,2,6,"td",4),ue(2,Ya,5,49,"td",5,Hi),B()),i&2){let e=c.$implicit,t=c.$index,n=g();m(),O(t===0&&n._firstRowOffset?1:-1),m(),ge(e)}}function ja(i,c){if(i&1&&(s(0,"th",2)(1,"span",6),o(2),r(),s(3,"span",3),o(4),r()()),i&2){let e=c.$implicit;m(2),Y(e.long),m(2),Y(e.narrow)}}var Ga=["*"];function Ka(i,c){}function Wa(i,c){if(i&1){let e=ee();s(0,"mat-month-view",4),Re("activeDateChange",function(n){A(e);let a=g();return Te(a.activeDate,n)||(a.activeDate=n),I(n)}),h("_userSelection",function(n){A(e);let a=g();return I(a._dateSelected(n))})("dragStarted",function(n){A(e);let a=g();return I(a._dragStarted(n))})("dragEnded",function(n){A(e);let a=g();return I(a._dragEnded(n))}),r()}if(i&2){let e=g();Ie("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Qa(i,c){if(i&1){let e=ee();s(0,"mat-year-view",5),Re("activeDateChange",function(n){A(e);let a=g();return Te(a.activeDate,n)||(a.activeDate=n),I(n)}),h("monthSelected",function(n){A(e);let a=g();return I(a._monthSelectedInYearView(n))})("selectedChange",function(n){A(e);let a=g();return I(a._goToDateInView(n,"month"))}),r()}if(i&2){let e=g();Ie("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Ua(i,c){if(i&1){let e=ee();s(0,"mat-multi-year-view",6),Re("activeDateChange",function(n){A(e);let a=g();return Te(a.activeDate,n)||(a.activeDate=n),I(n)}),h("yearSelected",function(n){A(e);let a=g();return I(a._yearSelectedInMultiYearView(n))})("selectedChange",function(n){A(e);let a=g();return I(a._goToDateInView(n,"year"))}),r()}if(i&2){let e=g();Ie("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function $a(i,c){}var Xa=["button"],Za=[[["","matDatepickerToggleIcon",""]]],Ja=["[matDatepickerToggleIcon]"];function eo(i,c){i&1&&(me(),s(0,"svg",2),p(1,"path",3),r())}var Ue=(()=>{class i{changes=new T;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),to=0,ct=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=to++;cssClasses;constructor(c,e,t,n,a,l=c,f){this.value=c,this.displayValue=e,this.ariaLabel=t,this.enabled=n,this.compareValue=l,this.rawValue=f,this.cssClasses=a instanceof Set?Array.from(a):a}},no={passive:!1,capture:!0},Mt={passive:!0,capture:!0},Vi={passive:!0},Qe=(()=>{class i{_elementRef=d(R);_ngZone=d(be);_platform=d(ut);_intl=d(Ue);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new b;previewChange=new b;activeDateChange=new b;dragStarted=new b;dragEnded=new b;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(fe);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(Me),t=d(U);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),d(Q).load(le),this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,a=[e.listen(n,"touchmove",this._touchmoveHandler,no),e.listen(n,"mouseenter",this._enterHandler,Mt),e.listen(n,"focus",this._enterHandler,Mt),e.listen(n,"mouseleave",this._leaveHandler,Mt),e.listen(n,"blur",this._leaveHandler,Mt),e.listen(n,"mousedown",this._mousedownHandler,Vi),e.listen(n,"touchstart",this._mousedownHandler,Vi)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?a-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=!0){He(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Xt(e,this.startValue,this.endValue)}_isRangeEnd(e){return Zt(e,this.startValue,this.endValue)}_isInRange(e){return Jt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Xt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][n-1];if(!a){let l=this.rows[t-1];a=l&&l[l.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][n+1];if(!a){let l=this.rows[t+1];a=l&&l[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return Zt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Jt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Xt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Zt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Jt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Li(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),$t(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=$t(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Li(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=$t(e);if(t){let n=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(n&&a)return this.rows[parseInt(n)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[pe],attrs:Ba,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,n){t&1&&(D(0,za,3,6,"tr",0),ue(1,qa,4,1,"tr",1,Na,!0),V(3,"span",2),o(4),B(),V(5,"span",2),o(6),B(),V(7,"span",2),o(8),B(),V(9,"span",2),o(10),B()),t&2&&(O(n._firstRowOffset<n.labelMinRequiredCells?0:-1),m(),ge(n.rows),m(2),K("id",n._startDateLabelId),m(),ne(" ",n.startDateAccessibleName,`
`),m(),K("id",n._endDateLabelId),m(),ne(" ",n.endDateAccessibleName,`
`),m(),K("id",n._comparisonStartDateLabelId),m(),Ae(" ",n.comparisonDateAccessibleName," ",n.startDateAccessibleName,`
`),m(),K("id",n._comparisonEndDateLabelId),m(),Ae(" ",n.comparisonDateAccessibleName," ",n.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Ut(i){return i?.nodeName==="TD"}function $t(i){let c;return Ut(i)?c=i:Ut(i.parentNode)?c=i.parentNode:Ut(i.parentNode?.parentNode)&&(c=i.parentNode.parentNode),c?.getAttribute("data-mat-row")!=null?c:null}function Xt(i,c,e){return e!==null&&c!==e&&i<e&&i===c}function Zt(i,c,e){return c!==null&&c!==e&&i>=c&&i===e}function Jt(i,c,e,t){return t&&c!==null&&e!==null&&c!==e&&i>=c&&i<=e}function Li(i){let c=i.changedTouches[0];return document.elementFromPoint(c.clientX,c.clientY)}var oe=class{start;end;_disableStructuralEquivalency;constructor(c,e){this.start=c,this.end=e}},wt=(()=>{class i{selection;_adapter;_selectionChanged=new T;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){wn()};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),io=(()=>{class i extends wt{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(Cn(X))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();var ao={provide:wt,useFactory:()=>d(wt,{optional:!0,skipSelf:!0})||new io(d(X))};var Yi=new w("MAT_DATE_RANGE_SELECTION_STRATEGY");var en=7,oo=0,Bi=(()=>{class i{_changeDetectorRef=d(P);_dateFormats=d(Fe,{optional:!0});_dateAdapter=d(X,{optional:!0});_dir=d(ie,{optional:!0});_rangeStrategy=d(Yi,{optional:!0});_rerenderSubscription=Ze.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof oe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new b;_userSelection=new b;dragStarted=new b;dragEnded=new b;activeDateChange=new b;_matCalendarBody;_monthLabel=_("");_weeks=_([]);_firstWeekOffset=_(0);_rangeStart=_(null);_rangeEnd=_(null);_comparisonRangeStart=_(null);_comparisonRangeEnd=_(null);_previewStart=_(null);_previewEnd=_(null);_isRange=_(!1);_todayDate=_(null);_weekdays=_([]);constructor(){d(Q).load(Oe),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(se(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),a,l;this._selected instanceof oe?(a=this._getDateInCurrentMonth(this._selected.start),l=this._getDateInCurrentMonth(this._selected.end)):a=l=this._getDateInCurrentMonth(this._selected),(a!==t||l!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ae(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((en+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%en),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,a=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&n){let l=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);l&&(this._previewStart.set(this._getCellCompareValue(l.start)),this._previewEnd.set(this._getCellCompareValue(l.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((l,f)=>({long:l,narrow:t[f],id:oo++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let a=0,l=this._firstWeekOffset();a<e;a++,l++){l==en&&(n.push([]),l=0);let f=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),E=this._shouldEnableDate(f),_e=this._dateAdapter.format(f,this._dateFormats.display.dateA11yLabel),Be=this.dateClass?this.dateClass(f,"month"):void 0;n[n.length-1].push(new ct(a+1,t[a],_e,E,Be,this._getCellCompareValue(f),f))}this._weeks.set(n)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,n,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof oe?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,n){if(t&1&&L(Qe,5),t&2){let a;v(a=y())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[pe],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,n){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),ue(3,ja,5,2,"th",2,Hi),r(),s(5,"tr",3),p(6,"th",4),r()(),s(7,"tbody",5),h("selectedValueChange",function(l){return n._dateSelected(l)})("activeDateChange",function(l){return n._updateActiveDate(l)})("previewChange",function(l){return n._previewChanged(l)})("dragStarted",function(l){return n.dragStarted.emit(l)})("dragEnded",function(l){return n._dragEnded(l)})("keyup",function(l){return n._handleCalendarBodyKeyup(l)})("keydown",function(l){return n._handleCalendarBodyKeydown(l)}),r()()),t&2&&(m(3),ge(n._weekdays()),m(4),u("label",n._monthLabel())("rows",n._weeks())("todayValue",n._todayDate())("startValue",n._rangeStart())("endValue",n._rangeEnd())("comparisonStart",n._comparisonRangeStart())("comparisonEnd",n._comparisonRangeEnd())("previewStart",n._previewStart())("previewEnd",n._previewEnd())("isRange",n._isRange())("labelMinRequiredCells",3)("activeCell",n._dateAdapter.getDate(n.activeDate)-1)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName))},dependencies:[Qe],encapsulation:2,changeDetection:0})}return i})(),J=24,tn=4,Ni=(()=>{class i{_changeDetectorRef=d(P);_dateAdapter=d(X,{optional:!0});_dir=d(ie,{optional:!0});_rerenderSubscription=Ze.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),qi(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof oe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;yearSelected=new b;activeDateChange=new b;_matCalendarBody;_years=_([]);_todayYear=_(0);_selectedYear=_(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(se(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-st(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),n=[];for(let a=0,l=[];a<J;a++)l.push(t+a),l.length==tn&&(n.push(l.map(f=>this._createCellForYear(f))),l=[]);this._years.set(n),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-tn);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,tn);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-st(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,J-st(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-J*10:-J);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?J*10:J);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return st(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new ct(e,n,n,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof oe){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,n){if(t&1&&L(Qe,5),t&2){let a;v(a=y())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),p(3,"th",2),r()(),s(4,"tbody",3),h("selectedValueChange",function(l){return n._yearSelected(l)})("activeDateChange",function(l){return n._updateActiveDate(l)})("keyup",function(l){return n._handleCalendarBodyKeyup(l)})("keydown",function(l){return n._handleCalendarBodyKeydown(l)}),r()()),t&2&&(m(4),u("rows",n._years())("todayValue",n._todayYear())("startValue",n._selectedYear())("endValue",n._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",n._getActiveCell()))},dependencies:[Qe],encapsulation:2,changeDetection:0})}return i})();function qi(i,c,e,t,n){let a=i.getYear(c),l=i.getYear(e),f=ji(i,t,n);return Math.floor((a-f)/J)===Math.floor((l-f)/J)}function st(i,c,e,t){let n=i.getYear(c);return ro(n-ji(i,e,t),J)}function ji(i,c,e){let t=0;return e?t=i.getYear(e)-J+1:c&&(t=i.getYear(c)),t}function ro(i,c){return(i%c+c)%c}var zi=(()=>{class i{_changeDetectorRef=d(P);_dateFormats=d(Fe,{optional:!0});_dateAdapter=d(X,{optional:!0});_dir=d(ie,{optional:!0});_rerenderSubscription=Ze.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof oe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;monthSelected=new b;activeDateChange=new b;_matCalendarBody;_months=_([]);_yearLabel=_("");_todayMonth=_(null);_selectedMonth=_(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(se(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(n=>this._createCellForMonth(n,e[n])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),l=this.dateClass?this.dateClass(n,"year"):void 0;return new ct(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),l)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(t,e,1);for(let a=n;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof oe?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,n){if(t&1&&L(Qe,5),t&2){let a;v(a=y())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),p(3,"th",2),r()(),s(4,"tbody",3),h("selectedValueChange",function(l){return n._monthSelected(l)})("activeDateChange",function(l){return n._updateActiveDate(l)})("keyup",function(l){return n._handleCalendarBodyKeyup(l)})("keydown",function(l){return n._handleCalendarBodyKeydown(l)}),r()()),t&2&&(m(4),u("label",n._yearLabel())("rows",n._months())("todayValue",n._todayMonth())("startValue",n._selectedMonth())("endValue",n._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",n._dateAdapter.getMonth(n.activeDate)))},dependencies:[Qe],encapsulation:2,changeDetection:0})}return i})(),Gi=(()=>{class i{_intl=d(Ue);calendar=d(lt);_dateAdapter=d(X,{optional:!0});_dateFormats=d(Fe,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(Q).load(Oe);let e=d(P);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-J))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:J))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):qi(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-st(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),n=t+J-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),l=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1));return[a,l]}_periodButtonLabelId=d(U).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Ga,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,n){t&1&&(N(),s(0,"div",0)(1,"div",1)(2,"span",2),o(3),r(),s(4,"button",3),h("click",function(){return n.currentPeriodClicked()}),s(5,"span",4),o(6),r(),me(),s(7,"svg",5),p(8,"polygon",6),r()(),et(),p(9,"div",7),S(10),s(11,"button",8),h("click",function(){return n.previousClicked()}),me(),s(12,"svg",9),p(13,"path",10),r()(),et(),s(14,"button",11),h("click",function(){return n.nextClicked()}),me(),s(15,"svg",9),p(16,"path",12),r()()()()),t&2&&(m(2),u("id",n._periodButtonLabelId),m(),Y(n.periodButtonDescription),m(),M("aria-label",n.periodButtonLabel)("aria-describedby",n._periodButtonLabelId),m(2),Y(n.periodButtonText),m(),x("mat-calendar-invert",n.calendar.currentView!=="month"),m(4),u("disabled",!n.previousEnabled())("matTooltip",n.prevButtonLabel),M("aria-label",n.prevButtonLabel),m(3),u("disabled",!n.nextEnabled())("matTooltip",n.nextButtonLabel),M("aria-label",n.nextButtonLabel))},dependencies:[at,it,Fi],encapsulation:2,changeDetection:0})}return i})(),lt=(()=>{class i{_dateAdapter=d(X,{optional:!0});_dateFormats=d(Fe,{optional:!0});_changeDetectorRef=d(P);_elementRef=d(R);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof oe?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new b;yearSelected=new b;monthSelected=new b;viewChanged=new b(!0);_userSelection=new b;_userDragDrop=new b;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new T;constructor(){this._intlChanges=d(Ue).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ct(this.headerComponent||Gi),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||n||e.dateFilter;if(a&&!a.firstChange){let l=this._getCurrentViewComponent();l&&(this._elementRef.nativeElement.contains(Fn())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),l._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof oe||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,n){if(t&1&&L(Bi,5)(zi,5)(Ni,5),t&2){let a;v(a=y())&&(n.monthView=a.first),v(a=y())&&(n.yearView=a.first),v(a=y())&&(n.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ce([ao]),pe],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,n){if(t&1&&(nt(0,Ka,0,0,"ng-template",0),s(1,"div",1),D(2,Wa,1,11,"mat-month-view",2)(3,Qa,1,6,"mat-year-view",3)(4,Ua,1,6,"mat-multi-year-view",3),r()),t&2){let a;u("cdkPortalOutlet",n._calendarHeaderPortal),m(2),O((a=n.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[zt,Nn,Bi,zi,Ni],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();var so=(()=>{class i{_elementRef=d(R);_animationsDisabled=G();_changeDetectorRef=d(P);_globalModel=d(wt);_dateAdapter=d(X);_ngZone=d(be);_rangeSelectionStrategy=d(Yi,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new T;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(Q).load(Oe),this._closeButtonText=d(Ue).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=d(Me);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,n=e.value,a=t instanceof oe;if(a&&this._rangeSelectionStrategy){let l=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(l,this)}else n&&(a||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,n){if(t&1&&L(lt,5),t&2){let a;v(a=y())&&(n._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,n){t&2&&(te(n.color?"mat-"+n.color:""),x("mat-datepicker-content-touch",n.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!n._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"mat-calendar",1),h("yearSelected",function(l){return n.datepicker._selectYear(l)})("monthSelected",function(l){return n.datepicker._selectMonth(l)})("viewChanged",function(l){return n.datepicker._viewChanged(l)})("_userSelection",function(l){return n._handleUserSelection(l)})("_userDragDrop",function(l){return n._handleUserDragDrop(l)}),r(),nt(2,$a,0,0,"ng-template",2),s(3,"button",3),h("focus",function(){return n._closeButtonFocused=!0})("blur",function(){return n._closeButtonFocused=!1})("click",function(){return n.datepicker.close()}),o(4),r()()),t&2&&(x("mat-datepicker-content-container-with-custom-header",n.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",n._actionsPortal),M("aria-modal",!0)("aria-labelledby",n._dialogLabelId??void 0),m(),te(n.datepicker.panelClass),u("id",n.datepicker.id)("startAt",n.datepicker.startAt)("startView",n.datepicker.startView)("minDate",n.datepicker._getMinDate())("maxDate",n.datepicker._getMaxDate())("dateFilter",n.datepicker._getDateFilter())("headerComponent",n.datepicker.calendarHeaderComponent)("selected",n._getSelected())("dateClass",n.datepicker.dateClass)("comparisonStart",n.comparisonStart)("comparisonEnd",n.comparisonEnd)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName),m(),u("cdkPortalOutlet",n._actionsPortal),m(),x("cdk-visually-hidden",!n._closeButtonFocused),u("color",n.color||"primary"),m(),Y(n._closeButtonText))},dependencies:[Hn,lt,zt,at],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var co=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=he({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),lo=(()=>{class i{_intl=d(Ue);_changeDetectorRef=d(P);_stateChanges=Ze.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new we("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:dt(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:dt(),n=this.datepicker?de(this.datepicker.openedStream,this.datepicker.closedStream):dt();this._stateChanges.unsubscribe(),this._stateChanges=de(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,n,a){if(t&1&&ve(a,co,5),t&2){let l;v(l=y())&&(n._customIcon=l.first)}},viewQuery:function(t,n){if(t&1&&L(Xa,5),t&2){let a;v(a=y())&&(n._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,n){t&1&&h("click",function(l){return n._open(l)}),t&2&&(M("tabindex",null)("data-mat-calendar",n.datepicker?n.datepicker.id:null),x("mat-datepicker-toggle-active",n.datepicker&&n.datepicker.opened)("mat-accent",n.datepicker&&n.datepicker.color==="accent")("mat-warn",n.datepicker&&n.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",C],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[pe],ngContentSelectors:Ja,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,n){t&1&&(N(Za),s(0,"button",1,0),D(2,eo,2,0,":svg:svg",2),S(3),r()),t&2&&(u("tabIndex",n.disabled?-1:n.tabIndex)("disabled",n.disabled)("disableRipple",n.disableRipple),M("aria-haspopup",n.datepicker?"dialog":null)("aria-label",n.ariaLabel||n._intl.openCalendarLabel)("aria-expanded",n.datepicker?n.datepicker.opened:null),m(2),O(n._customIcon?-1:2))},dependencies:[it],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ki=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[Ue],imports:[gt,xt,qn,xi,so,lo,Gi,W,yt]})}return i})();var Dt=(()=>{class i{_animationsDisabled=G();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&x("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var po=["text"],ho=[[["mat-icon"]],"*"],uo=["mat-icon","*"];function go(i,c){if(i&1&&p(0,"mat-pseudo-checkbox",1),i&2){let e=g();u("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function _o(i,c){if(i&1&&p(0,"mat-pseudo-checkbox",3),i&2){let e=g();u("disabled",e.disabled)}}function fo(i,c){if(i&1&&(s(0,"span",4),o(1),r()),i&2){let e=g();m(),ne("(",e.group.label,")")}}var cn=new w("MAT_OPTION_PARENT_COMPONENT"),ln=new w("MatOptgroup");var sn=class{source;isUserInput;constructor(c,e=!1){this.source=c,this.isUserInput=e}},$e=(()=>{class i{_element=d(R);_changeDetectorRef=d(P);_parent=d(cn,{optional:!0});group=d(ln,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(U).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=_(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new b;_text;_stateChanges=new T;constructor(){let e=d(Q);e.load(le),e.load(Oe),this._signalDisableRipple=!!this._parent&&Dn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ae(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new sn(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&L(po,7),t&2){let a;v(a=y())&&(n._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&h("click",function(){return n._selectViaInteraction()})("keydown",function(l){return n._handleKeydown(l)}),t&2&&(K("id",n.id),M("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),x("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",C]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:uo,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(N(ho),D(0,go,1,2,"mat-pseudo-checkbox",1),S(1),s(2,"span",2,0),S(4,1),r(),D(5,_o,1,1,"mat-pseudo-checkbox",3),D(6,fo,2,1,"span",4),p(7,"div",5)),t&2&&(O(n.multiple?0:-1),m(5),O(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),m(),O(n.group&&n.group._inert?6:-1),m(),u("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Dt,Ge],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Wi(i,c,e){if(e.length){let t=c.toArray(),n=e.toArray(),a=0;for(let l=0;l<i+1;l++)t[l].group&&t[l].group===n[a]&&a++;return a}return 0}function Qi(i,c,e,t){return i<e?i:i+c>e+t?Math.max(0,i-t+c):e}var Ui=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[W]})}return i})();var dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Ke,Ui,$e,W]})}return i})();var bo=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,vo=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function mn(i,c){let e=Array(i);for(let t=0;t<i;t++)e[t]=c(t);return e}var yo=(()=>{class i extends X{_matDateLocale=d(Qt,{optional:!0});constructor(){super();let e=d(Qt,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return mn(12,n=>this._format(t,new Date(2017,n,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return mn(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return mn(7,n=>this._format(t,new Date(2017,0,n+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,n){let a=this._createDateWithOverflow(e,t,n);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let n=new Intl.DateTimeFormat(this.locale,vn(Pe({},t),{timeZone:"utc"}));return this._format(n,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let n=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(n)!=((this.getMonth(e)+t)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(bo.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,n,a){let l=this.clone(e);return l.setHours(t,n,a,0),l}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let n=e.trim();if(n.length===0)return null;let a=this._parseTimeString(n);if(a===null){let l=n.replace(/[^0-9:(AM|PM)]/gi,"").trim();l.length>0&&(a=this._parseTimeString(l))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,n){let a=new Date;return a.setFullYear(e,t,n),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}_parseTimeString(e){let t=e.toUpperCase().match(vo);if(t){let n=parseInt(t[1]),a=parseInt(t[2]),l=t[3]==null?void 0:parseInt(t[3]),f=t[4];if(n===12?n=f==="AM"?0:n:f==="PM"&&(n+=12),pn(n,0,23)&&pn(a,0,59)&&(l==null||pn(l,0,59)))return this.setTime(this.today(),n,a,l||0)}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();function pn(i,c,e){return!isNaN(i)&&i>=c&&i<=e}var Co={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var $i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[xo()]})}return i})();function xo(i=Co){return[{provide:X,useClass:yo},{provide:Fe,useValue:i}]}var ko=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Mo=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function wo(i,c){i&1&&(s(0,"span",3),S(1,1),r())}function Do(i,c){i&1&&(s(0,"span",6),S(1,2),r())}var Oo=["*"];var Eo=new w("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Xi=new w("MatChipAvatar"),Zi=new w("MatChipTrailingIcon"),Ji=new w("MatChipEdit"),ea=new w("MatChipRemove"),ta=new w("MatChip"),na=(()=>{class i{_elementRef=d(R);_parentChip=d(ta);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(Q).load(le),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=he({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,n){t&2&&(M("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),x("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:De(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),So=(()=>{class i extends na{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Tt(i)))(n||i)}})();static \u0275dir=he({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,n){t&1&&h("click",function(l){return n._handleClick(l)})("keydown",function(l){return n._handleKeydown(l)}),t&2&&(M("tabindex",n._getTabindex()),x("mdc-evolution-chip__action--presentational",!1))},features:[Vt]})}return i})();var hn=(()=>{class i{_changeDetectorRef=d(P);_elementRef=d(R);_tagName=d(Pn);_ngZone=d(be);_focusMonitor=d(je);_globalRippleOptions=d(Qn,{optional:!0});_document=d(tt);_onFocus=new T;_onBlur=new T;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=G();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(U).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new b;destroyed=new b;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(Un);_injector=d(fe);constructor(){let e=d(Q);e.load(le),e.load(Oe),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=de(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,n,a){if(t&1&&ve(a,Xi,5)(a,Ji,5)(a,Zi,5)(a,ea,5)(a,Xi,5)(a,Zi,5)(a,Ji,5)(a,ea,5),t&2){let l;v(l=y())&&(n.leadingIcon=l.first),v(l=y())&&(n.editIcon=l.first),v(l=y())&&(n.trailingIcon=l.first),v(l=y())&&(n.removeIcon=l.first),v(l=y())&&(n._allLeadingIcons=l),v(l=y())&&(n._allTrailingIcons=l),v(l=y())&&(n._allEditIcons=l),v(l=y())&&(n._allRemoveIcons=l)}},viewQuery:function(t,n){if(t&1&&L(So,5),t&2){let a;v(a=y())&&(n.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,n){t&1&&h("keydown",function(l){return n._handleKeydown(l)}),t&2&&(K("id",n.id),M("role",n.role)("aria-label",n.ariaLabel),te("mat-"+(n.color||"primary")),x("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",C],highlighted:[2,"highlighted","highlighted",C],disableRipple:[2,"disableRipple","disableRipple",C],disabled:[2,"disabled","disabled",C]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ce([{provide:ta,useExisting:i}])],ngContentSelectors:Mo,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,n){t&1&&(N(ko),p(0,"span",0),s(1,"span",1)(2,"span",2),D(3,wo,2,0,"span",3),s(4,"span",4),S(5),p(6,"span",5),r()()(),D(7,Do,2,0,"span",6)),t&2&&(m(3),O(n.leadingIcon?3:-1),m(4),O(n._hasTrailingIcon()?7:-1))},dependencies:[na],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var ia=(()=>{class i{_elementRef=d(R);_changeDetectorRef=d(P);_dir=d(ie,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new T;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new xn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(se(null),Je(()=>de(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(se(this._chips)).subscribe(e=>{let t=[];e.forEach(n=>n._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Gn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(F(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(F(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(se(null),F(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(F(this._destroyed)).subscribe(e=>{let n=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),l=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),f=a||l;this._isValidIndex(n)&&f&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-chip-set"]],contentQueries:function(t,n,a){if(t&1&&ve(a,hn,5),t&2){let l;v(l=y())&&(n._chips=l)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,n){t&1&&h("keydown",function(l){return n._handleKeydown(l)}),t&2&&M("role",n.role)},inputs:{disabled:[2,"disabled","disabled",C],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)]},ngContentSelectors:Oo,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,n){t&1&&(N(),V(0,"div",0),S(1),B())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var aa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({providers:[vt,{provide:Eo,useValue:{separatorKeyCodes:[13]}}],imports:[Ke,W]})}return i})();var Ao=["button"],Io=["*"];function To(i,c){if(i&1&&(s(0,"div",2),p(1,"mat-pseudo-checkbox",6),r()),i&2){let e=g();m(),u("disabled",e.disabled)}}var oa=new w("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ra=new w("MatButtonToggleGroup"),Ro={provide:ft,useExisting:ze(()=>un),multi:!0},Ot=class{source;value;constructor(c,e){this.source=c,this.value=e}},un=(()=>{class i{_changeDetector=d(P);_dir=d(ie,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=d(U).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new b;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new b;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=d(oa,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new kt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||ae(e))return;let n=e.target.id,a=this._buttonToggles.toArray().findIndex(f=>f.buttonId===n),l=null;switch(e.keyCode){case 32:case 13:l=this._buttonToggles.get(a)||null;break;case 38:l=this._getNextButton(a,-1);break;case 37:l=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:l=this._getNextButton(a,1);break;case 39:l=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}l&&(e.preventDefault(),l._onButtonClick(),l.focus())}_emitChangeEvent(e){let t=new Ot(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let a=1;a<=n.length;a++){let l=(e+t*a+n.length)%n.length,f=n.get(l);if(f&&!f.disabled)return f}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=he({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,a){if(t&1&&ve(a,Et,5),t&2){let l;v(l=y())&&(n._buttonToggles=l)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&h("keydown",function(l){return n._keydown(l)}),t&2&&(M("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),x("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",C],value:"value",multiple:[2,"multiple","multiple",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",C]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ce([Ro,{provide:ra,useExisting:i}])]})}return i})(),Et=(()=>{class i{_changeDetectorRef=d(P);_elementRef=d(R);_focusMonitor=d(je);_idGenerator=d(U);_animationDisabled=G();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new b;constructor(){d(Q).load(le);let e=d(ra,{optional:!0}),t=d(new we("tabindex"),{optional:!0})||"",n=d(oa,{optional:!0});this._tabIndex=_(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Ot(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&L(Ao,5),t&2){let a;v(a=y())&&(n._buttonElement=a.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&h("focus",function(){return n.focus()}),t&2&&(M("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),x("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",C],appearance:"appearance",checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Io,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(N(),s(0,"button",1,0),h("click",function(){return n._onButtonClick()}),D(2,To,2,1,"div",2),s(3,"span",3),S(4),r()(),p(5,"span",4)(6,"span",5)),t&2){let a=Ye(1);u("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),M("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),m(2),O(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),m(4),u("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Ge,Dt],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),sa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[Ke,Et,W]})}return i})();var Lo=["trigger"],Bo=["panel"],No=[[["mat-select-trigger"]],"*"],zo=["mat-select-trigger","*"];function Ho(i,c){if(i&1&&(s(0,"span",4),o(1),r()),i&2){let e=g();m(),Y(e.placeholder)}}function Yo(i,c){i&1&&S(0)}function qo(i,c){if(i&1&&(s(0,"span",11),o(1),r()),i&2){let e=g(2);m(),Y(e.triggerValue)}}function jo(i,c){if(i&1&&(s(0,"span",5),D(1,Yo,1,0)(2,qo,2,1,"span",11),r()),i&2){let e=g();m(),O(e.customTrigger?1:2)}}function Go(i,c){if(i&1){let e=ee();s(0,"div",12,1),h("keydown",function(n){A(e);let a=g();return I(a._handleKeydown(n))}),S(2,1),r()}if(i&2){let e=g();te(e.panelClass),x("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),M("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ko=new w("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(fe);return()=>ot(i)}}),Wo=new w("MAT_SELECT_CONFIG"),Qo=new w("MatSelectTrigger"),gn=class{source;value;constructor(c,e){this.source=c,this.value=e}},ca=(()=>{class i{_viewportRuler=d(Ci);_changeDetectorRef=d(P);_elementRef=d(R);_dir=d(ie,{optional:!0});_idGenerator=d(U);_renderer=d(Me);_parentFormField=d(ri,{optional:!0});ngControl=d(di,{self:!0,optional:!0});_liveAnnouncer=d(Yn);_defaultOptions=d(Wo,{optional:!0});_animationsDisabled=G();_popoverLocation;_initialized=new T;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,a=Wi(e,this.options,this.optionGroups),l=t._getHostElement();e===0&&a===1?n.scrollTop=0:n.scrollTop=Qi(l.offsetTop,l.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new gn(this,e)}_scrollStrategyFactory=d(Ko);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new T;_errorStateTracker;stateChanges=new T;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=_(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(li.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=yn(()=>{let e=this.options;return e?e.changes.pipe(se(e),Je(()=>de(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Je(()=>this.optionSelectionChanges))});openedChange=new b;_openedStream=this.openedChange.pipe(mt(e=>e),At(()=>{}));_closedStream=this.openedChange.pipe(mt(e=>!e),At(()=>{}));selectionChange=new b;valueChange=new b;constructor(){let e=d(vt),t=d(bt,{optional:!0}),n=d(gi,{optional:!0}),a=d(new we("tabindex"),{optional:!0}),l=d(ki,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new fi(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=l?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new kt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(F(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(F(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(se(null),F(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(It(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Bt(this._trackedModal,"aria-owns",t),Kn(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Bt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,a=t===13||t===32,l=this._keyManager;if(!l.isTyping()&&a&&!ae(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let f=this.selected;l.onKeydown(e);let E=this.selected;E&&f!==E&&this._liveAnnouncer.announce(E.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,a=n===40||n===38,l=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!l&&(n===13||n===32)&&t.activeItem&&!ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!l&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let f=this.options.some(E=>!E.disabled&&!E.selected);this.options.forEach(E=>{E.disabled||(f?E.select():E.deselect())})}else{let f=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==f&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ae(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof qt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new jn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=de(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(F(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),de(...this.options.map(t=>t._stateChanges)).pipe(F(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Vn(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,a){if(t&1&&ve(a,Qo,5)(a,$e,5)(a,ln,5),t&2){let l;v(l=y())&&(n.customTrigger=l.first),v(l=y())&&(n.options=l),v(l=y())&&(n.optionGroups=l)}},viewQuery:function(t,n){if(t&1&&L(Lo,5)(Bo,5)(jt,5),t&2){let a;v(a=y())&&(n.trigger=a.first),v(a=y())&&(n.panel=a.first),v(a=y())&&(n._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&h("keydown",function(l){return n._handleKeydown(l)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(M("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),x("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",C],disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],placeholder:"placeholder",required:[2,"required","required",C],multiple:[2,"multiple","multiple",C],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",C],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",De],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",C]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ce([{provide:oi,useExisting:i},{provide:cn,useExisting:i}]),pe],ngContentSelectors:zo,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(N(No),s(0,"div",2,0),h("click",function(){return n.open()}),s(3,"div",3),D(4,Ho,2,1,"span",4)(5,jo,3,1,"span",5),r(),s(6,"div",6)(7,"div",7),me(),s(8,"svg",8),p(9,"path",9),r()()()(),nt(10,Go,3,16,"ng-template",10),h("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(l){return n._handleOverlayKeydown(l)})),t&2){let a=Ye(1);m(3),M("id",n._valueId),m(),O(n.empty?4:5),m(6),u("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[qt,jt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var la=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=z({imports:[xt,dn,W,yt,_t,dn]})}return i})();var da="0.0.1";var Jo=["*"],St=class i{image="";alt="";imagePosition="right";imageHeight="400px";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-vertical-card"]],inputs:{image:"image",alt:"alt",imagePosition:"imagePosition",imageHeight:"imageHeight"},ngContentSelectors:Jo,decls:5,vars:8,consts:[[1,"vertical-card"],[1,"column","text-column"],[1,"column","image-column"],[1,"image-content",3,"src","alt"]],template:function(e,t){e&1&&(N(),V(0,"div",0)(1,"div",1),S(2),B(),V(3,"div",2),pt(4,"img",3),B()()),e&2&&(x("image-left",t.imagePosition==="left")("image-top",t.imagePosition==="top"),m(3),qe("height",t.imagePosition==="top"?"auto":t.imageHeight),m(),K("src",t.image,Mn)("alt",t.alt))},styles:['.vertical-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:0;width:100%;border-radius:12px;overflow:hidden}.vertical-card.image-left[_ngcontent-%COMP%]{grid-template-areas:"image text"}.vertical-card.image-left[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%]{grid-area:image}.vertical-card.image-left[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]{grid-area:text}.vertical-card.image-top[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:auto 1fr}.vertical-card.image-top[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%]{order:1}.vertical-card.image-top[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]{order:2}.vertical-card.image-top[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{width:100%;max-height:400px}.column[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:center;min-height:0}.text-column[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem}.image-column[_ngcontent-%COMP%]{overflow:hidden}.image-column[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{width:100%;object-fit:cover;display:block}']})};var Pt=class i{platformId=d(kn);_isSmall=_(this.detect());isSmallScreen(){return this._isSmall()}detect(){return In(this.platformId)?window.matchMedia("(max-width: 768px)").matches:!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};var er=()=>({weekday:"long",day:"numeric",month:"long"}),pa=(i,c)=>c.id,tr=(i,c)=>c.title,nr=(i,c)=>c.question;function ir(i,c){if(i&1&&(s(0,"mat-option",50),o(1),r()),i&2){let e=c.$implicit;u("value",e),m(),Ae(" ",e.nom," (",e.duree," min) ")}}function ar(i,c){if(i&1){let e=ee();s(0,"mat-button-toggle-group",76),h("change",function(n){A(e);let a=g();return I(a.seanceType.set(n.value))}),s(1,"mat-button-toggle",77)(2,"mat-icon"),o(3,"person"),r(),o(4," En pr\xE9sentiel "),r(),s(5,"mat-button-toggle",78)(6,"mat-icon"),o(7,"videocam"),r(),o(8," En visio-consultation "),r()()}if(i&2){let e=g();u("value",e.seanceType())}}function or(i,c){i&1&&(s(0,"p",52),o(1," S\xE9ance par visioconf\xE9rence - Lien envoy\xE9 apr\xE8s confirmation du rdv "),r())}function rr(i,c){if(i&1&&(s(0,"mat-option",50),o(1),r()),i&2){let e=c.$implicit;u("value",e),m(),Ae(" ",e.nom," - ",e.adresse," ")}}function sr(i,c){if(i&1){let e=ee();s(0,"mat-form-field",53)(1,"mat-label"),o(2,"S\xE9lectionnez un lieu"),r(),s(3,"mat-select",49),h("selectionChange",function(n){A(e);let a=g();return I(a.selectLieu(n.value))}),ue(4,rr,2,3,"mat-option",50,pa),r()()}if(i&2){let e=g();m(3),u("value",e.selectedLieu()),m(),ge(e.lieux)}}function cr(i,c){i&1&&(s(0,"p",119),o(1,"Chargement des cr\xE9neaux..."),r())}function lr(i,c){i&1&&(s(0,"p",120),o(1,"Ferm\xE9 le dimanche"),r())}function dr(i,c){if(i&1){let e=ee();s(0,"button",124),h("click",function(){let n=A(e).$implicit,a=g(4);return I(a.selectTimeSlot(n))}),o(1),r()}if(i&2){let e=c.$implicit,t=g(4);x("slot-available",!0)("slot-selected",t.selectedTime()===e),m(),ne(" ",e," ")}}function mr(i,c){if(i&1&&(s(0,"h4"),o(1,"Horaires disponibles "),s(2,"span",121),o(3,"(dur\xE9e 1h)"),r()(),s(4,"div",122),ue(5,dr,2,5,"button",123,On),r()),i&2){let e=g(3);m(5),ge(e.availableSlots())}}function pr(i,c){i&1&&(s(0,"p",120),o(1,"Aucun horaire disponible \xE0 cette date"),r())}function hr(i,c){if(i&1&&D(0,mr,7,0)(1,pr,2,0,"p",120),i&2){let e=g(2);O(e.availableSlots().length>0?0:1)}}function ur(i,c){if(i&1&&(s(0,"div",57),D(1,cr,2,0,"p",119)(2,lr,2,0,"p",120)(3,hr,2,1),r()),i&2){let e=g();m(),O(e.loadingSlots()?1:e.selectedDate().getDay()===0?2:3)}}function gr(i,c){if(i&1&&(s(0,"div",67)(1,"mat-icon"),o(2,"event"),r(),s(3,"span"),o(4),r()()),i&2){let e=g();m(4),Ae("",e.selectedDate().toLocaleDateString("fr-FR",En(2,er))," \xE0 ",e.selectedTime())}}function _r(i,c){if(i&1){let e=ee();s(0,"div",125)(1,"div",126)(2,"div",127),h("click",function(){let n=A(e).$implicit,a=g();return I(a.flipCard(n.title))}),s(3,"mat-icon",128),o(4),r(),s(5,"mat-card-title"),o(6),r(),s(7,"mat-card-content")(8,"p"),o(9),r()(),s(10,"a",129),o(11,"En savoir plus"),r()(),s(12,"div",130),h("click",function(){let n=A(e).$implicit,a=g();return I(a.flipCard(n.title))}),s(13,"mat-card-content"),p(14,"div",131),r()()()()}if(i&2){let e=c.$implicit,t=g();x("flipped",t.flippedCards[e.title]),m(4),Y(e.icon),m(2),Y(e.title),m(3),Y(e.description),m(5),u("innerHTML",e.description_back,Rt)}}function fr(i,c){if(i&1&&(s(0,"app-vertical-card",80)(1,"div",132),o(2," Un cadre discret et apaisant, dans un espace d\xE9di\xE9"),p(3,"br"),o(4,"au soin et au bien-\xEAtre "),r(),s(5,"div"),p(6,"br"),o(7," Dans le 10e arr ("),s(8,"a",133),o(9,"localisation"),r(),o(10,")."),p(11,"br"),o(12," > Acc\xE8s par les lignes 8 et 9 (station Bonne Nouvelle) ou la ligne 7 (station Poissonni\xE8re) "),p(13,"br")(14,"br"),o(15," Dans le 11e arr. ("),s(16,"a",134),o(17,"localisation"),r(),o(18,")"),p(19,"br"),o(20," > Acc\xE8s par les lignes 1 et 5 (station Bastille), la ligne 8 (station Ledru-Rollin) ou la ligne 9 (Voltaire)"),p(21,"br"),o(22," ... \xE0 votre convenance "),r(),p(23,"br"),s(24,"p"),o(25," Dur\xE9e de la s\xE9ance : "),s(26,"strong"),o(27,"1h ou 1h30"),r(),p(28,"br"),o(29,"(\xE0 indiquer au moment de la prise de rdv) "),r()()),i&2){let e=g();u("imagePosition",e.screenService.isSmallScreen()?"top":"right")}}function br(i,c){if(i&1&&(s(0,"app-vertical-card",81)(1,"div",132),o(2," Pour celles et ceux qui vivent loin, qui voyagent souvent"),p(3,"br"),o(4,"ou qui pr\xE9f\xE9rent le confort et la s\xE9curit\xE9 de leur chez soi "),r(),p(5,"br"),s(6,"p"),o(7,"Dur\xE9e de la s\xE9ance : "),s(8,"strong"),o(9,"1h ou 1h30"),r(),p(10,"br"),o(11,"(\xE0 indiquer au moment de la prise de rdv)"),r(),p(12,"br"),s(13,"p"),o(14,"Le lien pour rejoindre la visio-consultation vous sera envoy\xE9 par mail, quelques jours avant notre s\xE9ance"),r(),s(15,"p"),o(16,"Merci de bien vouloir vous connecter quelques minutes avant l'heure, afin de vous assurer que tout fonctionne (r\xE9seau wifi ou internet, cam\xE9ra, micro...)"),r()()),i&2){let e=g();u("imagePosition",e.screenService.isSmallScreen()?"top":"left")}}function vr(i,c){if(i&1&&(s(0,"mat-expansion-panel",98)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),o(3),r()(),s(4,"mat-panel-description"),p(5,"div",135),r()()),i&2){let e=c.$implicit;m(3),ne(" ",e.question," "),m(2),u("innerHTML",e.reponse,Rt)}}var _n="emilie_therapie_user_data",yr=da,ma=class i{http=d(Tn);snackBar=d(Mi);screenService=d(Pt);analytics=d(Ai);title=_("Psychoth\xE9rapie");siteVersion=yr;nom=_("");prenom=_("");email=_("");telephone=_("");message=_("");selectedDate=_(null);selectedTime=_("");seanceType=_("presentiel");selectedTypeSeance=_(null);selectedLieu=_(null);isMobileMenuOpen=_(!1);acceptTerms=_(!1);timeSlots=_([]);busySlots=_(new Map);loadingSlots=_(!1);faqs=[];lieux=[];typesSeances=[];methodPrinciples=[{icon:"handshake",title:"L'Intelligence Relationnelle (IR\xAE)",description:"Approche neurobiologique \xE0 la fois profonde (par son action sur le syst\xE8me nerveux) et douce (par la s\xE9curit\xE9 que la co-r\xE9gulation instaure durablement)",description_back:`L'IR\xAE s'appuie sur trois socles scientifiques pour "reconfigurer" le syst\xE8me nerveux autonome, c'est-\xE0-dire ramener de l'apaisement et de la souplesse l\xE0 o\xF9 le trauma a instaur\xE9 de la rigidit\xE9 et de la coupure : <br>1. la th\xE9orie de l'attachement ou comment, \xE0 travers le lien th\xE9rapeutique s\xE9cure, je vous propose de vivre une exp\xE9rience r\xE9paratrice dans ces zones douloureuses d'ins\xE9curit\xE9 affective et relationnelle ; <br>2. la th\xE9orie polyvagale pour vous apprendre \xE0 rep\xE9rer, 'apprivoiser et recalibrer ensemble (puis de fa\xE7on autonome) les r\xE9actionsautomatiques de votre syst\xE8me nerveux, puis revenir \xE0 la s\xE9curit\xE9 ; <br>3. le mod\xE8le IFS (syst\xE8me familial int\xE9rieur) ou comment le dialogue doux et bienveillant avec vos diff\xE9rentes Parts* permet de retrouver un profond sentiment de paix int\xE9rieure (* ces sous-personnalit\xE9s qui trahissent et portent vos blessures ou qui s'\xE9puisent, au contraire, \xE0 prot\xE9ger vos zones de fragilit\xE9)`},{icon:"visibility",title:"L'EMDR et les ressources de stabilisation",description:"Approche de d\xE9sensibilisation et de retraitement du v\xE9cu traumatique, par une stimulation bilat\xE9rale altern\xE9e",description_back:`Le traumatisme, \xE7a n'est pas tant l'\xE9v\xE8nement en lui-m\xEAme que votre ressenti d'une ins\xE9curit\xE9 extr\xEAme, au moment o\xF9 il s'est produit. En situation de grand danger, le cerveau humain peut aller jusqu'\xE0 "dysjoncter" et emp\xEAcher ce v\xE9cu traumatique d'\xEAtre "dig\xE9r\xE9" normalement. L'EMDR a pour objectif de relancer le processus naturel de gu\xE9rison du psychisme, en permettant \xE0 votre v\xE9cu - rest\xE9 bloqu\xE9 dans la m\xE9moire traumatique - de rejoindre la m\xE9moire autobiographique... et d'\xEAtre ainsi class\xE9 dans vos "archives personnelles". Dans ce cadre, les techniques d'ancrage et de stabilisation \xE9motionnelle sont autant de ressources pr\xE9cieuses, pour accompagner ce processus - \xE0 votre rythme et en toute s\xE9curit\xE9`},{icon:"self_improvement",title:"La th\xE9rapie sensori-motrice",description:"Approche somatique qui utilise le corps comme ressource principale d'informations et de changements",description_back:`L\xE0 o\xF9 la parole s'arr\xEAte, le corps - lui -  se souvient. Ainsi, vos blessures profondes et vos carences s'inscrivent dans la m\xE9moire implicite, sous la forme de tensions, micro-expressions, postures ou gestes chroniques. Dans une approche "Bottom-Up" (du corps vers l'esprit), je vous aide \xE0 d\xE9crypter votre r\xE9cit somatique, j'accompagne votre corps \xE0 achever les actions de d\xE9fense qui ont possiblement \xE9t\xE9 inhib\xE9es, et je soutiens votre r\xE9gulation \xE9motionnelle par les mouvements du corps`},{icon:"psychology",title:"Les th\xE9rapies cognitivo-comportementales (TCC)",description:"Approche pragmatique centr\xE9e sur l'ancrage dans le ici & maintenant",description_back:"Les TCC permettent de modifier les pens\xE9es et comportements inadapt\xE9s en restant concentr\xE9.e sur le pr\xE9sent. Cette approche est id\xE9ale pour identifier la mani\xE8re dont vos pens\xE9es influencent directement vos \xE9motions, vos comportements, voire vos boucles anxieuses ou de rumination"}];flippedCards={};flipCard(c){this.flippedCards[c]=!this.flippedCards[c]}cloudSizes=["xl","lg","md","sm","xs"];cloudRotations=[0,5,-5,10,-10,3,-3,8,-8];cloudColors=["#5c6f7d","#7a8fa3","#4a5c6a","#6b8299","#8fa4b8","#9eb3c4","#5d7a8f","#4e6d7a","#6a8a9e","#7d97a8"];getCloudSize(c){return this.cloudSizes[c%this.cloudSizes.length]}getCloudRotation(c){return this.cloudRotations[c%this.cloudRotations.length]}getCloudColor(c){return this.cloudColors[c%this.cloudColors.length]}router=d(Rn);ngOnInit(){let c=sessionStorage.getItem("redirectTo");if(c&&c!=="/"&&(sessionStorage.removeItem("redirectTo"),console.log("[Router] Handling redirect to:",c),this.router.navigateByUrl(c)),console.log("[Debug] Current URL:",window.location.href),console.log("[Debug] Hash fragment:",window.location.hash),window.location.hash){let e=window.location.hash.substring(1);console.log("[Debug] Fragment to scroll to:",e),setTimeout(()=>{console.log("[Debug] Attempting scroll to:",e),this.scrollTo(e)},100)}this.loadUserDataFromLocalStorage(),this.loadFaqs(),this.loadLieux(),this.loadTypesSeances()}loadFaqs(){this.http.get("data/faqs.json").subscribe({next:c=>{this.faqs=c},error:c=>{console.error("Failed to load FAQs:",c)}})}loadLieux(){this.http.get("data/lieux.json").subscribe({next:c=>{this.lieux=c;let e=localStorage.getItem(_n);if(e)try{let t=JSON.parse(e);if(t.selectedLieuId){let n=this.lieux.find(a=>a.id===t.selectedLieuId);n&&this.selectedLieu.set(n)}}catch(t){console.error("Failed to parse stored user data:",t)}},error:c=>{console.error("Failed to load lieux:",c)}})}loadTypesSeances(){this.http.get("data/types-seances.json").subscribe({next:c=>{this.typesSeances=c,c.length>0&&(this.selectedTypeSeance.set(c[0]),this.generateTimeSlots())},error:c=>{console.error("Failed to load types seances:",c)}})}selectTypeSeance(c){this.selectedTypeSeance.set(c),this.selectedTime.set(""),this.generateTimeSlots()}generateTimeSlots(){let c=(this.selectedTypeSeance()?.duree||60)+15,e=[],t=480,n=1200;for(let a=t;a+c<=n;a+=c){let l=Math.floor(a/60),f=a%60;e.push(`${l.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`)}this.timeSlots.set(e)}loadUserDataFromLocalStorage(){console.log("[LocalStorage] Attempting to load user data...");try{let c=localStorage.getItem(_n);if(c){let e=JSON.parse(c);console.log("[LocalStorage] Data found:",e),this.nom.set(e.nom||""),this.prenom.set(e.prenom||""),this.email.set(e.email||""),this.telephone.set(e.telephone||""),console.log("[LocalStorage] User data loaded successfully")}else console.log("[LocalStorage] No stored data found")}catch(c){console.error("[LocalStorage] Failed to load user data:",c)}}share(){let c=window.location.protocol;navigator.share?navigator.share({title:"Emilie Pommier Th\xE9rapeute",url:c}).then(()=>{console.log("Merci pour le partage")}).catch(console.error):navigator.clipboard.writeText(c).then(e=>alert("lien copi\xE9 dans le presse papier"))}saveUserDataToLocalStorage(){console.log("[LocalStorage] Attempting to save user data...");try{let c={nom:this.nom(),prenom:this.prenom(),email:this.email(),telephone:this.telephone(),selectedLieuId:this.selectedLieu()?.id};localStorage.setItem(_n,JSON.stringify(c)),console.log("[LocalStorage] User data saved:",c)}catch(c){console.error("[LocalStorage] Failed to save user data:",c)}}onContactFieldChange(){this.saveUserDataToLocalStorage()}scrollTo(c){let e=document.getElementById(c);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),c==="rdv"&&this.analytics.viewRdvSection())}isSlotAvailable(c){let e=this.selectedDate();if(!e)return!1;let t=this.dateToString(e),n=this.busySlots().get(t)||[],[a,l]=c.split(":").map(Number),f=a*60+l,E=this.selectedTypeSeance()?.duree||60,_e=f+E;for(let Ne of n){let[ye,Xe]=Ne.time.split(":").map(Number),Ce=ye*60+Xe,xe=Ce+Ne.duration;if(f<xe&&_e>Ce)return!1}let Be=this.selectedLieu();if(Be){let Ne=Be.indisponibilites.filter(ye=>ye.date===t);for(let ye of Ne){let[Xe,Ce]=ye.time.split(":").map(Number),xe=Xe*60+Ce,fn=xe+ye.duration;if(f<fn&&_e>xe)return!1}}return!0}availableSlots(){return this.timeSlots().filter(c=>this.isSlotAvailable(c))}selectTimeSlot(c){this.isSlotAvailable(c)&&this.selectedTime.set(c)}selectLieu(c){this.selectedLieu.set(c),this.selectedTime.set("")}isFormValid(){let c=this.seanceType()==="distant"||this.selectedLieu()!==null;return this.nom().trim().length>0&&this.prenom().trim().length>0&&this.email().trim().length>0&&this.email().includes("@")&&this.telephone().trim().length>0&&this.selectedLieu!=null&&this.selectedTypeSeance!=null&&this.selectedDate()!==null&&this.selectedTime()!==""&&this.acceptTerms()&&c}submitAppointment(){if(!this.isFormValid()){this.snackBar.open("Veuillez remplir tous les champs obligatoires","Fermer",{duration:3e3,panelClass:["error-snackbar"]});return}this.saveUserDataToLocalStorage();let c=this.selectedDate(),e=c?c.toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"",t=this.seanceType()==="distant"?"\xC0 distance (visioconf\xE9rence)":"En pr\xE9sentiel",n=this.seanceType()==="presentiel"&&this.selectedLieu()?`Lieu: ${this.selectedLieu().nom} - ${this.selectedLieu().adresse}`:"",a=this.selectedTypeSeance()?`
Type de s\xE9ance: ${this.selectedTypeSeance().description}`:"",l=`RDV: ${this.prenom()} ${this.nom()} \u2014 ${e} \xE0 ${this.selectedTime()}`,f=`Type: ${t}${a}${n?`
`+n:""}
Email: ${this.email()}
T\xE9l\xE9phone: ${this.telephone()}
Message: ${this.message()}`,E=this.selectedDate(),_e=this.selectedTime(),Be=this.selectedTypeSeance()?.duree||60;if(E&&_e){let[ye,Xe]=_e.split(":").map(Number),Ce=new Date(E);Ce.setHours(ye,Xe,0,0);let xe=new Date(Ce);xe.setMinutes(xe.getMinutes()+Be);let fn=re=>re.toISOString(),bn=re=>{let ha=re.getFullYear(),ua=String(re.getMonth()+1).padStart(2,"0"),ga=String(re.getDate()).padStart(2,"0"),_a=String(re.getHours()).padStart(2,"0"),fa=String(re.getMinutes()).padStart(2,"0"),ba=String(re.getSeconds()).padStart(2,"0"),va=String(re.getMilliseconds()).padStart(3,"0");return`${ha}-${ua}-${ga}T${_a}:${fa}:${ba}.${va}`};this.http.post("/api/calendar/add-to-calendar",{title:l,start_time:bn(Ce),end_time:bn(xe),description:f,email:this.email(),phone:this.telephone(),seance_type:this.selectedTypeSeance()?.nom||t}).subscribe({error:re=>console.error("Failed to add calendar event:",re)})}let Ne=`Merci ${this.prenom()} ! Votre demande de rendez-vous a bien \xE9t\xE9 envoy\xE9e. Je vous contacterai sous 24h pour confirmer ce rendez-vous.`;this.snackBar.open(Ne,"Fermer",{duration:5e3,panelClass:["success-snackbar"]}),this.analytics.leadCaptured("direct"),this.message.set(""),this.selectedDate.set(null),this.selectedTime.set(""),this.seanceType.set("presentiel"),this.selectedTypeSeance.set(this.typesSeances.length>0?this.typesSeances[0]:null),this.selectedLieu.set(null),this.acceptTerms.set(!1)}getMinDate(){return new Date}getMaxDate(){let c=new Date;return c.setMonth(c.getMonth()+2),c}async onDateSelected(c){if(this.selectedDate.set(c),this.selectedTime.set(""),!c||(this.analytics.viewCalendar(),c.getDay()===0))return;this.loadingSlots.set(!0);let t=this.dateToString(c),n=t+"T00:00:00Z",a=t+"T23:59:59Z";try{let l=await this.http.get(`/api/calendar/busy?start=${t}&end=${t}`).toPromise()||{},f=new Map;for(let[E,_e]of Object.entries(l))f.set(E,_e);this.busySlots.set(f)}catch(l){console.warn("Could not fetch busy slots:",l),this.busySlots.set(new Map)}finally{this.loadingSlots.set(!1)}}dateToString(c){let e=c.getFullYear(),t=String(c.getMonth()+1).padStart(2,"0"),n=String(c.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-root"]],decls:557,vars:25,consts:[["color","primary",1,"header-toolbar"],[1,"header-content"],[1,"header-brand"],["src","assets/logo.png","width","70","alt","\xC9milie Pommier",1,"image-logo"],[1,"logo",3,"click"],[1,"nav-links"],["mat-icon-button","",3,"click"],["mat-button","",3,"click"],[2,"line-height","95%"],["mat-flat-button","","color","accent",1,"main-btn",3,"click"],["mat-icon-button","",1,"hamburger",3,"click"],["aria-label","Navigation mobile",1,"nav-links-drawer"],["id","accueil",1,"hero-section","hero-background"],[1,"hero-background"],[1,"hero-content"],[1,"hero-title"],[1,"hero-subtitle","hero-description"],[1,"citation"],[1,"hero-actions"],["mat-flat-button","","color","primary",1,"main-btn",3,"click"],["mat-stroked-button","",1,"standard-btn",3,"click"],[1,"scroll-indicator"],[1,"hero-version"],["id","accompagnements",1,"section","accompagnements-section"],[1,"content-section"],[1,"section-title"],[1,"method-approaches"],["aria-label","symptomes",2,"display","inline-block","margin","20px","width","100%","text-align","center"],[1,"content-text"],[1,"expansion-panel-text"],[1,"titre-paragraphe"],[1,"hero-columns","content-text"],[2,"text-align","left"],["image","accompagnement_1.webp","alt","premier \xE9change gratuit",3,"imagePosition"],[2,"color","var(--primary-500)"],["image","accompagnement_2.webp","alt","s\xE9ance individuelle",3,"imagePosition"],[2,"font-style","italic"],["id","apropos",1,"section","apropos-section"],[1,"section-divider"],[1,"apropos-content"],[1,"apropos-image"],["src","emilie.jpg","alt","\xC9milie Pommier",1,"photo"],[1,"apropos-text"],[1,"apropos-engagements","content-text"],[1,"apropos-actions"],["href","/parcours","mat-stroked-button","",1,"standard-btn"],["id","rdv",1,"section","rdv-section"],[1,"intro-section"],["appearance","outline",1,"select-type-seance"],[3,"selectionChange","value"],[3,"value"],[1,"seance-type-toggle"],[1,"seance-type-hint"],["appearance","outline",1,"select-lieu"],[1,"rdv-content"],[1,"calendar-card"],[3,"selectedChange","minDate","maxDate","selected"],[1,"time-slots"],[1,"form-card"],[1,"appointment-form"],[1,"form-row"],["appearance","outline"],["matInput","","required","",3,"input","value"],["appearance","outline",1,"full-width"],["matPrefix",""],["matInput","","type","email","required","",3,"input","value"],["matInput","","type","tel",3,"input","value"],[1,"selected-datetime"],["matInput","","rows","3","placeholder","D\xE9crivez bri\xE8vement votre situation ou vos attentes...",3,"input","value"],["name","terms",1,"terms-checkbox",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary",1,"submit-button",3,"click","disabled"],["id","methode",1,"section","methode-section"],["aria-label","symptomes",2,"display","inline-block","margin","20px"],[1,"principles-grid"],[1,"principle-card",3,"flipped"],["id","consultations",1,"section","consultations-section"],[3,"change","value"],["value","presentiel"],["value","distant"],[2,"max-width","1000px","background","white"],["image","presentiel.jpg",3,"imagePosition"],["image","visio.webp",3,"imagePosition"],["href","/tarifs","mat-stroked-button","",1,"standard-btn"],["id","ressources",1,"section","ressources-section"],[1,"ressources-intro","ressources-spacing"],[1,"ressources-grid"],[1,"ressource-block"],[1,"ressource-list"],["href","https://www.arte.tv/fr/videos/127467-001-A/avons-nous-tous-un-trauma-cache/","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=HVVpa_-pLkE","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=py8deTlxNco","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=qM56FRfZrl8","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=n9IJttHPYno","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=b20pWSOiXts","target","_blank","rel","noopener"],["href","https://www.youtube.com/watch?v=MVkvosRMRPA","target","_blank","rel","noopener"],["href","#","target","_blank","rel","noopener"],[1,"faq-section"],[1,"section-subtitle"],[1,"faq-panel"],[1,"footer"],[1,"footer-content"],[1,"footer-brand"],[2,"margin-bottom","-11px","font-size","medium"],[1,"footer-social"],["href","https://www.facebook.com/emilie.pommier.therapie","target","_blank","rel","noopener noreferrer","aria-label","Facebook"],["href","https://www.instagram.com/emilie.pommier.therapie","target","_blank","rel","noopener noreferrer","aria-label","Instagram"],["href","mailto:contact@emiliepommier.fr","aria-label","Email"],[1,"footer-links"],["href","#accueil"],["href","#accompagnements"],["href","#methode"],["href","#apropos"],["href","#consultations"],["href","#ressources"],["href","#rdv"],[1,"footer-legal"],["href","/mentionslegales","target","_blank"],["href","/politiquedeconfidentialite","target","_blank"],[1,"disclaimer"],[1,"loading-slots"],[1,"no-slots"],[1,"slot-duration"],[1,"slots-grid"],["mat-flat-button","",3,"slot-available","slot-selected"],["mat-flat-button","",3,"click"],[1,"principle-card"],[1,"card-inner"],[1,"card-front",3,"click"],[1,"principle-icon"],[1,"flip-link"],[1,"card-back",3,"click"],[2,"color","white","text-align","left","font-size","0.85rem","line-height","1.3",3,"innerHTML"],[1,"intro-seance"],["target","_blank","href","https://maps.app.goo.gl/xm5Eutjh1n58qpE68?g_st=aw"],["target","_blank","href","https://maps.app.goo.gl/RsG8Cuyvmqt3HSGs7?g_st=aw"],[1,"faq-respons",3,"innerHTML"]],template:function(e,t){e&1&&(s(0,"mat-toolbar",0)(1,"div",1)(2,"div",2),p(3,"img",3),s(4,"span",4),h("click",function(){return t.scrollTo("accueil")}),o(5,"Emilie Pommier"),r()(),s(6,"div",5)(7,"button",6),h("click",function(){return t.share()}),s(8,"mat-icon"),o(9,"share"),r()(),s(10,"button",7),h("click",function(){return t.scrollTo("accompagnements"),t.isMobileMenuOpen.set(!1)}),o(11,"Mes accompagnements"),r(),s(12,"button",7),h("click",function(){return t.scrollTo("methode"),t.isMobileMenuOpen.set(!1)}),o(13,"Mon approche"),r(),s(14,"button",7),h("click",function(){return t.scrollTo("apropos"),t.isMobileMenuOpen.set(!1)}),o(15,"Me conna\xEEtre"),r(),s(16,"button",7),h("click",function(){return t.scrollTo("consultations"),t.isMobileMenuOpen.set(!1)}),s(17,"div",8),o(18,"Consultations "),p(19,"br"),o(20,"& tarifs"),r()(),s(21,"button",7),h("click",function(){return t.scrollTo("ressources"),t.isMobileMenuOpen.set(!1)}),s(22,"div",8),o(23,"Ressources "),p(24,"br"),o(25,"& questions"),r()(),s(26,"button",9),h("click",function(){return t.scrollTo("rdv"),t.isMobileMenuOpen.set(!1),t.analytics.clickRdv("header-mobile-burger")}),s(27,"mat-icon"),o(28,"calendar_today"),r(),o(29," Prendre rendez-vous "),r()(),s(30,"button",10),h("click",function(){return t.isMobileMenuOpen.set(!t.isMobileMenuOpen())}),s(31,"mat-icon"),o(32),r()()()(),s(33,"nav",11)(34,"button",7),h("click",function(){return t.scrollTo("apropos"),t.isMobileMenuOpen.set(!1)}),o(35,"Me conna\xEEtre"),r(),s(36,"button",7),h("click",function(){return t.scrollTo("accompagnements"),t.isMobileMenuOpen.set(!1)}),o(37,"Mes accompagnements"),r(),s(38,"button",7),h("click",function(){return t.scrollTo("methode"),t.isMobileMenuOpen.set(!1)}),o(39,"Mon approche"),r(),s(40,"button",7),h("click",function(){return t.scrollTo("consultations"),t.isMobileMenuOpen.set(!1)}),s(41,"div",8),o(42,"Consultations "),p(43,"br"),o(44,"& tarifs"),r()(),s(45,"button",7),h("click",function(){return t.scrollTo("ressources"),t.isMobileMenuOpen.set(!1)}),s(46,"div",8),o(47,"Ressources "),p(48,"br"),o(49,"& questions"),r()(),s(50,"button",7),h("click",function(){return t.share()}),s(51,"mat-icon"),o(52,"share"),r(),o(53,"Partager"),r(),s(54,"button",9),h("click",function(){return t.scrollTo("rdv"),t.isMobileMenuOpen.set(!1),t.analytics.clickRdv("header-mobile-burger")}),s(55,"mat-icon"),o(56,"calendar_today"),r(),o(57," Prendre rendez-vous "),r()(),s(58,"section",12),p(59,"div",13),s(60,"div",14)(61,"div",15),o(62,"Bienvenue"),r(),s(63,"p",16),o(64," dans cet espace s\xE9cure"),p(65,"br"),o(66," o\xF9 d\xE9poser ce qui a \xE9t\xE9 heurt\xE9, ab\xEEm\xE9 ou fig\xE9 dans votre histoire"),p(67,"br"),o(68," o\xF9 retrouver l'apaisement dans le lien et une connexion authentique \xE0 vous-m\xEAme "),r(),s(69,"div",17),o(70,"~ Ce qui a \xE9t\xE9 bless\xE9 dans le lien se gu\xE9rit dans le lien ~ "),r(),p(71,"br")(72,"br"),s(73,"div",18)(74,"button",19),h("click",function(){return t.scrollTo("rdv"),t.isMobileMenuOpen.set(!1),t.analytics.clickRdv("header-desktop")}),s(75,"mat-icon"),o(76,"calendar_today"),r(),o(77," Prendre rendez-vous "),r(),s(78,"button",20),h("click",function(){return t.scrollTo("methode")}),o(79," D\xE9couvrir mon approche "),r()()(),s(80,"div",21)(81,"mat-icon"),o(82,"keyboard_arrow_down"),r()(),s(83,"div",22),o(84),r()(),s(85,"section",23)(86,"div",24)(87,"h2",25),o(88,"Mes accompagnements"),r(),o(89," J'accompagne chacun.e l\xE0 o\xF9 il/elle en est, \xE0 son rythme "),s(90,"div",26)(91,"mat-chip-set",27)(92,"mat-chip"),o(93,"Anxi\xE9t\xE9"),r(),s(94,"mat-chip"),o(95,"Mal-\xEAtre diffus"),r(),s(96,"mat-chip"),o(97,"Isolement social"),r(),s(98,"mat-chip"),o(99,"Troubles du sommeil"),r(),s(100,"mat-chip"),o(101,"Fatigue chronique"),r(),s(102,"mat-chip"),o(103,"Manifestations somatiques"),r(),s(104,"mat-chip"),o(105,"Hyper-reactivit\xE9"),r(),s(106,"mat-chip"),o(107,"Absence d'\xE9motions"),r(),s(108,"mat-chip"),o(109,"Relations difficiles"),r(),s(110,"mat-chip"),o(111,"Sch\xE9mas r\xE9currents (...)"),r()()(),s(112,"p",28),o(113," Bien souvent, vous connaissez votre histoire, vous avez identifi\xE9 vos blocages... et pourtant, c'est comme si cela ne suffisait pas."),p(114,"br"),o(115," Observez-vous que certains sch\xE9mas se r\xE9p\xE8tent, inlassablement ? Ressentez-vous de l'\xE9puisement ou de la lassitude, face au d\xE9calage entre ce que vous avez compris et ce que votre corps ou vos \xE9motions continuent d'exprimer ?"),r(),s(116,"mat-expansion-panel",29)(117,"mat-expansion-panel-header",30),o(118," Pour approfondir "),r(),s(119,"p",28),o(120," Difficult\xE9s relationnelles, sympt\xF4mes chroniques, anxi\xE9t\xE9, sensation d'\xEAtre \xE0 fleur de peau ou - au contraire - coup\xE9.e de vos \xE9motions..."),p(121,"br"),o(122," N'y voyez plus une fatalit\xE9 ou de simples traits de votre personnalit\xE9 : bien souvent, ce sont des m\xE9canismes d'adaptation mis en place tr\xE8s t\xF4t dans votre vie pour vous prot\xE9ger d'une situation per\xE7ue, par votre syst\xE8me nerveux, comme extr\xEAmement dangereuse."),p(123,"br"),o(124," Bien qu'ils soient aujourd'hui devenus obsol\xE8tes, parfois m\xEAme contraignants, ces m\xE9canismes restent actifs - comme bloqu\xE9s en vous. "),r(),p(125,"br"),s(126,"div",31)(127,"div",32)(128,"strong"),o(129,"Mon r\xF4le consiste \xE0 vous aider \xE0 :"),r(),s(130,"ul")(131,"li"),o(132,"apaiser vos conflits int\xE9rieurs"),r(),s(133,"li"),o(134,"renforcer vos ressources personnelles pour mieux rep\xE9rer et poser vos limites"),r(),s(135,"li"),o(136,'comprendre le "dialogue sans mots" de votre syst\xE8me nerveux'),r(),s(137,"li"),o(138,"retrouver, durablement, un \xE9tat de s\xE9r\xE9nit\xE9 et de s\xE9curit\xE9 int\xE9rieure"),r()()()()(),s(139,"app-vertical-card",33)(140,"h3"),o(141,"Un premier \xE9change offert "),s(142,"span",34),o(143,"(30 min)"),r()(),p(144,"br"),s(145,"p",28),o(146,"Parce que le choix d'un.e th\xE9rapeute est important et tr\xE8s personnel, je vous propose un premier contact "),s(147,"i"),o(148,"en visio"),r(),o(149,", sans aucun engagement."),p(150,"br")(151,"br"),s(152,"strong"),o(153,"Pour vous :"),r(),o(154," c'est l'occasion de m'exposer votre besoin, de formuler vos attentes et de me poser toutes vos questions"),p(155,"br")(156,"br"),s(157,"strong"),o(158,"Pour moi :"),r(),o(159," c'est le moment de vous expliquer mon cadre th\xE9rapeutique et de m'assurer que mon approche correspond bien \xE0 ce qui vous anime, l\xE0 maintenant "),r()(),p(160,"br")(161,"br"),s(162,"app-vertical-card",35)(163,"h3"),o(164,"Des s\xE9ances individuelles de "),s(165,"span",34),o(166,"1h ou 1h30"),r()(),s(167,"p",28),o(168," Durant ce temps qui est le v\xF4tre, je m'engage \xE0 vous offrir un espace s\xE9cure, bienveillant, sans jugement, o\xF9 vous pourrez d\xE9poser tout ce qui vous traverse."),p(169,"br")(170,"br"),o(171," Une s\xE9ance type s'articule autour de trois temps forts "),s(172,"li")(173,"strong"),o(174,"Stabilisation :"),r(),o(175," un temps d'expression libre et d'ancrage, pour vous poser et vous recentrer"),r(),s(176,"li")(177,"strong"),o(178,"Exploration :"),r(),o(179," \xE0 partir d'une situation que vous amenez ou qui \xE9merge dans le "),s(180,"span",36),o(181,"ici & maintenant"),r(),o(182,", nous travaillons ensemble \xE0 d\xE9nouer vos blocages"),r(),s(183,"li")(184,"strong"),o(185,"Int\xE9gration :"),r(),o(186," nous prenons toujours le temps de cl\xF4turer la s\xE9ance par un retour au calme, afin que vous puissiez repartir \xE0 votre journ\xE9e le plus sereinement possible"),r()()()()(),s(187,"section",37),p(188,"div",38),s(189,"div",24)(190,"h2",25),o(191," Me conna\xEEtre "),r(),s(192,"div",39)(193,"div",40),p(194,"img",41),r(),s(195,"div",42)(196,"p",28),o(197," Je suis Emilie, th\xE9rapeute et praticienne en psychologie."),p(198,"br")(199,"br"),o(200," Avant de me consacrer pleinement \xE0 la relation d'aide, j'ai pass\xE9 plus de 20 ans dans des m\xE9tiers o\xF9 \xE9coute active, souci de l'impact et qu\xEAte du juste \xE9quilibre \xE9taient au coeur de chaque projet."),p(201,"br"),o(202," Aujourd'hui, ces exp\xE9riences guident toujours mes accompagnements, mais j'ai choisi de me concentrer sur l'"),s(203,"i"),o(204,"\xE9cologie int\xE9rieure"),r(),o(205,"."),p(206,"br"),o(207," Un retour \xE0 l'essentiel qui fait sens pour moi."),p(208,"br")(209,"br"),o(210," J'ai \xE9galement choisi de centrer ma pratique sur la personne et la s\xE9curit\xE9 relationnelle, pour offrir \xE0 chacun.e un espace o\xF9 restaurer progressivement cette fluidit\xE9 naturelle entre t\xEAte, coeur et corps."),p(211,"br"),o(212," Pour accompagner cette sensation unique de r\xE9-alignement entre ce qui "),s(213,"i"),o(214,"se joue"),r(),o(215," en vous, ce que vous "),s(216,"i"),o(217,"\xE9prouvez"),r(),o(218," et ce que vous "),s(219,"i"),o(220,"comprenez"),r(),o(221," de tout cela... et vous redonner ainsi \xE9lan et capacit\xE9 d'agir. "),r(),s(222,"div",43)(223,"strong"),o(224,"Mes engagements"),r(),s(225,"ul")(226,"li"),o(227,"Premier \xE9change offert"),r(),s(228,"li"),o(229,"Flexibilit\xE9 du format"),r(),s(230,"li"),o(231,"Rythme adapt\xE9 \xE0 vos besoins"),r()()()()(),s(232,"div",44)(233,"a",45),o(234," Mon parcours et mon \xE9thique "),r(),s(235,"button",20),h("click",function(){return t.scrollTo("methode")}),o(236," D\xE9couvrir mon approche "),r()()()(),s(237,"section",46),p(238,"div",38),s(239,"div",24)(240,"h2",25),o(241,"R\xE9servez votre s\xE9ance en quelques clics"),r(),s(242,"p",47),o(243," La consultation initiale permet de mieux faire connaissance et de pr\xE9ciser vos besoins "),r(),s(244,"mat-form-field",48)(245,"mat-label"),o(246,"Type de s\xE9ance"),r(),s(247,"mat-select",49),h("selectionChange",function(a){return t.selectTypeSeance(a.value)}),ue(248,ir,2,3,"mat-option",50,pa),r()(),s(250,"div",51),D(251,ar,9,1,"mat-button-toggle-group",50),D(252,or,2,0,"p",52)(253,sr,6,1,"mat-form-field",53),r(),s(254,"div",54)(255,"mat-card",55)(256,"mat-card-header")(257,"mat-card-title")(258,"mat-icon"),o(259,"calendar_month"),r(),o(260," Choisissez une date "),r()(),s(261,"mat-card-content")(262,"mat-calendar",56),Re("selectedChange",function(a){return Te(t.selectedDate,a)||(t.selectedDate=a),a}),h("selectedChange",function(a){return t.onDateSelected(a)}),r(),D(263,ur,4,1,"div",57),r()(),s(264,"mat-card",58)(265,"mat-card-header")(266,"mat-card-title")(267,"mat-icon"),o(268,"person"),r(),o(269," Vos coordonn\xE9es "),r()(),s(270,"mat-card-content")(271,"form",59)(272,"div",60)(273,"mat-form-field",61)(274,"mat-label"),o(275,"Nom"),r(),s(276,"input",62),h("input",function(a){return t.nom.set(a.target.value),t.onContactFieldChange()}),r()(),s(277,"mat-form-field",61)(278,"mat-label"),o(279,"Pr\xE9nom"),r(),s(280,"input",62),h("input",function(a){return t.prenom.set(a.target.value),t.onContactFieldChange()}),r()()(),s(281,"mat-form-field",63)(282,"mat-label"),o(283,"Email"),r(),s(284,"mat-icon",64),o(285,"email"),r(),s(286,"input",65),h("input",function(a){return t.email.set(a.target.value),t.onContactFieldChange()}),r()(),s(287,"mat-form-field",63)(288,"mat-label"),o(289,"T\xE9l\xE9phone (optionnel)"),r(),s(290,"mat-icon",64),o(291,"phone"),r(),s(292,"input",66),h("input",function(a){return t.telephone.set(a.target.value),t.onContactFieldChange()}),r()(),D(293,gr,5,3,"div",67),s(294,"mat-form-field",63)(295,"mat-label"),o(296,"Message (pr\xE9ciser vos disponibilit\xE9s)"),r(),s(297,"textarea",68),h("input",function(a){return t.message.set(a.target.value)}),r()(),s(298,"mat-checkbox",69),Re("ngModelChange",function(a){return Te(t.acceptTerms,a)||(t.acceptTerms=a),a}),o(299," J'accepte d'\xEAtre recontact\xE9.e pour confirmer mon rendez-vous "),r(),s(300,"button",70),h("click",function(){return t.submitAppointment()}),s(301,"mat-icon"),o(302,"send"),r(),o(303," Envoyer ma demande "),r()()()()()()(),s(304,"section",71),p(305,"div",38),s(306,"div",24)(307,"h2",25),o(308,"Mon approche"),r(),s(309,"div",26)(310,"mat-chip-set",72)(311,"mat-chip"),o(312,"Int\xE9grative"),r(),s(313,"mat-chip"),o(314,"Trauma-inform\xE9e"),r(),s(315,"mat-chip"),o(316,"Psycho-corporelle"),r()()(),s(317,"p",28)(318,"span",30),o(319,"L'alliance de l'esprit, du coeur et du corps, pour une efficacit\xE9 maximale"),r(),p(320,"br")(321,"br"),o(322," Je sais combien volont\xE9 et analyse intellectuelle, seules, ne suffisent pas \xE0 apaiser certaines blessures profond\xE9ment ancr\xE9es en nous."),p(323,"br"),o(324," Beaucoup pensent qu'"),s(325,"i"),o(326,"il suffit de comprendre l'origine de ses probl\xE8mes"),r(),o(327," pour les r\xE9soudre."),p(328,"br"),o(329," Pourtant, je suis certaine que vous avez d\xE9j\xE0 fait l'exp\xE9rience de ce d\xE9calage... \xE9puisant : votre esprit sait (rationnellement) que tout va bien, que vous \xEAtes en s\xE9curit\xE9, mais votre corps - lui - guette le danger, r\xE9agit au moindre stimuli, il s'emballe tout seul voire vous fige."),p(330,"br"),o(331,` Nos r\xE9actions et nos blocages ne sont pas de simples "id\xE9es" ou faiblesses : il s'agit de m\xE9moires implicites, traces vivantes de notre histoire, profond\xE9ment engramm\xE9es dans notre syst\xE8me nerveux. `),r(),s(332,"div",17),o(333," ~ Le corps est bavard. Savoir l'\xE9couter lorsqu'il chuchote, c'est lui \xE9viter d'avoir \xE0 crier ~ "),r(),p(334,"br"),s(335,"mat-expansion-panel",29)(336,"mat-expansion-panel-header",30),o(337," Pour approfondir "),r(),s(338,"mat-panel-description")(339,"p",28),o(340," En travaillant ensemble, sur la base d'une relation authentique et ajust\xE9e, nous restaurons au fil des s\xE9ances la capacit\xE9 naturelle de votre syst\xE8me nerveux \xE0 s'apaiser, \xE0 sortir de sch\xE9mas obsol\xE8tes et \xE0 retrouver la stabilit\xE9 int\xE9rieure \xE0 laquelle vous aspirez."),p(341,"br")(342,"br"),o(343," Pour vous accompagner au mieux, je propose de travailler alternativement mais aussi de faire int\xE9ragir vos sch\xE9mas de pens\xE9e (approche cognitive) et vos \xE9tats corporels (approche somatique)."),p(344,"br"),o(345,"Je combine ainsi un travail verbal doux avec des exp\xE9riences \xE9motionnelles et sensorielles, pour restaurer votre \xE9quilibre int\xE9rieur."),p(346,"br")(347,"br"),r()()(),p(348,"br")(349,"br")(350,"br"),s(351,"p",47),o(352," Ma pratique s'articule autour de mod\xE8les th\xE9rapeutiques reconnus et compl\xE9mentaires "),r(),s(353,"div",73),ue(354,_r,15,6,"div",74,tr),r(),p(356,"br")(357,"br"),s(358,"p",47),o(359," Vous voulez savoir si mon approche est faite pour vous ?"),p(360,"br"),o(361," Je me fais un plaisir d'\xE9changer avec vous. "),r(),s(362,"button",9),h("click",function(){return t.scrollTo("rdv"),t.isMobileMenuOpen.set(!1),t.analytics.clickRdv("card-accompagnement")}),s(363,"mat-icon"),o(364,"calendar_today"),r(),o(365," Prendre rendez-vous "),r()()(),s(366,"section",75),p(367,"div",38),s(368,"div",24)(369,"h2",25),o(370,"Consultations & tarifs"),r(),s(371,"p",47),o(372," Un format flexible"),p(373,"br"),o(374," L'assurance d'une \xE9coute bienveillante"),p(375,"br"),r(),s(376,"div",51)(377,"mat-button-toggle-group",76),h("change",function(a){return t.seanceType.set(a.value)}),s(378,"mat-button-toggle",77)(379,"mat-icon"),o(380,"person"),r(),o(381," En pr\xE9sentiel "),r(),s(382,"mat-button-toggle",78)(383,"mat-icon"),o(384,"videocam"),r(),o(385," En visio-consultation "),r()()(),p(386,"br"),s(387,"div",79),D(388,fr,30,1,"app-vertical-card",80)(389,br,17,1,"app-vertical-card",81),r(),p(390,"br")(391,"br"),s(392,"a",82),o(393," Voir mes tarifs "),r(),s(394,"button",9),h("click",function(){return t.scrollTo("rdv")}),s(395,"mat-icon"),o(396,"calendar_today"),r(),o(397," Prendre rendez-vous "),r()()(),s(398,"section",83),p(399,"div",38),s(400,"div",24)(401,"h2",25),o(402,"Ressources & questions"),r(),s(403,"div",84)(404,"div",85)(405,"div",86)(406,"h4")(407,"mat-icon"),o(408,"play_circle"),r(),o(409," \xC0 visionner "),r(),s(410,"ul",87)(411,"li")(412,"a",88)(413,"mat-icon"),o(414,"movie"),r(),o(415," Avons-nous tous un trauma cach\xE9 ? (ARTE, 2026 | 27 min) "),r()(),s(416,"li")(417,"a",89)(418,"mat-icon"),o(419,"movie"),r(),o(420," Traumatismes, syst\xE8me nerveux et sant\xE9 mentale (Quantum Way | 9 min) "),r()(),s(421,"li")(422,"a",90)(423,"mat-icon"),o(424,"movie"),r(),o(425," La neurobiologie du trauma (FloorPlay coaching | 4 min) "),r()(),s(426,"li")(427,"a",91)(428,"mat-icon"),o(429,"movie"),r(),o(430," La neuroplasticit\xE9 expliqu\xE9e simplement (Infloressens, 2016 | 2 min) "),r()(),s(431,"li")(432,"a",92)(433,"mat-icon"),o(434,"movie"),r(),o(435," L'IFS - 1\xE8re partie (J. Renault, 2020 | 5 min) "),r()(),s(436,"li")(437,"a",93)(438,"mat-icon"),o(439,"movie"),r(),o(440," L'IFS - 2\xE8me partie (J. Renault, 2020 | 6 min) "),r()(),s(441,"li")(442,"a",94)(443,"mat-icon"),o(444,"movie"),r(),o(445," La th\xE9orie de l'attachement (Sprouts, 2023 | 8 min) "),r()()()(),s(446,"div",86)(447,"h4")(448,"mat-icon"),o(449,"menu_book"),r(),o(450," \xC0 lire "),r(),s(451,"ul",87)(452,"li")(453,"a",95)(454,"mat-icon"),o(455,"article"),r(),o(456," Le corps n'oublie rien (B. Van der Kolk) "),r()(),s(457,"li")(458,"a",95)(459,"mat-icon"),o(460,"article"),r(),o(461," R\xE9veiller le tigre : gu\xE9rir le traumatisme (P. Levine) "),r()(),s(462,"li")(463,"a",95)(464,"mat-icon"),o(465,"article"),r(),o(466," Ca n'est pas toi le probl\xE8me, ton cerveau t'a prot\xE9g\xE9e. Je t'explique (BD - Lise Desportes) "),r()(),s(467,"li")(468,"a",95)(469,"mat-icon"),o(470,"article"),r(),o(471," Les liens d'attachement 100 % illustr\xE9s (G. Persiaux et Y. Micoud) "),r()(),s(472,"li")(473,"a",95)(474,"mat-icon"),o(475,"article"),r(),o(476," Les psycho-traumatismes 100 % illustr\xE9s (G. Persiaux et Y. Micoud) "),r()(),s(477,"li")(478,"a",95)(479,"mat-icon"),o(480,"article"),r(),o(481," L'anxi\xE9t\xE9 et la d\xE9pression 100 % illustr\xE9s (G. Persiaux et Y. Micoud) "),r()(),s(482,"li")(483,"a",95)(484,"mat-icon"),o(485,"article"),r(),o(486," Emotions : enqu\xEAte et mode d'emploi (Art-Mella) "),r()(),s(487,"li")(488,"a",95)(489,"mat-icon"),o(490,"article"),r(),o(491," Ce que C\xE9cile sait (C\xE9cile C\xE9e ) "),r()(),s(492,"li")(493,"a",95)(494,"mat-icon"),o(495,"article"),r(),o(496," Les ouvrages de Irvin Yalom,"),p(497,"br"),o(498," sur la relation comme outil th\xE9rapeutique "),r()()()()()(),s(499,"div",96)(500,"h3",97),o(501,"Questions fr\xE9quentes"),r(),ue(502,vr,6,2,"mat-expansion-panel",98,nr),r()()(),s(504,"footer",99)(505,"div",100)(506,"div",101)(507,"h4"),o(508,"Emilie Pommier"),r(),s(509,"p"),o(510,"Restaurer un sentiment durable de s\xE9curit\xE9 int\xE9rieure"),p(511,"br"),o(512," et apaiser vos blessures"),r(),p(513,"br"),s(514,"p")(515,"mat-icon",102),o(516,"phone"),r(),o(517," 06 51 12 36 81 "),r(),s(518,"div",103)(519,"a",104)(520,"mat-icon"),o(521,"facebook"),r()(),s(522,"a",105)(523,"mat-icon"),o(524,"linkedin"),r()(),s(525,"a",106)(526,"mat-icon"),o(527,"email"),r()()()(),s(528,"div",107)(529,"a",108),o(530,"Bienvenue"),r(),s(531,"a",109),o(532,"Mes accompagnements"),r(),s(533,"a",110),o(534,"Mon approche"),r(),s(535,"a",111),o(536,"Me conna\xEEtre"),r(),s(537,"a",112),o(538,"Consultations & tarifs"),r(),s(539,"a",113),o(540,"Ressources & questions"),r(),s(541,"a",114),o(542,"Prendre rendez-vous"),r()(),s(543,"div",115)(544,"p"),o(545,"\xA9 2026 - "),s(546,"a",116),o(547,"Mentions l\xE9gales"),r(),o(548," - "),s(549,"a",117),o(550,"Politique de confidentialit\xE9"),r()(),s(551,"p",118)(552,"mat-icon"),o(553,"info"),r(),o(554," Un suivi th\xE9rapeutique ne se substitue en aucun cas \xE0 un suivi m\xE9dical ou psychiatrique. Nos s\xE9ances s'inscrivent en compl\xE9ment de vos soins habituels, qu'il est essentiel de conserver."),p(555,"br"),o(556," En cas d'urgence, contactez le 15 ou le 3114. "),r()()()()),e&2&&(m(6),x("mobile-open",t.isMobileMenuOpen()),m(26),Y(t.isMobileMenuOpen()?"close":"menu"),m(),x("mobile-open",t.isMobileMenuOpen()),m(51),ne("v",t.siteVersion),m(55),u("imagePosition",t.screenService.isSmallScreen()?"top":"right"),m(23),u("imagePosition",t.screenService.isSmallScreen()?"top":"left"),m(85),u("value",t.selectedTypeSeance()),m(),ge(t.typesSeances),m(3),O(t.selectedTypeSeance().id!="prise-contact"?251:-1),m(),O(t.seanceType()==="distant"||t.selectedTypeSeance().id=="prise-contact"?252:253),m(10),u("minDate",t.getMinDate())("maxDate",t.getMaxDate()),Ie("selected",t.selectedDate),m(),O(t.selectedDate()?263:-1),m(13),u("value",t.nom()),m(4),u("value",t.prenom()),m(6),u("value",t.email()),m(6),u("value",t.telephone()),m(),O(t.selectedDate()&&t.selectedTime()?293:-1),m(4),u("value",t.message()),m(),Ie("ngModel",t.acceptTerms),m(2),u("disabled",!t.isFormValid()),m(54),ge(t.methodPrinciples),m(23),u("value",t.seanceType()),m(11),O(t.seanceType()!="distant"?388:389),m(114),ge(t.faqs))},dependencies:[An,_i,ui,mi,pi,hi,bt,Bn,Ln,gt,at,it,Xn,$n,ni,Zn,ei,ti,Jn,_t,si,ii,ai,vi,bi,Ti,Wt,Ki,lt,$i,wi,aa,hn,ia,sa,un,Et,Pi,Di,Oi,Si,Ei,la,ca,$e,St],styles:[".section-divider[_ngcontent-%COMP%]{width:10%;height:1px;background-color:var(--warm-light);opacity:.5;margin:0 auto 32px}.citation[_ngcontent-%COMP%]{color:var(--primary-500);font-style:italic;font-size:large;font-weight:400;font-family:Roboto,Helvetica Neue,sans-serif;text-align:center;max-width:900px;display:inline-block;margin:20px}.intro-seance[_ngcontent-%COMP%]{color:var(--primary-500)}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%], .accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]   .accompagnement-card[_ngcontent-%COMP%]{background:#fff;border-radius:var(--radius-lg);padding:32px 24px;text-align:center;box-shadow:0 4px 20px #0000000a;transition:transform .3s ease,box-shadow .3s ease}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%]:hover, .accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]   .accompagnement-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 30px #00000014}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .principle-icon[_ngcontent-%COMP%], .consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%]   .consultation-icon[_ngcontent-%COMP%], .accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]   .accompagnement-card[_ngcontent-%COMP%]   .accompagnement-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--primary-500);margin-bottom:16px}.methode-section[_ngcontent-%COMP%]   .focus-areas[_ngcontent-%COMP%], .accompagnements-section[_ngcontent-%COMP%]   .focus-areas[_ngcontent-%COMP%]{background:transparent;border-radius:var(--radius-lg);padding:24px 0;border:none;box-shadow:none}.methode-section[_ngcontent-%COMP%]   .focus-areas[_ngcontent-%COMP%]   .focus-chips[_ngcontent-%COMP%], .accompagnements-section[_ngcontent-%COMP%]   .focus-areas[_ngcontent-%COMP%]   .focus-chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px}mat-chip[_ngcontent-%COMP%]{font-size:small}mat-chip[_ngcontent-%COMP%]:hover{background-color:var(--secondary-200)!important}.main-btn[_ngcontent-%COMP%]{color:var(--secondary-50)!important;padding:10px 30px;height:52px;border:none;background:var(--primary-500)!important}.main-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:6px}.main-btn[_ngcontent-%COMP%]:hover{background:var(--primary-700)}.standard-btn[_ngcontent-%COMP%]{height:52px;text-align:center;font-weight:400;color:var(--warm-dark)!important;background:none!important;border:solid 1px black;margin-left:10px;margin-right:10px}.standard-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.standard-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-500)}.standard-btn[_ngcontent-%COMP%]:disabled{opacity:.7;color:var(--warm-light)}.header-toolbar[_ngcontent-%COMP%]{background:#fdfcfaf2;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 2px 20px #0000000d;position:fixed;top:0;left:0;right:0;z-index:1000;height:70px!important}.header-toolbar[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;height:100%;margin:0 auto;padding:0 16px;box-sizing:border-box}.header-toolbar[_ngcontent-%COMP%]   .header-brand[_ngcontent-%COMP%]{display:flex;width:100vw;align-items:center;z-index:1002}.header-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-size:1.4rem;font-weight:500;color:var(--primary-700);cursor:pointer;transition:color .3s ease;z-index:1002;position:relative}.header-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover{color:var(--primary-900)}.header-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.header-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.95rem;font-weight:400;color:var(--warm-medium)}.header-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:var(--primary-700)}@media(max-width:768px){.header-toolbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{display:none}}.hero-section[_ngcontent-%COMP%]{min-height:100vh;font-family:Playfair Display,serif;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:url(/assets/landingpage.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:100%}@media(max-width:768px){.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]{background-image:url(/assets/landingpage_mobile.jpg)}}.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{position:relative;z-index:1;text-align:center;max-width:1000px;display:flex;flex-direction:column;justify-content:space-between;min-height:100%}.hero-section[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%]{font-family:Playfair Display,serif;overflow:hidden}.hero-section[_ngcontent-%COMP%]   .image-logo[_ngcontent-%COMP%]{max-width:40px!important}.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:3.5rem;margin:30px}.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{color:var(--primary-700)}@media(max-width:768px){.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.5rem}}.hero-section[_ngcontent-%COMP%]   .symptom[_ngcontent-%COMP%]{font-size:small}.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--warm-medium);line-height:1.4;margin-bottom:40px}.hero-section[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%]{font-size:1.4rem;padding:1rem}.hero-section[_ngcontent-%COMP%]   .hero-columns[_ngcontent-%COMP%]{display:flex;gap:40px;justify-content:center;flex-wrap:wrap}.hero-section[_ngcontent-%COMP%]   .hero-columns[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;min-width:280px;max-width:400px;font-size:.95rem}.hero-section[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:20px}.hero-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]{display:flex;gap:32px;justify-content:center;flex-wrap:wrap}.hero-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:var(--warm-medium);font-size:.95rem}.hero-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-500);font-size:20px;width:20px;height:20px}.hero-section[_ngcontent-%COMP%]   .hero-version[_ngcontent-%COMP%]{position:absolute;bottom:12px;right:20px;font-size:.75rem;color:var(--primary-400);opacity:.6}.scroll-indicator[_ngcontent-%COMP%]{position:absolute;bottom:32px;left:50%;transform:translate(-50%);animation:_ngcontent-%COMP%_bounce 2s infinite}.scroll-indicator[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:var(--primary-400)}@keyframes _ngcontent-%COMP%_bounce{0%,20%,50%,80%,to{transform:translate(-50%) translateY(0)}40%{transform:translate(-50%) translateY(-10px)}60%{transform:translate(-50%) translateY(-5px)}}.apropos-section[_ngcontent-%COMP%]{background:var(--secondary-100)}.apropos-section[_ngcontent-%COMP%]   .apropos-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:320px 1fr;gap:48px;align-items:start}@media(max-width:768px){.apropos-section[_ngcontent-%COMP%]   .apropos-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:32px}}.apropos-section[_ngcontent-%COMP%]   .apropos-image[_ngcontent-%COMP%]   img.photo[_ngcontent-%COMP%]{width:100%;max-width:320px;aspect-ratio:3/4;object-fit:cover;border-radius:var(--radius-lg);box-shadow:0 8px 32px #0000001f}.apropos-section[_ngcontent-%COMP%]   .apropos-engagements[_ngcontent-%COMP%]{text-align:left;margin-top:24px}.apropos-section[_ngcontent-%COMP%]   .apropos-engagements[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:12px}.apropos-section[_ngcontent-%COMP%]   .apropos-engagements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:20px}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .apropos-intro[_ngcontent-%COMP%]{color:var(--warm-medium);line-height:1.7}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-bottom:32px}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding:16px;background:var(--secondary-100);border-radius:var(--radius-md)}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--warm-dark);font-size:.9rem;margin-bottom:8px}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:48px;list-style-type:disc;padding-left:16px;margin:0}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .credentials[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:.85rem}.apropos-section[_ngcontent-%COMP%]   .apropos-text[_ngcontent-%COMP%]   .apropos-philosophy[_ngcontent-%COMP%]{padding:20px;background:linear-gradient(135deg,var(--primary-100),var(--secondary-100));border-radius:var(--radius-md);border-left:4px solid var(--primary-400);color:var(--warm-medium);font-size:1rem;line-height:1.7}.apropos-section[_ngcontent-%COMP%]   .apropos-actions[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:32px}.expansion-panel-text[_ngcontent-%COMP%]{text-align:left;border-radius:var(--radius-md)!important;margin-bottom:12px;box-shadow:0 2px 8px #0000000a;background:transparent}.expansion-panel-text[_ngcontent-%COMP%]:last-child{margin-bottom:0}.expansion-panel-text[_ngcontent-%COMP%]     .mat-expansion-panel-header{background:none;border-radius:var(--radius-md)!important}.expansion-panel-text[_ngcontent-%COMP%]     .mat-expansion-panel-header:hover{background:none}.expansion-panel-text[_ngcontent-%COMP%]     .mat-expansion-panel-header.mat-expanded{background:none}.expansion-panel-text[_ngcontent-%COMP%]     .mat-expansion-indicator{color:var(--primary-500)}.expansion-panel-text[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--warm-dark)}.expansion-panel-text[_ngcontent-%COMP%]{box-shadow:none!important;font-family:Roboto,Helvetica Neue,sans-serif;margin-left:-25px}.methode-section[_ngcontent-%COMP%]{background:var(--secondary-100)}.methode-section[_ngcontent-%COMP%]   .methode-intro[_ngcontent-%COMP%]{text-align:center;max-width:700px;margin:0 auto 48px;color:var(--warm-medium);font-size:1.1rem;line-height:1.7}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}@media(max-width:768px){.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]{perspective:1000px;height:400px;cursor:pointer}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden;background:#fff;border-radius:var(--radius-lg);padding:24px;text-align:center;box-shadow:0 4px 20px #0000000a;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-size:1.25rem;font-weight:500;color:var(--warm-dark);margin-bottom:12px}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:.95rem;line-height:1.6;margin-bottom:16px;flex:1;display:flex;align-items:center}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .flip-link[_ngcontent-%COMP%]{color:var(--primary-500);font-size:.9rem;text-decoration:underline;cursor:pointer;margin-top:auto}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{transform:rotateY(180deg);background:linear-gradient(135deg,var(--primary-500) 0%,var(--primary-500) 100%)}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.3;color:#fff;font-size:.95rem;margin-bottom:16px;flex:1;display:flex;align-items:center}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   .flip-link[_ngcontent-%COMP%]{color:#fff;font-size:.9rem;text-decoration:underline;cursor:pointer;margin-top:auto}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card.flipped[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.methode-section[_ngcontent-%COMP%]   .principles-grid[_ngcontent-%COMP%]   .principle-card[_ngcontent-%COMP%]:hover:not(.flipped)   .card-front[_ngcontent-%COMP%]{box-shadow:0 8px 30px #00000014}.methode-section[_ngcontent-%COMP%]   .method-approaches[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin:5px}.methode-section[_ngcontent-%COMP%]   .method-approaches[_ngcontent-%COMP%]   .approach-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:24px;min-width:140px}.methode-section[_ngcontent-%COMP%]   .method-approaches[_ngcontent-%COMP%]   .approach-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:var(--primary-500);text-align:center}.methode-section[_ngcontent-%COMP%]   .methode-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-bottom:48px}.methode-section[_ngcontent-%COMP%]   .methode-details[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]{background:#fff;border-radius:var(--radius-lg);padding:32px}.content-columns[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:stretch}.content-columns[_ngcontent-%COMP%]   .text-column[_ngcontent-%COMP%]{flex:2}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]{flex:1;min-width:180px;max-width:280px;display:flex;flex-direction:column}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px 16px;justify-content:center;align-content:flex-start;padding:16px 8px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word[_ngcontent-%COMP%]{display:inline-block;padding:8px 14px;border-radius:20px;background:color-mix(in srgb,var(--primary-100) 50%,transparent);color:var(--primary-700);font-weight:500;line-height:1.4;transition:all .3s ease;cursor:default}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word[_ngcontent-%COMP%]:hover{background:var(--primary-100);transform:scale(1.05)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.size-xl[_ngcontent-%COMP%]{font-size:1.25rem;padding:10px 18px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.size-lg[_ngcontent-%COMP%]{font-size:1.05rem;padding:8px 16px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.size-md[_ngcontent-%COMP%]{font-size:.9rem;padding:6px 14px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.size-sm[_ngcontent-%COMP%]{font-size:.8rem;padding:5px 12px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.size-xs[_ngcontent-%COMP%]{font-size:.7rem;padding:4px 10px}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation-5[_ngcontent-%COMP%]{transform:rotate(2deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation--5[_ngcontent-%COMP%]{transform:rotate(-2deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation-10[_ngcontent-%COMP%]{transform:rotate(3deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation--10[_ngcontent-%COMP%]{transform:rotate(-3deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation-3[_ngcontent-%COMP%]{transform:rotate(1deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation--3[_ngcontent-%COMP%]{transform:rotate(-1deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation-8[_ngcontent-%COMP%]{transform:rotate(2.5deg)}.content-columns[_ngcontent-%COMP%]   .focus-column[_ngcontent-%COMP%]   .word-cloud[_ngcontent-%COMP%]   .cloud-word.rotation--8[_ngcontent-%COMP%]{transform:rotate(-2.5deg)}.consultations-section[_ngcontent-%COMP%]{background:var(--secondary-50);text-align:center}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]{display:flex;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin-bottom:20px}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .visuel-seance[_ngcontent-%COMP%]{width:100%}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-visuel[_ngcontent-%COMP%]{max-width:300px;border-radius:2%;overflow:hidden;object-fit:cover}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%]{background:none}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%]   .consultation-title[_ngcontent-%COMP%]{font-family:Playfair Display,serif!important;font-size:1.25rem!important;font-weight:500!important;color:var(--warm-dark)!important;margin-bottom:16px}.consultations-section[_ngcontent-%COMP%]   .consultations-grid[_ngcontent-%COMP%]   .consultation-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:.95rem;line-height:1.6;margin:4px 0}.consultations-section[_ngcontent-%COMP%]   .remboursement-info[_ngcontent-%COMP%]{background:#fff;border-radius:var(--radius-lg);padding:24px 32px;margin-bottom:48px;text-align:center}h3[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-size:1.25rem;font-weight:500;color:var(--warm-dark);margin-bottom:12px}.accompagnements-section[_ngcontent-%COMP%]{background:var(--secondary-50)}.accompagnements-section[_ngcontent-%COMP%]   .accompagnements-intro[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:1.1rem;line-height:1.7;text-align:center}.accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:48px}.accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]   .accompagnement-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--warm-medium);line-height:1.7}@media(max-width:768px){.accompagnements-section[_ngcontent-%COMP%]   .accompagnements-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.rdv-section[_ngcontent-%COMP%]   .rdv-intro[_ngcontent-%COMP%]{text-align:center;max-width:600px;color:var(--warm-medium);font-size:1.1rem}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;margin-bottom:40px}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{border-radius:24px;overflow:hidden;box-shadow:0 2px 8px #00000014}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group.mat-button-toggle-checked[_ngcontent-%COMP%]{background:var(--primary-500)}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group.mat-button-toggle-checked[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{color:#fff}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{font-size:.95rem;background:var(--secondary-100)}.rdv-section[_ngcontent-%COMP%]   .seance-type-toggle[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:8px}.rdv-section[_ngcontent-%COMP%]   .seance-type-hint[_ngcontent-%COMP%]{text-align:center;color:var(--warm-medium);font-size:.9rem;font-style:italic;margin:0}.rdv-section[_ngcontent-%COMP%]   .rdv-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px}@media(max-width:900px){.rdv-section[_ngcontent-%COMP%]   .rdv-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]{background:var(--secondary-50);border-radius:var(--radius-lg);padding:24px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-family:Playfair Display,serif;font-size:1.25rem;font-weight:500;color:var(--warm-dark)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-500)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   mat-calendar[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   mat-calendar[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:var(--radius-md)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]{margin-top:24px;padding-top:24px;border-top:1px solid var(--secondary-200)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;color:var(--warm-dark);margin-bottom:16px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:8px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:var(--radius-sm);height:40px;font-size:.9rem;transition:all .2s ease}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-available[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-available[_ngcontent-%COMP%]{background:#fff;color:var(--warm-dark);border:1px solid var(--secondary-200)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-available[_ngcontent-%COMP%]:hover, .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-available[_ngcontent-%COMP%]:hover{background:var(--primary-500);color:#fff;border-color:var(--primary-500)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-unavailable[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-unavailable[_ngcontent-%COMP%]{background:var(--secondary-200);color:var(--warm-light);cursor:not-allowed}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-selected[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slots-grid[_ngcontent-%COMP%]   button.slot-selected[_ngcontent-%COMP%]{background:var(--primary-700)!important;color:#fff!important;border-color:var(--primary-700)!important}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .loading-slots[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .no-slots[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .loading-slots[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .no-slots[_ngcontent-%COMP%]{text-align:center;color:var(--warm-light);font-style:italic;padding:16px 0}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slot-duration[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .time-slots[_ngcontent-%COMP%]   .slot-duration[_ngcontent-%COMP%]{font-weight:400;font-size:.85rem;color:var(--warm-light)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:500px){.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .selected-datetime[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .selected-datetime[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:16px;background:var(--primary-100);border-radius:var(--radius-sm);color:var(--primary-900);font-weight:500;margin-bottom:16px}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .selected-datetime[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .selected-datetime[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-700)}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]{margin-bottom:24px;text-align:left}.rdv-section[_ngcontent-%COMP%]   .calendar-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]   .mdc-label[_ngcontent-%COMP%], .rdv-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .appointment-form[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]   .mdc-label[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:.9rem}.rdv-section[_ngcontent-%COMP%]   .practical-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px}.rdv-section[_ngcontent-%COMP%]   .practical-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:24px;background:var(--secondary-50);border-radius:var(--radius-md)}.rdv-section[_ngcontent-%COMP%]   .practical-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-500);font-size:28px;width:28px;height:28px;margin-top:2px}.rdv-section[_ngcontent-%COMP%]   .practical-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--warm-dark);font-size:.95rem;display:block;margin-bottom:4px}.rdv-section[_ngcontent-%COMP%]   .practical-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--warm-medium);font-size:.85rem;line-height:1.5;margin:0}.submit-button[_ngcontent-%COMP%]:not([disabled]){background:var(--primary-700);color:#fff;border-color:var(--primary-700)}.submit-button[_ngcontent-%COMP%]{height:50px;width:100%}.ressources-section[_ngcontent-%COMP%]{background:var(--secondary-100)}.ressources-section[_ngcontent-%COMP%]   .ressources-intro[_ngcontent-%COMP%]{margin-bottom:48px}.ressources-section[_ngcontent-%COMP%]   .ressources-intro.ressources-spacing[_ngcontent-%COMP%]{padding-top:24px}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;max-width:900px;margin:0 auto}@media(max-width:768px){.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-block[_ngcontent-%COMP%]{background:var(--secondary-50);border-radius:var(--radius-lg);padding:24px}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-family:Playfair Display,serif;font-size:1.25rem;font-weight:500;color:var(--primary-700);margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid var(--primary-200)}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-500)}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:left}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:12px}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--warm-medium);text-decoration:none;font-size:.95rem;padding:8px 12px;border-radius:var(--radius-sm);transition:all .2s ease}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--primary-400)}.ressources-section[_ngcontent-%COMP%]   .ressources-grid[_ngcontent-%COMP%]   .ressource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--primary-500) 10%,transparent);color:var(--primary-700)}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]{margin-top:48px}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-respons[_ngcontent-%COMP%]{text-align:left;font-size:small}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]{text-align:left;border-radius:var(--radius-md)!important;margin-bottom:12px;box-shadow:0 2px 8px #0000000a;background:transparent}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]:last-child{margin-bottom:0}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header{background:none;border-radius:var(--radius-md)!important}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header:hover{background:none}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header.mat-expanded{background:none}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]     .mat-expansion-indicator{color:var(--primary-500)}.ressources-section[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-panel[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--warm-dark)}.footer[_ngcontent-%COMP%]{background:var(--neutral-dark);color:var(--neutral-light);padding:64px 24px 32px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fffc;text-decoration:none;font-size:.9rem;transition:color .2s ease}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-300)}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px}@media(max-width:768px){.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:32px}}.footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-size:1.25rem;margin-bottom:8px}.footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ffffffb3;font-size:.9rem}.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.footer[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center}.footer[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#ffffff1a;color:#fffc;transition:all .3s ease}.footer[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.footer[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--primary);color:#fff;transform:translateY(-2px)}.footer[_ngcontent-%COMP%]   .footer-legal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff9;font-size:.85rem;margin-bottom:8px}.footer[_ngcontent-%COMP%]   .footer-legal[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:8px;font-size:.8rem;color:#ffffff80;padding:12px;background:#ffffff0d;border-radius:var(--radius-sm)}.footer[_ngcontent-%COMP%]   .footer-legal[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;margin-top:2px}.mat-mdc-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__leading[_ngcontent-%COMP%], .mat-mdc-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__notch[_ngcontent-%COMP%], .mat-mdc-form-field[_ngcontent-%COMP%]   .mdc-notched-outline__trailing[_ngcontent-%COMP%]{border-color:var(--secondary-200)!important}.mat-mdc-checkbox[_ngcontent-%COMP%]{--mdc-checkbox-selected-checkmark-color: white;--mdc-checkbox-selected-focus-icon-color: var(--primary-500);--mdc-checkbox-selected-hover-icon-color: var(--primary-700);--mdc-checkbox-selected-icon-color: var(--primary-500);--mdc-checkbox-selected-pressed-icon-color: var(--primary-700)}.error-snackbar[_ngcontent-%COMP%]{--mdc-snackbar-container-color: #d32f2f;--mdc-snackbar-supporting-text-color: white}.success-snackbar[_ngcontent-%COMP%]{--mdc-snackbar-container-color: var(--primary-700);--mdc-snackbar-supporting-text-color: white}.select-lieu[_ngcontent-%COMP%]{width:100%;max-width:500px}.select-type-seance[_ngcontent-%COMP%]{width:100%;max-width:500px;margin-top:1rem}"]})};export{ma as App};
