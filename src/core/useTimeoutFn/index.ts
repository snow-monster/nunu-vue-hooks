import { onMounted, onUnmounted, ref } from 'vue'
import type { Ref } from 'vue'
export type UseTimeoutFnReturn = [Ref<boolean>, () => void, () => void]
function useEffect (fn: Function) {
    /*
        类似 React useEffect
    */
    const callback = ref(null)
    onMounted(() => {
        callback.value = fn()
    })
    onUnmounted(() => {
        callback.value()
    })
} 
function useTimeoutFn (fn: Function, ms: number = 0): UseTimeoutFnReturn {
    const timeout = ref()
    const isReady = ref(false)
    const clear =() => {
        clearTimeout(timeout.value)
    }
    const set =() => {
        timeout.value = setTimeout(() => {
            fn()
            isReady.value = true
        }, ms)
    }
    onMounted(() => {
        set()
    })
    onUnmounted(() => {
        clear()
    })
    return [isReady, clear, set]
}

export default useTimeoutFn
