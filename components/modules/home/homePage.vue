<template>
  <div class="homePageWrapper">
    <div class="homePageAnimationWrapper">
      <img class="homePageAnimation" src="~/assets/images/dabscordBig.webp"/>
    </div>
    <div class="homePageInviteWrapper">
      <iframe class="homePageInvite" src="https://discord.com/widget?id=1141415565366403172&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
    <!--iframe src="https://discord.com/widget?id=1141415565366403172&theme=dark" width="400" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe-->
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
  height: 100%;
  width: 100%;
  overflow: hidden !important;
}
.homePageAnimationWrapper {
  height: 40%;
}
.homePageAnimation {
  height: 100%;
}
.homePageInviteWrapper{
  display: flex;
  justify-content: center;
  align-content: centers;
  height: 60%;
  width: 100%;
  //background-color: orange;
}
.homePageInvite {
  height: 95%;
  width: 75%;
}
</style>
