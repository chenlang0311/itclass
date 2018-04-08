<template>
  <div class="operate" style="">
          <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i> 操作页面</el-breadcrumb-item>
                <el-breadcrumb-item>广告主行业</el-breadcrumb-item>
            </el-breadcrumb>
           </div>
  <!--   :headers="headIfon.Authorization" -->
 
       <el-form ref="formwx" :model="formwx" label-width="120px" style="width:400px;" :rules="rules" >
          <!-- <el-form-item label="订阅号账号" required prop="account">
            <el-input v-model="formwx.account" required></el-input>
          </el-form-item> -->
            <el-form-item label="行业名称" required prop="industry">
            <el-input v-model="formwx.industry"></el-input>
          </el-form-item>
            <!-- <el-form-item label="性别" prop="sex">
              <el-radio v-model="formwx.sex" label="男">男</el-radio> 
              <el-radio v-model="formwx.sex" label="女">女</el-radio>
          </el-form-item>  -->
              <!-- <el-form-item label="账号类型(行业)" required prop="weixin_industry_id">
            <el-input v-model.number="formwx.weixin_industry_id"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="所在城市" required prop="city">
            <el-input v-model="formwx.city"></el-input>
          </el-form-item> -->
              <!-- <el-form-item label="使用机型" required prop="phone_type">
            <el-input v-model="formwx.phone_type"></el-input> -->
          <!-- </el-form-item>
                <el-form-item label="订阅的公众号" required prop="sub_weixin" >
                  <el-input v-model="formwx.sub_weixin" placeholder="请输入订阅的公众号(用逗号隔开)"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit('formwx')">立即添加</el-button>
            <el-button @click="resetForm('formwx')">重置</el-button>
          </el-form-item>
        </el-form>
          <div style="margin-top:43px;width:400px">
                  <el-upload
                      name="uploadimg"
                      accept="excel"
                      :action="upload_way + '/uploads/uploadexc'"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :on-success='handleSuccess'
                      :on-error="backError"
                      multiple>
              <el-button type="primary" style="margin-left:150px;">点击上传</el-button>
              <div class="el-upload__tip" slot="tip" style="font-size:28px;">文件直接上传，单个在上边添加</div>
            </el-upload>
          </div>
<div style="float:left;position:absolute;left:450px;top:75px;" >
    <el-table :data="tableData" border style="width:100%" ref="multipleTable"  @selection-change="handleSelectionChange" > 
      <el-table-column  prop="id" label="行业ID"  width="90" sortable ></el-table-column>
      <el-table-column prop="industry" label="行业名称"  width="500"> </el-table-column>
      			<!-- <el-table-column label="操作" width="360">
				<template scope="scope">
					<el-button size="small" :plain="true" type="primary" @click="handleDetails(scope.row)">编辑</el-button>
				</template>
			</el-table-column> -->
      <!-- <el-table-column  prop="weixin_industry_id" label="账号类型(行业)" width="300" ></el-table-column> -->
</el-table>

 <el-pagination
     @current-change ="handleCurrentChange"
     layout="total,prev, pager, next"
     :total="handler.total"
     :current-page="filters.page" 
     :page-size="filters.count">
   </el-pagination>

</div>
</div>
</template>










<script>
import axios from "axios";
import config from "../../config";
import api from "../../api";
import tools from "../../../static/js/toools";
export default {
  data() {
    return {
      tableData: [],
      formwx: {
        industry:''
      },
      activeName: "0",
      upload_way: "",
      fileList: [],
      handler: { total: 0 },
      // headIfon: {
      //   Authorization: ""
      // }
      filters:{
          page:1,
          count:10,
      },
      rules: {
        industry: [
          { required: true, message: "请输入行业", trigger: "blur" }]
        }
    };
  },
  created() {
    this.upload_way = config.baseUrl;
    this.getdata();
    // this.headIfon.Authorization = localStorage.getItem('token');
  },
  methods: {
      //编辑行业
      handleDetails(row){
          console.log(row);
            this.$prompt('请输入行业', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '修改之后的行业是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleSelectionChange(){},
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
    //增加行业
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
    // // 编辑行业
    // handleEdit() {},
    //每行展开时候发生的事件，activeNames是代表当前活动的
    // handleChange(activeNames) {
    //   if ((activeNames = 1)) {
    //     console.log("1");
    //     api.pages
    //       .wxList()
    //       .then(data => {
    //         console.log(data);
    //         this.tableData = data.data.data;
    //         this.handler.total = data.data.total;
    //         this.listLoading = false;
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         this.$message.error(err);
    //       });

    //   } else if ((activeNames = 2)) {
    //     console.log("2");
    //   } else if ((activeNames = 3)) {
    //     console.log("3");
    //   }
    // },
    handleRemove(file, fileList) {
      console.log(fileList);
      console.log(file, fileList);
    },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 3 个文件，本次选择了 ${
    //       files.length
    //     } 个文件，共选择了 ${files.length + fileList.length} 个文件`
    //   );
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // },


    //提交表单
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.pages
            .addhy(this.formwx)
            .then(data => {
            //   console.log(data);
              this.getdata();
              this.resetForm('formwx');   
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
            })
            .catch(err => {
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
   getdata(){
        api.pages
          .hyList(this.filters)
          .then(data => {
            console.log(data);
            this.tableData = data.data.data;
            this.handler.total = data.data.total;
            this.listLoading = false;
          })
          .catch(err => {
            console.log(err);
            this.$message.error(err);
          });     
   },
  }
};
</script>