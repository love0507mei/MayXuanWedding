jQuery(document).ready(function () {
    jQuery("#gallery").unitegallery();

    var vHash = window.location.hash;
    $('.active').removeClass('active');
    $('nav a[href="' + vHash + '"]').addClass('active');
});

function menuActive(unit) {
    $('.active').removeClass('active');
    $('nav a[href="' + unit + '"]').addClass('active');
}