(()=>{var e,t={2152:(e,t,n)=>{"use strict";const r=window.wp.element,l=window.wp.i18n,o=window.wp.components,a=window.wp.blocks;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var c=n(4184),s=n.n(c),m=n(9588),u=n.n(m),d=n(8913),g=n.n(d);const h=window.wp.data,v=window.wp.compose,p=window.wp.blockEditor,b=window.lodash,f=window.wp.hooks,w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/testimonials","category":"gutenify","title":"Testimonials","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"textColor":"","padding":{"desktop":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}}},"isSaved":{"type":"boolean","default":false},"layout":{"type":"string","default":"layout-1"},"containerSize":{"type":"string","default":"center"},"columnSize":{"type":"number","default":2},"hideRating":{"type":"boolean","default":false}},"supports":{"anchor":true,"html":false,"align":["wide","full"]},"editorScript":["gutenify--testimonials"],"editorStyle":["gutenify--testimonials--editor"],"style":["gutenify--testimonials--frontend"]}'),{name:y}=w,E={name:y,blockId:y.replace("/","--"),hookPrefix:"testimonials"},k={pluginMainSlug:"gutenify",pluginMainCamelCaseName:"gutenify",pluginMainFunctionPrefix:"gutenify"},{hookPrefix:C,blockId:x,name:z}=E,{pluginMainSlug:$}=k;(0,f.addFilter)(`${$}--inline-styles--${x}`,`${$}--inline-styles--${x}--button`,(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const{attributes:r,name:l}=t;if(l!==z)return e;const{blockAdvanceOptions:o,blockClientId:a}=r;n=n||`.gutenify-section-${a}`;let i="";i+=(0,b.has)(o,"textColor")&&!(0,b.isEmpty)(o.textColor)?`color: ${o.textColor};`:"",i+=(0,b.has)(o,"backgroundColor")&&!(0,b.isEmpty)(o.backgroundColor)?`background: ${o.backgroundColor};`:"",(0,b.has)(o,"backgroundGradient")&&!(0,b.isEmpty)(o.backgroundGradient)&&(i+=`background: ${o.backgroundGradient};`),i+=(0,b.has)(o,"borderColor")&&!(0,b.isEmpty)(o.borderColor)?`border-color: ${o.borderColor};`:"",i+=(0,b.has)(o,"borderWidth")&&o.borderWidth>0?`border-width: ${o.borderWidth}px;`:"",i+=(0,b.has)(o,"borderWidth")&&o.borderWidth>0?"border-style: solid;":"",i+=(0,b.has)(o,"borderRadius")&&!(0,b.isEmpty)(o.borderRadius)?`border-radius: ${o.borderRadius};`:"",i&&(e+=`${n} { ${i} }`);let c="";return c+=(0,b.has)(o,"hoverTextColor")&&!(0,b.isEmpty)(o.hoverTextColor)?`color: ${o.hoverTextColor};`:"",c+=(0,b.has)(o,"hoverBackgroundColor")&&!(0,b.isEmpty)(o.hoverBackgroundColor)?`background: ${o.hoverBackgroundColor};`:"",(0,b.has)(o,"hoverBackgroundGradient")&&!(0,b.isEmpty)(o.hoverBackgroundGradient)&&(c+=`background: ${o.hoverBackgroundGradient};`),c+=(0,b.has)(o,"hoverBorderColor")&&!(0,b.isEmpty)(o.hoverBorderColor)?`border-color: ${o.hoverBorderColor};`:"",c&&(e+=`${n}:hover { ${c} }`),(0,f.applyFilters)(`gutenify--${C}--inline-styles`,e,t)}));const A=e=>{let{tabs:t=[]}=e;const[{currentTab:n},l]=(0,r.useState)({currentTab:!1});return(0,r.createElement)("div",{className:"gutenify-accordion-wrapper"},t.map((e=>{const t=e.label,a=n===e.name;let i="gutenify-accordion-item";return i+=a?" gutenify-accordion-item-active":"",(0,r.createElement)("div",{className:i,key:`gutenify-accordion-item-${e.name}`},(0,r.createElement)("button",{onClick:()=>{l({currentTab:n===e.name?"":e.name})},className:"gutenify-accordion-item-heading"},(0,r.createElement)("div",{className:"gutenify-accordion-item-heading-arrow"},(0,r.createElement)(o.Icon,{icon:a?"arrow-down-alt2":"arrow-right-alt2"})),(0,r.createElement)("div",{className:"gutenify-accordion-item-label"},(0,r.createElement)(t,null))),(0,r.createElement)("div",{className:"gutenify-accordion-item-content"}," ",e.cb()))})))},B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/testimonial","category":"gutenify","title":"Testimonial","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"backgroundColor":"#ffffff"}},"quote":{"type":"string","default":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est massa. Sed enim massa, mattis at libero nec, bibendum ultricies augue."},"layout":{"type":"string","default":"layout-1"}},"editorScript":["gutenify--testimonial"],"editorStyle":["gutenify--testimonial--editor"],"style":["gutenify--testimonial--frontend"]}'),{name:_}=B,{pluginMainFunctionPrefix:S}=k,{plugin_directory_url:V}=window[`_${S}_vars`],M={name:_,blockId:_.replace("/","--"),hookPrefix:"testimonial",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",ratingAlign:"center",thumbnailUrl:`${V}/assets/images/testimonial-layouts/layout-1.png`},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",ratingAlign:"left",thumbnailUrl:`${V}/assets/images/testimonial-layouts/layout-2.png`},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"left",ratingAlign:"left",thumbnailUrl:`${V}/assets/images/testimonial-layouts/layout-3.png`}]},{pluginMainSlug:H,pluginMainFunctionPrefix:O}=k,{plugin_directory_url:G}=window[`_${O}_vars`],I=e=>{let{layouts:t,label:n="Layouts",value:l,onChange:o,blockName:a}=e;t=(0,f.applyFilters)(`${H}--layouts--${a}`,t);const i=a.replace(new RegExp(H+"--","gi"),"");return(0,r.createElement)(r.Fragment,null,t&&t.length?(0,r.createElement)("div",{className:`${H}-template-browser`},(0,r.createElement)("h2",null,n),(0,r.createElement)("ul",null,t.map((e=>{let t=`${H}-template-browser-item`;return l===e.name&&(t+=` ${H}-template-browser-item-active`),(0,r.createElement)("li",{className:t,key:e.name},(0,r.createElement)("button",{className:`${H}-template-browser-selector`,onClick:()=>{o(e)}},(0,r.createElement)("img",{src:null!=e&&e.thumbnailUrl?e.thumbnailUrl:`${G}/assets/images/layouts/${i}/${e.name}.png`,alt:e.name}),(0,r.createElement)("small",null,e.label)))})))):"")},{layouts:P}=M,{hookPrefix:N,blockId:j}=E,{pluginMainSlug:L}=k;(0,f.addFilter)(`${L}--inspector-controls--${j}--content`,`${L}--inspector-controls--${j}--content--content-basic`,((e,t)=>[...e,(0,r.createElement)(r.Fragment,{key:`${L}--inspector-controls--${j}--content--content-basic`},(0,r.createElement)(A,{tabs:[{name:"testimonials",initialOpen:!0,label:()=>(0,l.__)("Testimonials"),cb:()=>(0,r.createElement)(r.Fragment,null,(0,f.applyFilters)(`${L}--inspector-controls--${j}--content-item`,[],t))}]}))])),(0,f.addFilter)(`${L}--inspector-controls--${j}--content-item`,`${L}--inspector-controls--${j}--content--layout`,((e,t)=>{const{attributes:n,setAttributes:o,updateInnerBlocks:a}=t,{layout:i}=n;return[...e,(0,r.createElement)(r.Fragment,{key:`${L}--inspector-controls--${j}--content--layout`},(0,r.createElement)(I,{label:(0,l.__)("Layout"),layouts:P,value:i,blockName:N,onChange:e=>{const n={layout:e.name,ratingAlign:e.ratingAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};o(n),((e,t)=>{const{clientId:n}=t;(0,h.select)("core/block-editor").getBlocksByClientId(n)[0].innerBlocks.forEach((function(t){"gutenify/testimonial"===t.name&&((0,h.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{layout:e.name,titleAlign:e.titleAlign,imageAlign:e.imageAlign,ratingAlign:e.ratingAlign}),(0,h.select)("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks.forEach((function(t){"core/image"===t.name&&(0,h.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.imageAlign}),"core/heading"===t.name&&(0,h.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlign:e.titleAlign}),"core/paragraph"===t.name&&(0,h.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.titleAlign}),"gutenify/star-rating"===t.name&&(0,h.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlignment:e.ratingAlign})})))}))})(e,t)}}))]})),(0,f.addFilter)(`${L}--inspector-controls--${j}--content-item`,`${L}--inspector-controls--${j}--content--columns`,((e,t)=>{const{attributes:n,setAttributes:a}=t,{columnSize:i}=n;return[...e,(0,r.createElement)(r.Fragment,{key:`${L}--inspector-controls--${j}--content--columns`},(0,r.createElement)(o.RangeControl,{value:i,label:(0,l.__)("Columns"),min:1,max:(0,f.applyFilters)(`${L}--${j}--max-columns`,4),step:1,onChange:e=>{a({columnSize:e})}}))]}));const T=e=>{const{clearable:t=!0}=e,{colors:n}=(0,h.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,r.createElement)(o.BaseControl,{label:e.label,id:"textcolor-1"},(0,r.createElement)(o.ColorPalette,{colors:n,value:e.value,onChange:t=>{e.onChange(t)},clearable:t}))},F=e=>{const{clearable:t=!0}=e,{colors:n,gradients:l}=(0,h.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,r.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,r.createElement)(p.__experimentalColorGradientControl,{label:e.label,colorValue:e.colorValue,gradientValue:e.gradientValue,colors:n,gradients:l,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:t=>{if((0,b.isEmpty)(t))return;const n={backgroundColor:t,backgroundGradient:void 0};e.onChange(n)},onGradientChange:t=>{if((0,b.isEmpty)(t))return;const n={backgroundGradient:t,backgroundColor:void 0};e.onChange(n)},clearable:!1}),t&&(0,r.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,r.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{e.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))},{blockId:R}=E,{pluginMainSlug:W}=k;(0,f.addFilter)(`${W}--inspector-controls--${R}--style`,`${W}--inspector-controls--${R}--style--opitons`,((e,t)=>{const{attributes:n,setAttributes:a}=t,{blockAdvanceOptions:i}=n;return[...e,(0,r.createElement)(r.Fragment,{key:`gutenify-block-${R}-options-tab-content-basic`},(0,r.createElement)(A,{tabs:[{name:"testimonials",initialOpen:!0,label:()=>(0,l.__)("Testimonials Style"),cb:()=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(o.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,l.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,l.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,r.createElement)(r.Fragment,null,"normal"===e.name&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(T,{label:(0,l.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,textColor:e}};a(t)},value:i.textColor}),(0,r.createElement)(F,{label:(0,l.__)("Background Color"),colorValue:i.backgroundColor,gradientValue:i.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,...e}};a(t)}}),(0,r.createElement)(T,{label:(0,l.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,borderColor:e}};a(t)},value:i.borderColor})),"hover"===e.name&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(T,{label:(0,l.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverTextColor:e}};a(t)},value:i.hoverTextColor}),(0,r.createElement)(F,{label:(0,l.__)("Background Color"),colorValue:i.hoverBackgroundColor,gradientValue:i.hoverBackgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient}};a(t)}}),(0,r.createElement)(T,{label:(0,l.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBorderColor:e}};a(t)},value:i.hoverBorderColor})),(0,r.createElement)(o.__experimentalNumberControl,{label:(0,l.__)("Border Width"),value:i.borderWidth,onChange:e=>{const t={blockAdvanceOptions:{...i,borderWidth:e}};a(t)},min:0,max:300}),(0,r.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Border Radius"),value:i.borderRadius,onChange:e=>{const t={blockAdvanceOptions:{...i,borderRadius:e}};a(t)},min:0,max:300}),(0,r.createElement)(o.__experimentalDivider,null)))))}]}))]}));const U=e=>{const{children:t,name:n,className:l}=e,o=n.replace("/","-")+"-section",a=s()(o,l);return(0,r.createElement)("div",{className:a},t)},Z=["gutenify/testimonial"],D=u()((e=>g()(e,(()=>["gutenify/testimonial",{className:"has-shadow-dark"}])))),J=(0,v.compose)([(0,h.withDispatch)(((e,t)=>{const{clientId:n}=t;return{updateInnerBlocks(t){(0,h.select)("core/block-editor").getBlocksByClientId(n)[0].innerBlocks.forEach((function(n){"gutenify/testimonial"===n.name&&(e("core/block-editor").updateBlockAttributes(n.clientId,{layout:t.name,titleAlign:t.titleAlign,imageAlign:t.imageAlign,ratingAlign:t.ratingAlign}),(0,h.select)("core/block-editor").getBlocksByClientId(n.clientId)[0].innerBlocks.forEach((function(n){"core/image"===n.name&&e("core/block-editor").updateBlockAttributes(n.clientId,{align:t.imageAlign}),"core/heading"===n.name&&e("core/block-editor").updateBlockAttributes(n.clientId,{textAlign:t.titleAlign}),"core/paragraph"===n.name&&e("core/block-editor").updateBlockAttributes(n.clientId,{align:t.titleAlign}),"gutenify/star-rating"===n.name&&e("core/block-editor").updateBlockAttributes(n.clientId,{textAlignment:t.ratingAlign})})))}))}}}))])((e=>{const{attributes:t,isSelected:n,clientId:l}=e,{layout:o,columnSize:a,hideRating:c,blockClientId:m}=t,u=s()(`gutenify-testimonials-block-wrapper gutenify-testimonials-${o}`,`gutenify-testimonials-col-${a}`,c&&"gutenify-testimonials-hide-rating",`gutenify-section-${m}`,`${w.name.replace(/\//gm,"-")}-version-${w.version}`),d=(0,p.useBlockProps)({className:u}),{children:g,...h}=(0,p.useInnerBlocksProps)(d,{allowedBlocks:Z,template:D(2),templateInsertUpdatesSelection:!1,renderAppender:!1,orientation:"horizontal",__experimentalCaptureToolbars:!0});return(0,r.createElement)("div",h,(0,r.createElement)(U,i({},e,{sectionID:l}),(0,r.createElement)("div",{className:"gutenify-testimonials-block"},g)))})),q=window.wp.primitives;var K,Q;const X=null!==(K=window)&&void 0!==K&&null!==(Q=K.gutenify_components_vars)&&void 0!==Q&&Q.brand_color?window.gutenify_components_vars.brand_color:"#2196f3",Y=((0,r.createElement)(q.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"}))),(0,r.createElement)(q.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,r.createElement)(q.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)(q.Rect,{height:"14.5",rx:".875",stroke:X,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,r.createElement)(q.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:X,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,r.createElement)(q.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6-3.21 3.2-8.39 3.2-11.6 0C1 12.59 1 7.41 4.2 4.2 7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1zM4 4h13v4H4V4zm1 1v2h3V5H5zm4 0v2h3V5H9zm4 0v2h3V5h-3zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 10h4v1H6v-1zm6 0h5v5h-5v-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 12h4v1H6v-1zm7 0v2h3v-2h-3zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 14h4v1H6v-1z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M13 13.14l1.17-5.94c.79-.43 1.33-1.25 1.33-2.2 0-1.38-1.12-2.5-2.5-2.5S10.5 3.62 10.5 5c0 .95.54 1.77 1.33 2.2zm0-9.64c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm1.72 4.8L18 6.97v9L13.12 18 7 15.97l-5 2v-9l5-2 4.27 1.41 1.73 7.3z"}))),(0,r.createElement)(q.SVG,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"}))),(0,r.createElement)(q.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)(q.Path,{d:"m6 4.75h12c.6904 0 1.25.55964 1.25 1.25v12c0 .6904-.5596 1.25-1.25 1.25h-12c-.69036 0-1.25-.5596-1.25-1.25v-12c0-.69036.55964-1.25 1.25-1.25z",stroke:X,strokeWidth:"1.5",fill:"none"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"m7 9h2v2h-2z"}),(0,r.createElement)(q.Path,{d:"m7 13h2v2h-2z"}),(0,r.createElement)(q.Path,{d:"m10 9h7v2h-7z"}),(0,r.createElement)(q.Path,{d:"m10 13h7v2h-7z"}),(0,r.createElement)(q.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,r.createElement)(q.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M10 1l3 6 6 .75-4.12 4.62L16 19l-6-3-6 3 1.13-6.63L1 7.75 7 7z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M8.03 4.46c-.29 1.28.55 3.46 1.97 3.46 1.41 0 2.25-2.18 1.96-3.46-.22-.98-1.08-1.63-1.96-1.63-.89 0-1.74.65-1.97 1.63zm-4.13.9c-.25 1.08.47 2.93 1.67 2.93s1.92-1.85 1.67-2.93c-.19-.83-.92-1.39-1.67-1.39s-1.48.56-1.67 1.39zm8.86 0c-.25 1.08.47 2.93 1.66 2.93 1.2 0 1.92-1.85 1.67-2.93-.19-.83-.92-1.39-1.67-1.39-.74 0-1.47.56-1.66 1.39zm-.59 11.43l1.25-4.3C14.2 10 12.71 8.47 10 8.47c-2.72 0-4.21 1.53-3.44 4.02l1.26 4.3C8.05 17.51 9 18 10 18c.98 0 1.94-.49 2.17-1.21zm-6.1-7.63c-.49.67-.96 1.83-.42 3.59l1.12 3.79c-.34.2-.77.31-1.2.31-.85 0-1.65-.41-1.85-1.03l-1.07-3.65c-.65-2.11.61-3.4 2.92-3.4.27 0 .54.02.79.06-.1.1-.2.22-.29.33zm8.35-.39c2.31 0 3.58 1.29 2.92 3.4l-1.07 3.65c-.2.62-1 1.03-1.85 1.03-.43 0-.86-.11-1.2-.31l1.11-3.77c.55-1.78.08-2.94-.42-3.61-.08-.11-.18-.23-.28-.33.25-.04.51-.06.79-.06z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81 0 0-.41 3.44-2.68 3.44zm0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"}))),(0,r.createElement)(q.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)(q.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)(q.G,{fill:X},(0,r.createElement)(q.Path,{d:"M10 1c7 0 9 2.91 9 6.5S17 14 10 14s-9-2.91-9-6.5S3 1 10 1zM5.5 9C6.33 9 7 8.33 7 7.5S6.33 6 5.5 6 4 6.67 4 7.5 4.67 9 5.5 9zM10 9c.83 0 1.5-.67 1.5-1.5S10.83 6 10 6s-1.5.67-1.5 1.5S9.17 9 10 9zm4.5 0c.83 0 1.5-.67 1.5-1.5S15.33 6 14.5 6 13 6.67 13 7.5 13.67 9 14.5 9zM6 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"})))),{name:ee,attributes:te,supports:ne}=((0,r.createElement)(q.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(q.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,r.createElement)(q.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,r.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:X})),(0,r.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,r.createElement)("g",null,(0,r.createElement)("g",null,(0,r.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,r.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z",fill:X}))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M17 10c0-3.87-3.14-7-7-7-3.87 0-7 3.13-7 7s3.13 7 7 7c3.86 0 7-3.13 7-7zm-6.3 1.48H9.14v-.43c0-.38.08-.7.24-.98s.46-.57.88-.89c.41-.29.68-.53.81-.71.14-.18.2-.39.2-.62 0-.25-.09-.44-.28-.58-.19-.13-.45-.19-.79-.19-.58 0-1.25.19-2 .57l-.64-1.28c.87-.49 1.8-.74 2.77-.74.81 0 1.45.2 1.92.58.48.39.71.91.71 1.55 0 .43-.09.8-.29 1.11-.19.32-.57.67-1.11 1.06-.38.28-.61.49-.71.63-.1.15-.15.34-.15.57v.35zm-1.47 2.74c-.18-.17-.27-.42-.27-.73 0-.33.08-.58.26-.75s.43-.25.77-.25c.32 0 .57.09.75.26s.27.42.27.74c0 .3-.09.55-.27.72-.18.18-.43.27-.75.27-.33 0-.58-.09-.76-.26z",fill:X}))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M19 2v6H1V2h18zm-1 5V3H2v4h16zM5 4v2H3V4h2zm3 0v2H6V4h2zm3 0v2H9V4h2zm3 0v2h-2V4h2zm3 0v2h-2V4h2zm2 5v9H1V9h18zm-1 8v-7H2v7h16zM5 11v2H3v-2h2zm3 0v2H6v-2h2zm3 0v2H9v-2h2zm6 0v2h-5v-2h5zm-6 3v2H3v-2h8zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2z",fill:X}))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:X}))),(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:X}))),w),re={title:(0,l.__)("Testimonials"),description:(0,l.__)("Gutenify Testimonials"),icon:(0,r.createElement)(o.Icon,{icon:Y}),keywords:["gutenify",(0,l.__)("Testimonial"),(0,l.__)("Testimonials")],example:{attributes:{teams:{}}},attributes:te,edit:J,save:function(e){const{attributes:t}=e,{layout:n,columnSize:l,hideRating:o,blockClientId:a}=t,c=s()(`gutenify-testimonials-block-wrapper gutenify-testimonials-${n}`,`gutenify-testimonials-col-${l}`,o&&"gutenify-testimonials-hide-rating",`gutenify-section-${a}`,`${w.name.replace(/\//gm,"-")}-version-${w.version}`),m=p.useBlockProps.save({className:c}),u=p.useInnerBlocksProps.save(m);return(0,r.createElement)("div",u,(0,r.createElement)(U,i({},e,{name:"gutenify/testimonials"}),(0,r.createElement)("div",{className:"gutenify-testimonials-block"},u.children)))},supports:ne};(0,a.registerBlockType)(ee,{...re})},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},2705:(e,t,n)=>{var r=n(5639).Symbol;e.exports=r},4239:(e,t,n)=>{var r=n(2705),l=n(9607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?l(e):o(e)}},2545:e=>{e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},7561:(e,t,n)=>{var r=n(7990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(l,""):e}},4290:(e,t,n)=>{var r=n(6557);e.exports=function(e){return"function"==typeof e?e:r}},1957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:(e,t,n)=>{var r=n(2705),l=Object.prototype,o=l.hasOwnProperty,a=l.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var l=a.call(e);return r&&(t?e[i]=n:delete e[i]),l}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,n)=>{var r=n(1957),l="object"==typeof self&&self&&self.Object===Object&&self,o=r||l||Function("return this")();e.exports=o},7990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},6557:e=>{e.exports=function(e){return e}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,n)=>{var r=n(4239),l=n(7005);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==r(e)}},8913:(e,t,n)=>{var r=n(2545),l=n(4290),o=n(554),a=4294967295,i=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var n=a,c=i(e,a);t=l(t),e-=a;for(var s=r(c,t);++n<e;)t(n);return s}},8601:(e,t,n)=>{var r=n(4841);e.exports=function(e){return e?Infinity===(e=r(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,t,n)=>{var r=n(8601);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},4841:(e,t,n)=>{var r=n(7561),l=n(3218),o=n(3448),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=i.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}},9588:e=>{e.exports=function(e,t){var n,r,l=0;function o(){var o,a,i=n,c=arguments.length;e:for(;i;){if(i.args.length===arguments.length){for(a=0;a<c;a++)if(i.args[a]!==arguments[a]){i=i.next;continue e}return i!==n&&(i===r&&(r=i.prev),i.prev.next=i.next,i.next&&(i.next.prev=i.prev),i.next=n,i.prev=null,n.prev=i,n=i),i.val}i=i.next}for(o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return i={args:o,val:e.apply(null,o)},n?(n.prev=i,i.next=n):r=i,l===t.maxSize?(r=r.prev).next=null:l++,n=i,i.val}return t=t||{},o.clear=function(){n=null,r=null,l=0},o}}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,l,o)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,l,o]=e[m],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,l,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3153:0,2227:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,o,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var m=c(r)}for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[2227],(()=>r(2152)));l=r.O(l)})();