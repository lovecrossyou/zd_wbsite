<template>
  <div class="body">
    <YellowBg />
    <div>
      <el-row :gutter="20">
        <el-col :span="10" offset=8>
          <div class="top">
            <img src="@/assets/logo.png" alt class="copy_right_logo" />
            <div class="ml10">
              <div class="padding5">众德集团</div>
              <div class="flex_row">
                <div class="copy_rght_text">做最诚信的人力资源公司</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import YellowBg from "@/components/yellowbg.vue";

export default {
  data() {
    return {};
  },
  components: {
    YellowBg,
  },
  methods: {}
};
</script>

<style scoped>
.ml10{
  margin-left: 10px;
}
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
  box-sizing: border-box;
}
.copy_right_logo {
  width: 80px;
  height: 80px;
}
.flex_row {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
}

.copy_rght_text {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.padding5 {
  font-size: 23px;
  font-weight: 400;
  color: #000000;
}
</style>