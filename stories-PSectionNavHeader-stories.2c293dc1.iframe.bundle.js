"use strict";(self.webpackChunkpostilize_react=self.webpackChunkpostilize_react||[]).push([[5027],{"./src/stories/PSectionNavHeader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonTheme:()=>ButtonTheme,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _components_library_PSectionNavHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/library/PSectionNavHeader.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Postilize Library/PSectionNavHeader",component:_components_library_PSectionNavHeader__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{pVariant:{control:"select",options:["primary"]},headerText:{control:"text"},buttonText:{control:"text"},buttonTheme:{control:"select",options:["primary","secondary","outlined","plain","black"]},onClick:{action:"clicked"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_library_PSectionNavHeader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args}),Default=Template.bind({});Default.args={headerText:"Header",buttonText:"Button",buttonTheme:"secondary",pVariant:"primary"};let ButtonTheme=Template.bind({});ButtonTheme.args={headerText:"Header",buttonText:"Button",buttonTheme:"primary",pVariant:"primary"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <PSectionNavHeader {...args} />",...Default.parameters?.docs?.source}}},ButtonTheme.parameters={...ButtonTheme.parameters,docs:{...ButtonTheme.parameters?.docs,source:{originalSource:"args => <PSectionNavHeader {...args} />",...ButtonTheme.parameters?.docs?.source}}};let __namedExportsOrder=["Default","ButtonTheme"]},"./src/components/library/PButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let getVariantStyles=(theme,pVariant)=>{let colorScheme={};switch(pVariant){case"primary":default:colorScheme={text:theme.palette.primaryCL.White110,background:theme.palette.primaryCL.Blue100,hoverText:theme.palette.primaryCL.White110,hoverBackground:theme.palette.primaryCL.Blue90,activeText:theme.palette.primaryCL.White110,activeBackground:theme.palette.primaryCL.Blue110,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.Black50};break;case"secondary":colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.Blue50,hoverText:theme.palette.primaryCL.Blue100,hoverBackground:theme.palette.primaryCL.Blue40,activeText:theme.palette.primaryCL.Blue100,activeBackground:theme.palette.primaryCL.Blue60,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.Black50};break;case"outlined":colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.White110,hoverText:theme.palette.primaryCL.Blue90,hoverBackground:theme.palette.primaryCL.White110,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.White110,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.White110,border:"1px solid ".concat(theme.palette.primaryCL.Black70),hoverBorder:"1px solid ".concat(theme.palette.primaryCL.Blue100),activeBorder:"1px solid ".concat(theme.palette.primaryCL.Blue110),disabledBorder:"1px solid ".concat(theme.palette.primaryCL.Black50)};break;case"plain":colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.White100,hoverText:theme.palette.primaryCL.Blue90,hoverBackground:theme.palette.primaryCL.Blue40,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.White110,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.White110};break;case"black":colorScheme={text:theme.palette.primaryCL.White100,background:theme.palette.primaryCL.Black200,hoverText:theme.palette.primaryCL.Black70,hoverBackground:theme.palette.primaryCL.White100,activeText:theme.palette.primaryCL.Black70,activeBackground:theme.palette.primaryCL.Black70,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.Black50};break;case"black50":colorScheme={text:theme.palette.primaryCL.Black200,background:theme.palette.primaryCL.Black50,hoverText:theme.palette.primaryCL.Black200,hoverBackground:theme.palette.primaryCL.Black50,activeText:theme.palette.primaryCL.Black70,activeBackground:theme.palette.primaryCL.Black200,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.Black50,hoverBorder:"1px solid ".concat(theme.palette.primaryCL.Black70)};break;case"red":colorScheme={text:theme.palette.primaryCL.Red100,background:theme.palette.primaryCL.Red50,hoverText:theme.palette.primaryCL.Red100,hoverBackground:theme.palette.primaryCL.Red40,activeText:theme.palette.primaryCL.Red100,activeBackground:theme.palette.primaryCL.Red60,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.Black50,hoverBorder:"1px solid ".concat(theme.palette.primaryCL.Red100)};break;case"blue":colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.Blue50,hoverText:theme.palette.primaryCL.Blue100,hoverBackground:theme.palette.primaryCL.Blue50,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.Blue110,disabledText:theme.palette.primaryCL.Blue50,disabledBackground:theme.palette.primaryCL.Blue110,hoverBorder:"1px solid ".concat(theme.palette.primaryCL.Blue100)};break;case"green":colorScheme={text:theme.palette.primaryCL.Green100,background:theme.palette.primaryCL.Green50,hoverText:theme.palette.primaryCL.Green100,hoverBackground:theme.palette.primaryCL.Green50,activeText:theme.palette.primaryCL.Green50,activeBackground:theme.palette.primaryCL.Green100,disabledText:theme.palette.primaryCL.Green50,disabledBackground:theme.palette.primaryCL.Green110,hoverBorder:"1px solid ".concat(theme.palette.primaryCL.Green100)};break;case"plainBlack":colorScheme={text:theme.palette.primaryCL.Black200,background:theme.palette.primaryCL.White100,hoverText:theme.palette.primaryCL.Blue90,hoverBackground:theme.palette.primaryCL.Blue40,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.White110,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.White110};break;case"stepper":colorScheme={text:theme.palette.primaryCL.Black200,background:theme.palette.primaryCL.Black50,hoverText:theme.palette.primaryCL.Blue90,hoverBackground:theme.palette.primaryCL.Blue40,activeText:theme.palette.primaryCL.Blue110,activeBackground:theme.palette.primaryCL.White110,disabledText:theme.palette.primaryCL.Black70,disabledBackground:theme.palette.primaryCL.White110,padding:"14px",height:"40px",width:"40px !important"}}return colorScheme},StyledPButton=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ZP)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{shouldForwardProp:prop=>"pVariant"!==prop&&"active"!==prop})(_ref=>{let{theme,pVariant,active}=_ref,{background,text,hoverBackground,hoverText,activeBackground,activeText,disabledBackground,disabledText,border,hoverBorder,activeBorder,disabledBorder,padding,height,width}=getVariantStyles(theme,pVariant);return{borderRadius:"14px",border:border||"none",padding:padding||"16px 20px",height:height||"52px",width:width||"auto",minWidth:width||"auto",fontFamily:"Inter",fontSize:"16px",lineHeight:"120%",textTransform:"none",justifyContent:"center",alignItems:"center",flexShrink:0,color:active?activeText:text,backgroundColor:active?activeBackground:background,"&:hover":{backgroundColor:hoverBackground,color:hoverText,border:hoverBorder||"none"},"&:active":{backgroundColor:activeBackground,color:activeText,border:activeBorder||"none"},"&:disabled":{backgroundColor:disabledBackground,color:disabledText,border:disabledBorder||"none"}}});function PButton(_ref2){let{children,Icon,pVariant,disabled,onClick,additionalStyles,active,isIconicButton,iconProps}=_ref2,theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)(),iconFill=Icon?disabled?getVariantStyles(theme,pVariant).disabledText:getVariantStyles(theme,pVariant).text:null,translatedVariant={primary:"contained",secondary:"contained",black:"contained",outlined:"outlined",plain:"text",plainBlack:"text"}[pVariant]||"contained";return isIconicButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPButton,{variant:translatedVariant,disableElevation:!0,pVariant:pVariant,disabled:disabled,onClick:onClick,sx:additionalStyles,active:active,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{fill:iconFill,...iconProps})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPButton,{variant:translatedVariant,disableElevation:!0,pVariant:pVariant,startIcon:Icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{fill:iconFill,...iconProps}):null,disabled:disabled,onClick:onClick,sx:additionalStyles,active:active,children:children})}PButton.defaultProps={Icon:null,pVariant:"primary",disabled:!1,additionalStyles:{},active:!1,isIconicButton:!1};let __WEBPACK_DEFAULT_EXPORT__=PButton;PButton.__docgenInfo={description:"",methods:[],displayName:"PButton",props:{Icon:{defaultValue:{value:"null",computed:!1},description:"Icon component to display in the button.\nNOTE: Storybook does not support React components in controls",type:{name:"elementType"},required:!1},pVariant:{defaultValue:{value:"'primary'",computed:!1},description:"Postilize design variant, separate from MUI button variant. MUI button variant is determined automatically",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'outlined'",computed:!1},{value:"'plain'",computed:!1},{value:"'black'",computed:!1},{value:"'red'",computed:!1},{value:"'blue'",computed:!1},{value:"'green'",computed:!1},{value:"'plainBlack'",computed:!1},{value:"'stepper'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable state of the button",type:{name:"bool"},required:!1},additionalStyles:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},active:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isIconicButton:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"React children",type:{name:"node"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1},additionalIconStyles:{description:"",type:{name:"object"},required:!1}}}},"./src/components/library/PSectionNavHeader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_PButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/library/PButton.js"),_PTypography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/library/PTypography.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let getVariantStyles=(theme,pVariant)=>{let colorScheme={};return"primary"===pVariant&&(colorScheme={text:theme.palette.primaryCL.Black100,background:theme.palette.primaryCL.Black50,borderColor:theme.palette.primaryCL.Black70}),colorScheme};function PSectionNavHeader(_ref){let{pVariant,onClick,buttonText,buttonTheme,headerText}=_ref,variantStyles=getVariantStyles((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)(),pVariant);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{width:"100%",borderBottom:"1px solid",borderBottomColor:variantStyles.borderColor,display:"flex",justifyContent:"space-between",alignItems:"center",p:1,backgroundColor:variantStyles.background},children:[headerText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{paddingTop:"24px",paddingBottom:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PTypography__WEBPACK_IMPORTED_MODULE_2__.Z,{weight:"bold",size:"h2",children:headerText})}),buttonText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PButton__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:onClick,pVariant:buttonTheme,children:buttonText})]})}PSectionNavHeader.defaultProps={pVariant:"primary",buttonTheme:"primary"};let __WEBPACK_DEFAULT_EXPORT__=PSectionNavHeader;PSectionNavHeader.__docgenInfo={description:"",methods:[],displayName:"PSectionNavHeader",props:{pVariant:{defaultValue:{value:"'primary'",computed:!1},description:"Postilize design variant, only primary for now, leaving in so we can easily update in future",type:{name:"enum",value:[{value:"'primary'",computed:!1}]},required:!1},buttonTheme:{defaultValue:{value:"'primary'",computed:!1},description:"Theme for the button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'outlined'",computed:!1},{value:"'plain'",computed:!1},{value:"'black'",computed:!1}]},required:!1},headerText:{description:"Header Text",type:{name:"string"},required:!1},buttonText:{description:"Text for the button",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!0}}}},"./src/components/library/PTypography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let StyledPTypography=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ZP)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref=>{let{theme,weight,size,color}=_ref;return{...theme.typography[weight][size],fontFamily:"Inter",color:color||"inherit"}});function PTypography(_ref2){let{size,weight,children,color,sx}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPTypography,{weight:weight,size:size,color:color,sx:sx,children:children})}PTypography.defaultProps={weight:"bold",size:"body1",children:"",sx:{}};let __WEBPACK_DEFAULT_EXPORT__=PTypography;PTypography.__docgenInfo={description:"",methods:[],displayName:"PTypography",props:{weight:{defaultValue:{value:"'bold'",computed:!1},description:"Font weight",type:{name:"enum",value:[{value:"'bold'",computed:!1},{value:"'regular'",computed:!1}]},required:!1},size:{defaultValue:{value:"'body1'",computed:!1},description:"Font size",type:{name:"enum",value:[{value:"'footnote'",computed:!1},{value:"'body1'",computed:!1},{value:"'body2'",computed:!1},{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'caption'",computed:!1}]},required:!1},children:{defaultValue:{value:"''",computed:!1},description:"Content",type:{name:"node"},required:!1},sx:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},color:{description:"Color",type:{name:"string"},required:!1}}}}}]);