
/******************** Begin ./../javascripts/jquery-ui-1.7.3.custom.min.js ********************/
/*
 * jQuery UI 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.3",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(j,k){return this.each(function(){if(!k){if(!j||c.filter(j,[this]).length){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")})}}return i.call(c(this),j,k)})},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Tabs 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */(function(c){var b=0,a=0;c.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(d,e){if(d=="selected"){if(this.options.collapsible&&e==this.options.selected){return}this.select(e)}else{this.options[d]=e;if(d=="deselectable"){this.options.collapsible=e}this._tabify()}},_tabId:function(d){return d.title&&d.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+(++b)},_sanitizeSelector:function(d){return d.replace(/:/g,"\\:")},_cookie:function(){var d=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++a));return c.cookie.apply(null,[d].concat(c.makeArray(arguments)))},_ui:function(e,d){return{tab:e,panel:d,index:this.anchors.index(e)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var d=c(this);d.html(d.data("label.tabs")).removeData("label.tabs")})},_tabify:function(q){this.list=this.element.children("ul:first");this.lis=c("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return c("a",this)[0]});this.panels=c([]);var r=this,f=this.options;var e=/^#.+/;this.anchors.each(function(u,o){var s=c(o).attr("href");var v=s.split("#")[0],w;if(v&&(v===location.toString().split("#")[0]||(w=c("base")[0])&&v===w.href)){s=o.hash;o.href=s}if(e.test(s)){r.panels=r.panels.add(r._sanitizeSelector(s))}else{if(s!="#"){c.data(o,"href.tabs",s);c.data(o,"load.tabs",s.replace(/#.*$/,""));var y=r._tabId(o);o.href="#"+y;var x=c("#"+y);if(!x.length){x=c(f.panelTemplate).attr("id",y).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(r.panels[u-1]||r.list);x.data("destroy.tabs",true)}r.panels=r.panels.add(x)}else{f.disabled.push(u)}}});if(q){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(f.selected===undefined){if(location.hash){this.anchors.each(function(s,o){if(o.hash==location.hash){f.selected=s;return false}})}if(typeof f.selected!="number"&&f.cookie){f.selected=parseInt(r._cookie(),10)}if(typeof f.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){f.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}f.selected=f.selected||0}else{if(f.selected===null){f.selected=-1}}f.selected=((f.selected>=0&&this.anchors[f.selected])||f.selected<0)?f.selected:0;f.disabled=c.unique(f.disabled.concat(c.map(this.lis.filter(".ui-state-disabled"),function(s,o){return r.lis.index(s)}))).sort();if(c.inArray(f.selected,f.disabled)!=-1){f.disabled.splice(c.inArray(f.selected,f.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(f.selected>=0&&this.anchors.length){this.panels.eq(f.selected).removeClass("ui-tabs-hide");this.lis.eq(f.selected).addClass("ui-tabs-selected ui-state-active");r.element.queue("tabs",function(){r._trigger("show",null,r._ui(r.anchors[f.selected],r.panels[f.selected]))});this.load(f.selected)}c(window).bind("unload",function(){r.lis.add(r.anchors).unbind(".tabs");r.lis=r.anchors=r.panels=null})}else{f.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[f.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(f.cookie){this._cookie(f.selected,f.cookie)}for(var j=0,p;(p=this.lis[j]);j++){c(p)[c.inArray(j,f.disabled)!=-1&&!c(p).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(f.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(f.event!="mouseover"){var h=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var l=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){h("hover",c(this))});this.lis.bind("mouseout.tabs",function(){l("hover",c(this))});this.anchors.bind("focus.tabs",function(){h("focus",c(this).closest("li"))});this.anchors.bind("blur.tabs",function(){l("focus",c(this).closest("li"))})}var d,k;if(f.fx){if(c.isArray(f.fx)){d=f.fx[0];k=f.fx[1]}else{d=k=f.fx}}function g(i,o){i.css({display:""});if(c.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var m=k?function(i,o){c(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(k,k.duration||"normal",function(){g(o,k);r._trigger("show",null,r._ui(i,o[0]))})}:function(i,o){c(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");r._trigger("show",null,r._ui(i,o[0]))};var n=d?function(o,i){i.animate(d,d.duration||"normal",function(){r.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");g(i,d);r.element.dequeue("tabs")})}:function(o,i,s){r.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");r.element.dequeue("tabs")};this.anchors.bind(f.event+".tabs",function(){var o=this,u=c(this).closest("li"),i=r.panels.filter(":not(.ui-tabs-hide)"),s=c(r._sanitizeSelector(this.hash));if((u.hasClass("ui-tabs-selected")&&!f.collapsible)||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||r._trigger("select",null,r._ui(this,s[0]))===false){this.blur();return false}f.selected=r.anchors.index(this);r.abort();if(f.collapsible){if(u.hasClass("ui-tabs-selected")){f.selected=-1;if(f.cookie){r._cookie(f.selected,f.cookie)}r.element.queue("tabs",function(){n(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(f.cookie){r._cookie(f.selected,f.cookie)}r.element.queue("tabs",function(){m(o,s)});r.load(r.anchors.index(this));this.blur();return false}}}if(f.cookie){r._cookie(f.selected,f.cookie)}if(s.length){if(i.length){r.element.queue("tabs",function(){n(o,i)})}r.element.queue("tabs",function(){m(o,s)});r.load(r.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(c.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var d=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=c.data(this,"href.tabs");if(e){this.href=e}var f=c(this).unbind(".tabs");c.each(["href","load","cache"],function(g,h){f.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(c.data(this,"destroy.tabs")){c(this).remove()}else{c(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(d.cookie){this._cookie(null,d.cookie)}},add:function(g,f,e){if(e===undefined){e=this.anchors.length}var d=this,i=this.options,k=c(i.tabTemplate.replace(/#\{href\}/g,g).replace(/#\{label\}/g,f)),j=!g.indexOf("#")?g.replace("#",""):this._tabId(c("a",k)[0]);k.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var h=c("#"+j);if(!h.length){h=c(i.panelTemplate).attr("id",j).data("destroy.tabs",true)}h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(e>=this.lis.length){k.appendTo(this.list);h.appendTo(this.list[0].parentNode)}else{k.insertBefore(this.lis[e]);h.insertBefore(this.panels[e])}i.disabled=c.map(i.disabled,function(m,l){return m>=e?++m:m});this._tabify();if(this.anchors.length==1){k.addClass("ui-tabs-selected ui-state-active");h.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[0],d.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[e],this.panels[e]))},remove:function(d){var f=this.options,g=this.lis.eq(d).remove(),e=this.panels.eq(d).remove();if(g.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(d+(d+1<this.anchors.length?1:-1))}f.disabled=c.map(c.grep(f.disabled,function(j,h){return j!=d}),function(j,h){return j>=d?--j:j});this._tabify();this._trigger("remove",null,this._ui(g.find("a")[0],e[0]))},enable:function(d){var e=this.options;if(c.inArray(d,e.disabled)==-1){return}this.lis.eq(d).removeClass("ui-state-disabled");e.disabled=c.grep(e.disabled,function(g,f){return g!=d});this._trigger("enable",null,this._ui(this.anchors[d],this.panels[d]))},disable:function(e){var d=this,f=this.options;if(e!=f.selected){this.lis.eq(e).addClass("ui-state-disabled");f.disabled.push(e);f.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[e],this.panels[e]))}},select:function(d){if(typeof d=="string"){d=this.anchors.index(this.anchors.filter("[href$="+d+"]"))}else{if(d===null){d=-1}}if(d==-1&&this.options.collapsible){d=this.options.selected}this.anchors.eq(d).trigger(this.options.event+".tabs")},load:function(g){var e=this,i=this.options,d=this.anchors.eq(g)[0],f=c.data(d,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&c.data(d,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(g).addClass("ui-state-processing");if(i.spinner){var h=c("span",d);h.data("label.tabs",h.html()).html(i.spinner)}this.xhr=c.ajax(c.extend({},i.ajaxOptions,{url:f,success:function(k,j){c(e._sanitizeSelector(d.hash)).html(k);e._cleanup();if(i.cache){c.data(d,"cache.tabs",true)}e._trigger("load",null,e._ui(e.anchors[g],e.panels[g]));try{i.ajaxOptions.success(k,j)}catch(l){}e.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(e,d){this.anchors.eq(e).removeData("cache.tabs").data("load.tabs",d)},length:function(){return this.anchors.length}});c.extend(c.ui.tabs,{version:"1.7.3",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});c.extend(c.ui.tabs.prototype,{rotation:null,rotate:function(f,h){var d=this,i=this.options;var e=d._rotate||(d._rotate=function(j){clearTimeout(d.rotation);d.rotation=setTimeout(function(){var k=i.selected;d.select(++k<d.anchors.length?k:0)},f);if(j){j.stopPropagation()}});var g=d._unrotate||(d._unrotate=!h?function(j){if(j.clientX){d.rotate(null)}}:function(j){t=i.selected;e()});if(f){this.element.bind("tabsshow",e);this.anchors.bind(i.event+".tabs",g);e()}else{clearTimeout(d.rotation);this.element.unbind("tabsshow",e);this.anchors.unbind(i.event+".tabs",g);delete this._rotate;delete this._unrotate}}})})(jQuery);;
/********************   End ./../javascripts/jquery-ui-1.7.3.custom.min.js ********************/


/******************** Begin ./../javascripts/superfish.js  ********************/

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $([''].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);

/********************   End ./../javascripts/superfish.js  ********************/

