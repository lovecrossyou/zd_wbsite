<template>
  <div>
    <section>
      <TabNav />
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import TabNav from "@/components/tabnav.vue";

export default {
    components:{
        TabNav
    }
};
</script>

<style lang="scss" scoped>
</style>