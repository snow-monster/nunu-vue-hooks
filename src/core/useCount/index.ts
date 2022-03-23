import { MaybeRef } from './../../shared/types'
import { unref, computed } from 'vue'

function useCount (a: MaybeRef<number>, b: MaybeRef<number>) {
    return computed(()=> unref(a) + unref(b))
}
export default useCount