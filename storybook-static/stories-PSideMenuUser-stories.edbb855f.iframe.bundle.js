"use strict";(self.webpackChunkpostilize_react=self.webpackChunkpostilize_react||[]).push([[6534],{"./node_modules/@mui/base/Portal/Portal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function getContainer(container){return"function"==typeof container?container():container}let Portal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props,forwardedRef){let{children,container,disablePortal=!1}=props,[mountNode,setMountNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)?children.ref:null,forwardedRef);return((0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(()=>{disablePortal||setMountNode(getContainer(container)||document.body)},[container,disablePortal]),(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(()=>{if(mountNode&&!disablePortal)return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(forwardedRef,mountNode),()=>{(0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(forwardedRef,null)}},[forwardedRef,mountNode,disablePortal]),disablePortal)?react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{ref:handleRef}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:mountNode?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children,mountNode):mountNode})})},"./src/stories/PSideMenuUser.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultNoLabel:()=>DefaultNoLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _components_library_PSideMenuUser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/library/PSideMenuUser.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Postilize Library/PSideMenuUser",component:_components_library_PSideMenuUser__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"},pVariant:{control:"select",options:["primary"]},onClick:{action:"clicked"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_library_PSideMenuUser__WEBPACK_IMPORTED_MODULE_1__.Z,{...args}),Default=Template.bind({});Default.args={children:"Label",pVariant:"primary",subtitle:"Footnote",showLabel:!0};let DefaultNoLabel=Template.bind({});DefaultNoLabel.args={children:"Label",pVariant:"primary",subtitle:"Footnote",showLabel:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <PSideMenuUser {...args} />",...Default.parameters?.docs?.source}}},DefaultNoLabel.parameters={...DefaultNoLabel.parameters,docs:{...DefaultNoLabel.parameters?.docs,source:{originalSource:"args => <PSideMenuUser {...args} />",...DefaultNoLabel.parameters?.docs?.source}}};let __namedExportsOrder=["Default","DefaultNoLabel"]},"./src/components/library/PSideMenuUser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>library_PSideMenuUser});var _path,react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SvgUser(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.06076 14.6475C4.76214 15.5374 5.65638 16.2566 6.67607 16.7507C7.69577 17.2448 8.81432 17.501 9.94743 17.5C11.0789 17.501 12.196 17.2455 13.2145 16.7528C14.2331 16.26 15.1267 15.5428 15.8283 14.655C13.9364 13.9806 11.9426 13.637 9.9341 13.6392C7.8741 13.6392 5.8966 13.995 4.06076 14.6475ZM9.94743 0.833332C4.88493 0.833332 0.780762 4.9375 0.780762 10C0.780762 15.0625 4.88493 19.1667 9.94743 19.1667C15.0108 19.1667 19.1141 15.0625 19.1141 10C19.1141 4.9375 15.0108 0.833332 9.94743 0.833332ZM9.94743 11.6667C10.8315 11.6667 11.6793 11.3155 12.3045 10.6904C12.9296 10.0652 13.2808 9.21739 13.2808 8.33333C13.2808 7.44928 12.9296 6.60143 12.3045 5.97631C11.6793 5.35119 10.8315 5 9.94743 5C9.06337 5 8.21553 5.35119 7.59041 5.97631C6.96528 6.60143 6.6141 7.44928 6.6141 8.33333C6.6141 9.21739 6.96528 10.0652 7.59041 10.6904C8.21553 11.3155 9.06337 11.6667 9.94743 11.6667Z"})))}let ForwardRef=react.forwardRef(SvgUser);__webpack_require__.p;var PTypography=__webpack_require__("./src/components/library/PTypography.js"),PToolTip=__webpack_require__("./src/components/library/PToolTip.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let getVariantStyles=(theme,pVariant)=>{let colorScheme={};return"primary"===pVariant&&(colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.Blue50,hoverText:theme.palette.primaryCL.Blue100,hoverBackground:theme.palette.primaryCL.Blue40,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.Blue60}),colorScheme},StyledPSideMenuUser=(0,styled.ZP)(Button.Z,{shouldForwardProp:prop=>"pVariant"!==prop})(_ref=>{let{theme,pVariant,active,showLabel}=_ref,{background,text,hoverBackground,hoverText,activeBackground,activeText}=getVariantStyles(theme,pVariant);return{...theme.typography.bold.body2,borderRadius:"14px",padding:showLabel?"16px 20px":"16px",fontFamily:"Inter",textTransform:"none",width:"100%",color:active?activeText:text,justifyContent:showLabel?"flex-start":"center",alignItems:"flex-start",backgroundColor:active?activeBackground:background,"&:hover":{backgroundColor:hoverBackground,color:hoverText,"& .MuiButton-startIcon":{color:hoverText}},"&:active":{backgroundColor:activeBackground,color:activeText,"& .MuiButton-startIcon":{color:activeText}},"& .MuiButton-startIcon":{margin:0,marginRight:showLabel?"14px":"0",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start","& > *":{margin:"0 !important"}}}});function PSideMenuUser(_ref2){let{children,Icon,pVariant,onClick,active,showLabel,subtitle}=_ref2,theme=(0,useTheme.Z)(),iconFill=(active?getVariantStyles(theme,pVariant).activeText:getVariantStyles(theme,pVariant).text)||null,translatedVariant={primary:"contained"}[pVariant]||"contained",menuItem=(0,jsx_runtime.jsx)(StyledPSideMenuUser,{variant:translatedVariant,disableElevation:!0,pVariant:pVariant,startIcon:(0,jsx_runtime.jsx)(ForwardRef,{fill:iconFill}),onClick:onClick,showLabel:showLabel,children:showLabel&&(0,jsx_runtime.jsxs)(Stack.Z,{alignItems:"flex-start",gap:"4px",sx:{p:0,m:0},children:[(0,jsx_runtime.jsx)(PTypography.Z,{size:"body2",weight:"bold",children:children}),(0,jsx_runtime.jsx)(PTypography.Z,{size:"footnote",weight:"regular",children:subtitle})]})});return showLabel?menuItem:(0,jsx_runtime.jsx)(PToolTip.Z,{title:children,placement:"right",children:menuItem})}PSideMenuUser.defaultProps={Icon:null,pVariant:"primary",showLabel:!0,active:!1};let library_PSideMenuUser=PSideMenuUser;PSideMenuUser.__docgenInfo={description:"",methods:[],displayName:"PSideMenuUser",props:{Icon:{defaultValue:{value:"null",computed:!1},required:!1},pVariant:{defaultValue:{value:"'primary'",computed:!1},description:"Postilize design variant, only primary for now, leaving in so we can easily update in future",type:{name:"enum",value:[{value:"'primary'",computed:!1}]},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},active:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"React children",type:{name:"node"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!0}}}},"./src/components/library/PToolTip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let getTooltipVariantStyles=(theme,pVariant)=>({backgroundColor:theme.palette.primaryCL.Black200,color:theme.palette.primaryCL.White110}),StyledTooltip=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ZP)(_ref=>{let{className,pVariant,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{...props,classes:{popper:className}})})(_ref2=>{let{theme,pVariant}=_ref2,variantStyles=getTooltipVariantStyles(theme,pVariant);return{"& .MuiTooltip-tooltip":{backgroundColor:variantStyles.backgroundColor,borderRadius:"12px",color:variantStyles.color},"& .MuiTooltip-arrow":{color:"transparent"}}}),PToolTip=_ref3=>{let{title,children,pVariant,placement}=_ref3,customTitleStyles={color:getTooltipVariantStyles((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)(),pVariant).color,fontFeatureSettings:"'clig' off, 'liga' off",fontFamily:"Inter",fontSize:"14px",fontStyle:"normal",fontWeight:500,lineHeight:"120%"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledTooltip,{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",height:"40px",padding:"8px",justifyContent:"center",alignItems:"center",gap:"8px",borderRadius:"12px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{...customTitleStyles},children:title})}),arrow:!0,placement:placement,pVariant:pVariant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:"transparent"},children:children})})};PToolTip.defaultProps={pVariant:"black",placement:"bottom"};let __WEBPACK_DEFAULT_EXPORT__=PToolTip;PToolTip.__docgenInfo={description:"",methods:[],displayName:"PToolTip",props:{pVariant:{defaultValue:{value:"'black'",computed:!1},description:"",type:{name:"enum",value:[{value:"'black'",computed:!1}]},required:!1},placement:{defaultValue:{value:"'bottom'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},title:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}}}},"./src/components/library/PTypography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let StyledPTypography=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ZP)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref=>{let{theme,weight,size,color}=_ref;return{...theme.typography[weight][size],fontFamily:"Inter",color:color||"inherit"}});function PTypography(_ref2){let{size,weight,children,color,sx}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPTypography,{weight:weight,size:size,color:color,sx:sx,children:children})}PTypography.defaultProps={weight:"bold",size:"body1",children:"Typography",sx:{}};let __WEBPACK_DEFAULT_EXPORT__=PTypography;PTypography.__docgenInfo={description:"",methods:[],displayName:"PTypography",props:{weight:{defaultValue:{value:"'bold'",computed:!1},description:"Font weight",type:{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'regular'",computed:!1}]},required:!1},size:{defaultValue:{value:"'body1'",computed:!1},description:"Font size",type:{name:"enum",value:[{value:"'footnote'",computed:!1},{value:"'body1'",computed:!1},{value:"'body2'",computed:!1},{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'caption'",computed:!1}]},required:!1},children:{defaultValue:{value:"'Typography'",computed:!1},description:"Content",type:{name:"node"},required:!1},sx:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},color:{description:"Color",type:{name:"string"},required:!1}}}}}]);