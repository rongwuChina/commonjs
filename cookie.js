let cookie = {};

/**
 * 设置cookie缓存中的值
 * @param {*key=name保存到cookie中} name 
 * @param {*value=value 保存到cookie中} value 
 * @param {*设置name=value缓存的保存时间} expiresDay 
 */
cookie.set = (name, value, expiresDay) => {
  let expires = "";
  if (value === null) {
    value = '';
    expiresDay = -1;
  }
  if (typeof expiresDay === 'number') {
    let date = new Date();
    date.setTime(date.getTime() + (expiresDay * 24 * 60 * 60 * 1000));
    expires = `expires=${date.toUTCString()}`;
  }
  name = `${name}=${encodeURIComponent(value)}`;
  document.cookie = [name, expires].join(';');
}


/**
 * 获取cookie缓存中的值
 * @param {* 获取cookie中的key=name的缓存值} name 
 */
cookie.get = name => {
  const store = document.cookie;
  if (store && store !== '') {
    let keyValue = {};
    store.split(';').map((item) => {
      const keyData = item.split('=');
      keyValue[keyData[0].replace(/\s/ig, '')] = decodeURIComponent(keyData[1]);
    })
    return keyValue[name];
  }
  return undefined;
}
/**
 * @param {*删除cookie缓存中的key=name的值} name 
 */
cookie.del = name => {
  cookie.set(name, null);
}

export default cookie;
