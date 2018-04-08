webpackJsonp([3],{

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(551)
__webpack_require__(553)

var Component = __webpack_require__(200)(
  /* script */
  __webpack_require__(555),
  /* template */
  __webpack_require__(556),
  /* scopeId */
  "data-v-03972d26",
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

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(201)("6f875a95", content, true);

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)(false);
// imports


// module
exports.push([module.i, ".ad td:nth-child(10):hover{cursor:pointer;text-decoration:underline}", ""]);

// exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(201)("54d3128b", content, true);

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)(false);
// imports


// module
exports.push([module.i, ".handle-box[data-v-03972d26]{margin-bottom:20px}.toolbar[data-v-03972d26]{width:100%}.handle-select[data-v-03972d26]{width:120px}.handle-input[data-v-03972d26]{width:300px;display:inline-block}", ""]);

// exports


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_toools__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_toools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_js_toools__);
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
      url: "./static/vuetable.json",
      tableData: [],
      filters: {
        page: 1,
        count: 100,
        city: [], //城市定位
        industry: "", //行业定位
        // account: "", //微信账号定位
        ad_account: "", //广告主账号定位
        created: null, //最早时间
        modified: null //最新时间
      },
      date: [],
      time1: "",
      time2: "",
      city: '',
      handler: {
        total: 0
      },
      options: [{
        value: "北京",
        label: "北京"
      }, {
        value: "上海",
        label: "上海"
      }, {
        value: "广州",
        label: "广州"
      }, {
        value: "衡阳",
        label: "衡阳"
      }, {
        value: "成都",
        label: "成都"
      }, {
        value: "深圳",
        label: "深圳"
      }, {
        value: "杭州",
        label: "杭州"
      }, {
        value: "武汉",
        label: "武汉"
      }, {
        value: "苏州",
        label: "苏州"
      }, {
        value: "重庆",
        label: "重庆"
      }, {
        value: "南京",
        label: "南京"
      }, {
        value: "天津",
        label: "天津"
      }, {
        value: "西安",
        label: "西安"
      }, {
        value: "沈阳",
        label: "沈阳"
      }, {
        value: "长沙",
        label: "长沙"
      }, {
        value: "青岛",
        label: "青岛"
      }, {
        value: "宁波",
        label: "宁波"
      }, {
        value: "郑州",
        label: "郑州"
      }, {
        value: "大连",
        label: "大连"
      }, {
        value: "厦门",
        label: "厦门"
      }, {
        value: "济南",
        label: "济南"
      }, {
        value: "哈尔滨",
        label: "哈尔滨"
      }, {
        value: "福州",
        label: "福州"
      }]
    };
  },
  created() {
    this.getData();
  },
  computed: {
    // data() {
    //   const self = this;
    //   return self.tableData.filter(function(d) {
    //     let is_del = false;
    //     for (let i = 0; i < self.del_list.length; i++) {
    //       if (d.name === self.del_list[i].name) {
    //         is_del = true;
    //         break;
    //       }
    //     }
    //     if (!is_del) {
    //       if (
    //         d.address.indexOf(self.select_cate) > -1 &&
    //         (d.name.indexOf(self.select_word) > -1 ||
    //           d.address.indexOf(self.select_word) > -1)
    //       ) {
    //         return d;
    //       }
    //     }
    //   });
    // }
  },
  filters: {
    // orderStatusFormat: function(val) {
    //   return this.mapping.orderStatus["_" + val] &&
    //     this.mapping.orderStatus["_" + val]["desc"]
    //     ? this.mapping.orderStatus["_" + val]["desc"]
    //     : val;
    // }
  },
  methods: {
    linkme(row, column) {
      if (column.label == "图片") {
        window.open(row.ad_pic);
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleSizeChange(val) {
      this.filters.count = val;
      console.log(val);
      this.getData();
    },

    // handleAdd() {
    //   this.$prompt("请输入输入行业名称", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消"
    //   })
    //     .then(({ value }) => {
    //       this.$message({
    //         type: "success",
    //         message: "添加行业: " + value
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消输入"
    //       });
    //     });
    // },
    //改变各种条件
    handleCurrentChange(val) {
      if (this.date == undefined || this.date[0] == null || this.date[1] == null) {
        this.time1 = "";
        this.time2 = "";
      } else {
        this.time1 = new Date(this.date[0]).format("yyyy-MM-dd");
        this.time2 = new Date(this.date[1]).format("yyyy-MM-dd");
      }
      this.filters.created = this.time1;
      this.filters.modified = this.time2;
      let city = this.city.toString();
      this.filters.city = city;
      // console.log(this.filters.city);
      this.filters.page = val;
      // this.getData();
      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].pages.allList(this.filters).then(data => {
        this.tableData = data.data.data;
        console.log(data.data);
        this.handler.total = data.data.total;
        this.listLoading = false;
      }).catch(err => {
        console.log(err);
        this.$message.error(err);
      });
    },
    // 获取数据
    getData() {
      let self = this;
      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].pages.allList(self.filters).then(data => {
        console.log(data);
        self.tableData = data.data.data;
        this.handler.total = data.data.total;
        slef.listLoading = false;
      }).catch(err => {
        this.listLoading = false;
      });
      // api.pages
      //   .wxList()
      //   .then(data => {
      //     console.log(data);
      //     this.tableData = data.data.data;
      //     // this.handler.total = data.data.total;
      //     this.listLoading = false;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     this.$message.error(err);
      //   });
    }
  }
});

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', [_vm._v("优秀文案\n    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "handle-box",
    staticStyle: {
      "min-width": "1200px"
    }
  }, [_c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "发布城市："
    }
  }, [_c('el-select', {
    attrs: {
      "multiple": "",
      "placeholder": "请选择",
      "filterable": ""
    },
    model: {
      value: (_vm.city),
      callback: function($$v) {
        _vm.city = $$v
      },
      expression: "city"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "label": "发布行业："
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "80px"
    },
    model: {
      value: (_vm.filters.industry),
      callback: function($$v) {
        _vm.$set(_vm.filters, "industry", $$v)
      },
      expression: "filters.industry"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "汽车",
      "value": "汽车"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "股票",
      "value": "股票"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "IPO",
      "value": "IPO"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "理财",
      "value": "理财"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "读书",
      "value": "读书"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "亲子",
      "value": "亲子"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "母婴",
      "value": "母婴"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "label": "广告主账号："
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "clearable": ""
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.handleCurrentChange(1)
      }
    },
    model: {
      value: (_vm.filters.ad_account),
      callback: function($$v) {
        _vm.$set(_vm.filters, "ad_account", $$v)
      },
      expression: "filters.ad_account"
    }
  })], 1), _vm._v(" "), _c('el-date-picker', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleCurrentChange(1)
      }
    }
  }, [_vm._v("查询")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    ref: "multipleTable",
    staticClass: "ad",
    staticStyle: {
      "min-width": "1130px"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    },
    on: {
      "cell-click": _vm.linkme
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "时间"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "created",
      "label": "开始时间",
      "sortable": "",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "modified",
      "label": "最近时间",
      "sortable": "",
      "width": "150"
    }
  })], 1), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "city",
      "label": "城市"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "广告主"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "ad_account",
      "label": "账号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "账号类型"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.ad_type == 'weixin') ? _c('el-tag', {
          attrs: {
            "type": "warning"
          }
        }, [_vm._v("微信公众号")]) : (scope.row.ad_type == 'h5') ? _c('el-tag', {
          attrs: {
            "type": "primary"
          }
        }, [_vm._v("H5")]) : (scope.row.ad_type == 'app') ? _c('el-tag', {
          attrs: {
            "type": "info "
          }
        }, [_vm._v("APP")]) : _c('el-tag', {
          attrs: {
            "type": "primary"
          }
        }, [_vm._v("其他")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "t_weixin_account.t_weixin_industry.industry",
      "label": "广告主行业"
    }
  })], 1), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "文案内容"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "ad_note",
      "label": "文字",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "图片"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "width": "100%",
            "height": "100%"
          },
          attrs: {
            "src": scope.row.ad_pic
          }
        })]
      }
    }])
  })], 1), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ex_num",
      "label": "曝光数",
      "sortable": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "page-sizes": [100, 200, 300, 400, 500],
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.handler.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })

});