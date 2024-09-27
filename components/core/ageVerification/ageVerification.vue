<template>
    <div class="ageVerificationWrapper">
        <div class="ageVerification">
            <div class="ageVerificationPopup">
                <div class="logoPopupWrapper">
                    <img class="logoPopup" alt="Dabscord Logo" draggable="false" height="256" width="256" src="~/assets/images/dabscordMed.webp"/>
                </div>
                <div v-if="!notOldEnough" class="ageQuestionWrapper" id="ageQuestionWrapper">
                    <h1 class="ageQuestion">{{ $t('ageQuestion') }}</h1>
                    <div class="ageQuestionButtons">
                        <button @click="verifyAge(true)" class="ageQuestionButton">{{ $t('yes') }}</button>
                        <button @click="verifyAge(false)" class="ageQuestionButton">{{ $t('no') }}</button>
                    </div>
                    <div class="ageLegalNoticeWrapper">
                        <h2 class="ageLegalNotice">{{ $t('ageLegalNotice1') }} <a href="google.com">{{ $t('ageLegalNotice2') }}</a> {{ $t('ageLegalNotice3') }}</h2>
                    </div>
                </div>

                <div v-if="notOldEnough" class="ageQuestionWrapper" id="ageQuestionWrapper">
                    <div class="ageLegalNoticeWrapper">
                        <h1 class="notoldEnoughH">{{ $t('notOE') }}</h1>
                        <h2 class="notoldEnough">{{  $t('notOEd') }}</h2>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '~/stores/store';

    const store = useUserStore();

    const oldEnough = ref(false)
    const notOldEnough = ref(false)

    function verifyAge(value: boolean) {
        
        store.setAgeVerification(value)
        oldEnough.value = store.isAgeVerified

        console.log("VERIFY AGE")
        console.log(value)

        if(value === false) {
            console.log("NEW MESSAGE")
            notOldEnough.value = true
        }

        
        console.log("STORE2")
        console.log(store.isAgeVerified)
    }

    function showDisclaimer() {
        const verifyPopup = document.getElementById("ageQuestionWrapper")

        if(verifyPopup) {
            verifyPopup.classList.add("")
        }

    }

    onMounted(() => {

        console.log("STORE")
        console.log(store.isAgeVerified)


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

.notoldEnough {
    padding-top: 1rem;
}

.ageVerificationWrapper {
    display: flex;
  
}

.ageVerification {
    margin: auto;
   
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
    opacity: 100%;
    transition: opacity 0.5s ease;

}

.ageQuestion {
    height: 100%;
    width: 100%,;
    font-size: 3rem;
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
    width: 80vw;
    max-width: 900px;
    max-height: 750px;
    //background-color: red;
    border: solid 5px #D2BC8D;
    border-radius: 20px;



    /*
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
        */
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

@media only screen and (max-height: 800px) and (orientation: portrait) {
  .ageQuestion {
    font-size: 2rem;
  }

  .ageLegalNotice {
    font-size: 0.75rem;
  }

  .ageQuestionButton {
    font-size: 1.2rem;
  }

  .notoldEnoughH {
    font-size: 2rem;
  }
}
</style>