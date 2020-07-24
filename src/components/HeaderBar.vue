<template>
  <div pagepath="index" class="xingluo-components-page-head-all" data-v-b317cd9c>
    <div class="xingluo-components-page-head-fa">
      <div class="xingluo-components-page-head">
        <div>
          <img
            src="https://xl.linkstars.com/asset/img/xingluo-components/xingluo-components-page-head-left-img.png"
            class="xingluo-components-page-head-left-img"
          />
        </div>
        <div class="xingluo-components-page-head-right">
          <router-link
            tag="a"
            active-class="active"
            to="/home"
            class="xingluo-components-page-head-a"
          >
            首页
            <!-- <p class="head-border"></p> -->
          </router-link>
          <router-link
            tag="a"
            active-class="active"
            to="/success"
            class="xingluo-components-page-head-a"
          >成功案例</router-link>
          <router-link
            tag="a"
            active-class="active"
            to="/service"
            class="xingluo-components-page-head-a"
          >创业者服务</router-link>
          <div class="xingluo-components-page-head-btn-fa">
            <router-link tag="a" to="/login" class="xingluo-components-page-head-btn">登录</router-link>/
            <router-link tag="a" to="/register" class="xingluo-components-page-head-btn">注册</router-link>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.xingluo-components-page-head-all {
  background: #24233e;
  width: 100%;
  height: 70px;
}

.xingluo-components-page-head-fa {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
}

.xingluo-components-page-head {
  display: flex;
  align-items: center;
  width: 1200px;
  height: 40px;
  font-size: 14px;
  color: #fff;
}

.xingluo-components-page-head-left-img {
  width: 92px;
}

.xingluo-components-page-head-right {
  display: flex;
  margin-left: 200px;
  align-items: center;
}

.xingluo-components-page-head-a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-right: 25px;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #5d33d7;
  }
}

.xingluo-components-page-head-a:nth-child(8) {
  margin-right: 18px;
}

.xingluo-components-page-head-btn-fa {
  margin-left: 500px;
  opacity: 0.9;
  background: #6435e8;
  min-width: 90px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  border-radius: 26.5px;
  cursor: pointer;
}

.xingluo-components-page-head-btn {
  display: inline-block;
  width: 60px;
  height: 36px;
  line-height: 36px;
  color: #fff;
  text-decoration: none;
}

.xingluo-components-page-head-btn:first-child {
  text-align: right;
}

.xingluo-components-page-head-btn:last-child {
  text-align: left;
}

.xingluo-components-page-head-a-tel {
  display: inline-block;
  margin: 0 24px 0 16px;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
}
</style>