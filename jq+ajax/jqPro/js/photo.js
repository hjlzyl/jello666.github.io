var pageNum = 1;

function getPhoto() {
  $.get('https://www.apiopen.top/meituApi', {
      page: pageNum
    },
    function (data, status) {
      $.each(data.data, function (i, e) {
        var newImg = '<img src="' + e.url +
          '" class="img-thumbnail" data-toggle="modal" data-target="#myModal">';
        if (i % 4 == 0) {
          $(newImg).appendTo('.c1');
        } else if (i % 4 == 1) {
          $(newImg).appendTo('.c2');
        } else if (i % 4 == 2) {
          $(newImg).appendTo('.c3');
        } else if (i % 4 == 3) {
          $(newImg).appendTo('.c4');
        }

      })
    },
  );
  pageNum++;
};
getPhoto();


$(function () {
  var use;
  //放大图片
  $('#myModal').on('show.bs.modal', function (e) {
    $('.modal-body').empty();
    use = $(e.relatedTarget);
    var sr = use.attr('src');
    console.log(sr)
    $(this).find('.modal-body').append('<img src="' + sr + '">');
  })
  //上一张
  $('#pre').on('click', function (e) {
    if (use.prev().length) {
      use = use.prev();
    } else {
      use = use.parent().prev().children().last();
    }
    var pre = use.attr('src');
    $('.modal-body').find('img').attr('src', pre);
  });
  //下一张
  $('#next').on('click', function (e) {
    if (use.next().length) {
      use = use.next();
    } else {
      use = use.parent().next().children().first();
    }
    var next = use.attr('src');
    $('.modal-body').find('img').attr('src', next);
  });
  //滚动刷新
  $(document).scroll(function (e) {
    var tall = $(this).scrollTop();
    var but = $('.center-block').offset().top;
    if (but <= tall + 630) {
      getPhoto();
    }
  })
})