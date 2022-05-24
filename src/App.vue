<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script> 
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Layout: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/layout/Layout.vue")),
  }
}
</script>

<style>

</style>