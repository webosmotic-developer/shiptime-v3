// Steppers
$(document).ready(function () {
  var currentIndex = 1;
  var currentStep = '';
  var totalStep = $("a[href^='#step-']").length;

  var navListItems = $('div.setup-panel-2 div a'),
    allWells = $('.setup-content-2'),
    allNextBtn = $('.nextBtn-2'),
    allPrevBtn = $('.prevBtn-2');


  $('.prevBtn-2').addClass("d-none");
  // allWells.hide();
  fnMakeActive(currentIndex);
  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);
    console.log($target);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('active btn-amber').addClass('btn-blue-grey');
      currentIndex = $item.attr('href').split('-')[1];
        currentIndex = parseInt(currentIndex);
      console.log(currentIndex);
      if(currentIndex == 1){
        $('.prevBtn-2').addClass("d-none");
        $('#batchShipLink').removeClass('d-none');
      } else{
        $('.prevBtn-2').removeClass("d-none");
        $('#batchShipLink').addClass('d-none');
      }
      $item.addClass('active btn-amber visited');
      allWells.hide();
      $target.show();

        // button content change logic..
        if(currentIndex != 1) {
            $('.prevBtn-2').empty();
            $('.prevBtn-2').append($("a[href^='#step-"+(currentIndex-1)+"']").attr('data-original-title'));
        }
        if(currentIndex != totalStep) {
            $('.nextBtn-2').show();
            $('.nextBtn-2').empty();
            $('.nextBtn-2').append($("a[href^='#step-"+(currentIndex+1)+"']").attr('data-original-title'));
        } else {
            $('.nextBtn-2').hide();
            $('.prevBtn-2').hide();
        }
        // end....
    }
  });

  allPrevBtn.click(function () {
    if (currentIndex > 1) {
      fnMakeVisited(currentIndex);
      currentIndex--;
      fnMakeActive(currentIndex);
    }

    if(currentIndex == 1){
      $('.prevBtn-2').addClass("d-none")
    } else{
      $('.prevBtn-2').removeClass("d-none")
    }

  });

    allNextBtn.click(function () {
        if (currentIndex == 1) {
            if (totalStep > 6 &&($('#toCountry').val() == null || $('#toPostal').val() == '')){
                if ($('#toPostal').val() == '') {
                    $('#toPostal').addClass('border-danger');
                    $('#toPostal').on('focus', function () {
                        $('#toPostal').removeClass('border-danger');
                    });
                }
                toastr.error('Postal Code or country is missing');
            } else {
              /* Next step logic */
                if (currentIndex < totalStep) {
                    fnMakeVisited(currentIndex);
                    currentIndex++;
                    fnMakeActive(currentIndex);
                    if (currentIndex === totalStep) {
                        $("a[href$=" + (currentIndex) + "]").addClass('visited');
                    }
                    if(currentIndex > 1){
                        $('.prevBtn-2').removeClass("d-none")
                    }
                }
            }
        } else {
            if (currentIndex < totalStep) {
                fnMakeVisited(currentIndex);
                currentIndex++;
                fnMakeActive(currentIndex);
                if (currentIndex === totalStep) {
                    $("a[href$=" + (currentIndex) + "]").addClass('visited');
                }
                if(currentIndex > 1){
                    $('.prevBtn-2').removeClass("d-none")
                }
            }
        }

    });

  function fnMakeActive(currentIndex) {
    $("a[href^='#step-']").removeClass('active btn-amber');
    currentStep = "'" + '#step-' + currentIndex + "'";
    http://localhost:3000/index.html#
      $("a[href$=" + currentStep + "]").removeClass('visited').addClass('active btn-amber');
    var $target = $('#step-' + currentIndex);
    allWells.hide();
    $target.show();
      // button content change logic..
      if(currentIndex == 1) {
          $('#batchShipLink').removeClass('d-none');
      } else {
          $('#batchShipLink').addClass('d-none');
      }
      if(currentIndex != 1) {
          $('.prevBtn-2').empty();
          $('.prevBtn-2').append($("a[href^='#step-"+(currentIndex-1)+"']").attr('data-original-title'));
      }
      if(currentIndex != totalStep) {
          $('.nextBtn-2').show();
          $('.nextBtn-2').empty();
          $('.nextBtn-2').append($("a[href^='#step-"+(currentIndex+1)+"']").attr('data-original-title'));
      } else {
          $('.nextBtn-2').hide();
          $('.prevBtn-2').hide();
      }
      // ends.....
  }

  function fnMakeVisited(currentIndex) {
    currentStep = "'" + '#step-' + currentIndex + "'";
    $("a[href$=" + currentStep + "]").addClass('visited');
  }

  // $('div.setup-panel-2 div a.btn-amber').trigger('click');
})
;
