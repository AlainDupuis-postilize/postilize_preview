"use strict";(self.webpackChunkpostilize_react=self.webpackChunkpostilize_react||[]).push([[2788],{"./src/stories/PPostSelector.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collection:()=>Collection,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_client_src_components_library_PPostSelector__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/library/PPostSelector.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Postilize Library/PPostSelector",component:_client_src_components_library_PPostSelector__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]},examplePosts=[{text:"I am a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam aliquet, nunc nisl aliquam nunc, quis aliquam nunc nisl quis nunc.",isSelected:!1},{text:"I am another sample post.",isSelected:!1},{text:"I am yet another sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",isSelected:!1}],Collection=(args=>{let[posts,setPosts]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(examplePosts),onToggle=index=>{console.log("Toggling selection for post at index ".concat(index)),setPosts(posts.map((post,idx)=>idx===index?{...post,isSelected:!post.isSelected}:post))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"600px"},children:posts.map((post,idx)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_client_src_components_library_PPostSelector__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,key:idx,index:idx,post:post,onToggle:onToggle}))})}).bind({});Collection.args={};let Single=(args=>{let[isSelected,setIsSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_client_src_components_library_PPostSelector__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,post:{text:"I am a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam aliquet, nunc nisl aliquam nunc, quis aliquam nunc nisl quis nunc.",isSelected},onToggle:()=>setIsSelected(!isSelected)})}).bind({});Single.args={},Collection.parameters={...Collection.parameters,docs:{...Collection.parameters?.docs,source:{originalSource:"args => {\n  const [posts, setPosts] = useState(examplePosts);\n  const onToggle = index => {\n    console.log(`Toggling selection for post at index ${index}`);\n\n    // Toggle the selected state of the post at the given index\n    const updatedPosts = posts.map((post, idx) => idx === index ? {\n      ...post,\n      isSelected: !post.isSelected\n    } : post);\n\n    // Update the posts state\n    setPosts(updatedPosts);\n  };\n  return <div style={{\n    width: '600px'\n  }}>\n      {\n    // Iterate over a collection of posts\n    posts.map((post, idx) => <PPostSelector {...args} key={idx} index={\n    // Make sure to pass the `index` prop to the component,\n    // just the key won't work\n    idx} post={post} onToggle={onToggle} />)}\n    </div>;\n}",...Collection.parameters?.docs?.source}}},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => {\n  const [isSelected, setIsSelected] = useState(false);\n  return <PPostSelector {...args} post={{\n    text: 'I am a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam aliquet, nunc nisl aliquam nunc, quis aliquam nunc nisl quis nunc.',\n    isSelected\n  }} onToggle={() => setIsSelected(!isSelected)} />;\n}",...Single.parameters?.docs?.source}}};let __namedExportsOrder=["Collection","Single"]}}]);