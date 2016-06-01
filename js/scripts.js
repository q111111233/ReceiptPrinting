$(document).ready(function() {
  $("#address form").submit(function(event) {
    var first_nameInput = $("input#first-name").val();
    var last_nameInput = $("input#last-name").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
debugger;
    $(".first-name").text(first_nameInput);
    $(".last-name").text(last_nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
