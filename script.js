$("#card-number").on('blur', function() {
  $.post( "http://localhost/test.html", { name: $(this).val() } );
});
