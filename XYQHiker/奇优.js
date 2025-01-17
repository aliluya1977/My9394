{
    //规则名
    "title": "奇优",
    //作者
    "author": "小米",
    //请求头UA,键名$键值，每一组用#分开，不填则默认okhttp/3.12.11，可填MOBILE_UA或PC_UA使用内置的手机版或电脑版UA
    //多个请求头参数写法示例，"User-Agent$PC_UA#Referer$http://ww.baidu.com#Cookie$ser=ok",每一组用#分开。
    //习惯查看手机源码写建议用手机版UA，习惯查看PC版源码写建议用电脑版UA
    "Headers":"MOBILE_UA",
    //图片是否需要代理
    "PicNeedProxy":"0",
    //是否开启获取首页数据，0关闭，1开启
    "homeContent":"1",
    //首页推荐数据获取链接
    "rcmed_url": "http://1e6e.com",
    //首页列表数组截取。
    "home_arr_rule": "body&&.stui-vodlist__box",
    //首页片单列表数组定位。
    "hmepi_arr_rule": ".stui-vodlist__thumb",
    //首页片单信息jsoup与正则截取写法切换，只作用于html网页，1为jsoup写法(默认)，0为正则截取写法
    "home_is_jsoup":"1",
    //分类链接起始页码,禁止负数和含小数点。
    "firstpage": "1",
    //分类链接,{cateId}是分类，{catePg}是页码,第一页没有页码的可以这样写 第二页链接[firstPage=第一页的链接]
    "class_url": "http://1e6e.com/list/{cateId}_{catePg}.html",
    //分类名，分类1&分类2&分类3
    "class_name": "电影&电视剧&综艺&动漫",
    //分类名替换词，替换词1&替换词2&替换词3，替换词包含英文&的用两个中文＆＆代替，示例：＆＆id=0&＆＆id=1
    "class_value": "1&2&4&3",
    //筛选数据，json格式，参考xpath的筛选写法
    "filterdata":{},
    //分类页面截取数据模式，0为json，其它数字为普通网页。
    "cat_mode": "1",
    //分类列表数组定位，最多支持3层，能力有限，不是所有页面都能支持
    "cat_arr_rule": "body&&.stui-vodlist__box",
    //分类片单信息jsoup与xb截取写法切换，只作用于html网页，1为jsoup写法(默认)，0为xb写法
    "cat_is_jsoup":"1",
    //分类片单标题
    "cat_title": "a&&title",
    //分类片单链接
    "cat_url": "a&&href",
    //分类片单图片，支持自定义图片链接
    "cat_pic": "a&&data-original",
    //分类片单副标题
    "cat_subtitle":".pic-text&&Text",
    //分类片单链接补前缀  
    "cat_prefix": "http://1e6e.com",
    //分类片单链接补后缀
    "cat_suffix": "",
    "SHeaders": "手机",
    "search_url": "http://1e6e.com/search.php;post",
    "sea_PtBody": "searchword={wd}",
    "search_mode": "1",
    "sea_arr_rule": ".stui-vodlist__media&&li",
    "sea_is_jsoup": "1",
    "sea_pic": ".lazyload&&data-original",
    "sea_title": "h3&&Text",
    "sea_url": "h3&&a&&href",
    "sea_subtitle": ".pic-text&&Text",
    "search_prefix": "http://1e6e.com",
    "search_suffix": "",
    "force_play": "0",
    //直接播放链接补前缀
    "play_prefix": "https://live.52sf.ga/huya/",
    //直接播放链接补后缀，设置为#isVideo=true#可强制识别为视频链接
    "play_suffix": "#isVideo=true#",
    //直接播放链接设置请求头，只对直链视频有效，每一组用#分开
    "play_header": "authority$ku.peizq.online#Referer$https://play.peizq.online",
    //项目信息jsoup与xb截取写法切换，1为jsoup写法(默认)，0为xb写法
    "proj_is_jsoup":"0",
    //类型数据，截取前缀&&截取后缀
    "proj_cate": "",
    //年代数据，截取前缀&&截取后缀
    "proj_year": "",
    //地区数据，截取前缀&&截取后缀
    "proj_area": "",
    //演员数据，截取前缀&&截取后缀
    "proj_actor": "主演：</span>&&</div>",
    //简介内容，截取前缀&&截取后缀
    "proj_plot": "简介：</span>&&</div>",
    //线路截取区域，如果不需要请把tab_title或tab_arr_rule置空或者全部不要填。
    //线路截取数组
    "tab_arr_rule": ".nav&&li",
    //线路标题，截取前缀&&截取后缀
    "tab_title": "a&&Text",
    //列表数组截取，必须
    "list_arr_rule": "body&&.stui-content__playlist",
    //集数数组截取，必须
    "epi_arr_rule": "a",
    //集数标题，截取前缀&&截取后缀
    "epi_title": "a&&Text",
    //集数链接，截取前缀&&截取后缀
    "epi_url": "a&&href",
    //选集是否反转显示
    "epi_reverse": "0",
    //集数链接补前缀
    "epiurl_prefix": "http://1e6e.com",
    //集数链接补后缀
    "epiurl_suffix": "",
    //下面几个参数请勿乱用。否则可能会有副作用。
    //分析网页源码中有<script type="text/javascript">var player_aaaa={"flag":"play","encrypt这种源码的链接解析
    //如果网页源码里没有这种请设置为0
    "Anal_MacPlayer":"0",
    //是否开启手动嗅探，只对网页嗅探有效，0否，1是
    "ManualSniffer":"0",
    //手动嗅探视频链接关键字，每个用#隔开
    "VideoFormat":"",
    //手动嗅探视频链接过滤关键词,每个用#隔开
    "VideoFilter":".html#=http"
}