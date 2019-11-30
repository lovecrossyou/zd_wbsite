<template>
  <div class="body">
    <YellowBg />
    <div class="content_wrapper">
      <div class="content">
        <div class="top">
          <img src="@/assets/logo.png" alt class="copy_right_logo" />
          <div class="ml10">
            <div class="padding5">众德集团</div>
            <div class="flex_row">
              <div class="copy_rght_text">做最诚信的人力资源公司</div>
            </div>
          </div>
        </div>
        <div class="join_us_box">
          <img src="@/assets/join/jjiaruwomen.png" alt class="left_pic" />
          <div class="bot_box">
            <HomeTitle title="加入我们" desc="Join Us" />
            <div class="contact_box">
              <div class="contact_box_text">发送邮件到：1844986992@qq.com</div>
              <div class="contact_box_text">或拨打电话：0371-55587000 / 18595829555</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import YellowBg from "@/components/yellowbg.vue";
import Footer from "@/components/footer";
import HomeTitle from "@/components/hometitle.vue";

export default {
  data() {
    return {};
  },
  components: {
    YellowBg,
    Footer,
    HomeTitle
  },
  methods: {}
};
</script>

<style scoped>
.ml10 {
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

.contact_box {
  margin-top: 20px;
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

.contact_box_text{
  font-size: 14px;
  color: #333333;
  font-weight: 400;
}

.padding5 {
  font-size: 23px;
  font-weight: 400;
  color: #000000;
}

.content {
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 60px; */
}

.join_us_box {
  margin: 76px 0;
  width: 563px;
  height: 357px;
  background: #ffffff;
  position: relative;
  box-shadow: inset 0 1px 2px 1px #e1e1e1;
}

.left_pic {
  width: 330px;
  height: 150px;
  position: absolute;
  left: 0;
  top: 0;
}

.bot_box {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 320px;
  height: 160px;
  /* background: chocolate; */
}
</style>