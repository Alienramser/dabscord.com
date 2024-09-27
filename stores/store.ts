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
})

if(import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

interface UserInfo {
    isAgeVerified: boolean
}