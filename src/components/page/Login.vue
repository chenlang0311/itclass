<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-wrap">
		<h3 class="ms-title">系统登录</h3>
		<el-form-item prop="username">
			<el-input v-model="ruleForm.username" placeholder="账号"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
		</el-form-item>
		<div class="login-btn">
			<el-button type="primary" @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
		</div>
	</el-form>
</template>

<script>
import axios from "axios";
import api from "../../api";
import md5 from "md5";
export default {
  data: function() {
    return {
      logining: false,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.logining = true;
          const mdpwd = md5(self.ruleForm.password);
          const loginParams = {
            username: self.ruleForm.username,
            password: mdpwd
          };
          // localStorage.setItem('token', data.data.token);
          // self.$router.push('/readme');
          //制定登录规则
          api.users
            .login(loginParams)
            .then(data => {
              this.logining = false;
              localStorage.setItem("ms_username", self.ruleForm.username);
              localStorage.setItem("token", data.data.token); //将浏览器获取到的token值存到本地
              self.$router.push({ path: "/all" });
            })
            .catch(err => {
              this.$message.error("账号或密码错误，请重新输入！");
              self.logining = false;
            });
        } else {
          console.log("error submit!!");
          this.$message.error(err);
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 50px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.ms-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.ms-login {
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  margin-top: 40px;
  width: 100%;
  height: 40px;
}
</style>