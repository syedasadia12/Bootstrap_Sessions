function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){

    //retriving the values from element
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies= [];
    var checkbox = document.getElementsByName("hobbies[]");
    for (var i = 0; i< checkboxes.length; i++){
        if (checkboxes[i].checked){
            hobbioes.push(checkboxes[i].value);
        }
    }

    var nameErr=  emailErr= true;

//validate name

if (name ==""){
    printError("nameErr", "Please enter your name")
}else{
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false){
        printError("nameErr", "Please enetr a valid name ")
    }else{
        printError("nameErr", "");
        nameErr = false;
    }
}

if (nameErr == true){
    return false;
}else{
    alert('You have submitted the form...')
}
}

//validate Email

if (email ==""){
    printError("emailErr", "Please enter your email address")
}else{
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false){
        printError("emailErr", "Please enetr a valid email address ")
    }else{
        printError("emailErr", "");
        emailErr = false;
    }
}
if (namelErr || emailErr == true){
    return false;
}else{
    alert('You have submitted the form...')
}

//Validate mobile


if (email ==""){
    printError("emailErr", "Please enter your email address")
}else{
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false){
        printError("emailErr", "Please enetr a valid email address ")
    }else{
        printError("emailErr", "");
        emailErr = false;
    }
}
if (namelErr || emailErr == true){
    return false;
}else{
    alert('You have submitted the form...')
}
