(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{346:function(e,t,a){e.exports=a(446)},353:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a.n(c),l=(a(353),a(263)),i=a(34),s=a(59),u=a(343),f=a(281),d=a(313),m=a(319),g=a(311),p=a(101),b=a(239),h=a(271),E=a(137),O=a.n(E),j=a(320),w=a(208),y=a(244),v=a(245),x=a(287),R=a(286),k=a(285),S=a(321),C=a(148),N=a.n(C),z=new URLSearchParams(window.location.search).get("jwt"),F="/api/v1/",T=a(454),A=a(455),P=a(459),D=a(456),B=a(267),L=a(284),G=a(324),U=a.n(G),I=a(460),M=a(457),W=a(198),J=(a(372),a(373),Object(f.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,"& > * + *":{marginTop:e.spacing(2)}}}}));function H(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=(a[0],a[1],Object(i.f)(),J()),o=Object(n.useState)([]),l=Object(s.a)(o,2),u=l[0],f=l[1],d=Object(n.useState)(!1),m=Object(s.a)(d,2),g=m[0],p=m[1],b=Object(n.useState)({facilities:[]}),h=Object(s.a)(b,2),E=h[0],C=(h[1],r.a.useState([])),G=Object(s.a)(C,2),H=G[0],V=G[1],_=Object(n.useState)(null),q=Object(s.a)(_,2),K=(q[0],q[1]),Q=Object(n.useState)(!1),X=Object(s.a)(Q,2),Y=X[0],Z=X[1];function $(){return($=Object(w.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("".concat(F,"account"),{headers:{Authorization:"Bearer ".concat(z)}}).then(function(e){K(e.data),f(e.data.applicationUserOrganisationUnits)}).catch(function(e){});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){!function(){$.apply(this,arguments)}()},[]);var ee=function(e){return function(){var t=H.indexOf(e),a=Object(j.a)(H);-1===t?a.push(e):a.splice(t,1),V(a)}};return r.a.createElement("div",null,r.a.createElement(W.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(T.a,null,r.a.createElement(A.a,null,H.length>=1?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{color:"primary",variant:"contained",className:" float-right mr-1",size:"large",hidden:g,onClick:function(){return function(){p(!0),Z(!0);var e="";H.forEach(function(t){var a=t.organisationUnitId;e="facilityIds="+a}),E.facilities=e,N.a.get("".concat(F,"ndr/generate?").concat(e),{headers:{Authorization:"Bearer ".concat(z)}}).then(function(e){window.setTimeout(function(){W.b.success(" Generating NDR Successful!"),Z(!1)},5e3)}).catch(function(e){if(Z(!1),p(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";W.b.error(t)}else W.b.error("Something went wrong. Please try again...")})}()}},r.a.createElement(B.a,null)," \xa0\xa0",r.a.createElement("span",{style:{textTransform:"capitalize"}}," Generate Messages"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{color:"primary",variant:"contained",className:" float-right mr-1",size:"large",disabled:"true"},r.a.createElement(B.a,null)," \xa0\xa0",r.a.createElement("span",{style:{textTransform:"capitalize"}}," Generate Messages "))),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(P.a,{severity:"info"},r.a.createElement(D.a,null,"Info"),"Please check the Facilities you want"),r.a.createElement("br",null),r.a.createElement(y.a,{dense:!0,className:c.root},r.a.createElement("br",null),u.map(function(e){var t="checkbox-list-secondary-label-".concat(e.id);return r.a.createElement(v.a,{key:e.id,button:!0},r.a.createElement(k.a,null,r.a.createElement(U.a,null)),r.a.createElement(R.a,{id:t,primary:"".concat(e.organisationUnitName)}),r.a.createElement(x.a,null,r.a.createElement(S.a,{edge:"end",onChange:ee(e),checked:-1!==H.indexOf(e),inputProps:{"aria-labelledby":t}})))}))))),r.a.createElement(I.a,{isOpen:Y,toggle:function(){return Z(!Y)},backdrop:!1,fade:!0,style:{marginTop:"250px"},size:"lg"},r.a.createElement(M.a,null,r.a.createElement("h2",null,"Generating NDR File. Please wait..."))))}var V=a(458),_=a(246),q=a.n(_),K=a(297),Q=a(243),X=a(342),Y=a.n(X),Z=a(341),$=a(327),ee=a.n($),te=a(328),ae=a.n(te),ne=a(338),re=a.n(ne),ce=a(329),oe=a.n(ce),le=a(336),ie=a.n(le),se=a(270),ue=a.n(se),fe=a(269),de=a.n(fe),me=a(330),ge=a.n(me),pe=a(331),be=a.n(pe),he=a(333),Ee=a.n(he),Oe=a(334),je=a.n(Oe),we=a(335),ye=a.n(we),ve=a(339),xe=a.n(ve),Re=a(332),ke=a.n(Re),Se=a(337),Ce=a.n(Se),Ne=a(340),ze=a.n(Ne),Fe={Add:Object(n.forwardRef)(function(e,t){return r.a.createElement(ae.a,Object.assign({},e,{ref:t}))}),Check:Object(n.forwardRef)(function(e,t){return r.a.createElement(oe.a,Object.assign({},e,{ref:t}))}),Clear:Object(n.forwardRef)(function(e,t){return r.a.createElement(de.a,Object.assign({},e,{ref:t}))}),Delete:Object(n.forwardRef)(function(e,t){return r.a.createElement(ge.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(n.forwardRef)(function(e,t){return r.a.createElement(ue.a,Object.assign({},e,{ref:t}))}),Edit:Object(n.forwardRef)(function(e,t){return r.a.createElement(be.a,Object.assign({},e,{ref:t}))}),Export:Object(n.forwardRef)(function(e,t){return r.a.createElement(ke.a,Object.assign({},e,{ref:t}))}),Filter:Object(n.forwardRef)(function(e,t){return r.a.createElement(Ee.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(je.a,Object.assign({},e,{ref:t}))}),LastPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(ye.a,Object.assign({},e,{ref:t}))}),NextPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(ue.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(ie.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(n.forwardRef)(function(e,t){return r.a.createElement(de.a,Object.assign({},e,{ref:t}))}),Search:Object(n.forwardRef)(function(e,t){return r.a.createElement(Ce.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(n.forwardRef)(function(e,t){return r.a.createElement(re.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(n.forwardRef)(function(e,t){return r.a.createElement(xe.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(n.forwardRef)(function(e,t){return r.a.createElement(ze.a,Object.assign({},e,{ref:t}))})},Te=Object(f.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,"& > * + *":{marginTop:e.spacing(2)}}}});function Ae(){Te();var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),i=l[0],u=(l[1],Object(n.useState)(!1)),f=Object(s.a)(u,2),d=f[0],m=f[1],g=function(){return m(!d)};Object(n.useEffect)(function(){!function(){p.apply(this,arguments)}()},[]);function p(){return(p=Object(w.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("".concat(F,"ndr/files"),{headers:{Authorization:"Bearer ".concat(z)}}).then(function(e){console.log(e.data),c(e.data),console.log(e.data)}).catch(function(e){});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(L.a,{variant:"contained",color:"primary",className:" float-right",startIcon:r.a.createElement(Z.a,{size:"10"}),style:{backgroundColor:"#014d88"},href:"https://ndr.phis3project.org.ng/Identity/Account/Login?ReturnUrl=%2F",target:"_blank"},r.a.createElement("span",null,"Upload to NDR")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(q.a,{icons:Fe,title:"List of Filies Generated",columns:[{title:"Facility Name",field:"name",filtering:!1},{title:"Number of Files Generated",field:"files",filtering:!1},{title:"File Name",field:"fileName",filtering:!1},{title:"Date Last Generated",field:"date",type:"date",filtering:!1},{title:"Action",field:"actions",filtering:!1}],isLoading:i,data:a.map(function(e){return{name:e.facility,files:e.files,fileName:e.fileName,date:e.lastModified,actions:r.a.createElement(K.a,{title:"Download",onClick:function(){return t=e.fileName,console.log("code is here "),void N.a.get("".concat(F,"ndr/download/").concat(t),{headers:{Authorization:"Bearer ".concat(z)},responseType:"blob"}).then(function(e){var a=e.data,n=new Blob([a],{type:"application/octet-stream"});ee.a.saveAs(n,"".concat(t,".zip"))}).catch(function(e){});var t}},r.a.createElement(Q.a,{"aria-label":"Download"},r.a.createElement(Y.a,{color:"primary"})))}}),options:{pageSizeOptions:[5,10,50,100,150,200],headerStyle:{backgroundColor:"#014d88",color:"#fff",margin:"auto"},filtering:!0,searchFieldStyle:{width:"300%",margingLeft:"250px"},exportButton:!1,searchFieldAlignment:"left"}}),r.a.createElement(I.a,{isOpen:d,toggle:g,backdrop:!1,fade:!0,size:"xl",style:{marginTop:"50px"}},r.a.createElement(V.a,{toggle:g}),r.a.createElement(M.a,null,r.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none",margin:0,padding:0},src:"https://ndr.phis3project.org.ng/Identity/Account/Login?ReturnUrl=%2F"}),r.a.createElement("embed",{src:"https://ndr.phis3project.org.ng/",width:"100%",height:"1000",onerror:"alert('URL invalid !!');"}))))}function Pe(e){var t=e.children,a=e.value,n=e.index,c=Object(u.a)(e,["children","value","index"]);return r.a.createElement(p.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},c),a===n&&r.a.createElement(b.a,{p:5},t))}function De(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var Be=Object(f.a)(function(e){return{root2:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper,margin:e.spacing(7),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:12},pos:{fontSize:11},cardContent:{padding:2},cardroot:{margin:e.spacing(1),height:"250px !important"}},alertmsge:{marginTop:e.spacing(2)},rootaccordia:{width:"100%"},accordiaheading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},allergiesroot:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},checkboxroot:{display:"flex"},formControl:{margin:e.spacing(3)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}},formroot:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},inforoot:{width:"95%",margin:20,backgroundColor:"#eee"}}}),Le=function(e){var t=Be(),a=Object(n.useState)(0),c=Object(s.a)(a,2),o=c[0],l=c[1],i=function(e,t){var a=t,n=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(a);return n?n[1]:null}("tab",e.location),u=null!==i?i:e.location;Object(n.useEffect)(function(){switch(u){case"generate":return l(0);case"download":return l(1);default:return l(0)}},[i]);return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.inforoot}),r.a.createElement(d.a,{position:"static",style:{backgroundColor:"#014d88"}},r.a.createElement(m.a,{value:o,onChange:function(e,t){l(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"secondary",textColor:"inherit","aria-label":"scrollable force tabs example"},r.a.createElement(g.a,Object.assign({className:t.title,label:"Generate Messages ",icon:r.a.createElement(h.b,null)},De(0))),r.a.createElement(g.a,Object.assign({className:t.title,label:"Download Files",icon:r.a.createElement(h.a,null)},De(1)))),r.a.createElement("div",null)),r.a.createElement(Pe,{value:o,index:0},r.a.createElement(H,null)),r.a.createElement(Pe,{value:o,index:1},r.a.createElement(Ae,null)))};function Ge(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/"},r.a.createElement(Ue,null)))))}function Ue(){return r.a.createElement(Le,null)}a(445);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root"))}},[[346,1,2]]]);
//# sourceMappingURL=main.3b591468.chunk.js.map