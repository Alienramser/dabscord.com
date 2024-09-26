<script setup lang="ts">

onMounted(() => {
  setTimeout(() => {
    document.getElementsByClassName('loadingWrapper')[0].classList.add('loaded')
    document.getElementsByClassName('contentWrapper')[0].classList.add('loaded')
    document.getElementsByClassName('loadingImage')[0].classList.add('loaded')
  }, 250)
})


</script>

<template>
  <v-app>
    <div class="templateWrapper">
      <div class="loadingWrapper">
        <img
          src="../assets/images/logoweb.webp"
          alt="Monolith Loading Logo"
          height="100"
          width="100"
          class="loadingImage"
        />
      </div>
      <div class="contentWrapper">
        <div class="homeFrontPageMonolithLogoWrapper">
        
          <img
            class="monolith_logo_header"
            height="100"
            widith="100"
            alt="monolith.codes logo"
            src="../assets/images/logoweb.webp"
          />
        </div>

        <div class="templateContentWrapper">
          <slot />
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped lang="scss">
@keyframes pulse {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

.loadingWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100svh;
  background-color: rgb(0, 0, 0);
  width: 100%;
  transition: opacity 0.5s ease;
  opacity: 100%;

  &.loaded {
    opacity: 0%;
    z-index: -1;
  }
}

.homeFrontPageMonolithLogoWrapper {
  height: 20vh;
  width: auto;
  position: fixed;
  z-index: 2;
  //background-color: rgba(255, 166, 0, 0.37);
}

.loadingImage {
  animation: pulse 1.5s infinite alternate;

  &.loaded {
    animation: none;
    opacity: 0;
  }
}

.contentWrapper {
  transition: ease-in-out 0.5s;
  opacity: 0%;

  &.loaded {
    opacity: 100%;
  }
}

.templateWrapper {
  display: flex;
  flex-direction: column;
}

.templateContentWrapper {
  position: relative;
  height: 100svh;
  width: 100%;
  //background-color: green;
}

.monolith_logo_header {
  position: absolute;
  height: 12vh;
  width: 12vh;
  top: 4vh;
  left: 2.5vh;
  display: flex;
  z-index: 2;
}
</style>
