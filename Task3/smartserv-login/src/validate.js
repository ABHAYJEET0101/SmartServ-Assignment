function ValidateEmail()
{
    var mail = document.getElementById("email").value;

    var mailformat = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(mailformat.text(mail))
    {
        alert("Valid email address!");
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}

export default ValidateEmail