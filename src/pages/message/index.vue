<template>
  <div class="body">
    <YellowBg />
    <div class="content_wrapper">
      <div class="content">
        <div class="top">
          <div class="map_box">
            <img src="@/assets/message/xiaoxitongzhi.png" alt class="banner_pic" />
          </div>
        </div>
        <div class="top_box">
          <TopMsg />
        </div>

        <div>
          <ListMsg />
          <ListMsg />
          <ListMsg />
          <ListMsg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YellowBg from "@/components/yellowbg.vue";
import map_pic from "@/assets/resources/ziyuanfugai.png";
import TopMsg from "./components/topmsgitem";
import ListMsg from "./components/listmsgitem";
export default {
  data() {
    return {};
  },
  components: {
    YellowBg,
    TopMsg,
    ListMsg
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

.top_box{
  box-shadow: 0px 12px 12px -12px #5e5e5e;
  padding: 15px;
  box-sizing: border-box;
}

.banner_desc {
  height: 90px;
  background: #ffffff;
}
.map_box {
  background: gray;
  margin: 0 auto;
}

.map_box_title {
  text-align: center;
  margin-top: 38px;
  font-weight: 500;
  font-size: 14px;
}

.banner_desc {
  font-size: 12px;
}

.banner_pic {
  height: 234px;
  width: 100%;
}

.content {
  width: 66%;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F8F8F8;

}

.map_box_content {
  margin-top: 38px;
  font-weight: 400;
  font-size: 10px;
}
</style>