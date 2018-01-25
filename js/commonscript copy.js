$(function () {
            $(".likeheart").click(function () {
                $(this).parent().parent().parent().toggleClass('like-papa');
                $(this).toggleClass('like-click');
            })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
