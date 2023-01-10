
/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function localGet(key: string) {
	const value = window.localStorage.getItem(key);
	try {
		return JSON.parse(window.localStorage.getItem(key) as string);
	} catch (error) {
		return value;
	}
}


/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export function localSet(key: string, value: any) {
	window.localStorage.setItem(key, JSON.stringify(value));
}


/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export function localRemove(key: string) {
	window.localStorage.removeItem(key);
}


/**
 * @description 清除所有localStorage
 * @return void
 */
export function localClear() {
	window.localStorage.clear();
}


/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function sessionGet(key: string) {
	const value = window.sessionStorage.getItem(key);
	try {
		return JSON.parse(window.sessionStorage.getItem(key) as string);
	} catch (error) {
		return value;
	}
}


/**
 * @description 存储sessionStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export function sessionSet(key: string, value: any) {
	window.sessionStorage.setItem(key, JSON.stringify(value));
}


/**
 * @description 清除sessionStorage
 * @param {String} key Storage名称
 * @return void
 */
export function seesionRemove(key: string) {
	window.sessionStorage.removeItem(key);
}

/**
 * @description 清除所有sessionStorage
 * @return void
 */
export function seesionClear() {
	window.sessionStorage.clear();
}


