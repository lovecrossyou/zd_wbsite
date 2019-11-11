<template>
  <div>
    <div class="flex_row">
      <div class="index">{{index}}</div>
      <div class="title">{{title}}</div>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: ["index", "title", "content"]
};
</script>

<style scoped>
.flex_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
}

.index {
  padding: 4px 6px;
  box-sizing: border-box;
  font-weight: 500;
  color: #ffffff;
  background: #ffd570;
  line-height: 26px;
}

.title {
  background: #000000;
  color: #ffffff;
  padding: 5px;
  box-sizing: border-box;
}

.content {
  margin-top: 30px;
  font-weight: 400;
  color: #333333;
  font-size: 12px;
  margin-bottom: 45px;
}
</style>