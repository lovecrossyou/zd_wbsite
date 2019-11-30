<template>
  <div class="flex_row">
    <div class="divider"></div>
    <div class="left">
      <div class="time_day">10/11</div>
      <div class="time_year">2019</div>
    </div>
    <div class="right">
      <div class="title">深圳富士康年后不限年龄</div>
      <div
        class="content"
      >坐班普通工衣，工时280以上，住宿条件好！ 十年来，我司深耕与全国各高校及大中专院校学生工市场，并在以河南为中心的山东，陕西，山西，河北，甘肃等省份学生工市场中占据举足轻重的地位。先后在全国各地设立分支机构以运营中心达二十多家。</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px #e1e1e1;
  margin-top: 20px;
  padding: 20px 10px;
  box-shadow: 0px 1px 10px 0px rgba(46, 91, 255, 0.23);
}

.title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}

.content {
  color: #666666;
  font-size: 10px;
  margin-top: 10px;
}

.right {
  padding: 10px 30px;
  box-sizing: border-box;
}
.divider {
  width: 2px;
  height: 22px;
  background: rgba(220, 220, 220, 1);
  position: relative;
  left: 58px;
}

.left {
  width: 60px;
}
.time_day {
  font-size: 14px;
  font-family: DIN-Medium, DIN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}

.time_year {
  font-size: 9px;
  font-family: DIN-Medium, DIN;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 11px;
  margin-top: 8px;
}
</style>