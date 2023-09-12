
<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script>
  import { RouterView } from 'vue-router'
  export default {
      name: "App",
      components: {
        RouterView,
      }
  }
</script> 

<style scoped>

</style>
