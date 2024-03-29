"use strict";(self.webpackChunkpostilize_react=self.webpackChunkpostilize_react||[]).push([[5973],{"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");let styles_getOverlayAlpha=elevation=>((elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2)/100).toFixed(2);var useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let _excluded=["className","component","elevation","square","variant"],useUtilityClasses=ownerState=>{let{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)},PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{let{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})(({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:(_theme$vars$overlays=theme.vars.overlays)==null?void 0:_theme$vars$overlays[ownerState.elevation]}))}),Paper_Paper=react.forwardRef(function Paper(inProps,ref){let props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=useUtilityClasses(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState:ownerState,className:(0,clsx.Z)(classes.root,className),ref:ref},other))})},"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/Stack/createStack.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");let __WEBPACK_DEFAULT_EXPORT__=(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.Z)({createStyledComponent:(0,_styles_styled__WEBPACK_IMPORTED_MODULE_1__.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_2__.Z)({props:inProps,name:"MuiStack"})})},"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiSvgIcon",slot)}(0,generateUtilityClasses.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],useUtilityClasses=ownerState=>{let{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)},SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{let{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})(({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette2,_palette3;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:ownerState.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(_theme$transitions=theme.transitions)==null||(_theme$transitions$cr=_theme$transitions.create)==null?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:(_theme$transitions2=theme.transitions)==null||(_theme$transitions2=_theme$transitions2.duration)==null?void 0:_theme$transitions2.shorter}),fontSize:({inherit:"inherit",small:((_theme$typography=theme.typography)==null||(_theme$typography$pxT=_theme$typography.pxToRem)==null?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:((_theme$typography2=theme.typography)==null||(_theme$typography2$px=_theme$typography2.pxToRem)==null?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:((_theme$typography3=theme.typography)==null||(_theme$typography3$px=_theme$typography3.pxToRem)==null?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"})[ownerState.fontSize],color:(_palette$ownerState$c=(_palette=(theme.vars||theme).palette)==null||(_palette=_palette[ownerState.color])==null?void 0:_palette.main)!=null?_palette$ownerState$c:({action:(_palette2=(theme.vars||theme).palette)==null||(_palette2=_palette2.action)==null?void 0:_palette2.active,disabled:(_palette3=(theme.vars||theme).palette)==null||(_palette3=_palette3.action)==null?void 0:_palette3.disabled,inherit:void 0})[ownerState.color]}}),SvgIcon=react.forwardRef(function SvgIcon(inProps,ref){let props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),hasSvgAsChild=react.isValidElement(children)&&"svg"===children.type,ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox,hasSvgAsChild}),more={};inheritViewBox||(more.viewBox=viewBox);let classes=useUtilityClasses(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref:ref},more,other,hasSvgAsChild&&children.props,{ownerState:ownerState,children:[hasSvgAsChild?children.props.children:children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))});SvgIcon.muiName="SvgIcon";let SvgIcon_SvgIcon=SvgIcon},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){function Component(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"data-testid":`${displayName}Icon`,ref:ref},props,{children:path}))}return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./node_modules/@mui/system/esm/Stack/createStack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createStack});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs"),_mui_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),_useThemeProps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_createTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),_spacing__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let _excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,_createTheme__WEBPACK_IMPORTED_MODULE_2__.Z)(),defaultCreateStyledComponent=(0,_styled__WEBPACK_IMPORTED_MODULE_3__.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,_useThemeProps__WEBPACK_IMPORTED_MODULE_4__.Z)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){let childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);return childrenArray.reduce((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(separator,{key:`separator-${index}`})),output),[])}let getSideFromDirection=direction=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[direction],style=({ownerState,theme})=>{let styles=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({display:"flex",flexDirection:"column"},(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.k9)({theme},(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),propValue=>({flexDirection:propValue})));if(ownerState.spacing){let transformer=(0,_spacing__WEBPACK_IMPORTED_MODULE_7__.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc),{}),directionValues=(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.direction,base}),spacingValues=(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){let previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}),styles=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__.Z)(styles,(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.k9)({theme},spacingValues,(propValue,breakpoint)=>ownerState.useFlexGap?{gap:(0,_spacing__WEBPACK_IMPORTED_MODULE_7__.NA)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${getSideFromDirection(breakpoint?directionValues[breakpoint]:ownerState.direction)}`]:(0,_spacing__WEBPACK_IMPORTED_MODULE_7__.NA)(transformer,propValue)}}))}return(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.dt)(theme.breakpoints,styles)};function createStack(options={}){let{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,useUtilityClasses=()=>(0,_mui_utils__WEBPACK_IMPORTED_MODULE_9__.Z)({root:["root"]},slot=>(0,_mui_utils__WEBPACK_IMPORTED_MODULE_10__.ZP)(componentName,slot),{}),StackRoot=createStyledComponent(style);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Grid(inProps,ref){let themeProps=useThemeProps(inProps),props=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_11__.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__.Z)(props,_excluded),classes=useUtilityClasses();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StackRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({as:component,ownerState:{direction,spacing,useFlexGap},ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_13__.Z)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))})}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");let _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;let result={systemProps:{},otherProps:{}},config=(_props$theme$unstable=null==props||(_props$theme=props.theme)==null?void 0:_props$theme.unstable_sxConfig)!=null?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach(prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]}),result};function extendSxProp(props){let finalSx;let{sx:inSx}=props,{systemProps,otherProps}=splitProps((0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded));return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{let result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)()},"./node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f)}return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./src/stories/PToast.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PToast_stories});var react=__webpack_require__("./node_modules/react/index.js"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Delete=__webpack_require__("./src/assets/Icons/Delete.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PToast(_ref){let{text,severity}=_ref,theme=(0,useTheme.Z)(),[visible,setVisible]=react.useState(!0),{bgColor,textColor}=(severity=>{switch(severity){case"error":return{bgColor:theme.palette.primaryCL.Red100,textColor:theme.palette.primary.white};case"info":return{bgColor:theme.palette.primaryCL.Black200,textColor:theme.palette.primary.white};case"success":return{bgColor:theme.palette.primaryCL.Green100,textColor:theme.palette.primaryCL.Black200};default:return{bgColor:theme.palette.primaryCL.main,textColor:theme.palette.primaryCL.White}}})(severity);return(react.useEffect(()=>{let timer=setTimeout(()=>{setVisible(!1)},4e3);return()=>clearTimeout(timer)},[]),visible)?(0,jsx_runtime.jsx)(Stack.Z,{sx:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Alert.Z,{icon:!1,variant:"filled",severity:severity,sx:{borderRadius:"14px",backgroundColor:bgColor,"& .MuiAlert-message":{width:"100%",textAlign:"center",fontSize:theme.typography.body2.fontSize,color:textColor},position:"relative"},action:(0,jsx_runtime.jsx)(Delete.r,{style:{alignSelf:"center",top:"35%",marginRight:"8px",marginBottom:"4px",alignItems:"center",width:"11.91px",height:"11.91px",fill:textColor,cursor:"pointer"},onClick:()=>{setVisible(!1)}}),children:text})}):null}PToast.__docgenInfo={description:"",methods:[],displayName:"PToast"};let PToast_stories={title:"Postilize Library/PToast",component:PToast,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","info","success"]},text:{control:"text"}}},Template=args=>(0,jsx_runtime.jsx)(PToast,{...args}),Default=Template.bind({});Default.args={text:"Text",severity:"info"};let Error=Template.bind({});Error.args={text:"Text",severity:"error"};let Success=Template.bind({});Success.args={text:"Text",severity:"success"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <PToast {...args} />",...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <PToast {...args} />",...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <PToast {...args} />",...Success.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Error","Success"]},"./src/assets/Icons/Delete.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ForwardRef});var _g,_defs,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SvgDelete(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{clipPath:"url(#clip0_69_217)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0001 12.3567L17.5718 19.9283L19.9284 17.5717L12.3568 9.99999L19.9284 2.42832L17.5718 0.0716553L10.0001 7.64165L2.42844 0.0716553L0.0717773 2.42832L7.64344 9.99999L0.0717773 17.5717L2.42844 19.9283L10.0001 12.3567Z"}))),_defs||(_defs=react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath",{id:"clip0_69_217"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:20,height:20,fill:"white"})))))}let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgDelete);__webpack_require__.p}}]);