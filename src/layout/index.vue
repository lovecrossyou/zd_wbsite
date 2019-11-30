<template>
  <section>
    <el-container>
      <el-header>
        <TabNav />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </section>
</template>

<script>
import TabNav from "@/components/tabnav.vue";
import Footer from "@/components/footer";

export default {
  components: {
    TabNav,
    Footer
  }
};
</script>

<style>
.el-footer {
  background-color: #000000 !important;
  padding: 0px !important;
}

.el-header {
  background-color: #000000 !important;
  padding: 0px !important;
}
</style>