//用于tvbox的个人学习使用，未涉及到商业盈利，如有侵权，请联系，会在第一时间删除谢谢
//此条接口儿童不宜,故事由经典港版展开。感谢各位开发者大佬默默付出。不良帅个人整理测试，折腾折腾折腾而已。
   {
"sites": [
//==================================XBiu==================================================================
        {
           "key": "csp_xb_城市",
            "name": "国内外剧┃城市电影",
            "type": 3,
            "api": "csp_XBiu",
            "searchable": 1,
            "quickSearch": 1,
            "filterable": 1,
            "ext": "https://www.citydy.com/show/id-{cateId}{area}{by}{class}/page/{catePg}{year}.html"
        }，
        {
            "key": "csp_xb_huix",
            "name": " 回响影视┃XBiuR",
            "type": 3,
            "api": "csp_XBiu",
            "searchable": 1,
            "quickSearch": 1,
            "filterable": 0,
            "ext": "http://hxys.tv/vodshow/{cateId}-{area}-------{catePg}---{year}.html"
        }
    ],
    "spider": "https://notabug.org/qizhen15800/My9394/raw/master/jar/xinXBiu.jar",
    "lives": [{
"group": "redirect",
"channels": [{
"name": "redirect",
"urls": [
"proxy://do=live&type=txt&ext=aHR0cHM6Ly9hZ2l0LmFpL3FpMTY5L015OTM5NC9yYXcvYnJhbmNoL21hc3Rlci9UVi9saXZlLnR4dA=="
]
}]
}],
"parses": [{ "name": "自动播放遇问题，尝试手按数字。推荐首选", "type": 3, "url": "Demo" }, 
{ "name": "推荐首选", "type": 0, "url": "https://dm.xmflv.com:4433/?url="},  
{ "name": "Q2", "type": 0, "url": "https://www.yemu.xyz/?url="},
{"name": "F1","url": "http://101.34.67.237:5705/parse/api/酷云.js?url=", "type": 1, "ext": { "flag": [ "qiyi", "imgo", "爱奇艺", "奇艺", "qq", "腾讯", "youku", "优酷", "pptv", "PPTV", "letv", "乐视", "leshi", "bilibili", "哔哩哔哩", "哔哩", "mgtv", "芒果", "sohu", "xigua", "fun", "风行" ], "header": { "User-Agent": "Mozilla/5.0" } } },
{ "name": "F2", "type": 1, "url": "http://211.99.99.236:4567/jhjson/ceshi.php?url=", "ext": { "flag": ["qiyi", "iqiyi", "奇艺", "爱奇艺", "qq", "腾讯", "youku", "优酷", "pptv", "PPTV", "letv", "乐视", "bilibili", "哔哩哔哩", "哔哩", "mgtv", "芒果", "xigua", "西瓜", "sohu", "搜狐", "cntv", "cctv", "央视", "1905", "m1905"] } },
{ "name": "F3", "type": 1, "url": "http://newjiexi.gotka.top/keyu3.php?url=", "ext": { "flag": ["imgo", "qq", "腾讯", "qiyi", "爱奇艺", "奇艺", "youku", "优酷", "mgtv", "芒果", "letv", "乐视", "pptv", "PPTV", "sohu", "bilibili", "哔哩哔哩", "哔哩"], "header": { "User-Agent": "okhttp/4.1.0" } } },
{ "name":"Q3", "type": 0, "url": "https://dm.xmflv.com:4433/?url=", "ext": { "flag": ["imgo", "ltnb", "renrenmi", "qq", "腾讯", "qiyi", "爱奇艺", "奇艺", "youku", "优酷", "mgtv", "芒果", "bilibili", "哔哩哔哩", "哔哩"] } }, 
{ "name": "F3.1", "type": 1, "url": "http://43.249.192.246:2626/jhy/json.php?token=ktuxzCFGJNPQTWZ569&url=", "ext": { "flag": [ "rx", "ltnb", "renrenmi", "rongxing", "bilibili", "哔哩哔哩", "哔哩", "youku", "优酷", "qiyi", "爱奇艺", "奇艺", "qq", "腾讯", "mgtv", "芒果", "sohu", "搜狐", "letv", "乐视", "xigua", "CL4K", "西瓜" ] } }, 
{ "name": "F3.2", "type": 1, "url": "http://jx.dygfsdy.com/home/api?type=ys&uid=129415&key=acdmoruwxCDEKPZ679&url=", "ext": { "flag": [ "rx", "ltnb", "renrenmi", "rongxing", "bilibili", "哔哩哔哩", "哔哩", "youku", "优酷", "qiyi", "爱奇艺", "奇艺", "qq", "腾讯", "mgtv", "芒果", "sohu", "搜狐", "letv", "乐视", "xigua", "CL4K", "西瓜" ] } }, 
{ "name": "F3.8", "type": 1, "url": "http://jx.vipmv.co/json.php?token=123457&url=", "ext": { "flag": [ "rx", "ltnb", "renrenmi", "rongxing", "bilibili", "哔哩哔哩", "哔哩", "youku", "优酷", "qiyi", "爱奇艺", "奇艺", "qq", "腾讯", "mgtv", "芒果", "sohu", "搜狐", "letv", "乐视", "xigua", "CL4K", "西瓜" ] } }, 
{"name":"F3.9","type":1,"url":"http://rxjx.kuanjv.com/allm3u8.php?url="},
{ "name": "Q3.9", "type": 0, "url": "https://hxys.tv/bfq/?url=" }, 
{ "name": "Q5", "type": 0, "url": "https://play.fositv.com/?url=" }, 
{ "name": "Q6", "type": 0, "ua": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36", "url": "https://jx.bozrc.com:4433/player/?url=" }, 
{ "name": "Q7", "type": 0, "url": "https://lg.junniu.net/?url=" }, 
{ "name": "Q8", "type": 0, "url": "http://player.gaoxin155.com.cn:80/index2022.php?url=" }, 
{ "name": "Q9", "type": 0, "url": "http://player.nwctfw.com:80/index2022188.php?url=" }, 
{ "name": "Q10", "type": 0, "url": "https://www.jfxz689.com/?url=" }, 
{ "name": "Q11", "type": 0, "url": "https://ksksl.codjx.com/?url=" },
{ "name": "F5", "type": 1, "url": "http://jx.dygfsdy.com/home/api?type=ys&uid=129415&key=acdmoruwxCDEKPZ679&url=", "ext": { "flag": ["qq", "腾讯", "letv", "乐视", "mgtv", "芒果", "youku", "优酷", "qiyi", "iqiyi", "爱奇艺", "奇艺"] } }, 
{ "name": "F6", "type": 1, "url": "http://api.xiaomaomi.tv/home/api?type=ys&uid=8728968&key=cdkmqvyzFIJPRT2349&url=", "ext": { "flag": ["qiyi", "iqiyi", "奇艺", "爱奇艺", "qq", "腾讯", "youku", "优酷", "pptv", "PPTV", "letv", "乐视", "bilibili", "哔哩哔哩", "哔哩", "mgtv", "芒果", "xigua", "西瓜", "sohu", "搜狐", "cntv", "cctv", "央视", "1905", "m1905"] } }, 
{"name": "F7","type": 1,"url": "http://lanlan.ckflv.cn/?url=","ext": {"flag": ["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name": "F8","type": 1,"url": "http://123.57.56.94:9931/lanlan/?url="},
{"name": "F9","type": 1,"url": "http://rxjx.kuanjv.com/allm3u8.php?url=","ext": {"flag": ["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{ "name": "F10", "type": 1, "url": "http://newjiexi.gotka.top/keyu3.php?url="},
{"name":"F11","type":1,"url":"https://vip.byteamone.cn/api/?key=iYOnljzBM3qy5y9qZ4&url="},  
{"name": "F12","type": 1,"url": "http://jx.dygfsdy.com/home/api?type=ys&uid=129415&key=acdmoruwxCDEKPZ679&url="},
{"name": "F13","type":1,"url": "https://rx.bt5v.com/json/jsonindex.php/?url="}, 
{"name":"F13.9","type":1,"url":"https://cache.json.icu/home/api?type=ys&uid=1362243&key=acfgklqwFLMORSTVZ6&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","bilibili","ltnb","renrenmi"]}},
{"name":"F15","type":1,"url":"http://www.kumyun.cn/home/api?type=ys&uid=12970&key=eopDJKLMNPSTVXY015&url="},  
{"name": "F16","type": 1,"url": "https://svip.rongxingvr.top/api/?key=bpWXKrAJUKm3puOCH4&url="},
{"name":"F17","type":1,"url":"http://json.youguo520.top/fufeng/?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},  
{ "name": "F18", "type": 1, "url": "http://119.91.206.244:9999/jx/hfys.php?url=", "ext": { "flag": ["imgo", "duoduozy", "renrenmi", "ltnb", "miaoparty", "miaoparty2", "miaoparty3", "laodiyun", "laodim3u8", "lekanzyw", "rx", "CL4K", "fuckapp", "1080P", "wuduzy"]}}, 
{ "name": "F19", "type": 1, "url": "http://jx.dygfsdy.com/home/api?type=ys&uid=129415&key=acdmoruwxCDEKPZ679&url=" } ],
"flags":["youku","qq","iqiyi","imgo","xueren","m1905","qiyi","letv","sohu","tudou","pptv","dbm3u8","mgtv","wasu","bilibili","le","duoduozy","renrenmi","xigua","优酷","西瓜","乐视","芒果","腾讯","爱奇艺","奇艺","ltnb","rx","CL4K","xfyun","wuduzy","哔哩哔哩","哔哩"],
"rules": [
{"host":"*", "rule":["douyinvod.com", "/video/tos/cn/"]},
{"host":"*", "rule":["default.365yg.com", "/video/tos/cn/"]},
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".m3u8"]},
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mp4"]},
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mkv"]},
{"host":"*", "rule":["/m3u8.php?path=", ".m3u8"]},
{"host":"*", "rule":["/API.php?time=", "key=", "path=", ".m3u8"]},
{"host":"*", "rule":["oss-cn-m3u8", "myqcloud.com.zh188.net", "?url=", ".m3u8"]},
{"host":"www.007ts.me", "rule":["hls.pchj.net", ".m3u8"]}
],
"ijk": [{
"group": "硬解码",
"options": [{
"category": 4,
"name": "opensles",
"value": "0"
},
{
"category": 4,
"name": "overlay-format",
"value": "842225234"
},
{
"category": 4,
"name": "framedrop",
"value": "1"
},
{
"category": 4,
"name": "soundtouch",
"value": "1"
},
{
"category": 4,
"name": "start-on-prepared",
"value": "1"
},
{
"category": 1,
"name": "http-detect-range-support",
"value": "0"
},
{
"category": 1,
"name": "fflags",
"value": "fastseek"
},
{
"category": 2,
"name": "skip_loop_filter",
"value": "48"
},
{
"category": 4,
"name": "reconnect",
"value": "1"
},
{
"category": 4,
"name": "enable-accurate-seek",
"value": "0"
},
{
"category": 4,
"name": "mediacodec",
"value": "1"
},
{
"category": 4,
"name": "mediacodec-auto-rotate",
"value": "1"
},
{
"category": 4,
"name": "mediacodec-handle-resolution-change",
"value": "1"
},
{
"category": 4,
"name": "mediacodec-hevc",
"value": "1"
},
{
"category": 1,
"name": "dns_cache_timeout",
"value": "600000000"
}
]
},
{
"group": "软解码",
"options": [{
"category": 4,
"name": "opensles",
"value": "0"
},
{
"category": 4,
"name": "overlay-format",
"value": "842225234"
},
{
"category": 4,
"name": "framedrop",
"value": "1"
},
{
"category": 4,
"name": "soundtouch",
"value": "1"
},
{
"category": 4,
"name": "start-on-prepared",
"value": "1"
},
{
"category": 1,
"name": "http-detect-range-support",
"value": "0"
},
{
"category": 1,
"name": "fflags",
"value": "fastseek"
},
{
"category": 2,
"name": "skip_loop_filter",
"value": "48"
},
{
"category": 4,
"name": "reconnect",
"value": "1"
},
{
"category": 4,
"name": "enable-accurate-seek",
"value": "0"
},
{
"category": 4,
"name": "mediacodec",
"value": "0"
},
{
"category": 4,
"name": "mediacodec-auto-rotate",
"value": "0"
},
{
"category": 4,
"name": "mediacodec-handle-resolution-change",
"value": "0"
},
{
"category": 4,
"name": "mediacodec-hevc",
"value": "0"
},
{
"category": 1,
"name": "dns_cache_timeout",
"value": "600000000"
}
]
}
],
"wallpaper": "http://52bsj.vip:82/late",
"ads": [
"https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd",
"mimg.0c1q0l.cn",
"www.googletagmanager.com",
"www.google-analytics.com",
"mc.usihnbcq.cn",
"www.stappupgrade.vivo.com.cn",
"mg.g1mm3d.cn",
"www.otheve.beacon.qq.com",
"mscs.svaeuzh.cn",
"cnzz.hhttm.top",
"tp.vinuxhome.com",
"cnzz.mmstat.com",
"www.baihuillq.com",
"s23.cnzz.com",
"z3.cnzz.com",
"c.cnzz.com",
"stj.v1vo.top",
"z12.cnzz.com",
"img.mosflower.cn",
"tips.gamevvip.com",
"ehwe.yhdtns.com",
"xdn.cqqc3.com",
"www.jixunkyy.cn",
"sp.chemacid.cn",
"hm.baidu.com",
"s9.cnzz.com",
"z6.cnzz.com",
"um.cavuc.com",
"mav.mavuz.com",
"wofwk.aoidf3.com",
"z5.cnzz.com",
"xc.hubeijieshikj.cn",
"tj.tianwenhu.com",
"xg.gars57.cn",
"k.jinxiuzhilv.com",
"cdn.bootcss.com",
"ppl.xunzhuo123.com",
"xomk.jiangjunmh.top",
"img.xunzhuo123.com",
"z1.cnzz.com",
"s13.cnzz.com",
"xg.huataisangao.cn",
"z7.cnzz.com",
"xg.huataisangao.cn",
"z2.cnzz.com",
"s96.cnzz.com",
"q11.cnzz.com",
"thy.dacedsfa.cn",
"xg.whsbpw.cn",
"s19.cnzz.com",
"z8.cnzz.com",
"s4.cnzz.com",
"f5w.as12df.top",
"ae01.alicdn.com",
"www.92424.cn",
"k.wudejia.com",
"vivovip.mmszxc.top",
"qiu.xixiqiu.com",
"cdnjs.hnfenxun.com",
"cms.qdwght.com"
]
}