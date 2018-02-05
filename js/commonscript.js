$(function () {
            $(".likeheart").click(function () {
                $(this).parent().toggleClass('like-papa').toggleClass('text-muted');
                $(this).toggleClass('like-click');
            })
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
