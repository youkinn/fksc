import '../common/css/reset.css';
import '../common/css/site.css';
import './style.css';

if (ENV === 'DEV') {
  require('../../pages/html/page1.html');
}
console.log($);
