<template>
  <div class="body">
    <div class="triangle_topleft"></div>
    <div class="yellow_bg" />
    <div class="content_wrapper">
      <home />
      <div class="main_business">
        <HomeTitle title="主营业务" desc="Main Business" />
        <div class="business_items">
          <div class="business_item">校企合作</div>
          <div class="business_item white">寒暑假工</div>
          <div class="business_item light_yellow">劳务外包</div>
          <div class="business_item white">
            <div>农民工</div>
            <div>社会工安置</div>
          </div>
          <div class="business_item light_yellow">
            <div>临时工</div>
            <div>灵活用工</div>
          </div>
          <div class="business_item dark">查看更多</div>
        </div>
      </div>
      <div class="about_us">
        <el-row>
          <el-col :span="12">
            <img src="@/assets/home/guanyuwomen.png" class="company_pic" />
          </el-col>
          <el-col :span="12">
            <HomeTitle color="#ffffff" title="关于我们" desc="About Us" />
            <div
              class="about_desc"
            >我们是一支活力四射,充满能量的队伍。我们精诚团结，德才兼备，积极奋进，勇往直前，无往不胜。每一个成员都本着诚信，规范，奋进的运营理念，有力地保障了客户的服务质量！</div>
            <div class="about_us_more">查看更多</div>
          </el-col>
        </el-row>
      </div>
      <div class="cooperators">
        <HomeTitle white="{true}" title="合作单位" desc="Organization and Enterprise" />
        <div style="width: 100%">
          <el-row>
            <el-col :span="12">
              <div class="co_items">
                <div class="co_title">合作院校</div>
                <div class="co_item">沁阳职教中心</div>
                <div class="co_item">河北科技学院</div>
                <div class="co_item">广西职业技术学院</div>
                <div class="co_item">昆明现代科技学院</div>
                <div class="co_item">许昌电气学院</div>
                <div class="co_item">贵州电子信息高级技术学校</div>
                <div class="coop_more">查看更多</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="co_items">
                <div class="co_title">合作企业</div>
                <div class="co_item">英华达科技(上海)科技有限公</div>
                <div class="co_item">富士康科技(深圳)有限公司</div>
                <div class="co_item">达丰电脑(上海)有限公司</div>
                <div class="co_item">京东方科技(苏州)有限公司</div>
                <div class="co_item">长盈精密(东莞)有限公司</div>
                <div class="co_item">比亚迪股份(深圳)有限公司</div>
                <div class="co_item">昌硕科技(上海)有限公司</div>
                <div class="coop_more">查看更多</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import home from "./home";
import HomeTitle from "@/components/hometitle.vue";

export default {
  data() {
    return {};
  },
  components: {
    home,
    HomeTitle,
  },
  methods: {}
};
</script>

<style>
.triangle_topleft {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-right: 1366px solid #000000;
  border-bottom: 300px solid transparent;
  z-index: -1;
}
.white {
  background: #ffffff !important;
}
.light_yellow {
  background: #fff3d8 !important;
}
.dark {
  background: #333333 !important;
  color: #ffffff !important;
}

.co_item {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
}
.logo {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 17px;
  margin-left: 50px;
}

.main_business {
  width: 66%;
  margin-top: 78px;
  display: flex;
  flex-direction: row;
  height: 196px;
  justify-content: space-between;
}

.about_us {
  width: 66%;
  margin-top: 78px;
  display: flex;
  flex-direction: row;
  height: 196px;
  justify-content: space-between;
}

.cooperators {
  width: 66%;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 487px;
  padding-top: 28px;
  box-sizing: border-box;
  background: rgba(51, 51, 51, 1);
}

.co_title {
  /* width: 55px; */
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin-bottom: 20px;
}

.co_items {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 45px;
}
.coop_more{
  width: 105px;
  height: 38px;
  background: #FFD570;
  margin-top: 28px;
  color: #ffffff;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
}

.about_us_more {
  width: 105px;
  height: 38px;
  background: rgba(51, 51, 51, 1);
  margin-top: 28px;
  color: #ffffff;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
}

.about_desc {
  margin-top: 23px;
}

.company_name {
  font-size: 20px;
  color: #ffd570;
  margin-right: 175px;
  font-weight: bold;
}

.business_items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 330px;
}

.business_item_text {
  text-align: center;
}

.company_pic {
  width: 320px;
  height: 241px;
}

.business_item {
  width: 110px;
  /* height: 98px; */
  background: rgba(255, 213, 112, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  word-wrap: break-word;
}

.banner_wrapper {
  height: 234px;
  width: 100%;
  background: #cc2636;
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 243px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.yellow_bg {
  height: 343px;
  background: #ffd570;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 140px 0px 140px;
  box-sizing: border-box;
  position: absolute;
  top: 58px;
  left: 28px;
  right: 28px;
  z-index: -1;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>