<template>
  <div class="footer_content">
    <el-row :gutter="20">
      <el-col :span="4" :offset="6">
        <div class="grid-content bg-purple">
          <div class="title">公司介绍</div>
          <div class="footer_text">首页</div>
          <div class="footer_text">集团介绍</div>
          <div class="footer_text">主营业务</div>
          <div class="footer_text">合作企业</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="title">主要业务</div>
          <div class="footer_text">资源覆盖</div>
          <div class="footer_text">展望未来</div>
          <div class="footer_text">消息通知</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="title">关于我们</div>
          <div class="footer_text">关于众德</div>
          <div class="footer_text">加入我们</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="title">联系我们</div>
          <div class="footer_row">
            <img class="dianhua" src="@/assets/footer/dianhua@2x.png" />
            <div class="footer_text">公司服务热线</div>
          </div>
          <div class="footer_text_big">0371-55587000</div>
          <div class="footer_row">
            <img class="dianhua" src="@/assets/footer/dizhi@2x.png" />
            <div class="footer_text">公司地址</div>
          </div>
          <div class="footer_text_addr">河南省郑州市龙子湖高校园区正商木华广场3号楼A座16楼1607室</div>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="7" offset="8">
        <div class="copy_right">
          <img src="@/assets/logo.png" alt class="copy_right_logo" />
          <div>
            <div class="copy_rght_text">河南众德人力资源服务有限公司</div>
            <div class="copy_right">
              <div class="copy_rght_text">京ICP备*********</div>
              <div class="copy_rght_text">京公安备案*********号</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_content {
  margin-top: 38px;
  width: 100%;
  /* height: 218px; */
  background-color: #000000;
  padding-top: 20px;
  box-sizing: border-box;
}

.copy_rght_text{
  font-size: 10px;
  color: #9F9F9F;
}

.footer_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.copy_right {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  box-sizing: border-box;
}

.copy_right_logo {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.dianhua {
  width: 10px;
  height: 9px;
  margin-right: 5px;
}

.footer_text_big {
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  margin-left: 20px;
  margin-bottom: 10px;
}

.footer_text_addr {
  font-size: 12px;
  color: #ffffff;
  font-weight: 400;
  margin-left: 20px;
  margin-bottom: 10px;
}

.footer_text {
  font-size: 10px;
  font-weight: 500;
  color: #9f9f9f;
}

.title {
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 38px;
}
</style>