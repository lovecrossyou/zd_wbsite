<template>
  <div class="content">
    <div class="content_company_name">众德集团</div>
    <div
      class="content_company_desc"
    >公司凭借创办人十年稳健的操作经验和强大的输送安置能力稳步发展，自成立以来始终坚持诚信为本，规范经营用心服务的原则，深耕人力资源市场并稳居上游学生工领域，以河南为中心，在山东，山西，陕西，河北，甘肃等省份学生市场占据重要位置。农民工领域，以郑州为中心牢牢把控新乡，安阳，洛阳，驻马店，等市场的劳务市场；校企合作领域与河南，山西，山东，甘肃，陕西，河北等二十多所大中专院校建立长期合作的关系。</div>
    <div class="content_company_more_wrapper">
      <div class="content_company_arrow">></div>
      <div class="content_company_more">查看更多</div>
    </div>
    <div class="banner_wrapper">
      <div class="block">
        <el-carousel height="234px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img
              src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1572796465&di=acd63dc80d967265318025577e9139f4&src=http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/10/c1/16491245_1355126013759.jpg"
              alt
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>


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

.content {
  width: 66%;
  /* background-color: #e1e1e1; */
}

.content_company_name {
  font-size: 37px;
  color: #000000;
  font-weight: 500;
  margin-top: 28px;
}

.content_company_desc {
  font-size: 12px;
  color: #000000;
  font-weight: 500;
  margin-top: 14px;
}

.content_company_more_wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.content_company_more {
  font-size: 14px;
  font-weight: 500;
}

.content_company_arrow {
  margin-left: 8px;
}
</style>