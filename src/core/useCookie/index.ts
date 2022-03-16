
import { ref } from 'vue'
import Cookies from 'js-cookie'
function useCookie (cookieName: string) {
    const cookie = ref(Cookies.get(cookieName) || null)
    const updateCookie = (newValue: string) => {
        cookie.value = newValue
    }
    const deleteCookie = () => {
        Cookies.remove(cookieName)
        cookie.value = null
    }
    return [cookie, updateCookie, deleteCookie]
}
export default useCookie