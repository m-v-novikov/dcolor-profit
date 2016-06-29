$(document).ready(function(){
    $('.secondary-img').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.secondary-img').removeClass('active');
            $('.point').removeClass('active');
            var img_src = $('img', this).attr('src');
            $('.main-img img').attr('src', img_src);
            $(this).addClass('active');
            $('[data-js-src="' + img_src + '"]').addClass('active');
        }
    });

    $('.point').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.point').removeClass('active');
            $('.secondary-img').removeClass('active');
            var img_src = $(this).attr('data-js-src');
            $('.main-img img').attr('src', img_src);
            $(this).addClass('active');
            $('[src="' + img_src + '"]').parent('.secondary-img ').addClass('active');
        }
    });
});