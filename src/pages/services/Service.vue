<template>
  <div class="service-container">
    <div class="top-banner"></div>
    <div id="bringAssistant">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title">带货助手小程序</div>
          <div class="kind-desc">ASSISTANT</div>
        </div>
        <div class="bring-assistant">
          <div class="bring-assistant-l">
            <!-- <div
              class="b-a-l-swiper"
              style="transform: translate3d(-130px, 0px, 0px); transition-duration: 300ms; perspective-origin: 344px 50%;"
            >
              <div
                class="b-a-l-s-side"
                style="transition-duration: 300ms; transform: translate3d(-65px, 0px, -200px) rotateX(0deg) rotateY(0deg); z-index: -2;"
              >
                <img src="../../assets/images/e7ce824.png" />
              </div>
              <div
                class="b-a-l-s-side"
                style="transition-duration: 300ms; transform: translate3d(-144px, 0px, 0px) rotateX(0deg) rotateY(0deg); z-index: -1;"
              >
                <img src="../../assets/images/8645489.png" />
              </div>
              <div
                class="b-a-l-s-side"
                style="transition-duration: 300ms; transform: translate3d(-206px, 0px, 120px) rotateX(0deg) rotateY(0deg); z-index: 1;"
              >
                <img src="../../assets/images/97408c7.png" />
              </div>
              <div
                class="b-a-l-s-side"
                style="transition-duration: 300ms; transform: translate3d(-272px, 0px, 0px) rotateX(0deg) rotateY(0deg); z-index: -1;"
              >
                <img src="../../assets/images/e7ce824.png" />
              </div>
              <div
                class="b-a-l-s-side"
                style="transition-duration: 300ms; transform: translate3d(-340px, 0px, -200px) rotateX(0deg) rotateY(0deg); z-index: -2;"
              >
                <img src="../../assets/images/8645489.png" />
              </div>
            </div>-->
            <el-carousel
              :autoplay="false"
              type="card"
              height="608px"
              arrow="nerver"
              indicator-position="none"
            >
              <el-carousel-item v-for="(item , index) in list" :key="index">
                <div class="b-a-l-s-side">
                  <img :src="item.carouselImg" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="bring-assistant-r">
            <div
              class="b-a-r-kind"
              v-for="(item,index) in list"
              :key="index"
              @mouseenter="addActive($event);ch_cur(index)"
              @mouseleave="removeActive($event)"
            >
              <div class="b-point"></div>
              <div>
                <p class="b-a-r-k-title">{{item.title}}</p>
                <p class="b-a-r-k-desc">{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="VIPServer">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title coff">创作者VIP服务</div>
          <div class="kind-desc co35">SERVICE</div>
        </div>
        <div class="vip-server">
          <div class="v-s-banner" style="left: -798px; transition: left 1s ease 0s;">
            <div class="v-s-b-it">
              <img src="../../assets/images/f98cde5.png" class="v-s-b-img" />
              <div class="v-s-b-wrod">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSA29l01IVFEUxxsbrRBTwxKqXaQVRJBRRGCbdkFitYiooKUu+1gkrcKNi4IKgojCFoEFEW3KRUQQCAoRSZu+Fn0HoUbRN/n6/Ydzh+u8OzNvnFcHfp77zj3nf9993nfvm8ychBZFUYbUlbAWVsAikE3CCxiH55lMJsJXbwzYDL1wH75CMVOfcnqgqaqREdgHT8C3KS7G4Z6h9iT4ppq9FQ9OUQNc8pS+074KO2E5ZJ2o2hbrxg/BN3B2gUa9yy3pSWyEYVdp7Q0li7xO8jvgtld/i/ZCLyXeJKEWrntF/bTzs4tXhCOqgROezrWSOnQe85L7wrLJowV6R4OVJK2Gzzbw5WDSLILoDZrmJ3xbTILgRUt4hV8SS5hlQFogTdn5GTIEtFL1msiOzOhM4QLNwznlKJrAL81LcnHQOvQ+Lst3pNSQJrh3/YBka0y70/woW95ba6fmTHPUBLfK13An2oPbLThm/l+4Bya6SmPqHZ0Hiy2o3Wcdbd3MbzjH3d61vmrdSxNowddpYJ0m7kTRySOcTdNIa+AfJlqLz2aZ0U9m2cNFF8y1TrlfMKhGStZgOroBaf8fY3InQZZ7gm5Vlx2dgjbYUphIbAFsg8bCPndNn9bMRrt+7OJlPYX18BSm4RRoZWpH6oQ7IDtbTIi+dnAfEd3F8mJxiurgBjjT+fzRXZjvjRVagP4By3mNby6WF4xToFnrqHsDzv7QeAh7gkUE6dNs3XbcXyyvbByRFtAj3g7rQftA0OibD+5fodm2BhPTDDKIPgbciUez+FNJNC4CWsVNHv67n9OgrxX01eFsIJF4KAkFzeA46Avyg/EePwY7VIPXTe0HvQHOTtOI3VxojGCMYn1by7TTaYGJdyD7AhrgkS7MFDsUFKskiIhbJF20daoJPYUz4JtW+k3oKKVfyRfkhAntwrvVqUe42eLP8MMwxP4/YrHqHTPYBIWbBqGcjfBXx11i0x6a2BBfQ/Ju0A82d5TqB9sVZjmFT2x/Afw4jPKmpHVVAAAAAElFTkSuQmCC"
                  class="v-s-b-w-icon"
                />
                <p class="v-s-b-w-title">VIP专属客服</p>
                <p class="v-s-b-w-desc">
                  平台提供客服专员为创作者1V1选品指导，粉丝与货品匹配和配套售后服务。
                  <br />客服时间：周一到周日 9:00 - 20:00
                </p>
              </div>
            </div>
            <div class="v-s-b-it">
              <img src="../../assets/images/3e990f3.png" class="v-s-b-img" />
              <div class="v-s-b-wrod">
                <img src="../../assets/images/8fcacb9.png" class="v-s-b-w-icon w-34" />
                <p class="v-s-b-w-title">商品样品扶持计划</p>
                <p class="v-s-b-w-desc">星罗针对优秀的创作者推出的样品扶持计划。我们旨在帮助创作者更好的变现，并将更多的好商品介绍给更多的用户。</p>
              </div>
            </div>
            <div class="v-s-b-it">
              <img src="../../assets/images/2fd4600.png" class="v-s-b-img" />
              <div class="v-s-b-wrod">
                <img src="../../assets/images/ffb2718.png" class="v-s-b-w-icon" />
                <p class="v-s-b-w-title">大数据货品匹配</p>
                <p class="v-s-b-w-desc">针对创作者定位，提供相关历史带货数据。多维度标签属性筛选货品</p>
              </div>
            </div>
            <div class="v-s-b-it">
              <img src="../../assets/images/f98cde5.png" class="v-s-b-img" />
              <div class="v-s-b-wrod">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSA29l01IVFEUxxsbrRBTwxKqXaQVRJBRRGCbdkFitYiooKUu+1gkrcKNi4IKgojCFoEFEW3KRUQQCAoRSZu+Fn0HoUbRN/n6/Ydzh+u8OzNvnFcHfp77zj3nf9993nfvm8ychBZFUYbUlbAWVsAikE3CCxiH55lMJsJXbwzYDL1wH75CMVOfcnqgqaqREdgHT8C3KS7G4Z6h9iT4ppq9FQ9OUQNc8pS+074KO2E5ZJ2o2hbrxg/BN3B2gUa9yy3pSWyEYVdp7Q0li7xO8jvgtld/i/ZCLyXeJKEWrntF/bTzs4tXhCOqgROezrWSOnQe85L7wrLJowV6R4OVJK2Gzzbw5WDSLILoDZrmJ3xbTILgRUt4hV8SS5hlQFogTdn5GTIEtFL1msiOzOhM4QLNwznlKJrAL81LcnHQOvQ+Lst3pNSQJrh3/YBka0y70/woW95ba6fmTHPUBLfK13An2oPbLThm/l+4Bya6SmPqHZ0Hiy2o3Wcdbd3MbzjH3d61vmrdSxNowddpYJ0m7kTRySOcTdNIa+AfJlqLz2aZ0U9m2cNFF8y1TrlfMKhGStZgOroBaf8fY3InQZZ7gm5Vlx2dgjbYUphIbAFsg8bCPndNn9bMRrt+7OJlPYX18BSm4RRoZWpH6oQ7IDtbTIi+dnAfEd3F8mJxiurgBjjT+fzRXZjvjRVagP4By3mNby6WF4xToFnrqHsDzv7QeAh7gkUE6dNs3XbcXyyvbByRFtAj3g7rQftA0OibD+5fodm2BhPTDDKIPgbciUez+FNJNC4CWsVNHv67n9OgrxX01eFsIJF4KAkFzeA46Avyg/EePwY7VIPXTe0HvQHOTtOI3VxojGCMYn1by7TTaYGJdyD7AhrgkS7MFDsUFKskiIhbJF20daoJPYUz4JtW+k3oKKVfyRfkhAntwrvVqUe42eLP8MMwxP4/YrHqHTPYBIWbBqGcjfBXx11i0x6a2BBfQ/Ju0A82d5TqB9sVZjmFT2x/Afw4jPKmpHVVAAAAAElFTkSuQmCC"
                  class="v-s-b-w-icon"
                />
                <p class="v-s-b-w-title">VIP专属客服</p>
                <p class="v-s-b-w-desc">
                  平台提供客服专员为创作者1V1选品指导，粉丝与货品匹配和配套售后服务。
                  <br />客服时间：周一到周日 9:00 - 20:00
                </p>
              </div>
            </div>
            <div class="v-s-b-it">
              <img src="../../assets/images/3e990f3.png" class="v-s-b-img" />
              <div class="v-s-b-wrod">
                <img src="../../assets/images/8fcacb9.png" class="v-s-b-w-icon w-34" />
                <p class="v-s-b-w-title">商品样品扶持计划</p>
                <p class="v-s-b-w-desc">星罗针对优秀的创作者推出的样品扶持计划。我们旨在帮助创作者更好的变现，并将更多的好商品介绍给更多的用户。</p>
              </div>
            </div>
          </div>
          <div class="v-s-b-right"></div>
          <div class="v-s-b-icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAAAXNSR0IArs4c6QAAAHpJREFUGBljYEACScbPipKMnkUjCZHMZILpSDZ8ZsfExFjIyPD3JEyMHBpsYKzeC25GZsYeBob/+XPPyd4hxyCYHkYggzHZ5HkPI5D6x/CvC2gDSIxk8P8/UN//vytYEg2fizAyMooDBfYzMTLa/f/PSJaBYGcwMu4CABLwHqG3ESmDAAAAAElFTkSuQmCC"
            />
          </div>
          <div class="v-s-b-icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAAAXNSR0IArs4c6QAAAH1JREFUGBljYKAINDClmDxvSDJ5FoxsDBMyh3R2w7///xlOMzIyTYnVe6EI00+hoQwMc89KbmVg+D+djf3/tFCGVcwgg1nijJ/JsTEyxMJsIYf+z8DIyvifwY3XxLaI4QxDNwsTw1/+/wysduQYhtDz/x/Q4E1Avmao8V1+AGRQH2n55zAHAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="createHatch">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title">创作者孵化</div>
          <div class="kind-desc">HATCH</div>
        </div>
        <div class="create-hatch">
          <img src="../../assets/images/892831d.png" class="create-hatch-img" />
          <div class="create-hatch-word">
            星罗携手什么值得买平台，整合大量电商行业品牌/店铺/商品资源。为所有懂商品的KOL/KOC打造 [发掘-孵化-电商变现] 的通路。
            <br />我们帮助每个细分类目的KOL/KOC，通过对商品的理解，通过短视频/直播的形式，帮助更多普通消费者进行消费决策，帮助更多的KOL/KOC实现个人价值和商业价值。
          </div>
        </div>
      </div>
    </div>
    <div id="liveBroadcasting">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title">直播基地</div>
          <div class="kind-desc">LIVE BROADCAST</div>
        </div>
        <div class="live-broadcasting">
          <img src="../../assets/images/c63e3e4.png" class="live-broadcasting-left" />
          <div class="live-broadcasting-right">
            <p class="live-broadcasting-r-t">简介</p>
            <p class="live-broadcasting-r-t-b"></p>
            <p class="live-broadcasting-r-w">
              直播总面积达3000m²的直播基地。星罗三大直播基地可容纳1000+人，涵盖了从
              前期选品，中期询价到后期执行优化等全方位一体式服务。最多可同时开启20个
              直播间在线直播。搭建了专业为美妆、时装、鞋类、箱包、美食、明星、PGC等
              场景的专业直播间，满足客户的各种需求。
            </p>
            <p class="live-broadcasting-r-li">
              <img src="../../assets/images/13ed87e.png" class="live-broadcasting-r-li-img" />
              广州直播基地、杭州直播基地、北京直播基地
            </p>
            <p class="live-broadcasting-r-li">
              <img
                src="../../assets/images/6c0b803.png"
                class="live-broadcasting-r-li-img live-broadcasting-r-li-img2"
              />
              专业灯光、影视设备，充足的统筹运营执行人员
            </p>
            <p class="live-broadcasting-r-li">
              <img
                src="../../assets/images/b87f32f.png"
                class="live-broadcasting-r-li-img live-broadcasting-r-li-img3"
              />
              优质的主播卖货达人
            </p>
            <img src="../../assets/images/78d4ab3.png" class="live-broadcasting-right-bg" />
          </div>
        </div>
      </div>
      <img src="../../assets/images/5f59356.png" class="live-broadcasting-bg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "简易便捷 带货好帮手",
          desc: "星罗星选小程序，微信扫码，快速授权，一键选货",
          carouselImg:"https://xl.linkstars.com/_nuxt/img/8645489.png",
        },
        {
          title: "全品类好货 超高佣金等你来",
          desc: "超高佣金、精选创作者爆款货品、众多爆品类目任你选",
          carouselImg:"https://xl.linkstars.com/_nuxt/img/97408c7.png",
        },
        {
          title: "订单数据监测 实时统计报表",
          desc: "带货数据统计、创作者管理、多渠道信息反馈、专属客服服务",
          carouselImg:"https://xl.linkstars.com/_nuxt/img/e7ce824.png"
        }
      ],
      cur: 0
    };
  },
  methods: {
    ch_cur(index) {
      console.log(index);
      this.cur = index;
    },
    addActive($event) {
      $event.currentTarget.children[0].className = "b-point b-point-checked";
    },
    removeActive($event) {
      $event.currentTarget.children[0].className = "b-point";
    }
  }
};
</script>
<style lang="scss" scoped>
.top-banner {
  background: url(../../assets/images/3f3c2d7.jpg) no-repeat center 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
}
.content-box {
  width: 1200px;
}

#bringAssistant {
  background: #fff;
  display: flex;
  justify-content: center;
  height: 850px;
}

.bring-assistant {
  display: flex;
  justify-content: space-between;
  height: 608px;
}

.bring-assistant-l {
  width: 630px;
  padding-top: 30px;
  overflow: hidden;
  -webkit-perspective: 1200px;
  perspective: 1200px;
}

.b-a-l-swiper {
  position: relative;
  display: flex;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.b-a-l-s-side {
  position: relative;
  flex-shrink: 0;
  width: 254px;
}

.b-a-l-s-side img {
  width: 290px;
}

.bring-assistant-r {
  width: 485px;
  margin-top: 130px;
}

.b-a-r-kind {
  display: flex;
  margin-bottom: 69px;
}

.b-point {
  background: #6435e8;
  height: 7px;
  margin: 13px 20px 0 0;
  border-radius: 7px;
}

.b-point,
.b-point-checked {
  width: 7px;
  transition: all 0.2s;
}

.b-point-checked {
  height: 45px;
  border-radius: 5px;
}

.b-a-r-k-title {
  font-size: 20px;
  color: #333;
}

.b-a-r-k-desc {
  margin-top: 11px;
  font-size: 16px;
  color: #666;
}
#VIPServer {
  background: #1f232b;
  display: flex;
  justify-content: center;
  height: 608px;
}

.coff {
  color: #fff;
}

.vip-server {
  padding-left: 22px;
  overflow: hidden;
}

.v-s-banner,
.vip-server {
  position: relative;
  height: 351px;
}

.v-s-banner {
  display: flex;
  width: 6000px;
}

.v-s-b-right {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  width: 380px;
  height: 351px;
  z-index: 2;
}

.v-s-b-it {
  display: flex;
  margin-right: 38px;
}

.v-s-b-img,
.v-s-b-wrod {
  width: 380px;
  height: 351px;
}

.v-s-b-wrod {
  background-image: linear-gradient(135deg, #3b4fff, #922bfb);
  padding: 97px 48px 0 41px;
  border-radius: 0 6px 6px 0;
  color: #fff;
}

.v-s-b-wrod:hover .v-s-b-w-icon {
  -webkit-transform: rotate(1turn);
  transform: rotate(1turn);
  transition: all 1s;
}

.w-34 {
  width: 34px;
}

.v-s-b-w-title {
  margin: 24px 0 17px;
  font-size: 18px;
}

.v-s-b-w-desc {
  font-size: 16px;
  line-height: 28px;
}

.v-s-b-icon {
  position: absolute;
  top: 154.5px;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 42px;
  border-radius: 100%;
  cursor: pointer;
}

.v-s-b-icon:last-child {
  left: 760px;
}

#createHatch {
  background: #fff;
  height: 550px;
}

#createHatch,
.create-hatch {
  display: flex;
  justify-content: center;
}

.create-hatch {
  align-items: center;
}

.create-hatch-img {
  width: 408px;
  margin-right: 83px;
}

.create-hatch-word {
  width: 605px;
  height: 144px;
  line-height: 36px;
  opacity: 0.6;
  font-size: 16px;
  color: #666;
}

#liveBroadcasting {
  position: relative;
  display: flex;
  justify-content: center;
}

.live-broadcasting-bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.live-broadcasting {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  font-size: 16px;
  color: #333;
  z-index: 2;
}

.live-broadcasting-left {
  width: 565px;
  height: 445px;
}

.live-broadcasting-right {
  background: #fff;
  width: 672px;
  height: 368px;
  padding: 29px 45px 33px 52px;
  margin-left: -35px;
  border-radius: 6px;
  box-shadow: 2px 2px 15px 9px rgba(0, 0, 0, 0.04);
}

.live-broadcasting-r-t {
  font-size: 20px;
  color: #333;
}

.live-broadcasting-r-t-b {
  background-image: linear-gradient(90deg, #434cfe 4%, #902dfc);
  width: 30px;
  height: 4px;
  margin: 12px 0 15px;
  border-radius: 2.5px;
}

.live-broadcasting-r-w {
  text-align: justify;
  opacity: 0.8;
  line-height: 28px;
}

.live-broadcasting-r-li {
  opacity: 0.8;
  margin-top: 22px;
}

.live-broadcasting-r-li-img {
  width: 20px;
  height: 17px;
  margin-right: 15px;
  vertical-align: middle;
}

.live-broadcasting-r-li-img2 {
  width: 17px;
  height: 23px;
}

.live-broadcasting-r-li-img3 {
  width: 18px;
  height: 20px;
}

.live-broadcasting-right-bg {
  height: 103px;
  margin: -70px 0 0 383px;
}
.co35 {
  color: #353940;
}
</style>