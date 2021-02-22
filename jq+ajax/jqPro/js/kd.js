var weather;

function search() {
    $.post('https://www.apiopen.top/weatherApi?', {
        city: weather
    }, function (data, status) {
        console.log(data);
        var shu = data.data;
        var city = shu.city;
        $('#myModalLabel').html("<h4>" + city + "</h4>");
        $.each(shu.forecast, function (i, e) {
            if (i == 0) 
            add($('.c1'), e);
            else if(i==1)
            add($('.c2'), e);
            else if(i==2)
            add($('.c3'), e);
            else if(i==3)
            add($('.c4'), e);
            else if(i==4)
            add($('.c5'), e);
        })

    });
}
$(function () {
    $(".btn-lg").on("click", function (e) {
        weather = $('#exampleInputAmount').val();
        $('.c1').empty();
        $('.c2').empty();
        $('.c3').empty();
        $('.c4').empty();
        $('.c5').empty();
        search();
        console.log(weather);

    })
})

function add(m, e) {
    m.append("<p>" + e.date + "</p>");
    m.append("<p>" + e.high + "</p>");
    m.append("<p>类型:" + e.type + "</p>");
    m.append("<p>" + e.low + "</p>");
    m.append("<p>" + e.fengxiang + "</p>");
}