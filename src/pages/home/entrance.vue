<template>
  <div class="body">
    <div class="triangle_topleft"></div>
    <TabNav />
    <div class="yellow_bg" />
    <div class="content_wrapper">
      <home />
    </div>
  </div>
</template>

<script>
import home from "./home";
import TabNav from "@/components/tabnav.vue";

export default {
  data() {
    return {
     
    };
  },
  components: {
    home,
    TabNav
  },
  methods: {
  }
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