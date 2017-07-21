export const interfaceApi = 'http://api.mall.com/'; // 接口API地址
export const regs = {
  // 常用正则
  mobile: /^1\d{10}$/, // 手机正则
};

/**
 * 获取屏幕宽度
 *
 * @export
 * @returns
 */
export function screenWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

/**
 * 获取屏幕高度
 *
 * @export
 * @returns
 */
export function screenHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

// 客户端检测
/**
 * 浏览器关键字检测
 *
 * @export
 * @param {string} ua 浏览器的userAgent字符串
 * @param {string} needle 探针（关键词）
 * @returns
 */
function deviceDetect(ua, needle) {
  return ua.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
}
/**
 * 浏览器版本检测
 *
 * @export
 * @param {string} nece 浏览器版本字符串
 * @returns
 */
function getVersion(nece) {
  return parseFloat(nece.split('.').slice(0, 2).join('.'));
}

/**
 * 浏览器检测
 *
 * @export
 * @returns
 */
export function device() {
  const ua = navigator.userAgent.toLowerCase(); // 浏览器的userAgent
  const isWindows = /windows/.test(ua); // 判断是否为微软系统
  const isIOS = deviceDetect(ua, 'iPhone') || deviceDetect(ua, 'iPad') || deviceDetect(ua, 'iPod'); // 判断是否为iphone手机
  const isAndroid = deviceDetect(ua, 'Android'); // 判断是否为安卓手机
  const isUCBrowser = deviceDetect(ua, 'UCBrowser'); // 判断是否为UC浏览器
  const isQQBrowser = deviceDetect(ua, 'MQQBrowser'); // 判断是否为QQ浏览器
  const isSafari = /.*version\/([\w.]+).*(safari).*/.test(ua); // 判断是否为safari浏览器
  const isWeixin = deviceDetect(ua, 'MicroMessenger'); // 判断是否为微信浏览器
  const qqBrowserVersion = isQQBrowser ? getVersion(ua.split('mqqbrowser/')[1]) : 0; // 获取qq浏览器版本
  const ucBrowserVersion = isUCBrowser ? getVersion(ua.split('ucbrowser/')[1]) : 0; // 获取uc浏览器版本
  const iosVersion = isIOS ? parseInt(ua.match(/\s*os\s*\d/gi)[0].split(' ')[2], 10) : 0; // 获取ios版本
  return {
    isWindows,
    isIOS,
    isAndroid,
    isUCBrowser,
    isQQBrowser,
    isSafari,
    isWeixin,
    qqBrowserVersion,
    ucBrowserVersion,
    iosVersion,
  };
}

/**
 * 时间格式化
 *
 * @export
 * @param {number} [timestamp=Date.now()] 时间戳
 * @param {string} [fmt='yyyy-MM-dd'] 时间的格式
 * @returns
 * 调用：
 * var time1 = dateFormat(+new Date(),“yyyy-MM-dd”);
 * var time2 = dateFormat( 1499399860611 ,“yyyy-MM-dd HH:mm:ss”);
 */
export function dateFormat(timestamp = Date.now(), fmt = 'yyyy-MM-dd') {
  const d = new Date(timestamp);
  let fmtStr = fmt;
  const o = {
    'M+': d.getMonth() + 1, // 月份
    'd+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    S: d.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmtStr)) {
    fmtStr = fmtStr.replace(RegExp.$1, `${d.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmtStr)) {
      fmtStr = fmtStr.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      );
    }
  });
  return fmtStr;
}
