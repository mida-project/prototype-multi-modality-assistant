loadTemplate("templates/assistant.html", function(element) {
    $('body').append(element);
    $("i.assistance_img").click(function() {
      $("#assistantModal").modal();
    });
  });