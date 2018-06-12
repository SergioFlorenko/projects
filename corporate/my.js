$(document).ready(function(){

    function setHeiHeight() {
    $('.best__wrap').css({
        // background-position: $(window).width() + 'px top'
        backgroundPosition: $(window).width()/2+'px top'
    });
}
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна});

});
