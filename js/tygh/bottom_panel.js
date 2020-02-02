!function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=29)}({1:function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}o.d(e,"a",function(){return a})},29:function(t,e,o){"use strict";o.r(e);var n,a=o(1),i={bottomPanelSelector:"#bp_bottom_panel",bottomPanelHiddenClass:"bp-panel--hidden",offBottomPanelSelector:"#bp_off_bottom_panel",bottomButtonsContainerSelector:"#bp_bottom_buttons",bottomButtonsSelector:"[data-bp-bottom-buttons]",bottomButtonsActiveClass:"bp-bottom-buttons--active",bottomButtonDisabledClass:"bp-bottom-button--disabled",onBottomPanelSelector:"#bp_on_bottom_panel",navItemSpecificSelector:'[data-bp-nav-item="{placeholder}"]',navItemSelector:"[data-bp-nav-item]",navItemActiveClass:"bp-nav__item--active",navActiveSelector:"#bp-nav__active",navActiveActivatedClass:"bp-nav__active--activated",modesItemSpecificSelector:'[data-bp-modes-item="{placeholder}"]',modesItemSelector:"[data-bp-modes-item]",modesItemNotDisabledSelector:"[data-bp-modes-item]:not(.bp-modes__item--disabled)",modesItemActiveClass:"bp-modes__item--active",modesActiveSelector:"#bp-modes__active",modesActiveClass:"bp-modes__active--{placeholder}",modesActiveClasses:["bp-modes__active--preview","bp-modes__active--build","bp-modes__active--text","bp-modes__active--theme"],dropdownSelector:'[data-bp-toggle="dropdown"]',dropdownMenuClass:"bp-dropdown-menu",dropdownMenuOpenClass:"bp-dropdown-menu--open",dropdownMenuItemClass:"bp-dropdown-menu__item",sidebarsSelector:"[data-bp-sidebar]",sidebarPaddingClass:"bp-sidebar--padding",themeEditorSelector:"#theme_editor",tyghMainContainerPaddingClass:"bp-tygh-main-container--padding"},s={bottomPanel:{},bottomButtonsContainer:{},sidebar:{},mode:"default",isBottomPanelOpen:!0,navActive:"customer",modesActive:"preview",bottomButtons:[],dropdowns:[],nav:[],modes:[]},c=function(){!function(t,e){e(document).ready(function(){e("#"+t.container).addClass(i.tyghMainContainerPaddingClass)})}(Tygh,Tygh.$)},d=function(){!function(t,e){e(document).ready(function(){e("#"+t.container).removeClass(i.tyghMainContainerPaddingClass)})}(Tygh,Tygh.$)},r=function(){$(s.bottomButtonsContainer).addClass(i.bottomButtonsActiveClass),$(s.bottomButtons).each(function(){$(this).removeClass(i.bottomButtonDisabledClass+" "+i.bottomButtonDisabledClass+"-"+$(this).data("bpBottomButtons"))})},l=function(){$(s.bottomButtonsContainer).removeClass(i.bottomButtonsActiveClass),$(s.bottomButtons).each(function(){$(this).addClass(i.bottomButtonDisabledClass+" "+i.bottomButtonDisabledClass+"-"+$(this).data("bpBottomButtons"))})},m={_activate:function(){s.isBottomPanelOpen=!0,l(),m._show(),c(),m._setOpenCookie(!0)},_deactivate:function(){s.isBottomPanelOpen=!1,r(),m._hide(),d(),m._setOpenCookie(!1)},_hide:function(){s.bottomPanel.addClass(i.bottomPanelHiddenClass)},_show:function(){s.bottomPanel.removeClass(i.bottomPanelHiddenClass)},_setOpenCookie:function(t){$.cookie.set("pb_is_bottom_panel_open",t)},_getCookie:function(){var t=$.cookie.get("pb_is_bottom_panel_open");s.isBottomPanelOpen=t||!0},_addActivateListeners:function(){$(Tygh.doc).on("click",i.onBottomPanelSelector,function(){return m._activate()})},_addDeactivateListeners:function(){$(Tygh.doc).on("click",i.offBottomPanelSelector,function(){return m._deactivate()})}},u={_setActive:function(t){t&&(s.navActive=t.data("bpNavItem")),$(s.bottomPanel).data("navActive",s.navActive),u._setWidth(),u._setPosition(),u._setClass(t)},_getNav:function(){$(s.bottomPanel).find(i.navItemSelector).each(function(){s.nav.push($(this))})},_setWidth:function(){$(i.navActiveSelector).width($(s.bottomPanel).find(i.navItemSpecificSelector.replace("{placeholder}",s.navActive)).outerWidth())},_setPosition:function(){$(i.navActiveSelector).css("transform","translate("+$(s.bottomPanel).find(i.navItemSpecificSelector.replace("{placeholder}",s.navActive)).position().left+"px)")},_setClass:function(t){$(i.navActiveSelector).addClass(i.navActiveActivatedClass),t&&($(s.nav).each(function(){$(this).removeClass(i.navItemActiveClass)}),$(t).addClass(i.navItemActiveClass))},_addSetActiveListeners:function(){$(Tygh.doc).on("click",i.navItemSelector,function(t){return u._setActive($(this))})}},p={_setActive:function(t){t&&(s.modesActive=t.data("bpModesItem")),$(s.bottomPanel).data("modesActive",s.modesActive),p._setPosition(),p._setClass(t)},_getButtons:function(){$(s.bottomPanel).find(i.modesItemSelector).each(function(){s.modes.push($(this))})},_setPosition:function(){$(i.modesActiveSelector).css("transform","translate("+$(s.bottomPanel).find(i.modesItemSpecificSelector.replace("{placeholder}",s.modesActive)).position().left+"px)")},_setClass:function(t){$(i.modesActiveSelector).removeClass(i.modesActiveClasses.join(" ")).addClass(i.modesActiveClass.replace("{placeholder}",s.modesActive)),t&&($(s.modes).each(function(){$(this).removeClass(i.modesItemActiveClass)}),$(t).addClass(i.modesItemActiveClass))},_addSetActiveListeners:function(){$(Tygh.doc).on("click",i.modesItemNotDisabledSelector,function(t){return p._setActive($(this))})}},b=function(){$(s.bottomPanel).find(i.dropdownSelector).each(function(){s.dropdowns.push($(this).parent()),$(this).on("click",function(){var t=$(this);$(s.dropdowns).each(function(){$(this)[0]!==t.parent()[0]&&$(this).children("div").removeClass(i.dropdownMenuOpenClass)}),$(this).parent().children("div").toggleClass(i.dropdownMenuOpenClass)}),$(this).on("focusout",function(t){$(t.relatedTarget).length&&$(t.relatedTarget).hasClass(i.dropdownMenuItemClass)||$(s.dropdowns).each(function(){$(this).children("div").removeClass(i.dropdownMenuOpenClass)})}),$(Tygh.doc).on("click","."+i.dropdownMenuItemClass,function(){$(s.dropdowns).each(function(){$(this).children("."+i.dropdownMenuClass).removeClass(i.dropdownMenuOpenClass)})})})},v={_addLoadedEventHandler:function(){$.ceEvent("on","ce.themeeditor.loaded",function(){s.sidebars=$(i.sidebarsSelector),v._setSidebarsPadding()})},_setSidebarsPadding:function(){$(s.sidebars).each(function(){$(this).addClass(i.sidebarPaddingClass)})}},f={init:function(){n||(s.bottomPanel=$(i.bottomPanelSelector),s.bottomButtonsContainer=$(i.bottomButtonsContainerSelector),s.mode=s.bottomPanel.data("bpMode"),s.isBottomPanelOpen=s.bottomPanel.data("bpIsBottomPanelOpen"),s.navActive=s.bottomPanel.data("bpNavActive"),s.modesActive=s.bottomPanel.data("bpModesActive"),s.bottomButtons=s.bottomButtonsContainer.find(i.bottomButtonsSelector),s.dropdowns=[],s.modes=[],m._getCookie(),m._addActivateListeners(),m._addDeactivateListeners(),u._getNav(),u._setActive(),u._addSetActiveListeners(),b(),$(s.bottomPanel).find(i.modesItemSelector).length&&(p._getButtons(),p._setActive(),p._addSetActiveListeners()),i.themeEditorSelector.length&&v._addLoadedEventHandler(),n=!0)}};o.d(e,"methods",function(){return h});var h={init:f.init,defaults:i};$.fn.ceBottomPanel=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==Object(a.a)(t)&&t?void $.error("ty.bottom_panel: method "+t+" does not exist"):h.init.apply(this,arguments)},$.ceEvent("one","ce.commoninit",function(t){t=$(t||_.doc);var e=$("[data-ca-bottom-pannel]",t);e.length&&e.ceBottomPanel()})}});