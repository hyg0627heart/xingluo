<template>
  <div class="success-container">
    <div class="top-banner"></div>
    <div id="createPeople">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title">创作者合作案例</div>
          <div class="kind-desc">COOPERATION</div>
        </div>
        <div class="create-people">
          <div class="c-p-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAAhCAYAAAB3JF/XAAAAAXNSR0IArs4c6QAAA2FJREFUeAHtnLmKFUEUhr1u4y4YCGpi5BIoggsKvoKhMhhoIgiCLyD4CCaCTGBg4IKhgkwogoIiGqi4gRgoBooKCu7r9+MtKXu6ervXcbr9Cw5Vdbr6dJ2P/qm+3be794MyzcUETKCMwI7pZSO83QRM4BcBi8VngglUJGCxVATlYSZgsfgcMIGKBCyWiqA8zAQsFp8DJlCRwEzG7UmM7eHfjo1iCxNj7DaBrhN4RILnsNsSRGHhMcw8BuzFjmBzCwd7owl0i8BZ0tnX6/XeKa1SsYTcEc0m2uex5cHn2gQ6TOAmuW1FKF9DjpXFoh0QjC7LLoedXZtARwl8J6/1COVunF+tH/jsfIWdL8QB3DaBDhIYzwpFOdYSSx/K8Q7CcUomEBMYizuhXesyTDtxKbaW6l4I4NoEOkhghJXlczavJmIZIch7rMmqlD2++yYw1Qh8QCi6Azyh1D7hCfSJKK8nRLLDBLpB4E0qjdpi6Qd6lQpovwm0nMDL1PybiuVpKqD9JtByArdS828qlmupgPabQMsJ3EjNv6lYrqYC2m8CLSdwPTX/2nfDFIjbx3OonmFL1HcxgY4QeEIeK7mJlftdikYrC8E+EvRURwA5DRMIBE6mhKIBjVYW7dh/OHmH5gz1XUyg5QS+MP81iOVxKo9GK4uCEfQ+1bFUYPtNoGUEjhYJRbk0Xlm0M6vLIqoH2DL1XUygpQSeM+9ViOVt0fwbrywK2g++m6ae6ruYQBsJ6PJrtEwoSmwgsSgAB7lEpVePv2EuJtA2Avv753DpvAcWi47AwfSOst7l1x8sXUygDQT0BuQBzt0TVSc70G+W7EH4DbMa32lsY3ab+yYwhQjoj8A7EcrFOnMaysoSDsjBH9Lehh3GXgS/axOYQgTOMJd1dYWi+Q91ZYmBsMrMpr8LO4htibe5bQL/gIC+HXEIkejV+Eblr4klng3CWUF/M6bLM30lZgO2FBvqykY8l/+LgD4soRtLqVpvO+qLRGOIRA/QByqTIpa8GSIgCWUxpmc1C7D5mP5zpm+T6W1MmVanWZHpo4DB9M+BrClmnilP+VXnGe7fq2xgEmptS5X4P0ShnVfLF/tDv6zWSRCPifuhXVTnbZMv9od+yhdvr9MOJ3HYp6if2hb7/2hz8ivupJafLIPRvqMNRRUAAAAASUVORK5CYII="
              alt
              class="c-p-l-top-bg"
            />
            <video
              id="videoPlay"
              :src="video[cur].videoSrc"
              class="c-p-l-video"
              controls="controls"
              preload="auto"
              style="display:;"
              v-show="show"
            >您的浏览器不支持播放MP4</video>
            <div class="c-p-l-float" style="display:;" v-show="show">
              <div class="c-p-l-img-bg"></div>
              <img :src="video[cur].bgimg" class="c-p-l-cover" style="display:;" />
              <img src="../../assets/images/94c3af4.png" class="c-p-l-play" style="display:none;" />
            </div>

            <!-- <div class="c-p-l-float" style="display:none;">
              <div class="c-p-l-img-bg"></div>
              <img src="../../assets/images/30f3413.png" class="c-p-l-cover" style="display:none;" />
              <img src="../../assets/images/94c3af4.png" class="c-p-l-play" style="display:none;" />
            </div>-->
          </div>
          <div class="c-p-right">
            <transition name="floatUp">
              <div class="c-p-r-box" style="display:" v-if="show">
                <div class="c-p-r-top">
                  <div class="c-p-r-t-it">
                    <p class="c-p-r-t-title-word">{{list[cur].name}}</p>
                    <p class="c-p-r-t-platform">平台：{{list[cur].platform}}</p>
                  </div>
                  <div class="c-p-r-t-it">
                    <p class="c-p-r-t-title-num">{{list[cur].fans}}</p>
                    <p class="c-p-r-t-desc">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAMAAACqTK3AAAAAZlBMVEUAAABlZWVkZGRlZWVkZGRlZWVlZWVmZmZmZmZlZWVjY2NeXl5lZWVmZmZlZWVlZWVlZWVkZGRjY2NjY2NmZmZmZmZlZWVlZWVmZmZlZWVlZWVlZWVlZWVkZGRkZGRjY2NfX19mZmZl62BVAAAAInRSTlMA9zOSJMb+++3BKQrx1aCMh0Y4L+bhuKyomJV5aFtXIBUUkUNXIgAAAJxJREFUGNNt0EcSgzAMQFEJZGxsXDC9w/0vGWocZvI3kt5SAKCG+Nug4Egmmt3pRJ5EWMBdgXTA6Hj0UMTdSGCTKgm0HxbiVGIglGm8E/0S/SfL3sQsTJiL/KF9xQkUq7L+oT4rmQJYTYn+Eo+lWc9ta7L5mHPWbHCnOq6N0bxTEPJOCOfhXdu+74WoromWIFIgco4oZLAiOrv+9gHczAcMhs00wgAAAABJRU5ErkJggg=="
                        class="c-p-r-t-d-icon"
                      />粉丝数量
                    </p>
                  </div>
                  <div class="c-p-r-t-it">
                    <p class="c-p-r-t-title-num">{{list[cur].zan}}</p>
                    <p class="c-p-r-t-desc">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAMAAACT1yXjAAAAaVBMVEUAAABTU1NmZmZkZGRlZWVkZGRlZWVlZWVlZWVlZWVkZGRgYGBlZWVlZWVlZWVjY2NiYmJhYWFeXl5mZmZlZWVlZWVmZmZmZmZkZGRkZGRlZWVlZWVlZWVlZWVlZWVlZWVmZmZmZmZlZWXygmJfAAAAI3RSTlMAB9Mz2zjQy5VjXRu7sIIsJREN4cSnb2tDIunCj3lRSUGeiUzXECMAAACpSURBVBjTXc9ZEoMgEEXRBxgQHMF5TrL/RaYpNYr3C04VXQ3OmNEMj0yUNU+Lc9T9w1KDPA+prBK0cWjNDCzfgFpuaaT+vxIluqqg06SFEAUDtkrFxeiJZZyKPgwtbSX4sTdlVQKTebu+kCiHNQ2tp/u7Dm2J6a5CywytItndHB9oprSX7aNgZXK3fPY7yYEMZ9MGSmoxjN1rT0vnrVOpW1W0x3tcsSNQP147BwZ2+B+9AAAAAElFTkSuQmCC"
                        class="c-p-r-t-d-icon"
                      />获赞数量
                    </p>
                  </div>
                </div>
                <div class="c-p-r-tag">
                  <div
                    v-for="(tag,index) in list[cur].tags"
                    :key="index"
                    class="c-p-r-tag-it"
                  >{{tag}}</div>
                </div>
                <div class="c-p-r-introduce">{{list[cur].introduce}}</div>
                <div class="c-p-r-goods">
                  <div class="c-p-r-g-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAAXNSR0IArs4c6QAAAkNJREFUSA3tlT1oU1EUx/NeEuiSIuggNp/GQCGDtBQbukhLBz8WbTsIxSFDQRC7SMWlJXTtVsXJWStdCoXSik4VBV0sklYUkvoSoQVxSQtJSPL8neHB7SUfr5KxFw733PP/n/O/9zzevYbHxcjlchGfzzdpmuZT27azpCyVy+X3iUSi0ind6EQoFAqzhmHMw7ugcT8i9iAUCn3T4ieWbQUsy3rIrp9LBsU2EdpmPsdyCj/GvF+pVK7H43FLOKcaFL9ULBb/YDanmFOT8/n8RWKfBMNeqJjum3rAWbPDYfzz7PgzbVhy4jLHYrGDer3+GBfYvqFium9kMhkznU5P0YpBQLVlQ4iMUWCX+LqGecB6ic2A15hfYseYM47ZwGo0Gt0zOOojyMsO0q0Z4d/VanVEWnSrW0XVOmy6z+/3D4iArQJd9o2WH7lbQmcCHTt51qL/axF/YRGT++dXxwoejwX3GbzDZtxW3+AVF9yTRqNxnyT1jtFrHHHnTMOdReSNDsq6lcCEXNfhcHgbkUl4e3oyBXcFi0QiH7jP+sBv6xxZ+5oFuUeuEF9B5B4iW9ls9logEBgnflX4FN8plUrvksnkkRQnvkI4Lpg+5DbdgHBTB2RNoZ/YAm1Y4w0oqxwenR6v13uH3EUsoWKOzwnvNj2BQ5BE7DVvxXc2Im9wTjBil7ER3H6H22puK6Ak9VNQTAm5c+Ujnz7LXW1h2Sa7euue755JOw9qtdpXbyqV+hIMBv+SOoqY25a1VaL4DoQJ3uQf/wCfkOaU1CbO4wAAAABJRU5ErkJggg=="
                      class="c-p-r-g-i-img"
                    />
                    <div>
                      <p class="c-p-r-g-i-word">商品</p>
                      <p class="c-p-r-g-i-num">{{list[cur].goods}}</p>
                    </div>
                  </div>
                  <div class="c-p-r-g-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAAAXNSR0IArs4c6QAAAvlJREFUSA2tlk1oU0EQx/NevkBtLwVzSVLSIpVEqAoVIh68WSkIVrB6URFPXjwo3oT24FHtRUEPpeippSqith5zkJZq/AAtsZpCY+ohYgwJhmo+Gn/zSMJL8nyNaRY2Mzvzn/nv7uy+jWLZpIXDYbvL5dpdKpX2KIpylH5cQhg/ps8x/pjJZJYDgUDOLJXyL+fKyorXbrefUVX1BAn9JHQYYfEJQQQ5k8/n7/f29n41wjUQLS0tOTo7Oy+R+DIBLqMgE9t3CG+wwvH6FdYQRaPRnU6ncwKSIZNkm7ogm2V153t6ehIVcJUoEol0dXR0PMURrDi3KBey2eyxvr6+H5LHKj+jo6NqMBicRD0i4zY1j8Ph8FGGh6FQqKStKBaLnbRarVNtIqhJUywWR7q7u6eV8vF9SV0O1CDaNKBerxKJxCFldXV1n81me01ebRvblF+fplgoFAZUSAYMSOLMZAz7NL2ki8pubGyMS8eW1dkFM12Oqb9HVuGw4ZTbrouxWNjXi+zrMzGura25EQdFB3vH6/VeFT0ejxeIuyI6bcHtdo+IQr3D1FtOb7URN6gC/l21lBVsO0SV+iGcZbMF+3advq2iC6aMFYwWq/OJ7Y/CDM4yg0m9Az3JLB4hdwE6XPFhyzMWu6xuGF0mojXGIZQv2IaRXZqx/MMOnROiAN+ztwAMv2X6gFZ0JpCjpvvVxcXFTySYbyVJkzHzwqGdAgo7yIpmCaw9FU1mMoGxoNKQx+OZUwWE8gJx1ySgJRdbdk9IJFgjEiWZTMpR1Y60jLfaWMnzVColT43WqkT9/f3ZdDp9GsAEnkLZ36qY5E06JTkrCQxrwiV9B2BvBfQfchnsdS7vg/oYW71Bxqwqx+EwcjXYwP4E+wY5lcvlZnjK0w0gDEZEwlDDQpIo/Rb37Rc+7TJS6BTjGOPPrOAb0rQZEUmARkTyDP32+vr6zcpLaZrNxNlAxGvLTigKBE+Iu8ZH9INJfNOuBiK/36/wx+KCz+d733SWJoB/ARYQOCDUovCWAAAAAElFTkSuQmCC"
                      class="c-p-r-g-i-img"
                    />
                    <div>
                      <p class="c-p-r-g-i-word">评论数</p>
                      <p class="c-p-r-g-i-num">{{list[cur].comment}}</p>
                    </div>
                  </div>
                  <div class="c-p-r-g-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAApdJREFUSA29lj1oU1EUx/veCyVUkwwOIuaDRAcxoIKFIloUB51UEB0EP3BoBUcHdWt2wUVoCxIXx4KTkw5itIkUWwg2ghIM+RAHBT8iISbmxd954T5uk1CKfXrhvHPu+Z97PnrPPakxMmRVKpVJwzCuAR2Fd4eYDKi63S6mRhZgPhwOP+s3MHRFoVDYGgwGZzlwEf0aTLfbgLzQbren4/H4N2XrU4LwUCh0B3ZJ1/2lfN7n8zU5e1mdd7Mul8sHTdPMUs2oAjfJO6xjsVjspfgxlTPLsm56GETcWiR+G+4U43y4/HGCLHocSIJ1bNs+Ho1GM05FRPa6GgkiyyL5W6lUyjRqtdp+WnPpH1TTC0VV+D9s8pE341UDKOc6t9hccJtBR7yWKcYvgZYg22vnff4emblcbhnl4z6gf7veGFoPEz9Z3lPGae9qtbqTe1pAeag/Avu7tOhzOvMB8jYd50/yA2wKbC/nZ3RMZPBVRtG5RCLxzp0MzLlR5tw0+CkoBH2AHrZaLRmU23nQbeg68gRODZws42RO9I1G43sgEJDuvQq+G7hOAk/q9fp8Mpn8ia63pM+p6mw+n9+idMIZSwna/yn0mUd9RsdERneCcx/BF0ul0h4dl8TBTwsXvVsRB16RyQ6yyqD/Cu1iPwkPQM4Ce42wgt5GPgCfYK98NNC9YP8efRD5CHIznU7voxBbn96/AKIYyU/E0AU2DiA0gtxvM4buJEohha8oo//yjiSYHmggRZWNF1wP9NsLh7oP7qnD/TjvTA/0RjfyQubO3uJnbSCi30dZ9yKA+MBfE5pV/tyK+HFaBbgCfVLgJvgXzk5FIhGZo84aaIBisRjx+/0yIW5AYz2zjX1JUp7IPabCHP8ryGRx1x9RNwClSQmNuQAAAABJRU5ErkJggg=="
                      class="c-p-r-g-i-img"
                    />
                    <div>
                      <p class="c-p-r-g-i-word">卖出</p>
                      <p class="c-p-r-g-i-num">{{list[cur].sale}}</p>
                    </div>
                  </div>
                  <div class="c-p-r-g-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAAXNSR0IArs4c6QAAAktJREFUSA21lj1oU1EUx999NEISdMgggvlYFByUgIs6l0x27dyP0I6iYCcRBXFxsbhGrIsO7drNfmx+DUKqQ0AR8uGgkEVITE2T5+883o2X19f05qEPDvfcc/7/87/n5OUmygk9zWbzrOd5Jdd1L7JOYTWl1HYul/scgvpb8OfBTIO5gB0Mh8NPrK/AfzPxytioRqNxC9AKdsaIOxT6SazSbrfvFYvFjuSq1Wo6k8ncx10md0pixvMdwUf5fP4xMU/iWkhxslUINwxwlLvZ7/dnJZFIJDZYZqJAOsYBn9DZTfaeL0Qn84xqTQOOWR8E+bvH4Pw0nS3Q2XNVq9VOptPpD3RzzobIKX8LDvwJS/yXTqdzeSqVSl2zFZlEQB9CaieTyasuzpwO/q+Vj2VOXoJ92zHEPQjj3nchv4lbYALeaxGqTECIC33q0tZb2N24FSx4XTTeubzjX3F2LQixIFJbNGR0Hl8quSqGsSqNJ1Har+2JkFMoFHZY1sdzYmU3gtqOL0QJufhWsEasctEkqXUbk9ojISebzbbYL2D/4sXoDgaDxaCm6PwVkg2JHT68Jcy/zyQ26QO3jy0zsm2Tq0c3inGtv2RTBvxrFLR04PS4ZcrUeBGm6N+jcNxptVrXCT7DTh9KRgd+MK4ynWxGpY8UEjD34CWWCqe8EkXWMTp5j79EJ3s6Fl4Pjc4EQPzIb0kp+C4cmLnAl/8Iq71erzRORLBjOzIL1+v1aa77h7o76QKRO4xqy8Qd5VsLSQFGmURgHhc9tUYX1i/MH9M+5tqPrJXkAAAAAElFTkSuQmCC"
                      class="c-p-r-g-i-img"
                    />
                    <div>
                      <p class="c-p-r-g-i-word">点赞</p>
                      <p class="c-p-r-g-i-num">{{list[cur].dzan}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <div class="c-p-r-avatar">
              <div
                v-for="(item,index) in photos"
                :key="index"
                class="c-p-r-a-it"
                @click="ch_cur(index);show=!show"
              >
                <img src="../../assets/images/a515360.png" style="display:" class="c-p-r-a-i-bg" />
                <img :src="item.img" class="c-p-r-a-i-img" />
              </div>
            </div>
          </div>
        </div>
        <div class="create-people-have">
          <div class="create-people-have-icon"></div>还有这些创作者也在星罗
        </div>
        <div class="create-people-bottom">
          <div class="c-p-b-it">
            <img src="../../assets/images/1462450.jpg" class="c-p-b-it-img" />
            <p class="c-p-b-it-name">小沈龙</p>
            <p class="c-p-b-it-fans">粉丝量：1954w</p>
          </div>
        </div>
      </div>
    </div>
    <div id="BrandCooperation">
      <div class="content-box">
        <div class="kind-title-fa">
          <div class="kind-title">品牌合作案例</div>
          <div class="kind-desc">COOPERATION</div>
        </div>
        <div class="brand-cooperation">
          <div class="brand-c-li">
            <img src="../../assets/images/2db37c3.png" class="band-c-li-bg" />
            <div class="brand-c-li-con brand-c-li-con-le">
              <img src="../../assets/images/00a5ab8.jpg" class="band-c-goods-img" />
              <div class="brand-c-li-r">
                <p class="band-c-li-r-title">利仁空气炸锅低脂撩胃</p>
                <p
                  class="band-c-li-r-word"
                >在追求轻食主义 X 无油时代，空气炸锅走进人们视野；星罗在了解当下消费者需求和品味的基础上，精确选品，匹配达人创作者，促成品牌与达人双赢的效果；本例中星罗匹配了美食类目的创作者“婕婕家里有宝藏啊”进行短视频+直播的推广方式，最终取得了优异的成绩</p>
                <div class="band-c-li-r-b">
                  <div class="band-c-li-r-b-con">
                    <p class="band-c-li-r-b-num">1200+</p>
                    <p class="band-c-li-r-b-des">出单</p>
                  </div>
                  <div class="band-c-li-r-b-con">
                    <p class="band-c-li-r-b-num">40W+</p>
                    <p class="band-c-li-r-b-des">达人GMV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="brand-c-li">
            <img src="../../assets/images/670b664.png" class="band-c-li-bg brand-c-li-con-marr" />
            <div class="brand-c-li-con brand-c-li-con-top">
              <img src="../../assets/images/bfe616f.jpg" class="band-c-goods-img" />
              <div class="brand-c-li-r">
                <p class="band-c-li-r-title">低客单产品·直播强转化</p>
                <p
                  class="band-c-li-r-word"
                >对于低客单产品，星罗摸索出了一套成功的打法-短视频预热·直播强转化，本次合作中由创作者屠小杰短视频进行曝光预热，然后由达人宇仔直播进行强转化，达成了可观的效果；此外，周黑鸭与星罗多次合作，带货10+场次，每条视频点赞1W+</p>
                <div class="band-c-li-r-b">
                  <div class="band-c-li-r-b-con">
                    <p class="band-c-li-r-b-num">2.5W</p>
                    <p class="band-c-li-r-b-des">出单</p>
                  </div>
                  <div class="band-c-li-r-b-con">
                    <p class="band-c-li-r-b-num">120W+</p>
                    <p class="band-c-li-r-b-des">达人GMV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        { img: "/img/21f95d7.21f95d7e.png" },
        { img: "/img/0c02006.0c020067.png" }
      ],
      video: [
        {
          videoSrc:
            "https://video.linkstars.com/xingxuan/20200317/535961e621ed7f438a26ff417b61789a.mp4",
          bgimg: "/img/5fdbdad.5fdbdad1.png"
        },
        {
          videoSrc:
            "https://video.linkstars.com/xingxuan/20200317/d540758cde99fc8f7c128e0e06b12a86.mp4",
          bgimg: "https://xl.linkstars.com/_nuxt/img/3b6c409.png"
        }
      ],
      list: [
        {
          name: "涂磊",
          platform: "抖音",
          fans: "3668.8w",
          zan: "2.1亿",
          tags: ["图书", "情感"],
          introduce:
            "他有着多年的主持经验，他擅长情感分析，一针见血指出问题所在，用自己的睿智吸引粉丝，在不到两年的时间里收获粉丝3000多万。",
          goods: "图书",
          comment: "2.6w",
          sale: "400w+",
          dzan: "210w"
        },
        {
          name: "牛肉哥家族严选",
          platform: "抖音",
          fans: "609.3w",
          zan: "4265.8w",
          tags: ["男装", "男鞋", "酒水", "数码"],
          introduce: "抖音十佳好物推荐官",
          goods: "蓝牙耳机",
          comment: "5088",
          sale: "90w+",
          dzan: "4.8w"
        }
      ],
      cur: 0,
      show: true
    };
  },
  methods: {
    ch_cur(index) {
      this.cur = index;
      setTimeout(show => {
        this.show = !show;
      }, 100);
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
#createPeople {
  background: #fff;
  height: 1315px;
}

#createPeople,
.create-people {
  display: flex;
  justify-content: center;
}

.create-people {
  align-items: center;
}

.c-p-left {
  background: #fff;
  position: relative;
  width: 352px;
  padding: 22px;
  height: 686px;
  box-shadow: 4px 8px 14px 0 hsla(0, 0%, 91.4%, 0.5);
  overflow: hidden;
  border-radius: 60px;
}

.c-p-l-top-bg {
  position: absolute;
  left: 76px;
  top: 14px;
  z-index: 6;
}

.c-p-l-img-bg {
  background: #000;
  height: 642px;
  z-index: 1;
}

.c-p-l-img-bg,
.c-p-l-video {
  position: absolute;
  width: 308px;
  border-radius: 30px;
  -webkit-animation: floatUp-data 1s;
  animation: floatUp-data 1s;
}

.c-p-l-video {
  height: 624px;
  z-index: 5;
  outline: none;
}

.c-p-l-play {
  position: absolute;
  top: 306px;
  left: 118px;
  z-index: 5;
  cursor: pointer;
}

.c-p-l-cover {
  position: absolute;
  width: 308px;
  z-index: 3;
  border-radius: 30px;
}

.c-p-l-float {
  position: relative;
  width: 334px;
  height: 642px;
  overflow: hidden;
  -webkit-animation: floatUp-data 1s;
  animation: floatUp-data 1s;
}

.c-p-right {
  background: #fff;
  width: 765px;
  height: 552px;
  padding: 43px 40px 0 53px;
  box-shadow: 2px 5px 12px 7px hsla(0, 0%, 91.8%, 0.5);
  border-top-right-radius: 34px;
  border-bottom-right-radius: 34px;
}

.c-p-r-box {
  -webkit-animation: floatUp-data 1s;
  animation: floatUp-data 1s;
}
.floatUp-enter-active {
  -webkit-animation: floatUp-data 1s;
  animation: floatUp-data 1s;
}
.floatUp-leave-active {
  animation: floatUp-data 1s reverse;
}

@-webkit-keyframes floatUp-data {
  0% {
    opacity: 0;
  }

  20% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0;
  }
}

@keyframes floatUp-data {
  0% {
    opacity: 0;
  }

  20% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0;
  }
}

.c-p-r-top {
  display: flex;
  color: #333;
}

.c-p-r-t-it:first-child {
  margin-right: 210px;
}

.c-p-r-t-it:last-child {
  margin-left: 72px;
}

.c-p-r-t-title-word {
  width: 170px;
  height: 33px;
  line-height: 33px;
  font-size: 24px;
  text-align: left;
}

.c-p-r-t-title-num {
  height: 33px;
  line-height: 33px;
  font-size: 30px;
  text-align: center;
}

.c-p-r-t-platform {
  text-align: left;
}

.c-p-r-t-desc,
.c-p-r-t-platform {
  margin-top: 13px;
  font-size: 16px;
  color: #666;
}

.c-p-r-t-desc {
  text-align: center;
}

.c-p-r-t-d-icon {
  vertical-align: middle;
  margin-right: 5px;
}

.c-p-r-tag {
  display: flex;
}

.c-p-r-tag-it {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAgCAMAAAChOk+qAAAAb1BMVEUAAADS0v+fqfieqfieqfmdqfidqfidqfeeqfieqfefq/qerPqhrPqhq/+eqfidqfieqfifqfmeqfmeqPieq/mfsPueqfieqfieqfieqfieqfedqfieqPieqPifqPmgqvihrvijqviktv+iuf+dqPc8yHUoAAAAJHRSTlMAAp6ZXfvz596GQTcuGe7Yq3p1bk8e0tC9uqOSiWdVTiYkDgs2j6sAAAAAoUlEQVRIx7XUiRGCUBAE0eYUFG/xvp38Y7SAH8LOC6FrZ6GtZbClk8WGhSx2ZCs5zOEqg+oHTxmcgG+leAXARfFKgL3idQC9wtUZg6OinRm1itYyMIzvwCibKdiSSa5YDclBsTYknWLtSF6K9cDUuGAU/5LXTOYynVuhaKVpHypMJVLkm+ItLSVS5IUMcuAugwZo5NDzlkXJRxY5bGvFq/Z/8lV2hIQONy8AAAAASUVORK5CYII=)
    no-repeat;
  background-size: cover;
  width: 88px;
  margin: 43px 32px 0 0;
  line-height: 32px;
  text-align: center;
  color: #fff;
}

.c-p-r-introduce {
  height: 80px;
  margin-top: 32px;
  opacity: 0.7;
  font-size: 16px;
  color: #333;
  line-height: 40px;
}

.c-p-r-goods {
  display: flex;
  margin-top: 30px;
}

.c-p-r-g-info {
  display: flex;
  align-items: center;
  margin-right: 22px;
}

.c-p-r-g-i-img {
  margin-right: 21px;
}

.c-p-r-g-i-word {
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
}

.c-p-r-g-i-num {
  font-size: 26px;
  color: #151515;
}

.c-p-r-avatar {
  display: flex;
  margin-top: 34px;
}

.c-p-r-a-it {
  position: relative;
  margin-right: 48px;
  width: 80px;
}

.c-p-r-a-i-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-animation: rotate-data 1.5s linear infinite;
  animation: rotate-data 1.5s linear infinite;
}

@-webkit-keyframes rotate-data {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes rotate-data {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.c-p-r-a-i-img {
  position: absolute;
  width: 68px;
  top: 7px;
  left: 7px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 2;
}

.create-people-have {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #333;
  margin-top: 68px;
}

.create-people-have-icon {
  width: 0;
  height: 0;
  margin-right: 10px;
  border: 8px solid transparent;
  border-left-color: #6b32f1;
}

.create-people-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
}

.c-p-b-it {
  text-align: center;
}

.c-p-b-it-img {
  width: 104px;
  border-radius: 100%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px 2px #e8dcff;
  -webkit-transform: scale(1);
  transform: scale(1);
  transition: all 0.5s;
}

.c-p-b-it-img:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  transition: all 0.2s;
}

.c-p-b-it-name {
  margin: 28px 0 12px;
  font-size: 18px;
  color: #333;
}

.c-p-b-it-fans {
  font-size: 14px;
  color: #999;
}
#BrandCooperation {
  display: flex;
  justify-content: center;
}

.brand-c-li {
  position: relative;
  display: flex;
  margin-bottom: 70px;
  margin-left: 88px;
}

.brand-c-li-con {
  background: #fff;
  position: absolute;
  display: flex;
  width: 960px;
  height: 422px;
  margin: 45px 0 0;
  box-shadow: 0 0 18px -10px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  z-index: 2;
}

.brand-c-li-con-le {
  left: 52px;
}

.brand-c-li-con-marr {
  margin-left: 233px;
}

.brand-c-li-con-top {
  top: 2px;
}

.band-c-goods-img {
  width: 444px;
  border-radius: 6px 0 0 6px;
}

.brand-c-li-r {
  width: 444px;
  padding-top: 53px;
  margin-left: 40px;
}

.band-c-li-r-title {
  text-align: right;
  font-size: 26px;
  color: #333;
}

.band-c-li-r-word {
  margin: 20px 0 34px;
  line-height: 23px;
  text-align: justify;
  font-size: 16px;
  color: #676767;
}

.band-c-li-r-b {
  display: flex;
  width: 444px;
  padding-top: 18px;
  border-top: 1px solid #eee;
}

.band-c-li-r-b-con {
  width: 220px;
  text-align: center;
}

.band-c-li-r-b-con:first-child {
  border-right: 1px solid #eee;
}

.band-c-li-r-b-num {
  font-size: 24px;
  color: #333;
}

.band-c-li-r-b-des {
  font-size: 14px;
  color: #a5a5a5;
}
.content-box {
  width: 1200px;
}
</style>