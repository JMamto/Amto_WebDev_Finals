function validatePassword(password) {
                
    var pass = document.forms["form"]["pwd"]

    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); 
    matchedCase.push("[A-Z]"); 
    matchedCase.push("[0-9]");
    matchedCase.push("[a-z]");

    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    var txt = document.getElementById("msg")
    msg.innerHTML = strength;
    msg.style.color = color;
}