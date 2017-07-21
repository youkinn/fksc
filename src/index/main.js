import '../common/css/reset.css';
import '../common/css/site.css';
import '../common/css/util.css';
import './style.css';
import { appendHeader, appendFooter, appendDownload } from '../common/js/layout';
import { dateFormat } from '../common/js/utils';

if (ENV === 'DEV') {
  require('../../pages/html/index.html');
}

appendHeader(0);
appendFooter();
appendDownload();

// post请求
// const getNewsList = type => $.ajax({ url: `http://interface.lly800.com/News/Index/get_news_list?page=1&limit=6&nologin=1&type=${type}` });

$(() => {
  // 轮播模块初始化
  const s = new Swiper('.swiper-container', {
    loop: true,
    autoplay: 5000,
    pagination: '.pagination',
    paginationElementClass: 'my-switch',
    paginationActiveClass: 'my-active-switch',
  });
  console.log(s);

  // 新闻资讯模块点击事件处理
  $('.news__tab .news__tab-item').bind('click', (e) => {
    // 目标标签添加选中效果（tab）
    const $target = $(e.target);
    $('.news__tab .active').removeClass('active');
    $target.addClass('active');

    // 显示标签对应内容（tab-content）
    const index = $target.index();
    $('.news__tab-content .news__tab-contentitem')
      .hide()
      .eq(index)
      .show();

    // 点击加载数据
    const inited = $target.attr('data-inited');
    if (inited) {
      return;
    }
    // 数据处理
    const type = $target.attr('data-type');
    $.when($.ajax({ url: `http://pre-interface.lly800.com/News/Index/get_news_list?page=1&limit=6&nologin=1&type=${type}` })).then((res) => {
      $target.attr('data-inited', 1);
      let html = '';
      const list = res.result;
      for (let i = 0, j = list.length; i < j; i += 1) {
        const item = list[i];
        if (i === 0) {
          html += `<a href="carNewDetail.html?id=${item.id}">`;
          html += `<div class="hot overflow-ellipsis">${item.title}</div>`;
          html += '</a>';
          html += '<ul class="news__list">';
        }
        html += `<a href="carNewDetail.html?id=${item.id}">`;
        html += '<li class="news__item">';
        html += `<div class="news__title overflow-ellipsis fl">${item.title}</div>`;
        html += `<div class="news__publish-time fr">${dateFormat(item.publishTime, 'MM-dd')}</div>`;
        html += '</li>';
        html += '</a>';
        if (i === list.length - 1) {
          html += '</ul>';
        }
      }
      $('.news__tab-content .news__tab-contentitem').eq(index).html(html);
    });
  });
  $('.news__tab .news__tab-item.active').trigger('click');
});
