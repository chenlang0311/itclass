webpackJsonp([7],{

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(200)(
  /* script */
  __webpack_require__(559),
  /* template */
  __webpack_require__(560),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let API_ROOT = "/crm/v1" || '/crm/v1';

/* harmony default export */ __webpack_exports__["a"] = ({
	baseUrl: API_ROOT
});

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages__ = __webpack_require__(527);



/* harmony default export */ __webpack_exports__["a"] = ({
    users: __WEBPACK_IMPORTED_MODULE_0__users__,
    pages: __WEBPACK_IMPORTED_MODULE_1__pages__
});

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(524);



let base = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].baseUrl;

let setParamsTime = function (params) {
    //获取登录的绝对时间
    params = params || {}; //如果没有传值将parms声明成一个对象
    if (params && Object.prototype.toString.call(params) === '[object Object]') params.timestamp = new Date().getTime(); //timestamp为时间戳(唯一)
    return params;
};

const login = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/users/login`, params).then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["login"] = login;


const loginout = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/loginout`, params);
};
/* harmony export (immutable) */ __webpack_exports__["loginout"] = loginout;


const logininfo = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/logininfo`, { params: setParamsTime(params) }).then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["logininfo"] = logininfo;


const list = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["list"] = list;


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(524);



let base = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].baseUrl;
let setParamsTime = function (params) {
    params = params || {};
    if (params && Object.prototype.toString.call(params) === '[object Object]') params.timestamp = new Date().getTime();
    return params;
};

//获取到优秀文案列表
const allList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/t_copy_writer/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["allList"] = allList;

//新增加微信账号
const addWx = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/t_user_info/add`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addWx"] = addWx;

//微信账号列表
const wxList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/t_user_info/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["wxList"] = wxList;

//IP地址列表
const ipList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/t_net_info/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["ipList"] = ipList;

//订阅号
const addad = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/t_weixin_topic/add`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addad"] = addad;

const adList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/t_weixin_topic/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["adList"] = adList;

//行业
const addhy = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/t_weixin_industry/add`, params);
};
/* harmony export (immutable) */ __webpack_exports__["addhy"] = addhy;

const hyList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/t_weixin_industry/list`, { params: setParamsTime(params) });
};
/* harmony export (immutable) */ __webpack_exports__["hyList"] = hyList;


// //获取到最新的PC端的文章列表
// export const financeList = params => { return axios.get(`${base}/finance_article/list`, { params: setParamsTime(params) }); };
// export const financeInfo = (id) => { return axios.get(`${base}/finance_article/info/${id}`);};//最新文章的详细信息
// export const financeUpdate = (id,params) => { return axios.put(`${base}/finance_article/update/${id}`,params);};

// //获取到最新的WX端的文章列表
// export const weiXinList = params => { return axios.get(`${base}/weixin_article/list`, { params: setParamsTime(params) }); };
// export const weiXinInfo = (id) => { return axios.get(`${base}/weixin_article/info/${id}`);};
// export const weiXinUpdate = (id,params) => { return axios.put(`${base}/weixin_article/update/${id}`,params);};


// //获取到最新的财经网站的文章列表
// export const sfcList = params => { return axios.get(`${base}/sfc_article/list`, { params: setParamsTime(params) }); };
// export const sfcIfon =(id) => { return axios.get(`${base}/sfc_article/info/${id}`);};
// export const sfcUpdate = (id,params) => { return axios.put(`${base}/sfc_article/update/${id}`,params);};


// //获取到重点文章列表
// export const createImList = params => { return axios.post(`${base}/article_collection/create`,  params ); };
// export const imList = params => { return axios.get(`${base}/article_collection/list`, { params: setParamsTime(params) }); };
// export const imIfon =(id,params) => { return axios.get(`${base}/article_collection/info/${id}`,{params});};
// export const imUpdate =(id,params) => { return axios.put(`${base}/article_collection/update/${id}`,params);};


// //删除事件
// export const financeDeleted = (id) => { return axios.delete(`${base}/finance_article/delete/${id}`); };
// export const weiXinDeleted = (id) => { return axios.delete(`${base}/weixin_article/delete/${id}`); };
// export const sfcDeleted = (id) => { return axios.delete(`${base}/sfc_article/delete/${id}`); };

/***/ }),

/***/ 528:
/***/ (function(module, exports) {



Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_toools__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_toools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_js_toools__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      tableData: [],
      formwx: {
        account: "",
        name: "",
        weixin_industry_id: ""
      },
      activeName: "0",
      upload_way: "",
      fileList: [],
      handler: { total: 0 },
      // headIfon: {
      //   Authorization: ""
      // }
      filters: {
        page: 1,
        count: 10
      },
      rules: {
        account: [{ required: true, message: "请输入订阅号账号", trigger: "blur" }, { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }],
        weixin_industry_id: [{ required: true, message: "请输入订阅号的行业", trigger: "blur" }],
        name: [{ required: true, message: "请输入订阅号名称", trigger: "blur" }]
      }
    };
  },
  created() {
    this.upload_way = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].baseUrl;
    this.getdata();
    // this.headIfon.Authorization = localStorage.getItem('token');
  },
  methods: {
    handleSelectionChange() {},
    // addwx() {},
    handleCurrentChange(val) {
      this.filters.page = val;
      this.getdata();
    },
    handleSizeChange(val) {
      this.filters.page = 1;
      this.filters.count = val;
      this.getData();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handlePreview(file) {
      console.log("hp");
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      if (response.status == true) {
        console.log("上传成功");
        this.$message.success("上传成功！");
        this.getdata();
      } else if (response.status == false) {
        this.$message.error(response.msg);
        fileList.pop();
      }
    },
    //上传失败
    backError(err, file, fileList) {
      this.$message.error("上传失败！");
    },
    handleRemove(file, fileList) {
      console.log(fileList);
      console.log(file, fileList);
    },

    //提交表单
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].pages.addad(this.formwx).then(data => {
            //   console.log(data);
            this.getdata();
            this.resetForm("formwx");
            //   api.pages
            //     .wxList()
            //     .then(data => {
            //       console.log(data);
            //       this.tableData = data.data.data;
            //       this.handler.total = data.data.total;
            //       this.listLoading = false;
            //     })
            //     .catch(err => {
            //       console.log(err);
            //       this.$message.error(err);
            //     });

            // this.tableData = data.data.data;
            // this.handler.total = data.data.total;
            // this.listLoading = false;
            this.$message.success("添加成功");
          }).catch(err => {
            console.log(err);
            this.$message.error(err);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      // api.pages
      //   .addWx(this.formwx)
      //   .then(data => {
      //     console.log(data);
      //     // this.tableData = data.data.data;
      //     // this.handler.total = data.data.total;
      //     // this.listLoading = false;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     this.$message.error(err);
      //   });
    },
    //获取数据
    getdata() {
      __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].pages.adList(this.filters).then(data => {
        console.log(data);
        this.tableData = data.data.data;
        this.handler.total = data.data.total;
        this.listLoading = false;
      }).catch(err => {
        console.log(err);
        this.$message.error(err);
      });
    }
  }
});

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "operate"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-edit"
  }), _vm._v(" 操作页面")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("订阅号")])], 1)], 1), _vm._v(" "), _c('el-form', {
    ref: "formwx",
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "model": _vm.formwx,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "订阅号账号",
      "required": "",
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "required": ""
    },
    model: {
      value: (_vm.formwx.account),
      callback: function($$v) {
        _vm.$set(_vm.formwx, "account", $$v)
      },
      expression: "formwx.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "订阅号名称",
      "required": "",
      "prop": "name"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.formwx.name),
      callback: function($$v) {
        _vm.$set(_vm.formwx, "name", $$v)
      },
      expression: "formwx.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "账号类型(行业)",
      "required": "",
      "prop": "weixin_industry_id"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.formwx.weixin_industry_id),
      callback: function($$v) {
        _vm.$set(_vm.formwx, "weixin_industry_id", _vm._n($$v))
      },
      expression: "formwx.weixin_industry_id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.onSubmit('formwx')
      }
    }
  }, [_vm._v("立即添加")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.resetForm('formwx')
      }
    }
  }, [_vm._v("重置")])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "43px",
      "width": "400px"
    }
  }, [_c('el-upload', {
    attrs: {
      "name": "uploadimg",
      "accept": "excel",
      "action": _vm.upload_way + '/uploads/uploadexc',
      "on-preview": _vm.handlePreview,
      "on-remove": _vm.handleRemove,
      "on-success": _vm.handleSuccess,
      "on-error": _vm.backError,
      "multiple": ""
    }
  }, [_c('el-button', {
    staticStyle: {
      "margin-left": "150px"
    },
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("点击上传")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("文件直接上传，单个在上边添加")])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "position": "absolute",
      "left": "450px",
      "top": "75px"
    }
  }, [_c('el-table', {
    ref: "multipleTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "account",
      "label": "订阅号账号",
      "width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "订阅号名称",
      "width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "t_weixin_industry.industry",
      "label": "账号类型(行业)",
      "width": "300"
    }
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "layout": "total,prev, pager, next",
      "total": _vm.handler.total,
      "current-page": _vm.filters.page,
      "page-size": _vm.filters.count
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })

});