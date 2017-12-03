// var home = require("../../../controller/home");
// var weather = require("../../../controller/weather");
// console.log(weather);
// console.log(home);
// weather();
// alert(lat);
// alert(lon);

// $.ajax({
//     url: '/weather/query?lat=' + lat + '&lon=' + lon,
//     type: 'get',
//     success: function(res) {
//         console.log(res);

//         // var html = template(id, res);


//     }
// });
// 1.获取用户的经纬度
// 2.调用后端接口把经纬度度传给后台
// 3.前端页面根据后台返回的数据进行渲染
/**
 * 
 */
(function($) {


    $(function() {
        var geolocation = new BMap.Geolocation();

        function getLocation() {
            if (geolocation) {
                geolocation.getCurrentPosition(showPosition, errorPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            var lat = position.point.lat;
            var lon = position.point.lng;
            $.ajax({
                url: '/weather/query?lat=' + lat + '&lon=' + lon,
                type: "get",
                success: function(data) {
                    // var top = template("diqu");
                    // $(".place_now").html(top);
                    console.log(data);
                    // var idress = $(".idress>span");
                    $(".idress>span").html(data.results[0].currentCity);
                    $(".wy>span").html(data.results[0].weather_data[0].weather);
                    $(".wendu>span").html(data.results[0].weather_data[0].temperature);
                    $(".weif").html(data.results[0].weather_data[0].wind);
                    $(".wuran").html('PM:' + data.results[0].pm25);
                    // alert(idress.html());
                    // alert(data.results[0].currentCity);

                    // alert(peratureArr[1].trim());
                    var weather_data = data.results[0].weather_data;
                    // 用循环生成li列表html字符串
                    // 每个循环生成一个li
                    // 把每个循环生成的li拼接起来成为一个完整的html
                    // 把完整的html 渲染到页面
                    var html = "";
                    for (var i = 0; i < weather_data.length; i++) {
                        var tep = weather_data[i];
                        // console.log(tep);
                        var peratureArr = tep.temperature.split("~");
                        var day = tep.date;
                        if (i == 0) {
                            day = "今天";
                        }
                        html += '<li><img src="' + tep.dayPictureUrl + '" alt="">' +
                            '<div class="duchange">' +
                            '<span>' + peratureArr[1].trim() + '</span>' +
                            '<div class="line"></div>' +
                            '<span>' + peratureArr[0].trim() + '</span>' +
                            '<span>' + day + '</span>' +
                            '</div>' +
                            '</li>';
                    }
                    $(".weather_footer > ul").html(html);
                    console.log(html);
                }
            })
        }

        function errorPosition(e) {
            var msg = e.code + "\n" + e.message;
            alert(msg);
        }
        getLocation();
    })

})(jQuery);