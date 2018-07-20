$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.mdb-select').material_select();
})
/*  ----------------------------------Bhavesh----------------------------------------  */
$(document).ready(function() {
  $('#addCardBtn').on('click',function() {
    if($('#addCardDiv').hasClass("d-none")) {
      $('#addCardDiv').toggleClass("d-none");
    }
  });

  $('[title="edit"]').on('click', function() {
    console.log('in row edit click...')
    if($('#addCardDiv').hasClass("d-none")) {
      $('#addCardDiv').toggleClass("d-none");
    }
  });

  $('#getQuoteBtn').on('click',function() {
    if($('#quoteListDiv').hasClass('d-none')) {
      $('#quoteListDiv').removeClass('d-none');
    }
  });

  $('#fr-btn').on('click', function() {
    console.log('in fr...')
    $('#fr-btn').addClass('grey lighten-2');
    $('#en-btn').removeClass('grey lighten-2');
  });

  $('#en-btn').on('click', function() {
    $('#en-btn').addClass('grey lighten-2');
    $('#fr-btn').removeClass('grey lighten-2');
  });

  $('#batchShipLink a').on('click', function() {

  });
});
