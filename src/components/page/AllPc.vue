<template>
	<div class="table two">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-message"></i> 全部文章</el-breadcrumb-item>
				<el-breadcrumb-item>PC网站</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="handle-box">
			<el-input v-model="filters.search" placeholder="请输入筛选的关键字" class="handle-input mr10 " @keyup.enter.native="handleCurrentChange(1)"></el-input>
			<el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width:210px;" @keyup.enter.native="handleCurrentChange(1)"  ></el-date-picker>
			<el-button type="primary" icon="search" @click="handleCurrentChange(1)">搜索</el-button>			
		</div>
		<el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" v-loading="listLoading" @cell-click="linkme" >
			<el-table-column prop="publish_time" label="日期" sortable width="150">
			</el-table-column>
			<el-table-column prop="article_title" label="标题">
			</el-table-column>
			<el-table-column prop="t_web_url.source" label="来源">
			</el-table-column>
			<el-table-column label="操作" width="360">
				<template scope="scope">
					<el-button size="small" :plain="true" type="info" @click="handleDetails(scope.row)">详情</el-button>
					<el-button  size="small" type="primary" @click="collection(scope.row)" v-if="!scope.row.import">标记为重点文章</el-button>
					<el-tag v-if="scope.row.import" type="danger">重点文章</el-tag>	
					<el-tag v-if="scope.row.new" type="success">new</el-tag>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination">
			<el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" layout="total, prev, pager, next" :total="handler.total" :page-size="filters.count" :current-page="filters.page" >
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
      tableData: [], //数据接收为一个数组
      multipleSelection: [], //当前页面多选框选中的对象
      handler: {
        total: null
      },
      filters: {
        page: 1,
        count: 20,
        search: null,
        begin_date: null,
        end_date: null
      },
      listLoading: false,
      article_collection_id: "",
      date: null,
      time1: "",
      time2: "",
      note: "",
      important: "",
      rpage: ""
    };
  },
  created() {
    this.rpage = this.$route.query.rpage;
    this.filters.search = this.$route.query.search;
    this.filters.end_date = this.$route.query.end_date;
    this.filters.begin_date = this.$route.query.begin_date;
    if (this.rpage > 1) {
      this.filters.page = this.rpage;
    }
    this.getData();
  },
  activated() {
    this.getData();
  },
  methods: {
    collection(row) {
      this.important = row.import;
      if (this.important) {
        this.$message.success("已是重点文章，请不要继续标记哦!");
      } else {
        this.createImportant(row);
      }
    },
    createImportant(row) {
      api.pages
        .createImList({
          article_source: "finance",
          note: this.note,
          article_id: row.id
        })
        .then(data => {
          this.note = row.note;
          this.article_collection_id = row.id;
          this.important = true;
          this.$message.success("标记成功，请继续加油");
          api.pages
            .financeUpdate(row.id, {
              read_state: 1
            })
            .then(() => {
              this.getData();
            });
        })
        .catch(err => {
          console.log(err);
          // this.$message.error(err);
        });
    },
    linkme(row, column) {
      if (column.label == "标题") {
        window.open(row.article_link);
      }
    },
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
      this.filters.begin_date = this.time1;
      this.filters.end_date = this.time2;
      this.filters.page = val;
      api.pages
        .financeList(this.filters)
        .then(data => {
          this.tableData = data.data.data;
          this.handler.total = data.data.total;
          this.listLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err);
        });
    },
    handleSizeChange(val) {
      //val为当前页面的数据的数量
      this.filters.page = 1;
      this.filters.count = val;
      this.getData();
    },
    getData() {
      //获取数据
      let self = this;
      self.listLoading = "true";
      api.pages
        .financeList(self.filters)
        .then(data => {
          self.tableData = data.data.data;
          this.handler.total = data.data.total;
          slef.listLoading = false;
        })
        .catch(err => {
          this.listLoading = false;
          // let error = err.toString();
          // this.$message.error(error);
        });
    },
    //详情
    handleDetails(row) {
      //数据详情
      let self = this;
      if (row.import) {
        this.$router.push({
          path: "/pcArticle",
          query: {
            rpage: self.filters.page,
            id: row.id,
            article_collection_id: row.article_collection_id,
            import: row.import,
            from: "allpc",
            filters: this.filters
          }
        });
      } else {
        this.$router.push({
          path: "/pcArticle",
          query: {
            id: row.id,
            import: false,
            rpage: this.filters.page,
            from: "allpc",
            filters: this.filters
          }
        });
      }
    },
    handleSelectionChange(val) {
      //当选择项发生变化时会触发该事件
      this.multipleSelection = val;
    }
  }
};
</script>
<style>
/* 子元素变小手 */
.two td:nth-child(2):hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

<style scoped>
.handle-box {
  margin-bottom: 20px;
  min-width: 980px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
</style>