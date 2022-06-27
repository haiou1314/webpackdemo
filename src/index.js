//引入banner.js
import './banner.js'
//引入tabs.js
import './tabs.js'
//引入jquery
import $ from 'jquery'
//引入index.css
import './css/index.css'
//引入index.less
import './styles/index.less'

$('#swiper').css('background-color', '')
// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);
