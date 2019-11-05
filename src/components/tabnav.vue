<template>
  <div class="body">
    <div class="header_wrapper">
      <div class="logo_wrapper">
        <img src="@/assets/logo.png" class="logo" alt />
        <div class="company_name">众德集团</div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="/"></el-tab-pane>
        <el-tab-pane label="主营业务" name="business"></el-tab-pane>
        <el-tab-pane label="关于我们" name="about"></el-tab-pane>
        <el-tab-pane label="合作企业" name="cooperation"></el-tab-pane>

        <el-tab-pane label="资源覆盖" name="resources"></el-tab-pane>
        <el-tab-pane label="未来展望" name="future"></el-tab-pane>
        <el-tab-pane disabled label="|" name="divider"></el-tab-pane>

        <el-tab-pane label="消息通知" name="message"></el-tab-pane>
        <el-tab-pane label="加入我们" name="joinus"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="content_wrapper">
      <!-- <home /> -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    // clearBg: false
  },
  data() {
    return {
      activeName: "/"
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      const tabName = tab.name;
      this.activeName = tabName;
      this.$router.push(tabName, () => {}, e => {});
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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