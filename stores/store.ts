export const useUserStore = defineStore ('user',{
    state: () => {
        return {
            isAgeVerified: false,
        }
    },
    actions: {
        setAgeVerification(value: boolean) {
            this.isAgeVerified = value
        }
    },
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
    }
})

if(import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

interface UserInfo {
    isAgeVerified: boolean
}