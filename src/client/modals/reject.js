loadTemplate("templates/reject.html", function(element) {
    $('body').append(element);
    $("#rejectBtn").click(function() {
      $("#rejectModal").modal();
    });
  });
  