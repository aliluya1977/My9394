var rule={     
    title:'布雷蓝光',     
    host:'http://movie.bulei.cc/',     
    url:'/index.php/vod/show/by/time/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html', 
    searchable:2,
    quickSearch:1,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA',         },     
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港剧&日剧&欧美剧&韩剧&泰剧&台剧&海外剧',     
    class_url:'1&2&3&4&27&13&46&15&16&45&34&14&35',     
    推荐:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    一级:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;","img":".lazyload&&data-original","desc":";;.module-info-item:eq(4) p&&Text;.module-info-item:eq(3) div&&Text;.module-info-item:eq(1) a&&Text","content":".show-desc&&Text","tabs":'#y-playList&&span',"lists":".module-play-list:eq(#id) a"},     
    搜索:'.module-card-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href', 
}
