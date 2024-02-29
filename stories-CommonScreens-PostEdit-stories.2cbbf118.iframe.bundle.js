"use strict";(self.webpackChunkpostilize_react=self.webpackChunkpostilize_react||[]).push([[5606],{"./src/stories/CommonScreens/PostEdit.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PostEdit_stories});var react=__webpack_require__("./node_modules/react/index.js"),SnackbarContext=__webpack_require__("./src/contexts/SnackbarContext.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),InputBase=__webpack_require__("./node_modules/@mui/material/InputBase/InputBase.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),PBadge=__webpack_require__("./src/components/library/PBadge.js"),PButton=__webpack_require__("./src/components/library/PButton.js"),PCheckbox=__webpack_require__("./src/components/library/PCheckbox.js"),PTypography=__webpack_require__("./src/components/library/PTypography.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js"),js_cookie=__webpack_require__("./node_modules/js-cookie/dist/js.cookie.mjs");function GetCookie(name){let value=js_cookie.Z.get(name);return value?JSON.parse(decodeURIComponent(value)):String.empty}let httpClient=new class{constructor(){this.user=GetCookie("user"),this.instance=axios.Z.create({baseURL:"/api",headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0})}async getData(url){let data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String.empty;try{if(!this.user&&(this.user=GetCookie("user"),!this.user))throw"User Session Not Found.";return(await this.instance.get("/".concat(url),{params:{id:this.user._id,userId:this.user.id,username:this.user.name,data}})).data}catch(error){console.error(error),("string"==typeof error&&"User Session Not Found."==error||401==error.response.status&&"User session expired."===error.response.data.message)&&(console.log("Going to redirect to login page"),window.location.href="/")}return null}async postData(url){let data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String.empty;try{if(!this.user&&(this.user=GetCookie("user"),!this.user))throw"User Session Not Found.";return(await this.instance.post("".concat(url),{id:this.user._id,userId:this.user.id,username:this.user.name,data})).data}catch(error){if(error.response)return console.error("Error status:",error.response.status),console.error("Error data:",error.response.data),error.response;console.error(error)}return null}async postFormData(url,data){try{if(!this.user&&(this.user=GetCookie("user"),!this.user))throw"User Session Not Found.";return data.append("id",this.user._id),data.append("userId",this.user.id),data.append("username",this.user.name),(await axios.Z.post(url,data,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0})).data}catch(error){console.error(error)}return null}async postDataAnonymously(url){let data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String.empty;try{return(await this.instance.post("".concat(url),{data})).data}catch(error){console.error(error)}return null}};async function rephrasePost(post,phraseProps){try{let response=await httpClient.getData("rephrasePost",{post,...phraseProps});if(response&&response.post)return response.post;return null}catch(error){return console.error("Error rephrasing post:",error),null}}async function updateUserPost(post,textToUpdate){let approved=!(arguments.length>2)||void 0===arguments[2]||arguments[2];try{let response=await httpClient.postData("updateUserPost",{post,approved,textToUpdate});if(response&&response.post)return response.post;return null}catch(error){return console.error("Error updating user post:",error),null}}var Arrow_Left=__webpack_require__("./src/assets/Icons/Arrow-Left.svg"),Arrow_Right=__webpack_require__("./src/assets/Icons/Arrow-Right.svg"),PModal=__webpack_require__("./src/components/library/PModal.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");Object.freeze({Steps:{TONES:1,TOPICS:2,IMPORT_LIST:3,IMPORT_LIST_FILTERS:4,FOCUS_CONTACTS:5,CONNECT:6}});let Providers=Object.freeze({TWITTER:"twitter",LINKED_IN:"linkedin",SALESFORCE:"salesforce",HUBSPOT:"hubspot",CSV:"csv",GOOGLE:"google",AFFINITY:"affinity"});Object.freeze({TWITTER:280,LINKEDIN:2e3}),Object.freeze({TWITTER_MAXIMUM_CONTACTS:500}),Object.freeze({EMAIL:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,EMAIL_DOMAINS:/^([a-zA-Z0-9]+(([-.][a-zA-Z0-9]+)*)([.][a-zA-Z0-9]+))(,[a-zA-Z0-9]+(([-.][a-zA-Z0-9]+)*)([.][a-zA-Z0-9]+))*$/,WEBSITE_URL:/^(https?:[//]{2})?([a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/}),Object.freeze({USER_POST:"userPost",TWITTER_TRENDING:"twitterTrending",IMAGE_POST:"imagePost"}),Object.freeze({SOCIAL_NETWORKS:["twitter","linkedin"],IMPORT_LIST:["salesforce","hubspot","csv","affinity"],IMPORT_LIST_FILTERS:["salesforce","hubspot","google","affinity"]}),Object.freeze({EMAIL:"email",TWITTER_AUTO_LIKE:"twitter_auto_like",TWITTER_AUTO_RETWEET:"twitter_auto_retweet",TWITTER_AUTO_FOLLOW:"twitter_auto_follow"}),Object.freeze({START_MIN_INTERVAL:1,START_INTERVAL:2,START_FREQUENCY:"hour",STEP_START_INTERVAL:1,STEP_START_FREQUENCY:"day"}),Object.freeze({CREATED:"created",RETRY:"retry",TRIGGERED:"triggered",FAILED:"failed",SKIPPED:"skipped",CANCELLED:"cancelled",NOTAPPROVED:"notapproved",LIMITEXCEEDED:"limitexceeded",MANUALLY_DELETED:"manuallyDeleted"}),Object.freeze({HOUR:2160,DAY:90,MONTH:3}),Object.freeze({SUCCESS:"success",ERROR:"error",WARNING:"warning",INFO:"info"}),Object.freeze({20:"Rarely",50:"Sometimes",80:"Often"}),PBadge.Z;var lodash=__webpack_require__("./node_modules/lodash/lodash.js");let toneModalOptionGroups=[{title:"Tone",items:["Controversial","Formal","Fun"]},{title:"Length",items:["Long","Short"]},{title:"Hashtags",items:["Use hashtags"]}];function PostEdit(_ref){let{posts,setPosts,characterLimit,onApprove}=_ref,theme=(0,useTheme.Z)(),{addSnackbar}=(0,SnackbarContext.Ds)(),[contentHeight,setContentHeight]=(0,react.useState)(0),[post,setPost]=(0,react.useState)(posts&&posts[0]?posts[0]:null),[isUpdating,setIsUpdating]=(0,react.useState)(!1),[imageLoading,setImageLoading]=(0,react.useState)(!1),[toneModalOpen,setToneModalOpen]=(0,react.useState)(!1),[selectedTone,setSelectedTone]=(0,react.useState)(null),[selectedLength,setSelectedLength]=(0,react.useState)(null),[selectedBoolOptions,setSelectedBoolOptions]=(0,react.useState)([posts&&posts[0]&&posts[0].source===Providers.TWITTER?"Use hashtags":null].filter(Boolean)),[currentPostIndex,setCurrentPostIndex]=(0,react.useState)(0),[disableUpdateButton,setDisableRephraseButton]=(0,react.useState)(!0),contentDivRef=(0,react.useRef)(null),footerDivRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{setContentHeight(getMaxContentHeight());let handleResize=()=>{setContentHeight(getMaxContentHeight())};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),(0,react.useEffect)(()=>{setImageLoading(!0)},[post]),(0,react.useEffect)(()=>{setContentHeight(getMaxContentHeight())},[post,posts,contentDivRef,footerDivRef,contentHeight]),(0,react.useEffect)(()=>{(null==posts?void 0:posts.length)>0&&currentPostIndex<posts.length?setPost(posts[currentPostIndex]):setCurrentPostIndex(0)},[currentPostIndex,posts]),(0,react.useEffect)(()=>{setDisableRephraseButton(!selectedTone&&!selectedLength&&!(null!=selectedBoolOptions&&selectedBoolOptions.length))},[selectedTone,selectedLength,selectedBoolOptions]);let getGroupSelectedOptions=groupTitle=>{switch(groupTitle){case toneModalOptionGroups[0].title:return selectedTone;case toneModalOptionGroups[1].title:return selectedLength;case toneModalOptionGroups[2].title:return selectedBoolOptions;default:return null}},getMaxContentHeight=()=>{if(!(null!=contentDivRef&&contentDivRef.current)||!(null!=footerDivRef&&footerDivRef.current))return"100%";let contentRect=contentDivRef.current.getBoundingClientRect(),footerRect=footerDivRef.current.getBoundingClientRect(),contentYOffset=contentRect.top,footerHeight=footerRect.bottom-contentRect.bottom,totalAvailableHeight=window.innerHeight-contentYOffset-footerHeight;return totalAvailableHeight-(totalAvailableHeight>800?80:totalAvailableHeight<240?24:totalAvailableHeight/800*80)+"px"},toggleModalOption=option=>{toneModalOptionGroups[0].items.includes(option)?setSelectedTone(prevTone=>prevTone===option?null:option):toneModalOptionGroups[1].items.includes(option)?setSelectedLength(prevLength=>prevLength===option?null:option):toneModalOptionGroups[2].items.includes(option)&&setSelectedBoolOptions(prevOptions=>prevOptions.includes(option)?prevOptions.filter(item=>item!==option):[...prevOptions,option])},handleRephrasePost=async()=>{setIsUpdating(!0),setDisableRephraseButton(!0);let phraseProps={tone:selectedTone,length:selectedLength,hashtags:selectedBoolOptions.includes("Use hashtags")?"hashtagsOn":"hashtagsOff"},rephrasedPost=await rephrasePost(posts[currentPostIndex],phraseProps);setPosts(posts.map((p,index)=>index===currentPostIndex?{...p,message:rephrasedPost}:p)),setIsUpdating(!1),setToneModalOpen(!1),setDisableRephraseButton(!1)},handleEditPost=(0,lodash.debounce)(newMessage=>{setPosts(posts.map((p,index)=>index===currentPostIndex?{...p,message:newMessage}:p))},500),handleApprovePost=async()=>{if(post.message.length>characterLimit){addSnackbar({message:"Your post is ".concat(post.message.length-characterLimit," characters over the limit"),pVariant:"destructive",hideAction:!0});return}let result=await updateUserPost(post,post.message);if(!result){addSnackbar({message:"Failed to approve post",pVariant:"destructive",hideAction:!0});return}return onApprove&&onApprove(),addSnackbar({message:"Post approved!",pVariant:"success",hideAction:!0}),result},handleTopicChange=delta=>{let newIndex;if(!delta||"number"!=typeof delta)throw Error("Invalid delta - must be a non-zero number");delta>0&&(newIndex=(currentPostIndex+delta)%posts.length),delta<0&&(newIndex=(posts.length+currentPostIndex+delta)%posts.length),setCurrentPostIndex(newIndex)},stepperButtons=()=>{let buttons=[{icon:Arrow_Left.r,onClick:()=>handleTopicChange(-1)},{icon:Arrow_Right.r,onClick:()=>handleTopicChange(1)}];return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"12px"},children:[(0,jsx_runtime.jsxs)(PTypography.Z,{size:"body1",weight:"regular",color:theme.palette.primaryCL.Black100,children:[currentPostIndex+1," of ",posts.length]}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"},children:buttons.map((button,index)=>(0,jsx_runtime.jsx)(PButton.Z,{pVariant:"stepper",onClick:button.onClick,isIconicButton:!0,Icon:button.icon,iconProps:{width:"12px",height:"12px"}},index))})]})},CheckboxList=_ref2=>{let{title,items,selectedValue,onChange}=_ref2;return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",spacing:"8px",sx:{marginLeft:"4px",marginTop:"0px"},children:[(0,jsx_runtime.jsx)(PTypography.Z,{size:"body1",weight:"bold",color:theme.palette.primaryCL.Black100,children:title}),items.map((item,index)=>(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(PCheckbox.Z,{big:!0,label:item,checked:selectedValue===item||(null==selectedValue?void 0:selectedValue.includes(item)),onChange:()=>onChange(item)}),label:item,sx:{cursor:"default",gap:"8px"}},index))]})},ImageBox=()=>(0,jsx_runtime.jsxs)(Box.Z,{style:{display:"flex",marginTop:"20px",borderRadius:"8px",width:"250px",height:"200px",justifyContent:imageLoading?"center":"flex-start",alignItems:imageLoading?"center":"flex-start",backgroundColor:imageLoading?"#F5F5F5":"transparent",border:imageLoading?"1px dashed #E0E0E0":"none"},children:[imageLoading&&(0,jsx_runtime.jsx)(CircularProgress.Z,{style:{color:"inherit"}}),(0,jsx_runtime.jsx)("img",{onLoad:()=>setImageLoading(!1),src:null==post?void 0:post.articleImageUrl,alt:"Article thumbnail",style:{display:imageLoading?"none":"block",width:"250px",height:"200px",borderRadius:"8px",objectFit:"cover"}})]});return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,style:{justifyContent:"center"},children:[(0,jsx_runtime.jsx)(PModal.Z,{open:toneModalOpen,onClose:()=>setToneModalOpen(!1),floating:!0,ultraWideContent:!0,children:(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",spacing:"20px",style:{width:"364px"},children:[toneModalOptionGroups.map((group,index)=>(0,jsx_runtime.jsx)(CheckboxList,{title:group.title,items:group.items,selectedValue:getGroupSelectedOptions(group.title),onChange:toggleModalOption},index)),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,jsx_runtime.jsx)(PButton.Z,{onClick:()=>setToneModalOpen(!1),pVariant:"outlined",children:"Cancel"}),(0,jsx_runtime.jsx)(PButton.Z,{onClick:handleRephrasePost,disabled:disableUpdateButton,pVariant:"black",children:isUpdating?(0,jsx_runtime.jsx)(CircularProgress.Z,{style:{color:"inherit"}}):"Update"})]})]})}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,jsx_runtime.jsx)(()=>(0,jsx_runtime.jsxs)("div",{style:{width:"100%"},children:[(0,jsx_runtime.jsx)(PTypography.Z,{size:"h3",weight:"bold",children:"Choose or edit your post"}),(0,jsx_runtime.jsxs)(Box.Z,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:"8px",marginTop:"24px",marginBottom:"16px"},children:[(null==post?void 0:post.topic)&&(0,jsx_runtime.jsx)(PBadge.Z,{pVariant:"purple",children:null==post?void 0:post.topic}),(null==posts?void 0:posts.length)>1&&(0,jsx_runtime.jsx)("div",{children:stepperButtons()})]})]}),{}),(0,jsx_runtime.jsxs)("div",{ref:contentDivRef,style:{width:"100%",minHeight:contentHeight,maxHeight:contentHeight},children:[(0,jsx_runtime.jsx)(()=>(0,jsx_runtime.jsx)("div",{style:{display:"inline-block",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.08)",padding:"24px",border:"1px solid #E0E0E0",borderRadius:"14px",height:"calc(100% - 68px)",width:"100%",overflowWrap:"break-word",overflowY:"scroll"},children:isUpdating?(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{style:{color:"inherit"}})}):(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(InputBase.ZP,{type:"text",multiline:!0,defaultValue:null==post?void 0:post.message,onChange:e=>handleEditPost(e.target.value),sx:{width:"100%",height:"100%",padding:"0px",boxShadow:"none",border:"none",m:0,p:0}}),(null==post?void 0:post.articleImageUrl)&&(0,jsx_runtime.jsx)(ImageBox,{})]})}),{}),(0,jsx_runtime.jsx)(()=>(0,jsx_runtime.jsx)("div",{ref:footerDivRef,style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"100%",gap:"8px",marginTop:"12px"},children:[{label:"Rephrase",variant:"outlined",onClick:()=>setToneModalOpen(!0)},{label:"Approve",variant:"primary",onClick:handleApprovePost}].map((button,index)=>(0,jsx_runtime.jsx)(PButton.Z,{pVariant:button.variant,onClick:button.onClick,children:button.label},index))}),{})]})]})]})}PostEdit.__docgenInfo={description:"",methods:[],displayName:"PostEdit"};let PostEdit_stories={title:"Common Screens/PostEdit",component:PostEdit,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{posts:{control:{type:"object"}}}},linkedInText="\n\n\uD83D\uDE80 Excited to share a quick update on what's been cooking at [Your Company]! As we navigate through 2024, the strides we've made in innovation and collaboration have been nothing short of inspiring.\n\n\uD83C\uDF1F Our team has successfully launched [Product/Service Name], designed to revolutionize the way we approach [Industry/Field]. The feedback from our early adopters has been overwhelmingly positive, proving that we're on the right track.\n\n\uD83E\uDD1D Partnerships have always been our backbone. This quarter, we've forged new alliances with leading firms in [Sector], opening doors to uncharted territories and opportunities. A big shout-out to our partners for believing in our vision!\n\n\uD83D\uDCC8 Growth is in our DNA. Not just in numbers, but in the skills and development of our team. We've hosted several workshops and training sessions, focusing on [Skill/Technology], ensuring that we stay ahead of the curve.\n\n\uD83C\uDF0D Sustainability is not just a buzzword for us; it's a commitment. Our latest initiatives aim at reducing our carbon footprint and promoting eco-friendly practices across all operations. Proud to be part of a team that not only cares for business but for our planet too.\n\n\uD83D\uDCA1 Looking ahead, we're brimming with ideas and plans that promise to elevate [Your Company] to new heights. Stay tuned for more updates!\n\n\uD83D\uDE4F A heartfelt thank you to our clients, partners, and most importantly, our dedicated team. Your trust and hard work fuel our journey towards excellence.\n\n\uD83D\uDD17 Let's connect! Whether you're interested in collaborating, learning more about our work, or just saying hi, my inbox is always open.\n\n#Innovation #Growth #Sustainability #Teamwork #ThankYou\n",twitterText="\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a convallis arcu. Nulla maximus orci sit amet laoreet malesuada. Etiam in consectetur turpis. Vivamus a felis tellus. Sed risus enim, aliquam vel consequat vel, sollicitudin vel metus.",Default=(args=>{let[posts,setPosts]=react.useState(args.posts);return(0,jsx_runtime.jsx)(SnackbarContext.wT,{commentProp:"We have to wrap the story in the SnackbarProvider to use the useSnackbar hook.",children:(0,jsx_runtime.jsx)(PostEdit,{...args,posts:posts,setPosts:setPosts})})}).bind({});Default.args={posts:[{message:"This is Twitter post #1 "+twitterText,articleImageUrl:"https://picsum.photos/200/200",source:"twitter",topic:"Topic #1",articleUrl:"https://www.example-article1.com",approved:!1,published:!1},{message:"This is LinkedIn post #1 "+linkedInText,articleImageUrl:"https://picsum.photos/250/200",source:"linkedin",topic:"Topic #1",articleUrl:"https://www.example-article4.com",approved:!1,published:!1},{message:"This is Twitter post #2 "+twitterText,articleImageUrl:"https://picsum.photos/250/250",source:"twitter",topic:"Topic #2",articleUrl:"https://www.example-article2.com",approved:!1,published:!1},{message:"This is LinkedIn post #2 "+linkedInText,articleImageUrl:"https://picsum.photos/200/250",source:"linkedin",topic:"Topic #2",articleUrl:"https://www.example-article5.com",approved:!1,published:!1}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [posts, setPosts] = React.useState(args.posts);\n  return <SnackbarProvider commentProp="We have to wrap the story in the SnackbarProvider to use the useSnackbar hook.">\n      <PostEdit {...args} posts={posts} setPosts={setPosts} />\n    </SnackbarProvider>;\n}',...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/assets/Icons/Arrow-Right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ForwardRef});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SvgArrowRight(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:11,height:20,viewBox:"0 0 11 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.51337 19.4867L0.040039 18.0133L8.05337 10L0.0400383 1.98667L1.51337 0.513336L11 10L1.51337 19.4867Z"})))}let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgArrowRight);__webpack_require__.p},"./src/components/library/PBadge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let getVariantStyles=(theme,pVariant)=>{let colorScheme={};switch(pVariant){case"blue":colorScheme={text:theme.palette.primaryCL.Blue100,background:theme.palette.primaryCL.Blue50};break;case"teal":colorScheme={text:theme.palette.primaryCL.Teal100,background:theme.palette.primaryCL.Teal50};break;case"green":colorScheme={text:theme.palette.primaryCL.Green100,background:theme.palette.primaryCL.Green50};break;case"pink":colorScheme={text:theme.palette.primaryCL.Pink100,background:theme.palette.primaryCL.Pink50};break;case"purple":colorScheme={text:theme.palette.primaryCL.Purple100,background:theme.palette.primaryCL.Purple50};break;case"orange":colorScheme={text:theme.palette.primaryCL.Orange100,background:theme.palette.primaryCL.Orange50};break;case"black":colorScheme={text:theme.palette.primaryCL.Black110,background:theme.palette.primaryCL.Black50};break;case"grey":colorScheme={text:theme.palette.primaryCL.Black100,background:theme.palette.primaryCL.White110};break;case"red":colorScheme={text:theme.palette.primaryCL.Red100,background:theme.palette.primaryCL.Red50}}return colorScheme},StyledPBadge=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ZP)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__.Z,{shouldForwardProp:prop=>"pVariant"!==prop})(_ref=>{let{theme,pVariant}=_ref,{background,text}=getVariantStyles(theme,pVariant);return{...theme.typography.regular.footnote,height:"auto",borderRadius:100,paddingLeft:"8px",paddingRight:"8px",paddingTop:"4px",paddingBottom:"4px",fontFamily:"Inter",color:text,backgroundColor:background,backgroundColor:background,"& .MuiChip-label":{padding:0}}});function PBadge(_ref2){let{children,pVariant}=_ref2;return(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPBadge,{pVariant:pVariant,label:children})}PBadge.defaultProps={pVariant:"blue"};let __WEBPACK_DEFAULT_EXPORT__=PBadge;PBadge.__docgenInfo={description:"",methods:[],displayName:"PBadge",props:{pVariant:{defaultValue:{value:"'blue'",computed:!1},description:"Postilize design variant",type:{name:"enum",value:[{value:"'blue'",computed:!1},{value:"'teal'",computed:!1},{value:"'green'",computed:!1},{value:"'pink'",computed:!1},{value:"'purple'",computed:!1},{value:"'orange'",computed:!1},{value:"'black'",computed:!1},{value:"'grey'",computed:!1},{value:"'red'",computed:!1}]},required:!1},children:{description:"Label",type:{name:"string"},required:!0}}}},"./src/components/library/PCheckbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let buttonSize={true:"25px",false:"20px"},innerViewboxSize={true:13.33,false:16},rectProps={xmlns:"http://www.w3.org/2000/svg",x:0,y:0,rx:5,ry:5,strokeWidth:1,fill:"none",width:"16px",height:"16px"},CheckmarkElement=(big,color)=>{let innerVBoxSize=innerViewboxSize[big],innerViewbox="".concat(3.97136," ").concat(3.04065," ").concat(innerVBoxSize," ").concat(innerVBoxSize);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{viewBox:innerViewbox,style:{position:"absolute",overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"\nM 7.94272 0.94267\nL 2.80466 6.08130\nL 0       3.27600\nL 0.94266 2.33333\nL 3.00466 4.19533\nL 7.00001 0      \nL 7.94271 0.94267 Z",fill:color})})})},DashElement=(big,color)=>{let innerVBoxSize=innerViewboxSize[big],innerViewbox="".concat(3.666665," ").concat(.666665," ").concat(innerVBoxSize," ").concat(innerVBoxSize);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{viewBox:innerViewbox,style:{position:"absolute",overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"\nM 7.333333 1.333333\nH 0\nV 0\nH 7.333333\nV 1.66667 Z",fill:color})})})},BoxElement=(color,children)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{viewBox:"0 0 16 16",style:{overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{...rectProps,stroke:color})}),children]}),StyledPCheckbox=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__.Z,{shouldForwardProp:prop=>"big"!==prop})(_ref=>{let{theme,big}=_ref;return{width:buttonSize[!!big],height:buttonSize[!!big],"& .MuiSvgIcon-root":{fontSize:big?"20px":"16px"}}});function PCheckbox(_ref2){let{big,onChange,checked,indeterminate,...props}=_ref2,[isHovered,setIsHovered]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.Z)(),getIcon=(hover,checked,indeterminate)=>{let boxColor=hover?theme.palette.primaryCL.Blue100:theme.palette.primaryCL.Black100,checkmarkColor=hover?theme.palette.primaryCL.Black70:theme.palette.primaryCL.Blue100;return hover||checked?BoxElement(boxColor,CheckmarkElement(big,checkmarkColor)):indeterminate?BoxElement(boxColor,DashElement(big,"black")):BoxElement(boxColor,null)},icon=getIcon(isHovered,!1,indeterminate),checkedIcon=getIcon(isHovered,!0,indeterminate);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{sx:{borderRadius:5,width:buttonSize[!!big],height:buttonSize[!!big]},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPCheckbox,{onMouseEnter:()=>setIsHovered(!0),onMouseLeave:()=>setIsHovered(!1),onChange:onChange,checked:checked,big:big,icon:icon,checkedIcon:checkedIcon,...props})})}PCheckbox.defaultProps={big:!1,checked:!1,indeterminate:!1,disabled:!1,onChange:()=>{}};let __WEBPACK_DEFAULT_EXPORT__=PCheckbox;PCheckbox.__docgenInfo={description:"",methods:[],displayName:"PCheckbox",props:{big:{defaultValue:{value:"false",computed:!1},description:"If true, the checkbox will be larger.",type:{name:"bool"},required:!1},checked:{defaultValue:{value:"false",computed:!1},description:"If true, the checkbox will be checked.\nOnly one of `checked` or `indeterminate` should be true at any given time.\nNote: the Storybook control for this has no effect.",type:{name:"bool"},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},description:"If true, the checkbox will be in the indeterminate state.\nOnly one of `checked` or `indeterminate` should be true at any given time.",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"If true, the checkbox will be disabled.",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"Callback fired when the state is changed. Make sure to handle the checked state in the parent component.",type:{name:"func"},required:!1}}}},"./src/components/library/PSnackbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__),_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/Snackbar/Snackbar.js"),_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Slide/Slide.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Zoom/Zoom.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Fade/Fade.js"),_assets_Icons_Delete_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/Icons/Delete.svg"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_contexts_SnackbarContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/SnackbarContext.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let getVariantStyles=(theme,variant)=>{switch(variant){case"success":return{backgroundColor:theme.palette.primaryCL.Green100,color:theme.palette.primaryCL.Black200};case"destructive":return{backgroundColor:theme.palette.primaryCL.Red100,color:theme.palette.primaryCL.White100};default:return{backgroundColor:theme.palette.primaryCL.Black200,color:theme.palette.primaryCL.White100}}},easingFn={enter:"cubic-bezier(0, 0.6, 0, 0.6)",exit:"cubic-bezier(1, 0.6, 1, 0.6)"};function SlideTransition(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{...props,direction:"up",timeout:_contexts_SnackbarContext__WEBPACK_IMPORTED_MODULE_2__.aV,easing:easingFn})}function GrowTransition(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{...props,timeout:_contexts_SnackbarContext__WEBPACK_IMPORTED_MODULE_2__.aV,easing:easingFn})}function ZoomTransition(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{...props,timeout:_contexts_SnackbarContext__WEBPACK_IMPORTED_MODULE_2__.aV,easing:easingFn})}function FadeTransition(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{...props,timeout:_contexts_SnackbarContext__WEBPACK_IMPORTED_MODULE_2__.aV,easing:easingFn})}function PSnackbar(_ref){let{open=!1,message="",onClose=null,pVariant="neutral",duration=5e3,transitionType="grow",hideSeverityIcon=!1,hideAction=!1,customAction=null}=_ref,variantStyles=getVariantStyles((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.Z)(),pVariant),handleClose=(event,reason)=>{"clickaway"!==reason&&onClose&&onClose()},DeleteIcon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{alignItems:"center",alignSelf:"center",marginLeft:"28px",marginRight:"12px",fill:variantStyles.color,cursor:"pointer"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_assets_Icons_Delete_svg__WEBPACK_IMPORTED_MODULE_1__.r,{onClick:handleClose,style:{fill:variantStyles.color,width:"11.91px",height:"11.91px"}})}),StyledAlert=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__.Z,{severity:{success:"success",destructive:"error",neutral:"info"}[pVariant],variant:"filled",action:hideAction?null:customAction||DeleteIcon,icon:!hideSeverityIcon&&void 0,style:{backgroundColor:variantStyles.backgroundColor,color:variantStyles.color,boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.5)",borderRadius:"14px",classes:{icon:{padding:"0px"}}},children:message}),Contents=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_10__.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:open,autoHideDuration:duration,onClose:handleClose,TransitionComponent:{slide:SlideTransition,grow:GrowTransition,zoom:ZoomTransition,fade:FadeTransition}[transitionType],sx:{"& .MuiAlert-action":{padding:"0px"}},children:StyledAlert});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:Contents})}PSnackbar.propTypes={open:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool.isRequired,message:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string.isRequired,onClose:prop_types__WEBPACK_IMPORTED_MODULE_11___default().func,pVariant:prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(["success","destructive","neutral","default"]),duration:prop_types__WEBPACK_IMPORTED_MODULE_11___default().number,transitionType:prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(["slide","grow","zoom","fade"]),hideSeverityIcon:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,hideAction:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool,customAction:prop_types__WEBPACK_IMPORTED_MODULE_11___default().element},PSnackbar.defaultProps={open:!1,message:"",onClose:null,pVariant:"neutral",duration:5e3,transitionType:"grow",hideSeverityIcon:!1,hideAction:!1,customAction:null};let __WEBPACK_DEFAULT_EXPORT__=PSnackbar;PSnackbar.__docgenInfo={description:"",methods:[],displayName:"PSnackbar",props:{open:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},message:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},pVariant:{defaultValue:{value:'"neutral"',computed:!1},description:"",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"destructive"',computed:!1},{value:'"neutral"',computed:!1},{value:'"default"',computed:!1}]},required:!1},duration:{defaultValue:{value:"5000",computed:!1},description:"",type:{name:"number"},required:!1},transitionType:{defaultValue:{value:'"grow"',computed:!1},description:"",type:{name:"enum",value:[{value:'"slide"',computed:!1},{value:'"grow"',computed:!1},{value:'"zoom"',computed:!1},{value:'"fade"',computed:!1}]},required:!1},hideSeverityIcon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hideAction:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},customAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1}}}},"./src/contexts/SnackbarContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ds:()=>useSnackbar,aV:()=>TRANSITION_TIME,wT:()=>SnackbarProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_library_PSnackbar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/library/PSnackbar.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let SnackbarContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),TRANSITION_TIME=250,useSnackbar=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(SnackbarContext),SnackbarProvider=_ref=>{let{children}=_ref,[snackbars,setSnackbars]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),[snackbarClosing,setSnackbarClosing]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),removeSnackbar=async id=>{setSnackbarClosing(!0),await new Promise(resolve=>setTimeout(resolve,TRANSITION_TIME)),setSnackbars(prevSnackbars=>prevSnackbars.filter(snack=>snack.id!==id)),setSnackbarClosing(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(SnackbarContext.Provider,{value:{addSnackbar:_ref2=>{let{message="",pVariant="default",duration=5e3,onClose=null,transitionType="grow",hideSeverityIcon=!1,hideAction=!1,customAction=null}=_ref2,newSnackbar={id:Date.now(),message,pVariant,duration,transitionType,hideSeverityIcon,hideAction,customAction,onClose:()=>{removeSnackbar(newSnackbar.id),onClose&&onClose()}};setSnackbars(prevSnackbars=>[...prevSnackbars,newSnackbar])}},children:[children,snackbars.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_library_PSnackbar__WEBPACK_IMPORTED_MODULE_1__.Z,{open:!snackbarClosing,message:snackbars[0].message,pVariant:snackbars[0].pVariant,duration:snackbars[0].duration,onClose:snackbars[0].onClose,transitionType:snackbars[0].transitionType,hideSeverityIcon:snackbars[0].hideSeverityIcon,hideAction:snackbars[0].hideAction,customAction:snackbars[0].customAction},snackbars[0].id)]})};SnackbarProvider.__docgenInfo={description:"",methods:[],displayName:"SnackbarProvider"}}}]);