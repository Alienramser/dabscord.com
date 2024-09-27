<script setup lang="ts">
import ageVerifaction from "~/components/core/ageVerification/ageVerification.vue"
import { useUserStore } from '~/stores/store';
import {ref} from "vue"

const store = useUserStore();

const isAgeVerifiedR = computed(() => store.isAgeVerified)

const isContentLoaded = ref(false)

onMounted(() => {
  console.log("MOUNTED")

  console.log(isAgeVerifiedR.value)

  isContentLoaded.value = true
})


</script>

<template>
    <div class="templateWrapper">
            
      <div v-if="!isContentLoaded" class="loadingWrapper">
        <img
          src="../assets/images/dabscordicon.webp"
          alt="Monolith Loading Logo"
          height="100"
          width="100"
          class="loadingImage"
        />
      </div>
      
      <ageVerifaction class="ageVerification" v-if="!isAgeVerifiedR"/>

      
      <div v-if="isAgeVerifiedR" class="contentWrapper">
        <div class="templateContentWrapper">
          <slot />
        </div>
        <div class="footerWrapper">
          <div class="footerContent">
            <a class="footerA">{{ $t('imprint') }}</a>
            <a class="footerA">{{ $t('privacy') }}</a>
          </div>
        </div>
      </div>
    </div>
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

.ageVerification {
  height: 100svh;
  width: 100svw;
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
  z-index: 200;


}

.loadingImage {
  animation: pulse 1.5s infinite alternate;

}

.contentWrapper {
  transition: ease-in-out 0.5s;
  opacity: 100%;


}

.templateWrapper {
  display: flex;
  position: relative;

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
