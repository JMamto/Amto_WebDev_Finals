// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

$('[data-toggle="collapse"]').on('click', function() {
  var $this = $(this),
          $parent = typeof $this.data('parent')!== 'undefined' ? $($this.data('parent')) : undefined;
  if($parent === undefined) { /* Just toggle my  */
      $this.find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
      return true;
  }

  /* Open element will be close if parent !== undefined */
  var currentIcon = $this.find('.glyphicon');
  currentIcon.toggleClass('glyphicon-plus glyphicon-minus');
  $parent.find('.glyphicon').not(currentIcon).removeClass('glyphicon-minus').addClass('glyphicon-plus');

});