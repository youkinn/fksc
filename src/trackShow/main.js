import '../common/css/reset.css';
import '../common/css/site.css';
import '../common/css/util.css';
import './style.css';
import { appendHeader, appendFooter } from '../common/js/layout';

if (ENV === 'DEV') {
  require('../../pages/html/trackShow.html');
}

appendHeader(2);
appendFooter();

console.log($);
// 要分页
const message = {
  page1: [
    {
      name: '城堡',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '帝国',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '南极',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '北极',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '背景',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '杭州',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '天津',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '香港',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '义务',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '信阳',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '南通',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '绍兴',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '温州',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '东京',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '西晋',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '天下',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
  ],
  page2: [
    {
      name: '马鞍三',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '谢谢姐姐',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '安庆',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '大庆',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '呼和浩特',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '拉萨',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '印度',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '爱尔兰',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '俄罗斯',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '满洲',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '日本',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
    {
      name: '美国',
      img: '/static/images/trackShow/track_demo.png',
      des: '电视剧是对方的解放军的身份及登记，收到回复第三方士大夫的发挥好久好久都十分罕见的是否还记得是否合法。',
    },
  ],
};
console.log(message);
/* eslint-disable */
$(() => {
  function space(imgList) {
    for(var i=0 ; i < imgList.length ; i++) {
      if ((i + 1) % 4 === 0) {
        $(imgList[i]).css({ 'margin-right': '0' });
      }
    }
  }
  //关闭按钮
  $('.mask-close').click( () => {
    $('.mask').hide();
    $('.show-mask').hide();
  })
  //添加赛道,
  function addTrack(message) {
    const parent = $('.track');
    console.log(parent);
    var html = '';
    for(var i=0 ; i < message.length ; i++) {
      html += '<div data-des='+ message[i].des + ' class="track-list">' +
        '<img src=' + message[i].img  + '>' +
          '<div class="track-list-name">' +
              '赛道展示-' + message[i].name +
          '</div>' +
        '</div>'
    }
    parent.append(html);
  }
  // 默认展示第一页内容
  addTrack(message.page1);
  space($('.track-list'));

  // 添加事件
  $('.content-paging').on('click', 'a', function() {
    console.log($(this).index());
    if ($(this).index() ===1 || $(this).index() ===2){
      $(this).addClass('active').siblings().removeClass('active');
      $('.track-list').remove();
      addTrack(message['page' + $(this).index()]);
      space($('.track-list'));
    }
  });
  //展示每个赛道的详情
  $('.track').on('click', '.track-list', function (e) {
    $('.mask-img').children().attr('src',$(this).find('img').attr('src'));
    $('.mask-name').html($(this).find('.track-list-name').html());
    $('.mask-des').html($(this).data('des'));
    $('.mask').show();
    $('.show-mask').show();
  })
});
