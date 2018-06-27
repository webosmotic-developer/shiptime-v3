$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.mdb-select').material_select();
})
/*  ----------------------------------Bhavesh----------------------------------------  */
$(document).ready(function() {
  $('#addCardBtn').on('click',function() {
    if($('#addCardDiv').hasClass("invisible")) {
      $('#addCardDiv').toggleClass("invisible");
    }
  });

  $('#getQuoteBtn').on('click',function() {
    if($('#quoteListDiv').hasClass('d-none')) {
      $('#quoteListDiv').removeClass('d-none');
    }
  });

  $('#addItemBtn').on('click',function() {

  });
});
