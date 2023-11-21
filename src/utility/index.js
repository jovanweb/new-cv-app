export const debounce = (func, waitTime) => {
    let timeout

    return (...args) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        if (!timeout) {
            func(...args)
        }

        timeout = setTimeout(() => {
            timeout = null
        }, waitTime)
    }
}
