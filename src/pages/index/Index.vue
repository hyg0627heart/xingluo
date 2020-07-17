<template>
  <div class="index">
    <header>
      <HeaderBar></HeaderBar>
    </header>
    <main>
      <router-view></router-view>
      <div class="side-content">
        <div class="side-it">
          <img src="../../assets/images/fe4393a.png" class="side-it-black black1" />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAAXNSR0IArs4c6QAAAx9JREFUSA3Nl01IFVEUx9/0oX3ad6F9ULQMoiAJKniRJhFBiyCKNtGqRQsXQgQRbTII3FTrF0FFRVhEtCjdJAQJKkguiiBRLMmeJqaJX6/f//nmOTPvTm9mnEV/+HHvnHvuuYc79543L5H4z2QFySeTyZTgVwFboAxmYBC+Qb9lWVO0scg3IZJYxApVcBIOwg5YCU794qEbWuAxib2njV8kUw0tEEZTOL+BZGwZEawEGmASomqCiTdBrzm6CFAKjyAuPSBQ9KSYXG/IZAzbS2gCvRKTujA+hR7D4K1IW0SgfTDuCTjD8zk7IP1nnnE9toJuXYK2Ev6AU9M86GIE1oKcZy1tqWHWsMM27ujb3Qk6Y7mHEdqMPZBrFf8KSdnreIYLHy2c12Hugk2Fw4k0tkZYDqfAlLSufDtUwy6Q+qAXhmAUzlMS1BaVEqrE6wP41qSiUWYdtOB9aIaFsBVUSNfCNCjBj9BKcj20ZpFQEuarRgIcglpoB50dPw0y8BD2GzNiYC/43SCGiuoGHoehs6in20EXQPXKfQwwrIZeiKI7TDoNI1Em5+Y8p13h2i0MqQgBtSNHYdgw94fBJpNKS9owdg/b3BnmYTf8hjC6gPMLw4Tr2DbARXCeJcWvgnJ4Al4d0y5l6wOnvpP+Vde2/fvhO8O60scNbl+JN4D9M+gzxZZqlsY0VzfOq0tkOLdLGsWgQxZEb3G67OOonVAFN71K/bzoFpoukV7zen3z5EX2qqo/MVyD7E9CftDdkY/qi0kqoqptJqk2CZN0sMsKSjpJNTCQMs1w2HRVTT8lDpfQXf0EjRYkxA5p1/SFaKuNjs6Yzoz9W7WT/heIU6riA65Xlot+gHYPvIbb0Aw6bBuhAtaAducTdMN2iEMp3o7zEszGZIdq4EiQFfDTzYhDrwgS/WPOTpYgi2G+X5kdxDB9adjLhGsJthTuQlipaDbBtnArBvQm8Blog6Dqw7GgdLgrY8DF/dxYYAljNXACdDF0CZbBJPRDB6iKn4XNkOQgv6PNK9aE8lHpkJxirwI7oSEWz/7DZawcex2ksdXT5vUX2UwKSO/Xi+sAAAAASUVORK5CYII="
            class="side-it-white black1"
          />
          <span class="s-word">微信客服</span>
          <div class="side-it-left">
            <img src="../../assets/images/a971648.jpg" class="s-l-img" />
            <p class="s-l-desc">扫码加微信客服</p>
          </div>
        </div>
        <a href="https://url.cn/5Rnm9OP?_type=wpa&amp;qidian=true" target="_blank" class="side-it">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAr9JREFUSA21ls+LEmEYx53VtCBWlspUXPIgUYwl6iFqD1Es/QddWtg6Bp0W6tAh6FREC3Xp3qkOdSkIokPRoaOapBTkJZZF+0VEIOlq9nmG8WWcGdfZWfeBh/fH832+3/d55515Rwt4tGw2Ox8Oh3Oaps1LymAwWOt2u9VarbbmhUKbBCoUCmfBXMHPIDJnxSP2i/Eb/EG5XH5tjdn7mwmFELkN+QpJQXuibdxH9B5i15nv2WLGcByBViwW75siM26JtrkZsKeSyeRcs9l8aYuNF6KSJRLvuCVMmDuRSCQ+I/bBjnOsNpVK7UFEtsCXSa5w2JMdQrFY7DQg3Q7cwlg3OUZSHEKsaHEE4WPgxuEQ4vRspxpjWW4cDiGQ+30UYU9xcIwI5fP5k5R92J611bFwCJc1zypEXLtBcNYK8NmfNbnUB0EJZTKZMKQZn8RuaVAanEZMCTUaDddPhxuD1zkrpxJiT89TrvFl9kq0GU64hHOIMfYwl8vpoVDoHZPRYWBK7e9er7dQrVbrUlEQW90BEVlr1OQOapS3SJmvcHVCBDEt4+UVOxeCf3mnRGSxJvey3CML01r9OB7RkGc0PAA/6LfHgX3MC5dwikVFqC2bSLtE81xmp2Eml3AKdzvI9Svb97RUKj3hdlynf5HAuCve6xo2AF7mH+It/Ov03ztOGtf4XcSuemV0w1HEKiLXrDH1ZZDJdDq9G5G/ZrlWnOe+5AqHcFmTVEX89ewi8BC/YAVso/+I3Es8EtnGgLWiY4ynJSLcwiWchimhfr//bzg5oX1BXHyiWTnV6Wq1Wt84IX/IPo7vtbFssPU1/BYPeYX/tsfxePwnmCTPYx+t4jHzWrQ3K5XKM1o53gH1jGQgxs/8wUgkkoP0EMMI/h3/2Ol0PtXr9S59Zbquh8EeYeIofgDvIPwFrPz8f1VAOv8BOunO5fLFEfIAAAAASUVORK5CYII="
            class="side-it-black black2"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAfRJREFUSA21lr1KA0EUhV2TqKnSKFYiiAQlhZDOSgjiC4hVIKWdlY+RKr6DpY2gQp7AUkHQRkEsRBRRixBjcP2OyexOsoFsspMDJ3P3ztxz5md3s95UTPi+v8TQDahWeILXnuepTQ4MSvAEvsN+KKe+0thOFKdhFbbhMGiMxqZHMqTAg0dwVKjGi23G4PKoDtb4ciwjCrLwxiocNVRttt9suj/B9RYsDMjHTalWGj0YZLTdM2K8i4jGIKMkqzHTimgMMpo3oxO0EY0eIw5xE/F8AgNTmu9qmeuwpUPPzjl0BWkFz5S9ohlsV0PrxJG0pPkP26htkg7bQNM22sPAvJldeElLmiHYywL8cHU4lo40O7c6QQpeWJ2uQ2mndKfpKa7D4A4J1+ok8lHZ0RlV4KRMNFNpV7Sie4IVZSaIB60o1zV4o204NJOWNIWcjJTQPuoP6xS6grSkKe1Gmp8a/ORrps42fhHvwgxMgh+Ka2heorlPbHYt1KRDHxlJUQ0VO5G2LgDqc1w0oZY7LlTb7GpFNejIwGPoCtKKHgHJoisHS6dolmRv3a9JDmnP6BfjIKrJLKbhIXy2ZmTCFsEVPIB6yEXFyqmvH9KQVrCQyKuHzkWmqo/5ZTgLX+EtvON2bdEGYKz+2NbgOlyA3/AR6uP/hTbAHz/mxJJKkEsEAAAAAElFTkSuQmCC"
            class="side-it-white black2"
          />
          <span class="s-word">QQ客服</span>
          <div class="side-it-left">
            <img src="/_nuxt/img/85bbc88.jpg" class="s-l-img" />
            <p class="s-l-desc">扫码加QQ客服</p>
          </div>
        </a>
        <div class="side-it">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAAAAXNSR0IArs4c6QAAAtpJREFUSA3FVktrE1EYTWYySRS1NRAyqaQEBLtITJgEdG8RfG4EQVRciJsuXOnCn1BQN1K6cCGICIIrEaogiluFPMkoRawSH41Z+FgImbzG88VJ2mS+dB4YvHBz7z3fOd+5d+bOvfF4HJZ4PB6k6lDm8doRJBIJORgMntN1/YjX650lDfpV9J82Go37qqrWrPJYGmWz2dNIcgO1Z8AkrAK7msvlHjKxASQOekxHUZQLmPU9hHYz4T40hc4pWZY/1mq1Uh8cbceuKJVKzUmS9AoCSmSn/Gq1WgfL5fIqRxY4kDCfz3cZjV0TkkwZGuqbCmuEl78Dj+yoiW0BkIa0HI01CgQCMsgznMACmzG0Jhpr1Ol0doIpmdjWgGRoTUzWyMT6B8D/NRIEoYtF6C4Wohtak5RdEcg/cMQ0TGwLgDSk5WisEYjr2KrvOMFWmKFZ5zisEc6tFmb3gBNshZGGtByHNSJit9u9jUblRGMw1dCw4bFGxWLxJ2Z4Fqo1VjkMrhGXNMPwxog9vZPJZCQWi23L5/MfwuHwY7zgWTz/fZCNTqwDg0ftdvs8TFZx/IQikciuer3+e8Pib2/o9IZBzO/3X0HSMwhr+MoXkGCFqOl0+oAoiofR3UtjlPeIPyuVSq9pkMlkTkB3C93t9K6azebNSqXyiWJUBka4e+Yx8zvABhccBBrE1zVNW4LoW08x8kO3Lya3AN41VP+mcBXv7GKhUHhOWM8IJmmYvMA4tIk46MLwK5KsoH2J+hkB+pj3QDOP9hhqFJUr32F2CGYlH6ICkiyiZU1IjTid5JfQUiXIbgkZuY978ewTuLAKULo5re0YtrBZFKxe2D9BE5qIRB60XadpNOEyTSty9NDdTIg8Rj9AN3lsaQRsPzf3jq3kfRJ50Ire9IEJtm9F/Lv8Eo1GY9jvyoSM7iL3cn8jiPiPfRJLnAPIHrROJ4E8XZwiKg7mJ9C2nepd8/8AC/vs0GjmG6YAAAAASUVORK5CYII="
            class="side-it-black black3"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Flr1KA0EUhbNRwSJiCEKiomBlIYnY+ACmEdEylZA38AmsxBfwCcRGsLJUK/ENRPCnEAVFNJVaRgyu35FdiJkZ9ycJXjiZyb3n3LNDdmaSySQM3/eHhYSyjBdHQOMSvHWwDKYDzSPjCdj3PK8R5NIPmNTAA3CFarX0DihpUActl0NbXpx6KjOEs+C9rVnUVNxZl1nWVSC/AUb/qHeWxJUmfvBkOXAXtQRLXZqczcm1Ir1lEzZBRE4aaY1wGY3AHDLY0QlppDXCZWQQu038u9EXK/BTrEIaaY1wregNZtNgRyekkdYIl9ELzFuDHZ2QRlojrEYckp8wDwx2dOIg0EYzQwYbLw8uLZvSlRI3H+oTjQgrIM4JIU4lUXORERXBWDCfYX4IbKe4cqrNBNwC86LmfwakKbADGkD3zEooYL4INsFuAM0X2+qrfL8H0qrHVFj7NVKogs4LrkluGzifkloJbIEP0B7qVQ1Nfq5yEvMkTkEhLHSMz3w/AmfgCWhjTgI10qrHgS1eSS7xJl7o98iCY9CvUO+sx8ccrucgzWltW0VnTntyQRu2DPplIlP1Lsso3SZTi/iRl1Gs/3bxe1qZnvWss1K7TMoozb2T1NaX0XVSVQr+jfbRINCx0q/Yo/FQeDIM8JRrQP80Ne9F6Eq/AsecDK1eNIzV4xv2HtNqeZo4ngAAAABJRU5ErkJggg=="
            class="side-it-white black3"
          />
          <span class="s-word">公众号</span>
          <div class="side-it-left">
            <img src="/_nuxt/img/18e5b9f.png" class="s-l-img" />
            <p class="s-l-desc">关注更多信息</p>
          </div>
        </div>
        <div class="side-it" style>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAAXNSR0IArs4c6QAAAglJREFUSA29ls9LAkEUx91f2iFcBKGVDhVsFLlKKgRhdDAiqIj+g/6BDnXq0qG/oKCIIorCQ+c6RofsHLLab0M6pkEQwV4iXPtOtKE26zoZDsg6b973fWb2Pd/Iuf4wgsFgu8fjmYRU4jjuJJ1Ov7CG4VgFoVDIJ0nSEYCj39qMaZpTuq4/scTiWZzhy7vd7s0KKJEPYr6nqqqHJZbA4hyLxZbgv1CrAVjFq28rFAqntWt284bB0Wh0GkG2ALHTDCuK8lgsFi/tYJX2hnIcDof7kNcUhEqlmPL9rVQqjWcymQvKWpXJMcfInRfQJFROUBJYFgQhqWlaRxWFMnECc7Isr0M3RNHamfpRgDuoB8nOgdjrgiORyCJ85uoFoK2hDmbK5fIKbc2y2RWKC8U0gQC7+IiWM+MzjmJ7QLFd03TU4gJUhXMK0E6aqFEbTv2KYhvLZrN6rebXqybtEMCDZqEEhBg+URSTyLffEYxGsAqneK1jE3MNJ9+GviplVTnGK57HLpebgFCliDkQCARMdLZzy+EHDGgCDvtYqPszsISsT8QeAfwG8Dui/SoudKYe5OIMi12sARn9yfWZwDV6RYqLR2daawGU7NGPfG/gKXLkOvN6vfcAd8PQivFsGEYvn8/n3wEluW3JwIkPc7mcYTUQAe1xFhvQQLds/7oRxMYfFfOW5/lj5PjjE7OyewGtkoc9AAAAAElFTkSuQmCC"
            class="side-it-black black4"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAAXNSR0IArs4c6QAAAVpJREFUSA21ljFLQlEYhj03RYRLEAiCWyDYUERDf8AlCIdwavEfODm1NTX1D1pqcmrISdoKWpwahFobhIYiGkIS0dtzBeFeudfzfYc88HK+8533e16uoFeTcVhBEPiMHaMcujfGfDpgdCOEbqFHtFjPFGUdRekmwEOdRWJk71HnlTi5HfhZJGy5vJSTFE5S6mi8nBY5z6ibCqTdCrCK3iMhaeU3F4d2osABaBP105IS+q/0SgJ0ugWAQTcJcFuriyH8qrkthtu2hBX3F06pAI/Q7wqw7WqK4VQVzkAFDW1kwf0XngNROEYfPQmgUssAY9EajulKSlT4bvFmU8O5bClgWut5YjCUGhppaQr/BG8jFk5jG70pIK7WDwb35uEU4RvnzpXkMPfATNYjPfyF2Y99BOs97IAvePx7GFNcrzcrRu9w+jFhi0ffYDtBu2jeY//vNQP4gro87OQPCudSd0T0rVcAAAAASUVORK5CYII="
            class="side-it-white black4"
          />
          <span class="s-word">返回顶部</span>
        </div>
      </div>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";
export default {
  components: {
    HeaderBar,
    Footer
  }
};
</script>

<style lang="scss">
.index {
  background: #f7f7f7;
  // min-width: 1200px;
  width: 100%;
}

main {
  //   height: 1000px;
}

.side-content {
  position: fixed;
  right: 2px;
  bottom: 180px;
  align-items: flex-end;
  z-index: 10;
}

.side-content,
.side-it {
  display: flex;
  flex-direction: column;
}

.side-it {
  position: relative;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 67px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
}

.side-it:first-child {
  border-top: 1px solid #d8d8d8;
  border-radius: 6px 6px 0 0;
}

.side-it:last-child {
  border-radius: 0 0 6px 6px;
}

.side-it:hover {
  background-image: linear-gradient(134deg, #3c4eff, #8f2cfb);
  color: #fff;
  border: 0;
}

.side-it:hover .side-it-left {
  display: block;
}

.black1 {
  width: 18px;
}

.black2,
.black3 {
  width: 13px;
}

.black4 {
  width: 15px;
}

.side-it-white,
.side-it:hover .side-it-black {
  display: none;
}

.s-word,
.side-it:hover .side-it-white {
  display: block;
}

.s-word {
  width: 48px;
  margin-top: 5px;
  text-align: center;
}

.side-it-left {
  background: url(/_nuxt/img/92e16cf.png) no-repeat;
  background-size: cover;
  display: none;
  position: absolute;
  left: -135px;
  top: -40px;
  width: 126px;
  height: 128px;
  text-align: center;
  color: #333;
}

.s-l-img {
  width: 70px;
  margin: 16px 8px 5px 0;
}

.s-l-desc {
  margin-right: 7px;
}
.kind-title-fa {
  position: relative;
  margin-top: 60px;
  margin-bottom: 48px;
}

.kind-title {
  position: relative;
  height: 72px;
  line-height: 72px;
  font-size: 30px;
  text-align: center;
  color: #333;
  z-index: 3;
}

.kind-desc {
  position: absolute;
  left: 50%;
  top: -5px;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  font-size: 36px;
  color: #eaeaea;
  z-index: 2;
}
.co35[data-v-5b670505] {
  color: #353940;
}
</style>
