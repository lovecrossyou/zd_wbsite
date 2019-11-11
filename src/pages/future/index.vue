<template>
  <div class="body">
    <TabNav />
    <YellowBg />

    <div class="content_wrapper">
      <div class="content">
        <img src="@/assets/future/weilai@2x.png" class="pic_banner" />
        <div class="future_content">
          <div class="future_content_title">
            <HomeTitle title="未来展望" desc="Looking forward" />
          </div>
          <div class="future_content_text_wrapper">
            <div
              class="future_content_text"
            >公司将依托强大的资源网络，专业干练的业务团队，强硬的企业关系继续默默深耕，奋力往前，稳步发展， 争取做国内最具影响力的人力资源品牌!</div>
            <div class="future_content_text">众德集团将立足河南，辐射周边，放眼全国并坚守原则，以德致胜，争取迈向全国人力资源市场最前列！</div>
            <div class="future_content_text">励志在行业内做到绝对诚信，用最好的态度服务好企业和工人。让行业以我们的服务态度和诚信为标杆。</div>
          </div>
          <img src="@/assets/future/zhanwang@2x.png" class="right_logo" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TabNav from "@/components/tabnav.vue";
import HomeTitle from "@/components/hometitle.vue";
import Footer from "@/components/footer";
import YellowBg from "@/components/yellowbg.vue";
export default {
  data() {
    return {};
  },
  components: {
    TabNav,
    HomeTitle,
    Footer,
    YellowBg
  },
  methods: {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.future_yellow_bg {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 180px;
  background: #ffd570;
  z-index: -1;
}
.el-tabs__item {
  color: #ffffff !important;
}

.el-tabs__item.is-active {
  color: #ffd570 !important;
}

.header_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #000000;
}
.logo_wrapper {
  /* margin-left: 40px; */
  display: flex;
  flex-direction: row;
  z-index: 1;
}
.header_fixed_bg {
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.el-tabs__active-bar {
  background-color: #ffd570 !important;
}
.el-tabs__nav-wrap::after {
  height: 0px !important;
}

.triangle_topleft {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-right: 1366px solid #000000;
  border-bottom: 300px solid transparent;
  z-index: -1;
}
.logo {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 17px;
  margin-left: 50px;
}

.company_name {
  font-size: 20px;
  color: #ffd570;
  margin-right: 175px;
  font-weight: bold;
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

.content {
  width: 66%;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pic_banner {
  width: 100%;
  height: 305px;
  margin-top: 40px;
  background: #e1e1e1;
}

.future_content {
  margin-top: 40px;
  width: 100%;
  height: 200px;
  background: #ffffff;
  padding-left: 14px;
  box-sizing: border-box;

  position: relative;
}

.future_content_title {
  position: absolute;
  top: 38px;
  left: 115px;
}

.future_content_text_wrapper {
  position: absolute;
  width: 300px;
  overflow-wrap: break-word;
  top: 98px;
  left: 10px;
}

.right_logo {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 55%;
  height: 90%;
}

.future_content_text {
  font-size: 10px;
  color: #333333;
}
</style>