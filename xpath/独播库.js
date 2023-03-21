{
    "author":"duboku",
    "ua": "",
    //"homeUrl": "https://www.duboku.tv/",
    "homeUrl": "https://u.duboku.io/",
    "dcVipFlag": "true",
    "dcPlayUrl": "true",
    "cateNode": "//ul[contains(@class,'nav-menu')]/li/a[contains(@href, 'vodtype')]",
    "cateName": "/text()",
    "cateId": "/@href",
    "cateIdR": "/vodtype/(\\w+).html",
    "cateManual": {
     "国产剧": "13",
      "台泰剧": "14",
      "日韩剧": "15",
      "英美剧": "16",
      "港剧": "20",
      "短剧": "21",
      "综艺": "3",
      "动漫": "4"
    },
    
// Home Summary ================================================      
    "homeVodNode": "//ul[contains(@class,'myui-vodlist')]/li/div/a",
    "homeVodName": "/@title",
    "homeVodId": "/@href",
    "homeVodIdR": "/voddetail/(\\w+).html",
    "homeVodImg": "/@data-original",
    "homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "//span[contains(@class,'pic-text')]/text()",
    
// Category Summary ================================================      
    "cateUrl": "https://u.duboku.io/vodshow/{cateId}-{area}-{by}------{catePg}---{year}.html",
    "cateVodNode": "//ul[contains(@class,'myui-vodlist')]/li/div/a",
    "cateVodName": "/@title",
    "cateVodId": "/@href",
    "cateVodIdR": "/voddetail/(\\w+).html",
    "cateVodImg": "/@data-original",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "//span[contains(@class,'pic-text')]/text()",
    
// Category Details ================================================        
    "dtUrl": "https://my.duboku.vip/voddetail/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[contains(@class,'myui-content__thumb')]/a/@title",
    "dtNameR": "",
    "dtImg": "//div[contains(@class,'myui-content__thumb')]/a/img/@data-original",
    "dtImgR": "",
    "dtCate": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '分类')]/following-sibling::a/text()",
    "dtYear": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '年份')]/following-sibling::a/text()",
    "dtArea": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '地区')]/following-sibling::a/text()",
    "dtMark": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '更新')]/following-sibling::a/text()",
    "dtDirector": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '导演')]/following-sibling::a/text()",
    "dtActor": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '主演')]/following-sibling::a/text()",
    "dtDesc": "//div[contains(@class,'myui-content__detail')]/p/span[contains(text(), '简介')]/following-sibling::a/text()",
    
// Playlist =====================================================       
    "dtFromNode": "//ul[contains(@class,'nav-tabs')]/li/a",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//ul[contains(@class,'myui-content__list')]",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://my.duboku.vip/vodplay/{playUrl}.html",
    "playUa": "",
    
// Search Results ================================================         
    "searchUrl": "https://my.duboku.vip/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": "",
    
// Filters =======================================================    
    "filter": {
      "13": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "20": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "14": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "16": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "15": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "2": [
        {
          "key": "cateId",
          "name": "类型",
          "value": [
            {"n": "全部","v": ""},
            {"n": "陆剧","v": "13"},
            {"n": "日韩剧","v": "15"},
            {"n": "英美剧","v": "16"},
            {"n": "台泰剧","v": "14"},
            {"n": "港剧","v": "20"}
          ]
        },
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "韩国","v": "韩国"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},
            {"n": "美国","v": "美国"},
            {"n": "英国","v": "英国"},
            {"n": "巴西","v": "巴西"},
            {"n": "西班牙","v": "西班牙"},
            {"n": "泰国","v": "泰国"},
            {"n": "德国","v": "德国"},
            {"n": "法国","v": "法国"},
            {"n": "日本","v": "日本"},
            {"n": "荷兰","v": "荷兰"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "3": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},
            {"n": "韩国","v": "韩国"},
            {"n": "美国","v": "美国"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "4": [
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "国产","v": "国产"},
            {"n": "日本","v": "日本"},
            {"n": "美国","v": "美国"},
            {"n": "法国","v": "法国"},
            {"n": "其他","v": "其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "20": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ],
      "21": [
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"}
          ]
        },
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "排序","v": ""},
            {"n": "时间","v": "time"},
            {"n": "人气","v": "hits"},
            {"n": "评分","v": "score"}
          ]
        }
      ]
    }
  }