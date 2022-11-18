$(function() {
  $("#country").change(function() {
    console.log("Value Caught");
    let countryCode = $(this).find('option:selected').data('country-code');
    let value = "+" + $(this).val();
    $('#txtPhone').val(value).intlTelInput("setCountry", countryCode);
  });
  
  var code = "+977";
  $('#txtPhone').val(code).intlTelInput();
});