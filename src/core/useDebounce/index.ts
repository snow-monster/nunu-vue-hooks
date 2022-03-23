import { ref, onMounted, onUnmounted } from 'vue'

// const de = useDebounce(fn ,1000)
function useDebounce (fn: Function, ms: number = 300) {
    const timeout = ref()
    const isReady = ref(false)
    const cancel =() => {
        clearTimeout(timeout.value)
    }
    const reset =() => {
        timeout.value = setTimeout(() => {
            fn()
            isReady.value = true
        }, ms)
    }
    onMounted(() => {
        reset()
    })
    onUnmounted(() => {
        cancel()
    })
    return [isReady, cancel, reset]
}
export default useDebounce