<template>
  <div class="center">
    <div v-if="white" class="title white_title">{{title}}</div>
    <div v-else class="title">{{title}}</div>
    <div class="english">{{desc}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "white"]
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.white_title {
  color: #ffffff !important;
}
.title {
  width: 92px;
  height: 33px;
  font-size: 23px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 33px;
}

.english {
  height: 19px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 213, 112, 1);
  line-height: 19px;
}
</style>