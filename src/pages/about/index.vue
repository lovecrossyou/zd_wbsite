<template>
  <div class="body">
    <TabNav />
    <YellowBg />
    <!-- <div>
      <el-row :gutter="20">
        <el-col :span="10" offset="8">
          
        </el-col>
      </el-row>
    </div> -->
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
        <div class="title_box">
          <HomeTitle title="我们是谁" desc="Who we are" />
        </div>
        <div class="who_we_are_box">
          <pre class="who_we_are_box_text">&nbsp;&nbsp;<span style="font-size:14px;color:#FFD570">河南众德人力资源</span>由河南众德人力资源服务有限公司，河南众德劳务外包服务有限公司，河南兴诺人力资源服务有限公司，河南昊兴人力资源服务有限公司，许昌众德人力资源服务有限公司等组成。均是经河南省人力资源和社会保障部门以及工商行政管理部门批准，具有独立法人资格的人力资源服务企业。公司拥有一支业务熟练，经验丰富，勤奋干练的专业队伍，力争最大限度对上服务好企业，对下服务好各级供应商，并在河南各地方和山西，山东，陕西，河北和甘肃等地建立了多家分公司和运营中心。</pre>
          <pre class="who_we_are_box_text">&nbsp;&nbsp;公司凭借创办人十年稳健的操作经验和强大的输送安置能力稳步发展，自成立以来始终坚持诚信为本，规范经营用心服务的原则，深耕人力资源市场并稳居上游学生工领域，以河南为中心，在山东，山西，陕西，河北，甘肃等省份学生市场占据重要位置。农民工领域，以郑州为中心牢牢把控新乡，安阳，洛阳，驻马店，等市场的劳务市场；校企合作领域与河南，山西，山东，甘肃，陕西，河北等二十多所大中专院校建立长期合作的关系。</pre>
          <pre class="who_we_are_box_text"> &nbsp;&nbsp;公司将依托强大的资源网络，专业干练的业务团队，强硬的企业关系继续默默深耕，奋力往前，稳步发展，争取做国内最具影响力的人力资源品牌！</pre>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TabNav from "@/components/tabnav.vue";
import YellowBg from "@/components/yellowbg.vue";
import Footer from "@/components/footer";
import HomeTitle from "@/components/hometitle.vue";

export default {
  data() {
    return {};
  },
  components: {
    TabNav,
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

.title_box {
  margin: 76px 0;
}

.who_we_are_box_text {
  font-size: 12px;
  white-space: pre-wrap;
  padding: 4px 0;
}
</style>