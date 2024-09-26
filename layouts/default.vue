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
          src="../assets/images/dabscordicon.webp"
          alt="Monolith Loading Logo"
          height="100"
          width="100"
          class="loadingImage"
        />
      </div>
      <div class="contentWrapper">
        <div class="templateContentWrapper">
          <slot />
        </div>
      </div>
      <div class="footerWrapper">
        <div class="footerContent">
          <a class="footerA">{{ $t('imprint') }}</a>
          <a class="footerA">{{ $t('privacy') }}</a>
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

a {
  color: white;
  font-size: 0.9rem;
}

.footerA {
  cursor: pointer;
 margin: 2rem;
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
  height: 92.5svh;
  width: 100%;
  //background-color: green;
}

.footerWrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 7.5svh;
  //background-color: green;
}

.footerContent {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 43, 43, 0.356);
  width: 80%;
  height: 45%;
  max-height: 45px;
  border-radius: 200px;
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
