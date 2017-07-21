import '../common/css/reset.css';
import '../common/css/site.css';
import '../common/css/util.css';
import './style.css';
import { appendHeader, appendFooter } from '../common/js/layout';

if (ENV === 'DEV') {
  require('../../pages/html/aboutOurs.html');
}

appendHeader(4);
appendFooter();
console.log($);
$(() => {
  console.log('1');
});
