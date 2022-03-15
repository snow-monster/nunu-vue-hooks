import { reactive, onMounted, onUnmounted } from 'vue'
function useWindowSize() {
    const state = reactive({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const handler =() => {
        state.width = window.innerWidth
        state.height = window.innerHeight
    }
    onMounted(() => {
        window.addEventListener('resize', handler)
        // on(window, 'resize', handler) 此处应该统一事件监听
    })
    onUnmounted(() => {
        window.removeEventListener('resize', handler)
        //off(window, 'resize', handler) 此处应该统一事件监听
    })
    return state
}

export default useWindowSize