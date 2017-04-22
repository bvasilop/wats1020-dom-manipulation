//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Bill',
        lastName: 'Vasilopoulos'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    //login css pre click
    // added css styling for buttons. adding margins to fix original off-center buttons
    $('.btn-sm').css({
       'margin': '5px 0 5px 5px',
       'font-size': '17px'
    });

    // added css styling post click to adjust off-center button at top of page
    $('.form-control').css({
          'margin': '5px 0 5px 5px',
          'font-size': '17px'
    });

    // set an event handler for clicking the 'login' button
    //use '.btn-sm' class to listen for click
    $('.btn-sm').click(function() {

   // when button is clicked, the '#login-form' field is hidden
   $('.btn-sm').css({
      'margin-bottom': '5px',
      'font-size': '17px'
   });
    $('#login-form').hide();

    // when button is clicked, show '.user-fullname'
    // fade in at 650ms
    $('.user-info').fadeIn(650);

    // use css to add padding to top and increase font size
    $('.user-info').css({
       'padding-top': '5px',
       'font-size': '20px'
    });

    // when button is clicked , return 'firstName+lastName'
    $('.user-fullname').html(userInfo.firstName + '  ' + userInfo.lastName);
    });

    //  create event handler for clicking the 'view details' buttons
    $('.view-details').on('click', function(event) {

    // create variable 'targetElement' for function to target event
        var targetElement = event.target;

    //  create variable 'container' in order to tell function where the location of the target is in relation to targetElement
        var container = targetElement.parentElement.parentElement;

    //  finding 'details' class within container for each element and alter visibility
        $(container).find('.details').each(function( index, el){

    //  when element is visible , fade out 'fast'
        if ($(el) .is ( ':visible')){
            $(el) .fadeOut(650);

    // alter text within button with 'view details' because the 'details' have been hidden by the "fadeOut('fast')"
            targetElement.innerText = "View Details"
    // allows element to 'fadeIn' when not visible
        } else {
              $(el).fadeIn(650);
    // alter text within buttons with 'Hide Details' since details are visible with "fadeIn('fast')"
    // user is able to 'Hide Details'
              targetElement.innerText= "Hide Details"
        }
    });
  });

    // created an on click event listener for 'great' and 'greatest' voting buttons
    $('button.vote').on('click', function(event) {
    // create variable for 'userVote'
    // assign variable 'userVote' to 'data-vote' attribute
              var userVote = $(this).data('vote');
    // set counter to increment by 1 each time button is clicked for 'great'
              if (userVote == 'great') {
                        voteCounts.great++;
                        voteCounts.total++;
              }
   // set counter to increment by 1 each time button is clicked for 'greatest'
              else if (userVote == 'greatest') {
                        voteCounts.greatest++;
                        voteCounts.total++;
             }

   // calculate the percentages and update the progress bars for 'great' votes
              var greatPercent = (voteCounts.great / voteCounts.total) * 100;
                    $('.great-progress').attr('style', 'width: ' + greatPercent + '%');
  // calculate the percentages and update the progress bars for 'greatest' votes
              var greatestPercent = (voteCounts.greatest / voteCounts.total) * 100;
                    $('.greatest-progress').attr('style', 'width: ' + greatestPercent + '%');

    });
});
