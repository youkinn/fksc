import '../common/css/reset.css';
import '../common/css/site.css';
import './style.css';
import common from '../common/js';

if (ENV === 'DEV') {
  require('../../pages/html/page2.html');
}

console.log(common());
