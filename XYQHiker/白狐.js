{
    "规则名": "白狐影视",
    "规则作者": "",
    "请求头参数": "User-Agent$PC_UA#Referer$WebView",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "0",
    "是否开启获取首页数据": "1",
    "首页推荐链接": "https://www.bhxoxo.com/",
    "首页列表数组规则": "body&&.module-main.tab-list.active",
    "首页片单列表数组规则": ".module-item",
    "首页片单是否Jsoup写法": "1",
    "分类起始页码": "1",
    "分类链接": "https://www.bhxoxo.com/fl/{cateId}--{by}------{catePg}---.html",    
    "分类名称": "电影&电视剧&综艺&动漫",
    "分类名称替换词": "1&2&3&4",
    "筛选数据": "ext",
    //{cateId}
    "筛选子分类名称": "动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片||国产剧&香港剧&韩国剧&欧美剧&台湾剧&日本剧&海外剧&泰国剧||国产动漫&日韩动漫&欧美动漫&港台动漫||大陆综艺&港台综艺&日韩综艺&欧美综艺",
    "筛选子分类替换词": "5&6&7&8&9&10&11||12&13&14&15&16&17&18&19||24&25&26&27||20&21&22&23",
    //{class}
    //"筛选类型名称": "",
    "筛选类型替换词": "*",
    //{area}
    //"筛选地区名称": "",
    "筛选地区替换词": "*",
    //{year}
    //"筛选年份名称": "",
    "筛选年份替换词": "*",
    //{lang}
    //"筛选语言名称": "",
    "筛选语言替换词": "*",
    //{by}
    "筛选排序名称": "时间排序&人气排序&评价排序",
    "筛选排序替换词": "time&hits&score",
    "分类截取模式": "1",
    "分类列表数组规则": "body&&.module-item",
    "分类片单是否Jsoup写法": "1",
    "分类片单标题": "a&&title",
    "分类片单链接": "a&&href",
    "分类片单图片": ".lazyload&&data-original",
    "分类片单副标题": ".module-item-note&&Text",
    "分类片单链接加前缀": "https://www.bhxoxo.com",
    "分类片单链接加后缀": "",
    "搜索请求头参数": "User-Agent$PC_UA",
    "搜索链接": "https://www.bhxoxo.com/s/-------------.html?wd={wd}",
    "POST请求数据": "searchword={wd}",
    "搜索截取模式": "1",
    "搜索列表数组规则": ".module-items&&.module-item",
    "搜索片单是否Jsoup写法": "1",
    "搜索片单图片": ".lazyload&&data-original",
    "搜索片单标题": ".module-card-item-title&&Text",
    "搜索片单链接": "a&&href",
    "搜索片单副标题": ".module-item-note&&Text",
    "搜索片单链接加前缀": "https://www.bhxoxo.com/s/",
    "搜索片单链接加后缀": "",
    "链接是否直接播放": "0",
    "直接播放链接加前缀": "",
    "直接播放链接加后缀": "#isVideo=true#",
    "直接播放直链视频请求头": "",
    "详情是否Jsoup写法": "0",
    "类型详情": "",
    "年代详情": "module-info-tag\">&&</div>",
    "地区详情": "",
    "演员详情": "主演：</span>&&</div>",
    "简介详情": "show-desc\" style=\"line-height: 20px;\">&&</div>",
    "线路列表数组规则": "#y-playList&&.module-tab-item",
    "线路标题": "span,0&&Text",
    "播放列表数组规则": "body&&.module-play-list-content",
    "选集列表数组规则": "a",
    "选集标题链接是否Jsoup写法": "1",
    "选集标题": "a&&Text",
    "选集链接": "a&&href",
    "是否反转选集序列": "0",
    "选集链接加前缀": "https://www.bhxoxo.com",
    "选集链接加后缀": "",
    "分析MacPlayer": "0",
    "是否开启手动嗅探": "0",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv",
    "手动嗅探视频链接过滤词": ".html#=http#=https"
}