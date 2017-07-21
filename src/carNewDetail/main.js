import '../common/css/reset.css';
import '../common/css/site.css';
import '../common/css/util.css';
import './style.css';
import { appendHeader, appendFooter } from '../common/js/layout';

if (ENV === 'DEV') {
  require('../../pages/html/carNewDetail.html');
}
appendHeader(3);
appendFooter();
$.when($.ajax({ url: `http://pre-interface.lly800.com/News/Index/get_news_info?newsID=${window.location.search.split('?id=')[1]}&nologin=1` })).then((re) => {
  $('.contentDetail-new_reltitle_name').append(re.result.title);
  const content = `<p>发布人：</p><p style='margin-right:10px'>${re.result.author}</p><p>发布时间</p><p style='margin:5px'>:</p><p style='margin-right:20px'>${re.result.publishTime}</p><p>分享：</p><img style='margin:5px' class="weibo" src="./static/images/carNew/weibo.png" alt=""><img style='margin:5px' class="qq" src="./static/images/carNew/qq.png" alt=""><img style='margin:5px' class="weixin" src="./static/images/carNew/weixin.png" alt="">`;
  $('.contentDetail-new_reltitle_info').append(content);
  $('.contentDetail-new_content').append(re.result.content);
  console.log(re);
});
