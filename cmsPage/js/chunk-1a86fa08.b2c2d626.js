(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a86fa08"],{"0234":function(e,t,a){},2647:function(e,t,a){"use strict";var o=a("98d0"),n=a.n(o);n.a},"5a5e":function(e,t,a){},"60b9":function(e,t,a){"use strict";var o=a("5a5e"),n=a.n(o);n.a},"98d0":function(e,t,a){},9925:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"UserManager"},[a("el-dialog",{attrs:{center:"",title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[a("c-form",{attrs:{formLabel:e.operateFormLabel,form:e.operateForm}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1),a("header",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+ 新增")])],1),a("c-form",{attrs:{inline:"",formLabel:e.formLabel,form:e.searchForm},on:{input:e.searchData}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList()}}},[e._v("搜索")])],1)],1),a("main",[a("c-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:e.getList,edit:e.editUser,delete:e.deleteUser}})],1)],1)},n=[],r=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"CTable"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.config.loading,expression:"config.loading"}],attrs:{height:"calc(100% - 100px)",data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(20*(e.config.page-1)+t.$index+1))])]}}])}),e._l(e.tableLabel,(function(t){return a("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,"min-width":t.width||"auto"},scopedSlots:e._u([{key:"default",fn:function(o){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(o.row[t.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{"min-width":"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),a("el-pagination",{attrs:{background:!0,layout:"prev,pager,next",total:e.config.total,"page-size":e.config.pageTotal,"current-page":e.config.page},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changePage}})],1)}),i=[],l={name:"CTable",components:{},props:{tableData:Array,tableLabel:Array,config:Object},data:function(){return{}},computed:{},watch:{},methods:{changePage:function(){this.$emit("changePage")},handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("delete",e)}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},s=l,c=(a("60b9"),a("2877")),u=Object(c["a"])(s,r,i,!1,null,"4638bca2",null),d=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"100px"}},[e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.model},[t.type?e._e():a("el-input",{attrs:{placeholder:"请输入"+t.label},on:{input:e.clg},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"date"===t.type?a("el-date-picker",{attrs:{placeholder:"选择日期"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)},m=[],p={name:"CForm",components:{},props:{form:Object,formLabel:Array,inline:Boolean},data:function(){return{}},computed:{},watch:{},methods:{clg:function(e){this.$emit("input",e)}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},b=p,g=(a("e4d9"),Object(c["a"])(b,f,m,!1,null,"403fec71",null)),h=g.exports,y={name:"UserManager",components:{CForm:h,CTable:d},props:{},data:function(){return{searchInfo:null,operateType:"add",isShow:!1,operateForm:{name:"",addr:"",age:"",birth:"",sex:""},operateFormLabel:[{model:"name",label:"姓名"},{model:"age",label:"年龄"},{model:"sexLabel",label:"性别",type:"select",options:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址"}],tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期",width:"120"},{prop:"addr",label:"地址",width:"250"}],config:{page:1,pageTotal:20,total:null,loading:!1},searchForm:{keyword:""},formLabel:[{model:"keyword",label:"",options:[]}]}},computed:{},watch:{},methods:{searchData:function(e){this.searchInfo=e},getList:function(){var e=this;this.config.loading=!0,this.$request({url:"/api/user/getUser",params:{page:this.config.page,name:this.searchInfo}}).then((function(t){e.tableData=t.data.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),e.config.total=t.data.count,e.config.loading=!1}))},addUser:function(){this.operateType="add",this.isShow=!0},editUser:function(e){this.operateType="edit",this.isShow=!0,this.operateForm=e},deleteUser:function(e){var t=this;this.$confirm("此操作将永久删除该文件，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$request({url:"/api/user/del",params:{id:e.id}}).then((function(e){t.isShow=!1,t.$message({message:e.data.message,center:!0,type:"success"}),t.$message({message:e.data.message,center:!0,type:"error"}),t.getList()})).catch((function(e){console.log(e)}))})).catch((function(){t.$message({message:"已取消删除",center:!0,type:"info"})}))},confirm:function(){var e=this;"edit"===this.operateType?this.$request({method:"post",url:"/api/user/edit",data:JSON.stringify(this.operateForm)}).then((function(t){e.isShow=!1,e.$message({message:t.data.data.message,center:!0,type:"success"}),e.getList()})).catch((function(t){e.$message({message:t.data.data.message,center:!0,type:"error"})})):"add"===this.operateType&&(console.log(this.operateForm),this.$request({method:"post",url:"api/user/add",data:JSON.stringify(this.operateForm)}).then((function(t){console.log(t),e.isShow=!1,e.$message({message:t.data.data.message,center:!0,type:"success"}),e.getList()})).catch((function(t){e.$message({message:t.data.data.message,center:!0,type:"error"})})))}},created:function(){this.getList()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},v=y,w=(a("2647"),Object(c["a"])(v,o,n,!1,null,"7d826ba0",null));t["default"]=w.exports},e4d9:function(e,t,a){"use strict";var o=a("0234"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-1a86fa08.b2c2d626.js.map