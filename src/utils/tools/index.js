
/**
 * 从 URL 中获取指定参数的值或所有参数
 * @param {string|null} parameter 参数名（可选）。如果为 null，则返回包含所有参数的对象
 * @returns {string|null|Object} 如果指定了参数名，则返回该参数的值；如果未指定参数名但存在参数，则返回包含所有参数的对象；如果不存在参数，则返回 null
 */
export function getUrlParameter(parameter = null) {
    // 清除上一次的本地存储参数
    localStorage.removeItem('urlParameters'); // 清除存储的 URL 参数

    const url = window.location.href;

    const mainQueryIndex = url.indexOf('?');
    const hashIndex = url.indexOf('#');

    const mainQuery = mainQueryIndex !== -1
        ? url.substring(mainQueryIndex + 1, hashIndex !== -1 ? hashIndex : undefined)
        : '';
    const hashQuery = hashIndex !== -1
        ? url.substring(hashIndex + 1).split('?')[1]
        : '';
    const urlParams = new URLSearchParams(`${mainQuery}&${hashQuery}`);
    // 如果需要返回所有参数
    if (parameter === null && urlParams.toString() !== '') {
        const paramsObj = Array.from(urlParams.entries()).reduce((paramsObj, [key, value]) => {
            paramsObj[key] = decodeURIComponent(value);
            return paramsObj;
        }, {});

        // 保存当前参数到 localStorage
        localStorage.setItem('urlParameters', JSON.stringify(paramsObj));
        return paramsObj;
    }

    // 如果需要返回指定的参数
    if (parameter !== null) {
        const paramValue = urlParams.get(parameter);
        return paramValue ? decodeURIComponent(paramValue) : null;
    }

    return null;
}
