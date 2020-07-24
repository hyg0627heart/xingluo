<template>
  <div id="loginbox" class="login_wrap">
    <div class="top">
      <div class="title">
        <div class="title_left">
          <img src="https://xl.linkstars.com/admin/img/logo2.38429eb8.png" class="titleimg" />
        </div>
        <div class="tologin_tips">
          没有账号？
          <a class="link el-link el-link--primary">
            <!---->
            <router-link tag='span' to='/register' class="el-link--inner">
              点击注册
            </router-link>
            <!-- <span class="el-link--inner">点击注册</span> -->
            <!---->
          </a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="login_wrap_in">
        <div>
          <div class="firstTxt">高效连接与匹配 全网商品与媒体</div>
          <div class="secondTxt">海量TOP创作者资源全覆盖/优质品牌及爆款商品推介/数据检测精准营销</div>
        </div>
        <div class="conent">
          <div class="login_box">
            <!---->
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="0px"
              class="demo-ruleForm"
            >
              <el-form-item label prop="phone">
                <el-input v-model.number="ruleForm.phone" placeholder="已注册的手机号">
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </el-form-item>
              <el-form-item label prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="请输入密码"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>
            </el-form>
            <div class="forget">
              <div class="forget_l">忘记密码？</div>
            </div>
            <button
              type="button"
              class="el-button login_btn el-button--primary el-button--small"
              @click="submitForm('ruleForm')"

            >
              <!---->
              <!---->
              <span>登录</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: {
    Footer
  },
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入手机号"));
        } else {
          if (value < 11 && value > 11) {
            callback(new Error("手机号必须11位"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        phone: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登陆成功");
          this.$router.replace('/index')
        } else {
          console.log("登录错误!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login_wrap {
  background: #fff;
  min-height: 650px;
}
.top {
  height: 100px;
  -webkit-box-shadow: 0 2px 11px 0 hsla(0, 0%, 84.3%, 0.5);
  box-shadow: 0 2px 11px 0 hsla(0, 0%, 84.3%, 0.5);
}
.title {
  width: 1190px;
  height: 100px;
  padding: 15px 0;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.title,
.title_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.line {
  width: 2px;
  height: 29px;
  background-color: #f1f1f1;
  margin: 0 15px;
}

.title_left span {
  font-size: 20px;
  color: #333;
}

.tologin_tips {
  font-size: 14px;
  color: #909399;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.link {
  color: #6435e8;
}

.titleimg {
  width: 124px;
  cursor: pointer;
}
.bottom {
  background: url(https://xl.linkstars.com/admin/img/bgc.2228caa5.png) no-repeat;
  background-size: cover;
}

.login_wrap {
  background: #fff;
  min-height: 650px;
}

.login_wrap_in {
  width: 1190px;
  height: 475px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.firstTxt {
  font-size: 40px;
  color: #fff;
  margin-bottom: 25px;
}

.secondTxt {
  font-size: 20px;
  color: #fff;
  line-height: 50px;
}

.login_box {
  width: 425px;
  border-radius: 2px;
  background-color: #fff;
  padding: 32px 31px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.password,
.tel {
  width: 363px;
}
.forget {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}

.forget_l {
  color: #666;
  cursor: pointer;
}
.login_btn {
  width: 363px;
  height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
  background-color: #6435e8;
}
#loginbox .el-input--small .el-input__inner {
  height: 50px;
}
#loginbox .el-input--small .el-input__icon {
  line-height: 52px;
}
</style>