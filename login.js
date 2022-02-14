
function checkCreds() { 
    var fname = document.getElementById("fname").value;
    // first name
    var lname = document.getElementById("lname").value;
    // last name
    var badgeid = document.getElementById("badgeid"); 
    var fullname = fname + " " + lname;

    if (fullname.length > 20 || fullname.length < 3) { 
        document.getElementById("loginstatus").innerHTML = "Full name is invalid. Please try again. . .";
        // checks if user entered correct credentias
    } else if (badgeid > 999 || badgeid < -999 || badgeid == 0) { 
        // checks if user entered correct credentias
        document.getElementById("loginstatus").innerHTML = "Badge ID is invalid. Please try again. . .";
    } else {
        alert("Access Granted, " + fullname + ". Welcome!");
        location.replace("home.html"); 
        // takes user to home page
    }
}