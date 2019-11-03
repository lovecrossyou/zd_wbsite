<template>
  <div class="body">
    <div class="triangle_topleft"></div>
    <div class="header_wrapper">
      <div class="logo_wrapper">
        <img src class="logo" alt />
        <div class="company_name">众德集团</div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="home"></el-tab-pane>
        <el-tab-pane label="主营业务" name="business"></el-tab-pane>
        <el-tab-pane label="关于我们" name="about"></el-tab-pane>
        <el-tab-pane label="合作企业" name="company"></el-tab-pane>

        <el-tab-pane label="资源覆盖" name="resources"></el-tab-pane>
        <el-tab-pane label="未来展望" name="future"></el-tab-pane>
        <el-tab-pane disabled label="|" name="divider"></el-tab-pane>
    
        <el-tab-pane label="消息通知" name="message"></el-tab-pane>
        <el-tab-pane label="加入我们" name="joinus"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="content">
      <div>xzxsssssdsdsds</div>
      <div>xzxsssssdsdsds</div>

      <div>xzxsssssdsdsds</div>

      <div>xzxsssssdsdsds</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "home"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.el-tabs__item {
  color: #ffffff !important;
}

.el-tabs__item.is-active {
  color: #ffd570 !important;
}

.body {
  /* width: 100%;
  height: 100%; */
}
.header_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo_wrapper {
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
  /* height: 440px; */
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
}
.logo {
  width: 34px;
  height: 34px;
  background-color: #ffd570;
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

.content {
  width: 100%;
  height: 200px;
  background: #ffd570;
}
</style>