<template>
    <div class="ageVerificationWrapper">
        <div class="ageVerificationPopup">

            <div class="logoPopupWrapper">
                <img class="logoPopup" alt="Dabscord Logo" draggable="false" height="256" width="256" src="~/assets/images/dabscordMed.webp"/>
            </div>


            <div v-if="notOldEnough != true" class="ageQuestionWrapper" id="ageQuestionWrapper">
                <h1 class="ageQuestion">{{ $t('ageQuestion') }}</h1>
                <div class="ageQuestionButtons">
                    <button @click="verifyAge(true)" class="ageQuestionButton">{{ $t('yes') }}</button>
                    <button @click="verifyAge(false)" class="ageQuestionButton">{{ $t('no') }}</button>
                </div>
                <div class="ageLegalNoticeWrapper">
                    <h2 class="ageLegalNotice">{{ $t('ageLegalNotice1') }} <a href="google.com">{{ $t('ageLegalNotice2') }}</a> {{ $t('ageLegalNotice3') }}</h2>
                </div>
            </div>

            <div v-if="notOldEnough === true" class="ageQuestionWrapper" id="ageQuestionWrapper">
                <div class="ageLegalNoticeWrapper">
                    <h1>NOT OLD ENOUGH</h1>
                </div>
            </div>

            
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '~/stores/store';

    //const store = useUserStore();

    const notOldEnough = ref(false)

    function verifyAge(value: boolean) {
        
        if(value === true){
            localStorage.setItem('isVerified', "true")
            console.log(localStorage.getItem('isVerified'))
        }else{
            localStorage.setItem('isVerified', "false")
            console.log("load Page")
            notOldEnough.value = true;
        }
    }

    function showDisclaimer() {
        const verifyPopup = document.getElementById("ageQuestionWrapper")

        if(verifyPopup) {
            verifyPopup.classList.add("")
        }

    }

    onMounted(() => {
        /*
        console.log("STORE")
        const isAgeverified2 = store.isAgeVerified
        console.log(isAgeverified2)

        store.setAgeVerification(true)

        const isAgeverified3 = store.isAgeVerified
        console.log(isAgeverified3)
    */
    })

</script>

<style lang="scss">

h1 {
    font-size: 3rem;
    color: #D2BC8D;
    margin: 0;

}

a {
    margin: 0;
    text-decoration: underline;
    font-weight: 500;
}

.logoPopupWrapper {
    display: flex;
    justify-content: center;
    height: 17.5vh;
    width: 100%;
    //background-color: green;
}

.ageVerificationWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    display: flex;
    position: fixed;
    height: 100svh;
    width: 100svw;
    opacity: 100%;
}

.ageQuestionWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 2vh;
    text-align: center;
    width: 90%;
    opacity: 100%;
    transition: opacity 0.5s ease;
    
    &.unloaded {
    opacity: 0%;
    z-index: -1;
  }
}

.ageQuestionDisclaimerWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 2vh;
    text-align: center;
    width: 90%;
    opacity: 0%;
    transition: opacity 0.5s ease;
    
    &.loaded {
    opacity: 100%;
    z-index: -1;
  }
}

.ageQuestion {
    height: 100%;
    width: 100%,;
}

.ageQuestionButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    height: 12.5vh;
    width: 80%;
    //background-color: orange;
}

.ageQuestionButton {
    background-color: #D2BC8D;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    width: 22.5vw;
    max-width: 200px;
    height: 50%;
    border-radius: 15px;

}

.ageVerificationPopup {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 80%;
    max-width: 900px;
    max-height: 750px;
    //background-color: red;
    border: solid 5px #D2BC8D;
    border-radius: 20px;


    .enter-from {
        transform: translateY(20vh);
        opacity: 0%;
    }

    .enter-to {
        transform: translateY(0vh);
        opacity: 100%;
    }

    .enter-active {
        transition: all 2s ease;
    }
}

.ageLegalNoticeWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-height: 12.5vh;
    width: 75%;
    max-width: 500px;
    color: #D2BC8D;
    margin-bottom: 1rem;
   // background-color: pink;
}

.logoPopup {
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
}

.ageLegalNotice {
    //background-color: orange;
}
</style>