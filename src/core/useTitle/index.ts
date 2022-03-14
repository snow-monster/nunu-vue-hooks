import { watch, onUnmounted } from 'vue'
import { isString } from '../../shared/is'
import { MaybeRef } from '../../shared/types'
// const title = useTitle() // 组件内获取title
// useTitle(string)//设置title
// useTitle(Ref<string>) //  动态的响应式title
export interface UseTitleOptions {
  	restoreOnUnmount?: boolean
}

function useTitle(title?: MaybeRef<string>, options?: UseTitleOptions) {
	const prevTitle= document.title
	if(arguments.length === 0) {
		return prevTitle
	}
	if(isString(title)) {
		if (document.title !== title) document.title = title
		return
	}
	document.title = title.value
	watch(title, (val) => {
		if (document.title !== val)  document.title = val
	})
	onUnmounted(() => {
		if(options && options.restoreOnUnmount) {
			document.title = prevTitle
		}
	})
}

export default useTitle