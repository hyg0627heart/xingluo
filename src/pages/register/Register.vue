<template>
  <div>
    <div id="register" class="login_wrap">
      <div class="top">
        <div class="title">
          <div class="title_left">
            <img src="https://xl.linkstars.com/admin/img/logo2.38429eb8.png" class="titleimg" />
            <div class="line"></div>
            <span>大数据合作平台</span>
          </div>
<div class="haveRegister">已有账户？<el-link type="primary"  @click="gologin" class="link" :underline="false">点击登录</el-link></div>
        </div>
      </div>
      <div class="login_wrap_in">
        <div class="progress_box">
          <div>
              <div class="one" style="background-color: #9DA8F7;">1</div>
              <span style="color: #6435E8;">选择账号类型</span>
          </div>
          <div class="progress_grey">
              <div class="progress_red" :style='"width: "+ second_step_width'></div>
          </div>
          <div>
              <div class="two" :style='(second_step || third_step ) ? "background: #9DA8F7;" : "background: #eee;"'>2</div>
              <span :style='(second_step || third_step ) ? "color: #6435E8;" : "color: #999;"'>注册账号</span>
          </div>
          <div class="progress_grey">
             <div class="progress_red" :style='"width:" + third_step_width'></div>
          </div>
          <div>
              <div class="three" :style='third_step ? "background: #9DA8F7;" : "background: #eee;"'>3</div>
              <span :style='third_step ? "color: #6435E8;" : "color: #999;"'>完成</span>
          </div>
        </div>


        <div v-if='first_step'>
          <div class="Choice_title">不知道怎么选？<a class="consultation" href="http://wpa.qq.com/msgrd?v=3&uin=3007128541&site=qq&menu=yes" target="_blank">点击咨询</a>，账号一旦创建成功，账户类型不可更改</div>
          <div class="account_type_box">
            <div class="account_type_item" v-for='(item,inx) in account_type_list' :key='inx'>
              <img :src="item.account_type_img" alt="" class="item_img">
              <div class="item_title">{{item.account_type_title}}</div>
              <div class="item_content" v-html='item.account_type_con'>
              </div>
              <div class="item_btn" @click='chooseHandle(item.account_type_title)'>选择</div>
            </div>
          </div>
        </div>

        <div class="register_box" v-if='second_step'>
          <el-form :model="formdata" :rules="rules" class="formdata" ref='form' label-width="150px">
             <el-form-item label="已选账号类型"  prop="false" class="">
             <div>{{account_type_name}}<span class="edit_btn"  @click='preStepHandle'>修改</span></div>
            </el-form-item>
            <el-form-item :label="zh_type == 6 ? '店铺名称':'账号名称'"  prop="username" class="username">
              <el-input  prefix-icon="el-icon-user" type="text" v-model="formdata.username" maxlength="30" :placeholder="placeholder_name"></el-input>
             </el-form-item> 
            <el-form-item label="所属电商"  prop="store_type" class="username" v-if='zh_type == 6'>
              <el-select v-model="formdata.store_type" placeholder="请选择所属电商" style='width: 381px;'>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item  prop="tel" class="tel" label="手机号" >
              <el-input  prefix-icon="el-icon-user" type="number" style="-moz-appearance: textfield;-webkit-appearance: none;" v-model="formdata.tel" maxlength="11" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item  prop="imgcode" class="codeBox" label="图形验证码" >
              <el-input prefix-icon="el-icon-key" type="text" v-model="formdata.imgcode" placeholder="请输入右侧验证码" class="code"></el-input>
              <img class="imgcode" :src='imgcodeUrl' ref='img'>
            </el-form-item>
            <el-form-item  prop="numcode" class="codeBox" label="手机验证码" >
              <el-input prefix-icon="el-icon-unlock" type="number" v-model="formdata.numcode" maxlength="11" placeholder="请输入短信验证码" class="code"></el-input>
              <div type="primary"  class="numcode" @click="getcode" v-if='codeflag == 1'>获取手机验证码</div>
              <div class=" dis_numcode" v-if='codeflag == 2'>{{codetime}}秒后重新获取</div>
            </el-form-item>
            <el-form-item  prop="password" class="password" label="登录密码" >
              <el-input prefix-icon="el-icon-lock" type="password" v-model="formdata.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item  prop="surepassword" class="surePassword" label="确认密码" >
              <el-input prefix-icon="el-icon-lock" type="password" v-model="formdata.surepassword" placeholder="确认密码" ></el-input>
            </el-form-item>
            <el-form-item  prop="store_img" label="企业营业执照副本" v-if='zh_type == 6' :show-message='showmessage'>
              <div class="tip_title">(三证合一)</div>
                <el-upload
                class="avatar-uploader"
                :action="upload_img_api"
                name="filename"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="uploadPaySuccess">
                <img v-if="formdata.store_img" :src="formdata.store_img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
             <div class="tips_img" v-if='zh_type == 6'>
                <div></div>
                <div>支持jpg、png格式,大小 8M 以内</div>
                <div>请上传复印件加盖公章（鲜章）的图片（根据《企业经营异常名录管理暂行办法》，需确保未在企业经营异常名录中，且所售商品属于经营范围内）</div>
              </div> 
            <el-form-item  prop="category" class="" label="主营类目" :show-message = 'category_flag' v-if='zh_type == 3'>
              <div>
                <el-select v-model="formdata.smgscyid1" placeholder="请选择" @change="categoryHandle" @focus="categoryFocusHandle">
                  <el-option
                    v-for="item in category_arr"
                    :key="item.smgscyid"
                    :label="item.name"
                    :value="item.smgscyid">
                  </el-option>
                </el-select>
              </div>
              <div class="second_select">
                <el-select v-model="formdata.smgscyid2" placeholder="请选择" @change="categoryHandle" @focus="categoryFocusHandle">
                  <el-option
                    v-for="item in category_arr"
                    :key="item.smgscyid"
                    :label="item.name"
                    :value="item.smgscyid">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="formdata.smgscyid3" placeholder="请选择" @change="categoryHandle" @focus="categoryFocusHandle">
                  <el-option
                    v-for="item in category_arr"
                    :key="item.smgscyid"
                    :label="item.name"
                    :value="item.smgscyid">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <div class="agree_btn_box">
              <el-checkbox v-model="checked" class="checkbox"></el-checkbox><span class="agree_btn">我已阅读并同意<a @click="openAgreement" class="">《星罗优惠商品推广服务协议》</a></span>
            </div>
            <div class="btns_box">
              <el-button class="pre_btn" @click='preStepHandle'>上一步</el-button>
              <el-button type="primary" class="register_btn" @click="registerHandle">注册</el-button>
            </div>
          </el-form>
        </div>
        <!---->
        <!---->
      </div>
        <div class="mask" v-if='mask_flag'>
            <agreement @closeMask ='closeagreement'></agreement>
        </div>
    </div>
  </div>
</template>

<script>
import Agreement from './Agreement.vue';
export default {
    components:{
        Agreement
    },
    data() {
         // 校验手机号
    let validateTel = (rule, value, callback) => {
        if(value.length > 0){
          let rex = /^1[23456789]\d{9}$/;
          if(!rex.test(value)){
            this.sendcode_flag =false
            callback(new Error('手机号错误'));
          }else {
            this.sendcode_flag =true
            callback()
          }
        }else {
          callback()
        }
    };
    // 校验图形验证码
    // let validateImgcode = (rule, value, callback) => {
    //     if(value){
    //       let data={code: value,sid:this.$http.cookie.get('PHPSESSID')};
    //       this.$httplogin({
    //             method: 'GET',
    //             url: '/check',
    //             params: data,
    //         }).then((res) => {
    //           if(res.code == 1){
    //             this.n = 1;
    //             this.imgcode_flag = true;
    //             callback()
    //           }else {
    //             this.imgcode_flag = false;
    //             callback(new Error(res.msg));
    //           }
    //         }).catch((err) => {
    //             callback(new Error(res.msg));
    //             console.log(err);
    //         })
    //     }else {
    //       callback()
    //     }
    // };
    let validateNumcode = (rule, value, callback) => {
        if(value) {
          let data={tel:this.formdata.tel,code: value};
          this.$httplogin({
                method: 'POST',
                url: '/home/checkVerifyCode',
                params: data,
            }).then((res) => {
              if(res.code == 1){
                callback()
              }else {
                callback(new Error(res.msg));
              }
            })
        }else {
          callback()
        }
    };
    // 校验密码
    let validatePass = (rule, value, callback) => {
       if(value.length < 6 || value.length > 24){
          callback(new Error('密码长度应为6~24位')); 
        }else {
          callback()
        }
    };
    // 校验确认密码
    let validatePass2 = (rule, value, callback) => {
        if(value != this.formdata.password){
          callback(new Error('两次输入的密码不一致'));   
        }else {
          callback();
        }
    };
        return {
            account_type_list: [
                {
                account_type_img: require('../../assets/images/register/a.png'),
                account_type_title: '淘客',
                account_type_con: '如社群、导购网站淘客。<br/>爆款/高佣/白菜价精选/批量转链/历史低价，专业编审团队人工甄选优质内容，每日万款商品实时更新。轻松完成单品推广，助你坐享高效转化。'
                },
                {
                account_type_img: require('../../assets/images/register/b.png'),
                account_type_title: '短视频机构',
                account_type_con: '如抖音、快手等短视频平台的机构或达人。<br/>差异化内容文案，满足不同粉丝群体需求。数据驱动增长，对比榜单上的大V爆款数据，智能匹配同款佣金20%以上的高转化单品，零基础直播小白也能玩转商品橱窗。'
                },
                {
                account_type_img: require('../../assets/images/register/c.png'),
                account_type_title: '自媒体机构',
                account_type_con: '如公众号、新浪微博、喜马拉雅等平台的自媒体机构或达人。<br/>百人专业编审团队，生产不同垂直领域的专业内容。经百万DAU数据校验，大数据筛选高留存高转化单品，享受更高收益。'
                },
                {
                account_type_img: require('../../assets/images/register/d.png'),
                account_type_title: '渠道',
                account_type_con: '如手机厂商、浏览器、小程序、快应用、超级APP等流量站。<br/>丰富多样的API接口，一键生成内容导购H5页面。轻松快速实现最大化流量变现，收入远超传统玩法。'
                },
                {
                account_type_img: require('../../assets/images/register/e.png'),
                account_type_title: '电商独立店铺',
                account_type_con: '在京东、天猫等平台开设独立店铺的商家。<br/>如 “三只松鼠旗舰店”、”七匹狼专营店”、“探路者旗舰店“等以推广店铺为主要目的商家。'
                },

            ],
                  options:[
        {
          value: '1',
          label:'京东',
        },
         {
          value: '2',
          label:'天猫',
        },
         {
          value: '3',
          label:'淘宝',
        },
         {
          value: '4',
          label:'苏宁',
        },
         {
          value: '5',
          label:'考拉',
        }
      ],
            formdata: {//注册的formdata
                username: '',
                store_name:'',
                store_type: '',
                tel:'',
                imgcode:'',
                numcode:'',
                password: '',
                surepassword:'',
                smgscyid1:'',
                smgscyid2:'',
                smgscyid3:'',
                store_img:'',
            },
             rules:{//注册的验证规则
        // 用户名验证规则
        username: [
          {
          required: true,
          message:'名称不能为空',
          trigger:'blur'
        }],
        // 所属电商验证规则
        store_type: [
          {
          required: true,
          message:'所属电商不能为空',
          trigger:'blur'
        }],
        // 手机号验证规则
        tel: [
          {
          required: true,
          message: "手机号不能为空",
          trigger:'blur'
         },
          {
          validator: validateTel,
          trigger:'blur'
        }],
        // 图形验证码规则
        imgcode: [
          {
          required: true,
          message: "图形验证码不能为空",
          trigger:'blur'
         },
          {
        //   validator: validateImgcode,
          trigger:'blur'
        }],
        // 手机验证码规则
        numcode: [{
          required: true,
          message: "验证码不能为空",
          trigger:'blur'
        },{
          validator: validateNumcode,
          trigger:'blur'
        }],
        // 密码验证规则
        password: [
          {
          required: true,
          message: "密码不能为空",
          trigger:'blur'
        },
          {
          validator: validatePass,
          trigger:'blur'
        }],
        // 确认密码验证规则
        surepassword: [
          {
          required: true,
          message: "确认密码不能为空",
          trigger:'blur'
        },
          {
          validator: validatePass2,
          trigger:'blur'
        }],
         // 营业执照验证规则
        store_img: [
          {
          required: true,
          message:'营业执照不能为空',
          trigger:'success'
        }],
        category: [
          {
          required: true,
          message: "主营类目不能为空",
          trigger:'change'
        }],
      },
            account_type_name: '',//账号类型
            first_step: true,//注册第一步
            second_step: false,//第二步
            third_step : false,//第三部注册成功
            placeholder_name: '',//账号名称框内默认文字
            second_step_width :'50%',
            third_step_width: '0',
            // validateImgcode: validateImgcode,
            codeflag: 1,//判断获取手机验证码是否置灰
            codetime: 60,//验证码倒计时
            checked: true,//复选框
            mask_flag: false,
            imgcodeUrl: 'https://xingluoapi.linkstars.com/verify',
            imgcode_flag: false,
            timer:null,
            zh_type:0,
            sendcode_flag:false,
            category_flag:true,
            category_arr : [],
            upload_img_api: 'https://xingluoapi.linkstars.com/home/upload_img',
            headers:'',
            store_img_url:'',
            img_geshi:'',
            showmessage: true
        }
    },
    methods: {
         // 发送手机验证码
    getcode(){
      if(this.formdata.tel == ''){
        this.$message.error('手机号不能为空');
         return;
      }
      if(!this.formdata.imgcode){
        this.$message.error('请先输入4位图形验证码');
        return;
      }
      if(!this.sendcode_flag){
        return;
      }
       let that = this; 
       let data={
         tel: this.formdata.tel,
         type: 0,
       };
      that.$httplogin({
          method: 'POST',
          url: '/home/sendCode',
          data: data,
      }).then((res) => {
        if(res && res.code ==1){
          that.$message({
            message:'发送成功',
            type: 'success'
          });
        }else {
          that.$message.error(res.msg)
        } 
      }).catch((err) => {
          console.log(err);
      })
        that.timejs()

    },
        categoryHandle(){
      if(this.formdata.smgscyid1 || this.formdata.smgscyid2 || this.formdata.smgscyid3){
         this.rules.category = [];
         this.category_flag = false;
      }else {
        this.rules.category = [
          {
          required: true,
          message: "主营类目不能为空",
          trigger:'change'
        }]
        this.category_flag = true
      }
    },
        categoryFocusHandle (){
      this.rules.category  = [
          {
          required: true,
          message: "主营类目不能为空",
          trigger:'blur'
        }]
    },
            // 点击账号类型选择
        chooseHandle(e){
        if(e == '淘客'){
            this.placeholder_name = '请输入个人或团长名号'
            this.zh_type = 1
        }else if(e=='短视频机构'){
            this.placeholder_name = '请输入短视频平台的账号昵称或机构名称'
            this.zh_type = 3
        }else if(e == '自媒体机构') {
            this.placeholder_name = '请输入自媒体平台的账号昵称或机构名称'
            this.zh_type = 4
        }else if(e == '渠道'){
            this.placeholder_name = '请输入渠道名称'
            this.zh_type = 5
        }else {
            this.placeholder_name = '请输入店铺名称'
            this.zh_type = 6
        }
        this.account_type_name =e
        this.first_step = false
        this.second_step = true
        this.second_step_width = '100%'
        this.third_step_width = '50%'
        },
             uploadPaySuccess(res, file){
       if(this.img_geshi !='errer'){
          this.formdata.store_img = file.response.data.pic
          this.showmessage = false
       }
    },
             beforeAvatarUpload(file) {
        const isJPG = file.type
        const isLt2M = file.size / 1024 / 1024 ;
        if (isJPG != 'image/jpg' && isJPG != 'image/png' && isJPG != 'image/jpeg' ) { 
          this.img_geshi = 'errer';
          this.$message.error('上传图片只能是 jpg 格式或者 png 格式');
          return
        }else {
          this.img_geshi = '';
        }
        if (isLt2M > 8) {
          this.$message.error('上传文件大小不能超过 8MB!');
        }else {
          this.img_geshi = '';
        }
        return isJPG && isLt2M;
      },
            // 点击上一步
    preStepHandle(){
      this.formdata.smgscyid1 = ''
      this.formdata.smgscyid2 = ''
      this.formdata.smgscyid3 = ''
      this.$refs.form.resetFields();
      this.first_step = true
      this.second_step = false
      this.showmessage = true
      this.second_step_width = '50%'
      this.third_step_width = '0'
      if(this.timer){
        clearTimeout(this.timer)
        this.codetime = 60
        this.codeflag = 1;
      }
    },
        // 点击注册
    registerHandle(){
       let that = this;   
       if(that.n == 1) {//判断图形验证码校验是否成功，成功则不许再校验，质控图形验证规则
         that.rules.imgcode = [];
       }
      if(that.formdata.smgscyid1 || that.formdata.smgscyid2 || that.formdata.smgscyid3){
         that.rules.category = [];
         that.category_flag = false;
      }else {
         that.rules.category = [
          {
          required: true,
          message: "主营类目不能为空",
          trigger:'change'
        }]
        that.category_flag = true
      }
      that.$refs.form.validate((valid) => {//如果formdata中有红色提示不请求接口方法
        that.rules.imgcode = [{//点击完注册在重新添加进去
          required: true,
          message: "图形验证码不能为空",
          trigger:'blur'
         },
          {
          validator: that.validateImgcode,
          trigger:'blur'
        }]
        if(valid) {
          if(!that.formdata.imgcode || !that.imgcode_flag){
            return;
          }
          if((that.formdata.smgscyid1 == that.formdata.smgscyid2) && that.formdata.smgscyid2 || 
            (that.formdata.smgscyid1 == that.formdata.smgscyid3) && that.formdata.smgscyid3|| 
            (that.formdata.smgscyid2 == that.formdata.smgscyid3) && that.formdata.smgscyid3){//判断主营类目是否重复
                  that.$message.error('主营类目重复！')
                  return
          }
          if(!this.checked){
            that.$message.error('星罗优惠商品推广服务协议')
            return;
          }
          let data={
            tel: that.formdata.tel,
            verifyCode: that.formdata.numcode,
            password: that.formdata.password,
            nickname:that.formdata.username,
            type: that.zh_type,
            store_type: that.formdata.store_type,
            store_img: that.formdata.store_img,
            smgscyid1:that.formdata.smgscyid1,
            smgscyid2: that.formdata.smgscyid2,
            smgscyid3: that.formdata.smgscyid3,
          }
          // return;
          that.$httplogin({
              method: 'POST',
              url: '/home/userRegister',
              data: data
          }).then((res) => {
            if(res && res.code ==1){
              that.second_step = false
              that.third_step = true;
              that.third_step_width = '100%'
            }else if(res.code == 400){
              that.$message(res.data);
            }else {
              that.$message(res.msg);
            }

          }).catch((err) => {
              console.log(err);
          })
          
        } else {
          
          return false
        }
      })
      
    },
        openAgreement(){
      this.mask_flag = true;  
    },
        closeagreement(){
      this.mask_flag = false;
    },
        // 去登录部分
    gologin(){
      this.$router.push({name:'login',params:{register:'register'}})
    },
    },
};
</script>

<style lang="scss" scoped>
.top {
    height:100px;
    box-shadow:  0 2px 11px 0 rgba(215,215,215,0.50);
  }
  .title {
   width: 1190px;
    height: 100px;
    padding: 15px 0;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   .title_left {
    display: flex;
    align-items: center;
  }
  .line {
    width: 2px;
    height: 29px;
    background-color: #f1f1f1;
    margin: 0 15px;
  }
  .title_left span{
    font-size: 20px;
    color: #333;
  }
  .titleimg {
    width: 124px;
    cursor: pointer;
  }
  .login_wrap {
    width: 100%;
    background: #fff;
    min-height: 650px;
  }
  .login_wrap_in {
    width: 1190px;
    height: 100%;
    margin: 0 auto;
  }
  /* 进度条 */
  .progress_box {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .progress_box .one,
  .progress_box .two,
  .progress_box .three{
    width: 54px;
    height: 54px;
    background-color: #eee;
    border-radius: 50%;
    text-align: center;
    line-height: 54px;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .progress_box div {
    text-align: center;
  }
  .progress_box span {
    font-size: 14px;
  }
  .progress_grey {
    width: 200px;
    height: 4px;
    background-color: #eee;
    border-radius: 8px;
    margin: 0 10px;
    position: relative;
    margin-top: -35px;
  }
  .progress_red {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    background-color: #9DA8F7;
    border-radius: 8px;
  }
  /* 不知道怎么选 */
  .Choice_title {
    font-size: 14px;
    color: #333333;
   text-align: center;
   margin-top: 25px;
  }
  .consultation {
    color: #6435E8;
  }
  /* 账号类型 */
  .account_type_box {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .account_type_item {
    width: 220px;
    height: 420px;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    text-align: center;
    padding: 0 15px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .item_img {
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .item_title {
    font-size: 18px;
    color: #333333;
    font-weight: 700;
  }
  .item_content {
    font-size: 14px;
    color: #666666;
    line-height: 26px;
    text-align: left;
    margin-top: 20px;
    height: 210px;
  }
  .item_btn {
    width: 160px;
    height: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    text-align: center;
    line-height: 40px;
    color: #666;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 14px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .account_type_item:hover .item_btn{
    background-color: #9DA8F7;
    color: #fff;
    border: 0;
  }
  .account_type_item:hover {
    margin-top: -8px;
    transition: all 0.5s;
  }
 /* 注册 */
  .register_box {
   display: flex;
   justify-content: center;
   margin-top: 64px;
  }
  .edit_btn {
    font-size: 14px;
    color: #E1221D;
    margin-left: 15px;
    cursor: pointer;
  }
  .username,.tel,.password,.surePassword {
    width: 531px;
  }
  .codeBox {
    width: 531px;
    position: relative;
  }
  .code {
    width: 255px;
  }
  .imgcode {
    cursor: pointer;
  }
  .imgcode,.numcode ,.dis_numcode{
    width: 119px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 2px;
    font-size: 14px;
  }
  .numcode{
    background-color: #9DA8F7;
  }
  .dis_numcode{
    text-align: center;
    line-height: 50px;
    background-color: #ccc;
  }
  .btns_box {
    display: flex;
    margin: 39px 0;
    margin-left: 150px;
    font-size: 14px;
  }
  .pre_btn {
    width: 176px;
    height: 52px;
    margin-right: 29px;
  }
  .register_btn {
    width: 176px;
    height: 52px;
  }
  /* 已有账户点击登录 */
  .haveRegister {
    font-size: 14px;
    color: #909399;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .link {
    color: #6435E8;
  }
  .checkbox {
    margin-right: 10px;
  }
  .userneed_tit {
    font-size: 20px;
    color:#303133;
    text-align: center;
    margin: 0;
  }
  .register_success {
    text-align: center;
    margin-top: 113px;
  }
  .register_success img{
    width: 60px;
    height: 60px;
  }
  .register_success_tit {
    font-size: 14px;
    color: #303133;
    margin: 22px 0 33px 0;
  }
  .register_success_btn {
    width: 443px;
    height: 52px;
    font-size: 20px;
    margin: 0 auto;
  }
  .agree_btn_box {
    margin-top: -5px;
    padding-left: 150px;
  }
  .agree_btn_box a {
    cursor: pointer;
    color: #E1221D;
  }
  .agree_btn {
    font-size: 12px;
    color: #333;
  }
  .close_img {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .second_select {
    margin: 15px 0;
  }
  .avatar-uploader  {
    width: 178px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .tips_img {
    width: 405px;
    color: #c2c5cc;
    margin-left: 150px;
    font-size: 12px;
    margin-bottom: 30px;
    /* line-height: 30px; */
  }
  .tip_title {
    position: absolute;
    top: 23px;
    left: -72px;
    font-size: 12px;
    color: #c2c5cc;
  }
::v-deep input[type="number"]::-webkit-inner-spin-button{

    -webkit-appearance: none;
 
}

</style>