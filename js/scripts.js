$(document).ready(function() {
  $("#address form").submit(function(event) {
    var first-nameInput = $("input#first-name").val();
    var last-nameInput = $("input#last-name").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();

    $(".first-name").text(first-nameInput);
    $(".last-name").text(last-nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
