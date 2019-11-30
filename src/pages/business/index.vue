<template>
  <div class="body">
    <YellowBg />
    <div class="content_wrapper">
      <div class="content">
        <Item
          index="01"
          title="校企合作"
          content=" 众德集团秉承为“企业匹配优质人才，为学校提供对口的企业，即服务好学生”的理念与河南，山西，山东,甘肃，陕西，河北等二十多所大中专院校建立长期的合作关系，累计输送大中专院校在校实习生及毕业生达5万多人之多。<br/><br/>     众德集团针对不同专业学生匹配对口及相关类岗位，以确保学生在实习期间能学到学以致用并在技能方面有所提高，有所收获。针对企业尽可能满足不同岗位相对应需求的同时对学生提供人性化的关怀和相关技能的培训与提升。"
        />
        <Item
          index="02"
          title="寒暑假工安置"
          content="      为了在寒暑假期间给给在校大学生提供勤工俭学的岗位，我司自成立以来一直与各大用人企业保持深度合作的关系，并逐渐形成稳健的短期用功模式，即得益于勤工俭学也为解决了企业农忙及过年期间企业短暂性极度缺工的状态。<br/><br/>          十年来，我司深耕与全国各高校及大中专院校学生工市场，并在以河南为中心的山东，陕西，山西，河北，甘肃等省份学生工市场中占据举足轻重的地位。先后在全国各地设立分支机构以运营中心达二十多家。"
        />
        <Item
          index="03"
          title="农民工及社会工安置"
          content="           随着互联网的普及，电子设备快速进入寻常老百姓家并且更新换代周期加快。大量的电子设备制造对劳动力的需求格外旺盛，河南作为全国第一外出务工省份无疑很大程度解决了劳动密集型企业的用工难题。鉴于我司常年深耕河南市场并以郑州为中心，牢牢把控着新乡，安阳，开封，洛阳，驻马店等地区的劳务市场。"
        />
        <Item
          index="04"
          title="临时工及灵活用工"
          content="               近年来电商，物流业务迅速崛起，各电商平台阶段性促销以及每年购物节催生电商，物流领域对阶段行临时用工及不定期灵活用工需求暴增。对此我司与天猫，京东，四通一达长期保持紧密合作并逐渐形成稳定的临时用工和灵活用工模式。"
        />
        <Item
          index="05"
          title="劳务外包"
          content="                劳务外包服务即BPO，是一种新兴的企业用工模式。企业把生产流程中心的非核心部分的生产任务外包给企业的劳务外包公司来进行生产，是企业人力需求的一种发展趋势，从14年提出概念并逐步实践，目前已被越来越多的企业认可和接受。<br/><br/>      劳务外包项目作为众德集团众多项目的一部分，已发挥越来越重要的作用，并熟练运作。可顺利承担产线外包，技术制造外包等众多生产制造外包项目。有效解决了劳务密集行企业生产线人力，机械，管理等方面的后顾之忧，帮助企业降低用工成本，转移用工风险以更专注核心业务提升企业自身核心争取力。"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import YellowBg from "@/components/yellowbg.vue";
import Item from "./components/listitem.vue";
import Footer from "@/components/footer";

export default {
  data() {
    return {};
  },
  components: {
    YellowBg,
    Item,
    Footer
  },
  methods: {}
};
</script>

<style scoped>
.content {
  margin-top: 45px;
  width: 66%;
}
.content_wrapper {
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>