<template>
  <div class="body">
    <YellowBg />
    <div class="content_wrapper">
      <div class="content">
        <div class="top">
          <div class="map_box">
            <div class="map_box_title">资源覆盖</div>
            <img src="@/assets/resources/ziyuanfugai.png" alt class="map_pic" />
          </div>
        </div>
        <div
          class="map_box_content"
        >我司在河南，山西，陕西，河北，甘肃以及云贵川地区有数十家子公司和分支机构，均在当地工商行政管理局有备案。最近几年公司稳步发展，稳居上游并屹立不倒。受到了个地市场和政府的肯定，并授予我司以下称号：</div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import YellowBg from "@/components/yellowbg.vue";
import Footer from "@/components/footer";
import map_pic from "@/assets/resources/ziyuanfugai.png";
export default {
  data() {
    return {};
  },
  components: {
    YellowBg,
    Footer
  },
  methods: {}
};
</script>

<style scoped>
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
  box-sizing: border-box;
}
.map_box {
  width: 563px;
  height: 465px;
  background: #ffffff;
  margin: 0 auto;
}

.map_box_title {
  text-align: center;
  margin-top: 38px;
  font-weight: 500;
  font-size: 14px;
}

.map_pic {
  width: 423px;
  height: 384px;
}

.content {
  width: 66%;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map_box_content {
  margin-top: 38px;
  font-weight: 400;
  font-size: 10px;
}
</style>