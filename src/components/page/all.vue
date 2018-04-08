<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb>优秀文案
      </el-breadcrumb>
    </div>

    <div class="handle-box" style="min-width:1200px;">
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters">
          <el-form-item label="发布城市：">
            <el-select v-model="city" multiple placeholder="请选择" filterable>
              <!-- <el-option label="全部" value="*"></el-option>
              <el-option label="深圳" value="shenzhen"></el-option>
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="衡阳" value="hengyang"></el-option> -->
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布行业：" style="margin-left:20px;">
            <el-select v-model="filters.industry" style="width:80px;">
              <el-option label="全部" value=""></el-option>
              <el-option label="汽车" value="汽车"></el-option>
              <el-option label="股票" value="股票"></el-option>
              <el-option label="IPO" value="IPO"></el-option>
              <el-option label="理财" value="理财"></el-option>
              <el-option label="读书" value="读书"></el-option>
              <el-option label="亲子" value="亲子"></el-option>
              <el-option label="母婴" value="母婴"></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="微信账号：" style="margin-left:20px;">
                        <el-select v-model="filters.wx_account">
                             <el-option label="全部" value="*"></el-option>
                             <el-option label="小明" value="xiaoming"></el-option>                           
                        </el-select>
                    </el-form-item> -->
          <el-form-item label="广告主账号：" style="margin-left:20px; " >
            <!-- <el-select v-model="filters.wx_ad_account" filterable>
              <el-option label="全部" value="*"></el-option>
              <el-option label="小明" value="xiaoming"></el-option>
            </el-select> -->
            <el-input type="text" v-model="filters.ad_account"  @keyup.enter.native="handleCurrentChange(1)" clearable></el-input>
          </el-form-item>
          <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:250px;">
          </el-date-picker>
          <el-form-item>
            <el-button type="primary" @click="handleCurrentChange(1)">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>

    <el-table :data="tableData" border style="min-width:1130px;" ref="multipleTable" @cell-click="linkme" class="all">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column label="时间">
        <el-table-column prop="created" label="开始时间" sortable width="150">
        </el-table-column>
        <el-table-column prop="modified" label="最近时间" sortable width="150">
        </el-table-column>
      </el-table-column>
      <!-- <el-table-column prop="name" label="账号" width="120" sortable>
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>账号: {{ scope.row.account }}</p>
                    <p>性别: {{ scope.row.sex }} </p>
                    <p>昵称：{{ scope.row.name }}</p>
                    <p>年龄：{{ scope.row.age }}</p>
                    <p>所在城市：{{ scope.row.city }}</p>
                    <p>机型：{{ scope.row.phone_type }}</p>
                    <p>订阅的公众号:{{ scope.row.sub_weixin }}</p>
                    <div slot="reference" class="name-wrapper">
                        <p>{{ scope.row.name }}</p>
                    </div>
                    </el-popover>
                 </template>
            </el-table-column> -->
      <el-table-column prop="city" label="城市">
      </el-table-column>
      <el-table-column label="广告主" >
            <el-table-column prop="ad_account" label="账号"></el-table-column>
            <el-table-column  label="账号类型">
                  <template slot-scope="scope">
                    <!-- <el-popover trigger="hover" placement="top"> -->
                    <!-- <p>账号类型: {{ scope.row.ad_type }}</p> -->
                    	<el-tag v-if="scope.row.ad_type == 'weixin'" type="warning">微信公众号</el-tag>	
                      <el-tag v-else-if="scope.row.ad_type == 'h5'" type="primary">H5</el-tag>	
                      <el-tag v-else-if="scope.row.ad_type == 'app'" type="info ">APP</el-tag>	
                      <el-tag v-else type="primary">其他</el-tag>	
                    <!-- <div slot="reference" class="name-wrapper">
                        <p>{{ scope.row.ad_account }}</p>
                    </div> -->
                    <!-- </el-popover> -->
                 </template>  
            </el-table-column>
            <el-table-column prop="t_weixin_account.t_weixin_industry.industry" label="广告主行业"></el-table-column>     
      </el-table-column>
      <!-- <el-table-column prop="t_weixin_account.t_weixin_industry.industry" label="广告主行业" sortable>
      </el-table-column> -->
      <el-table-column label="文案内容">
        <el-table-column prop="ad_note" label="文字" sortable></el-table-column>
        <el-table-column label="图片">
            <template slot-scope="scope">
              <!-- <el-popover trigger="hover" placement="top">
                   <img :src="scope.row.ad_pic" style="width:400px;height:300px">
              </el-popover> -->
              <!-- <div slot="reference" class="name-wrapper"> -->
                  <img :src="scope.row.ad_pic" style="width:100%;height:100%">
              <!-- </div>               -->
            </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="ex_num" label="曝光数" sortable>
      </el-table-column>

    </el-table>
    <div class="pagination">
      <el-pagination :page-sizes=[100,200,300,400,500] @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total, sizes, prev, pager, next, jumper" :total="handler.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../api";
import tools from "../../../static/js/toools";
export default {
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
      city:'',
      handler: {
        total: 0
      },
      options: [
        {
          value: "北京",
          label: "北京"
        },
        {
          value: "上海",
          label: "上海"
        },
        {
          value: "广州",
          label: "广州"
        },
        {
          value: "衡阳",
          label: "衡阳"
        },
        {
          value: "成都",
          label: "成都"
        },
        {
          value: "深圳",
          label: "深圳"
        },
        {
          value: "杭州",
          label: "杭州"
        },
        {
          value: "武汉",
          label: "武汉"
        },
        {
          value: "苏州",
          label: "苏州"
        },
        {
          value: "重庆",
          label: "重庆"
        },
        {
          value: "南京",
          label: "南京"
        },
        {
          value: "天津",
          label: "天津"
        },
        {
          value: "西安",
          label: "西安"
        },
        {
          value: "沈阳",
          label: "沈阳"
        },
        {
          value: "长沙",
          label: "长沙"
        },
        {
          value: "青岛",
          label: "青岛"
        },
        {
          value: "宁波",
          label: "宁波"
        },
        {
          value: "郑州",
          label: "郑州"
        },
        {
          value: "大连",
          label: "大连"
        },
        {
          value: "厦门",
          label: "厦门"
        },
        {
          value: "济南",
          label: "济南"
        },
        {
          value: "哈尔滨",
          label: "哈尔滨"
        },
        {
          value: "福州",
          label: "福州"
        }
      ]
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
    handleSizeChange(val) {
      this.filters.count = val;
      console.log(val);
      this.getData();
    },
    //改变各种条件
    handleCurrentChange(val) {
      if (
        this.date == undefined ||
        this.date[0] == null ||
        this.date[1] == null
      ) {
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
      api.pages
        .allList(this.filters)
        .then(data => {
          this.tableData = data.data.data;
          console.log(data.data);
          this.handler.total = data.data.total;
          this.listLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    },
    // 获取数据
    getData() {
      let self = this;
      api.pages
        .allList(self.filters)
        .then(data => {
          console.log(data);
          self.tableData = data.data.data;
          this.handler.total = data.data.total;
          slef.listLoading = false;
        })
        .catch(err => {
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
    },
    // handleEdit(index, row) {
    //   this.$message("编辑第" + (index + 1) + "行");
    // },
    // handleDelete(index, row) {
    //   this.$message.error("删除第" + (index + 1) + "行");
    // },
    // delAll() {
    //   const self = this,
    //     length = self.multipleSelection.length;
    //   let str = "";
    //   self.del_list = self.del_list.concat(self.multipleSelection);
    //   for (let i = 0; i < length; i++) {
    //     str += self.multipleSelection[i].name + " ";
    //   }
    //   self.$message.error("删除了" + str);
    //   self.multipleSelection = [];
    // },
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // }
  }
};
</script>
<style>
 .all td:nth-child(9):hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.toolbar {
  width: 100%;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
</style>