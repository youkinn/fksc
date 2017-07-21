
/**
 *
 *
 * @export 页面底部
 * @param {any} index 当前活动菜单
 * @param {string} [selector='.tm__layout-header'] 菜单插入的容器
 */
export function appendHeader(index = 0, selector = '.tm__layout-header') {
  const headerHtml = require('../html/header.html');
  const length = $(headerHtml).find('.menu-item').length;
  if (index + 1 > length) {
    throw new Error(`index > menu.length maxVlaue: ${index}`);
  }
  const html = $(headerHtml)
    .find('.current')
    .removeClass('current')
    .end()
    .find('.menu-item')
    .eq(index)
    .addClass('current')
    .end()
    .end();
  $(selector).html(html);
}

/**
 *
 *
 * @export 页面头部
 * @param {string} [selector='.tm__layout-footer'] 页面底部的容器
 */
export function appendFooter(selector = '.tm__layout-footer') {
  const footerHtml = require('../html/footer.html');
  $(selector).html(footerHtml);
}


/**
 *
 *
 * @export 下载盒子
 * @param {string} [selector='.tm__download-box'] 盒子容器
 */
export function appendDownload(selector = '.tm__download-box') {
  const downloadHtml = require('../html/download.html');
  $(selector).html(downloadHtml);
}
