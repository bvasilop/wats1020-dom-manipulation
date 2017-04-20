//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)

    // set an event handler for clicking the 'login' button
    //use '.btn-sm' class to listen for click
    $('.btn-sm').click(function() {
   // when button is clicked, the '#login-form' field is hidden
    $('#login-form').hide();
    // when button is clicked, show '.user-fullname'
    $('.user-info').show();
    // when button is clicked , 'fadeIn' 'firstName+lastName'
    $('.user-fullname').html.fadeIn( userInfo.firstName + '  ' + userInfo.lastName);

  });


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.


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
            $(el) .fadeOut('fast');
    // alter text within button with 'view details' because the 'details' have been hidden by the "fadeOut('fast')"
            targetElement.innerText = "View Details"
    // allows element to 'fadeIn' when not visible
        } else {
              $(el).fadeIn('fast');
    // alter text within buttons with 'Hide Details' since details are visible with "fadeIn('fast')"
    // user is able to 'Hide Details'
              targetElement.innerText= "Hide Details"
        }
    });
  })

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
