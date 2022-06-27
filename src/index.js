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
import imgUrl from './assets/1.gif'

// 引入字体图标文件
import './assets/fonts/iconfont.css'

const fn = ()=>{
    console.log('张三');
}
fn()

let img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)
