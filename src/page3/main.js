import '../common/css/reset.css';
import '../common/css/site.css';

if (ENV === 'DEV') {
  require('../../pages/html/page3.html');
}

$('body').append('<h1>this is page3</h1>');
