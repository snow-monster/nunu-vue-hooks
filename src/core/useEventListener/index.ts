import { onMounted, onUnmounted } from 'vue'
const defaultTarget = window || null
function useEventListener (event: string, listener: EventListenerOrEventListenerObject, target = defaultTarget) {
    onMounted(() => {
        target.addEventListener(event, listener)
    })
    onUnmounted(() => {
        target.removeEventListener(event, listener)
    })
}
export default useEventListener