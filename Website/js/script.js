$(document).ready(function() {
    $("body").addClass("js");
    
    // INDEX PAGE FUNCTIONS
    // Alter css for when JavaScript is enabled
    $(".role-description").css("display", "none")
    $(".flex-item.bigger.black-text").css("background-color", "#141414")
    $(".role-activity").css("display", "none")
    // Reveal hunter activity menu
    $("#hunter").click(function() {
        $(".role-description").not("#hunter-info").hide();
        // Show the activity menu
        $("#hunter-info").show();
        // Toggle text colour change when clicked / clicked away from
        $(".role-menu li").removeClass("selected");
        $(this).toggleClass("selected");
        // Change background when selected
        $(".flex-item.bigger.black-text").css("background-color", "white");
    });

    // The following four functions reveal the activities in the hunter activity menu
    // All operate the same
    $("#tracking-menu").click(function() {
        $(".role-activity").not("#tracking-activity").hide();
        // Reveal the activity description / image panel
        $("#tracking-activity").show();
        // Toggle text colour change when clicked / clicked away from
        $(".hunter-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#spear-menu").click(function() {
        $(".role-activity").not("#spear-activity").hide();
        $("#spear-activity").show();
        $(".hunter-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#butchering-menu").click(function() {
        $(".role-activity").not("#butchering-activity").hide();
        $("#butchering-activity").show();
        $(".hunter-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#trapping-menu").click(function() {
        $(".role-activity").not("#trapping-activity").hide();
        $("#trapping-activity").show();
        $(".hunter-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });


    // Reveal gatherer activity menu
    // Functionality is the same as hunter function, except colour change of text is green (rather than red)
    $("#gatherer").click(function() {
        $(".role-description").not("#gatherer-info").hide();
        $("#gatherer-info").show();
        $(".role-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
        $(".flex-item.bigger.black-text").css("background-color", "white");
    });

    // The following four functions reveal the activities in the gatherer activity menu
    // All operate the same
    // Functionality is the same as hunter activity functions above.
    $("#foraging-menu").click(function() {
        $(".role-activity").not("#foraging-activity").hide();
        $("#foraging-activity").show();
        $(".gatherer-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#cooking-menu").click(function() {
        $(".role-activity").not("#cooking-activity").hide();
        $("#cooking-activity").show();
        $(".gatherer-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#crafting-menu").click(function() {
        $(".role-activity").not("#crafting-activity").hide();
        $("#crafting-activity").show();
        $(".gatherer-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });

    $("#weaving-menu").click(function() {
        $(".role-activity").not("#weaving-activity").hide();
        $("#weaving-activity").show();
        $(".gatherer-menu li").removeClass("selected"); 
        $(this).toggleClass("selected");
    });




    // BOOKING FORM FUNCTIONS
    // Booking Form submit function (confirm button)
    $( "#booking-form" ).submit(function( event ) {
        // Set variables for text replacement
        var fullName = $("#full-name").val();
        var email = $("#email").val();
        var guests = $("#guests").val();
        var arrival = $("#arrival").val();
        var depart = $("#depart").val();
        // Set message to display if all fields aren't complete
        var message = "Please fill in all form fields."
        // Set confirmation message to replace above if all fields are entered.
        if (fullName != "" & email != "" & guests != "" & arrival != "" & depart != "") {
            var message = "Hi, " + fullName + ". Your booking for the period " + arrival + " to " + depart + " has been confirmed."
        }
        // Display message
        $("#popup-message").text(message);
        $("#popup").show();

        // Prevent page from refreshing
        event.preventDefault();
    });
});




// QUIZ FUNCTIONS
$(document).ready(function(){
    // Construct arrays with question and answer text
    var questionText = ["On a holiday, which of the following best describes you?", 
        "Do you have an aversion to hunting?", 
        "Are you physically strong and capable of running long distances?", 
        "Which of the following best describes you? In a treasure hunt I would rather:", 
        "Do you get a lot of satisfaction out of creating things with your hands?"];
    // Hunter answer text
    var hunterText = ["I prefer action and adventure.", "No", "Yes", 
        "Run and try to be the first to complete the hunt.", "No"];
    // Gatherer answer text
    var gathererText = ["I prefer relaxing and socialising.","Yes", "No", 
    "Take it slow and ensure I find the best treasure.", "Yes"];

    // Counters for running quiz
    counter = 0
    currentQuestion = 0

    // Setup quiz text for question 1
    $("#question-text").text(questionText[currentQuestion]);
    $("#yes").text(hunterText[currentQuestion]);
    $("#no").text(gathererText[currentQuestion]);

    // Run the quiz
    $("#quiz-form button").click(function (event) {
        // Don't refresh the page
        event.preventDefault();
        
        // If they answer yes (which are the hunter answers), add to results counter
        if ($(this).attr("value") == "yes") {             
            counter += 1 
        }

        // show next question
        currentQuestion += 1
        $("#question-text").text(questionText[currentQuestion]);
        $("#yes").text(hunterText[currentQuestion]);
        $("#no").text(gathererText[currentQuestion]);

        // If all 5 questions have been answered, hide form and show results
        if (currentQuestion == 5) {
            if (counter >= 3) {
                message = "You are a hunter!";
            } else {
                message = "You are a gatherer!";
            }
            // Show popup and edit message text
            $("#quiz-results p").text(message);
            $("#quiz-form").hide();
            $("#quiz-results").show();
        }
    });
});
