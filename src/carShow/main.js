import '../common/css/reset.css';
import '../common/css/site.css';
import '../common/css/util.css';
import './style.css';
import { appendHeader, appendFooter } from '../common/js/layout';

if (ENV === 'DEV') {
  require('../../pages/html/carShow.html');
}
appendHeader(1);
appendFooter();

// 脚本

window.onload = function onload() {
  // 更改车辆信息，接受参数为车辆信息的对象，内部先获取元素，方法来替换内容
  const message = [{
    name: '奔驰',
    des: '描述',
    port: [
      { name: '操控',
        count: 5,
        total: 10,
      },
      { name: '力量',
        count: 6,
        total: 10,
      },
      { name: '极速',
        count: 4,
        total: 10,
      },
      { name: '加速',
        count: 8,
        total: 10,
      },
      { name: '氮气',
        count: 10,
        total: 10,
      },
    ],
    img: '/static/images/carShow/1.jpg',
    red: [
      { red: '/static/images/carShow/1.jpg' },
      { white: '/static/images/carShow/2.jpg' },
      { blue: '/static/images/carShow/3.jpg' },
      { pink: '/static/images/carShow/4.jpg' },
      { green: '/static/images/carShow/5.jpg' },
      { red: '/static/images/carShow/6.jpg' },
    ],
  }, {
    name: '宝马',
    des: '描述',
    port: [
      { name: '操控',
        count: 5,
        total: 10,
      },
      { name: '力量',
        count: 5,
        total: 10,
      },
      { name: '极速',
        count: 5,
        total: 10,
      },
      { name: '加速',
        count: 5,
        total: 10,
      },
      { name: '氮气',
        count: 5,
        total: 10,
      },
    ],
    img: '/static/images/carShow/2.jpg',
    red: [
      { red: '/static/images/carShow/1.jpg' },
      { white: '/static/images/carShow/2.jpg' },
      { blue: '/static/images/carShow/3.jpg' },
      { pink: '/static/images/carShow/4.jpg' },
      { green: '/static/images/carShow/5.jpg' },
      { red: '/static/images/carShow/6.jpg' },
    ],
  }, {
    name: '大众',
    des: '描述',
    port: [
      { name: '操控',
        count: 4,
        total: 10,
      },
      { name: '力量',
        count: 4,
        total: 10,
      },
      { name: '极速',
        count: 4,
        total: 10,
      },
      { name: '加速',
        count: 4,
        total: 10,
      },
      { name: '氮气',
        count: 4,
        total: 10,
      },
    ],
    img: '/static/images/carShow/3.jpg',
    red: [
      { red: '/static/images/carShow/1.jpg' },
      { white: '/static/images/carShow/2.jpg' },
      { blue: '/static/images/carShow/3.jpg' },
      { pink: '/static/images/carShow/4.jpg' },
      { green: '/static/images/carShow/5.jpg' },
      { red: '/static/images/carShow/6.jpg' },
    ],
  }, {
    name: '雅加达',
    des: '描述',
    port: [
      { name: '操控',
        count: 8,
        total: 10,
      },
      { name: '力量',
        count: 8,
        total: 10,
      },
      { name: '极速',
        count: 8,
        total: 10,
      },
      { name: '加速',
        count: 8,
        total: 10,
      },
      { name: '氮气',
        count: 8,
        total: 10,
      },
    ],
    img: '/static/images/carShow/4.jpg',
    red: [
      { red: '/static/images/carShow/1.jpg' },
      { white: '/static/images/carShow/2.jpg' },
      { blue: '/static/images/carShow/3.jpg' },
      { pink: '/static/images/carShow/4.jpg' },
      { green: '/static/images/carShow/5.jpg' },
      { red: '/static/images/carShow/6.jpg' },
    ],
  }, {
    name: '卡迪拉克',
    des: '描述',
    port: [
      { name: '操控',
        count: 10,
        total: 10,
      },
      { name: '力量',
        count: 10,
        total: 10,
      },
      { name: '极速',
        count: 10,
        total: 10,
      },
      { name: '加速',
        count: 10,
        total: 10,
      },
      { name: '氮气',
        count: 10,
        total: 10,
      },
    ],
    img: '/static/images/carShow/5.jpg',
    red: [
      { red: '/static/images/carShow/1.jpg' },
      { white: '/static/images/carShow/2.jpg' },
      { blue: '/static/images/carShow/3.jpg' },
      { pink: '/static/images/carShow/4.jpg' },
      { green: '/static/images/carShow/5.jpg' },
      { red: '/static/images/carShow/6.jpg' },
    ],
  }];
  console.log(message);
  /* eslint-disable */
  function setMessage(message) {
    $('.title-last').html(message.name);
    $('.car-two').html(message.name);
    $('.car-des').html(message.des);
    $('.car-img').children('img').attr('src',message.img);
    const arr = $('.car-detail');
    for (let i = 0; i < arr.length; i += 1) {
      // debugger;
      // console.log($(arr[i]).find('.car-progress-center'));
      // 最宽为270px
      $(arr[i]).find('.car-progress-center').stop();
      $(arr[i]).find('.car-progress-center').animate({
        width: (270 * ((message.port[i].count / message.port[i].total))) + 'px',
      }, 500, 'linear', () => {});
      $(arr[i]).find('.car-progress-center').html(message.port[i].count);
    }
  }
  //车辆添加
  function addCar(message) {
    const parent = $('.swiper-wrapper');
    var html = '';
    for (let i = 0; i < message.length; i += 1) {
      // debugger;
      html += '<div class="swiper-slide">' +
          '<img src=' + message[i].img  + '>' +
        '</div>'
    }
    parent.append(html);
  }
  $('.swiper-slide').eq(0).css({ border: '1px solid #fff' });
  addCar(message);
  const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 5,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    // onSlideClick: (swiper) => {
      // $('.swiper-slide').css({ border: 'none' });
      // $(swiper.clickedSlide).css({ border: '1px solid #fff' });
    // },
  });
  console.log(mySwiper);
  // 左右两边按钮
  $('.swiper-left').click(() => {
    mySwiper.swipePrev();
    $('.swiper-slide').css({ border: 'none' });
    $(mySwiper.activeSlide()).css({ border: '1px solid #fff' });
    console.log(mySwiper.activeSlide());
    console.log(mySwiper.activeLoopIndex);
    setMessage(message[mySwiper.activeLoopIndex]);
  });
  $('.swiper-right').click(() => {
    mySwiper.swipeNext();
    $('.swiper-slide').css({ border: 'none' });
    $(mySwiper.activeSlide()).css({ border: '1px solid #fff' });
    console.log(mySwiper.activeSlide());
    console.log(mySwiper.activeLoopIndex);
    setMessage(message[mySwiper.activeLoopIndex]);
  });
  //方法调用
  setMessage(message[0]);
};
