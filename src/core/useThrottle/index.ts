import { ref } from 'vue'


function useThrottle (fn: Function, ms: number = 300) {
   // 上一次执行 fn 的时间
    const previous = ref(0)
    return function () {
       	// @ts-ignore
        const args = arguments
        // @ts-ignore
        const context = this
        const now = +new Date()
        if(now - previous.value > ms) {
            previous.value = now
            fn.apply(context, args)
        }
    }
}


const a = useThrottle(() => {
    console.log('a')
},3000)

setInterval(() => a(), 10)
export default useThrottle