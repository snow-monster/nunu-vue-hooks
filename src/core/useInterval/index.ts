import { ref, onMounted, onUnmounted } from 'vue'

function useInterval (callback: Function, delay?: number) {
    const interval = ref()
    onMounted(() => {
        interval.value = setInterval(() => callback(), delay || 0)
    })
    onUnmounted(() => {
        clearInterval(interval.value)
    })
}

export default useInterval
