$(function() {
  navbar();
});

function navbar() {
  $('._toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('._toggle, ._navigation').removeClass('is-open'); }
    else { $('._toggle, ._navigation').addClass('is-open'); }
  });
}
