import { reactive, onMounted, onUnmounted } from 'vue'
function useWindowScroll () {
    const state = reactive({
        x: window.pageXOffset,
        y: window.pageYOffset
    })
    const hanlder = () => {
        const { pageXOffset, pageYOffset } = window

    }
    onMounted(() => {
        window.addEventListener('scroll', hanlder, {
            capture: false,
            passive: true,
        })
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', hanlder)
    })
    return state
}
export default useWindowScroll