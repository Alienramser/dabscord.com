<template>
  <div class="homePageWrapper">
    
  </div>
</template>

<script lang="ts">
export async function loadHomepage() {
  console.log('MUUULM')
  //await loadSlide1()
  console.log('MUUULM2')
}
</script>

<script setup lang="ts">

onMounted(() => {
  console.log('START ANIMATION')

})
</script>

<style lang="scss">
.homePageWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: red;
  width: 100%;
  overflow: hidden !important;
}
</style>
