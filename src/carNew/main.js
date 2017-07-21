import '../common/css/reset.css';
import '../common/css/util.css';
import '../common/css/site.css';
import './style.css';
import { appendHeader, appendFooter, appendDownload } from '../common/js/layout';
import { dateFormat } from '../common/js/utils';

if (ENV === 'DEV') {
  require('../../pages/html/carNew.html');
}

appendHeader(3);
appendFooter();
appendDownload();

// 第几页
let page = 1;
// 资讯类型
let title = 'news';
const result = {
  code: 10000,
  result: {
    colligate: [],
    news: [],
    announcement: [],
    activity: [],
    strategy: [],
  },
};
let res = result;
// 更换数据
function relace(data) {
  $('.content-New').empty();
  if (res.result[data].length) {
    for (let i = (15 * page) - 15; i < 15 * page; i += 1) {
      if (i < res.result[data].length) {
        const p1 = `<a class="content-New_wrap" href="./carNewDetail.html?id=${res.result[data][i].id}"><p class="content-New_dot">·</p><p class="content-New_type">[新闻]</p><p>${res.result[data][i].title}</p><p class="content-New_date">${dateFormat(res.result[data][i].date, 'MM-dd')}</p></a>`;
        $('.content-New').append(p1);
      }
    }
  }
}

function numbtn() {
  const oa = ['<a href="##" class="Numone">1</a>', '<a style="background:#848bab" href="##" class="Numone">1</a>', '<a href="##" class="Numtwo">2</a>', '<a href="##" class="Numthree">3</a>', '<a href="##" class="Numfour">4</a>', '<a href="##" class="Numfive">5</a>'];
  const olast = '<a href="##" class="content-paging-last">上一页</a>';
  $('.content-paging').append(olast);
  for (let i = 1; i <= (res.result[title].length / 15) + 1; i += 1) {
    if (i < 6) {
      $('.content-paging').append(oa[i]);
    }
  }
  const onext = '<a href="##" class="content-paging-next">下一页</a>';
  $('.content-paging').append(onext);
}

relace(title);
numbtn();

// 上一页下一页变换
const callback = function callback(i) {
  page += i;
  if (page < 1) {
    page = 1;
  } else if (page >= (res.result[title].length / 15) + 1) {
    page = Math.floor(res.result[title].length / 15) + 1;
  }
  relace(title);
  $('.content-paging a').css('background', '#3a3f53');
  document.querySelector('.content-paging').querySelectorAll('a')[page].style.background = '#848bab';
};

// 页码变换
const selector = function selector(data) {
  $('.content-paging a').css('background', '#3a3f53');
  page = Number($(data).text());
  console.log(data);
  $(data).css('background', '#848bab');
  relace(title);
  console.log(data);
};

// 标题样式变换数据变换
$('.colligate img').css('display', 'block');
const clik = function clik(data) {
  title = data;
  $('.content-title').find('img').css('display', 'none');
  $(`.${data} img`).css('display', 'block');
  relace(data);
};


$('.content-paging-last').click(() => callback(-1));
$('.content-paging-next').click(() => callback(1));
$('.Numone').click(() => selector('.Numone'));
$('.Numtwo').click(() => selector('.Numtwo'));
$('.Numthree').click(() => selector('.Numthree'));
$('.Numfour').click(() => selector('.Numfour'));
$('.Numfive').click(() => selector('.Numfive'));

$('.colligate').click(() => clik('colligate'));
$('.news').click(() => clik('news'));
$('.announcement').click(() => clik('announcement'));
$('.activity').click(() => clik('activity'));
$('.strategy').click(() => clik('strategy'));

$.when($.ajax({ url: 'http://pre-interface.lly800.com/News/Index/get_news_list?type=3&nologin=1' })).then((re) => {
  console.log(re.result);
  for (let i = 0; i < re.result.length; i += 1) {
    const date = { title: '', id: '', date: '' };
    date.title = re.result[i].title;
    date.id = re.result[i].id;
    date.date = re.result[i].publishTime;
    const type = Number(re.result[i].showType);
    if (type === 4) {
      result.result.news.push(date);
    } else if (type === 5) {
      result.result.announcement.push(date);
    } else if (type === 6) {
      result.result.activity.push(date);
    } else if (type === 7) {
      result.result.strategy.push(date);
    }
    if (type === 4 || type === 5 || type === 6 || type === 7) {
      result.result.colligate.push(date);
    }
  }
  console.log(result);
  res = result;
  relace('colligate');
});
