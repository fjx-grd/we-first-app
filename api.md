# 接口文档

### 天气查询接口

url: /weather/query?lat=23.1304029041&lon=113.3685290786

method: get

request
```json
{
    lon: 113.3685290786 
    lat: 23.1304029041
}
```

response
```
{
    "error": 0,
    "status": "success",
    "date": "2017-11-21",
    "results": [
        {
            "currentCity": "广州市",
            "pm25": "17",
            "index": [
                {
                    "title": "穿衣",
                    "zs": "较冷",
                    "tipt": "穿衣指数",
                    "des": "建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"
                },
                {
                    "title": "洗车",
                    "zs": "较适宜",
                    "tipt": "洗车指数",
                    "des": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
                },
                {
                    "title": "感冒",
                    "zs": "少发",
                    "tipt": "感冒指数",
                    "des": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。"
                },
                {
                    "title": "运动",
                    "zs": "较适宜",
                    "tipt": "运动指数",
                    "des": "阴天，较适宜进行各种户内外运动。"
                },
                {
                    "title": "紫外线强度",
                    "zs": "最弱",
                    "tipt": "紫外线强度指数",
                    "des": "属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"
                }
            ],
            "weather_data": [
                {
                    "date": "周二 11月21日 (实时：13℃)",
                    "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/yin.png",
                    "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/yin.png",
                    "weather": "阴",
                    "wind": "无持续风向微风",
                    "temperature": "15 ~ 13℃"
                },
                {
                    "date": "周三",
                    "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                    "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/yin.png",
                    "weather": "小雨转阴",
                    "wind": "无持续风向微风",
                    "temperature": "17 ~ 13℃"
                },
                {
                    "date": "周四",
                    "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/yin.png",
                    "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/xiaoyu.png",
                    "weather": "阴转小雨",
                    "wind": "无持续风向微风",
                    "temperature": "16 ~ 12℃"
                },
                {
                    "date": "周五",
                    "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                    "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/yin.png",
                    "weather": "小雨转阴",
                    "wind": "无持续风向微风",
                    "temperature": "15 ~ 12℃"
                }
            ]
        }
    ]
}
```