$(document).ready(function () {
    $('#usernamevalidation').hide();
    $('#mailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();


    var Error = true;
    var mail_error = true;
    var pass_error = true;
    var conpass_error = true;

    $('#username').keyup(function () {
        username_validation();
    });

    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == "") {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('username cannot be empty');
            $('#usernamevalidation').css('color', 'purple');
            Error = false;
            return false;
        } else {
            $('#usernamevalidation').hide();
        }

        if (username_val.length < 3 || username_val.length > 10) {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invalid Username');
            $('#usernamevalidation').css('color', 'purple');
            Error = false;
            return false;
        }
    }

    $('#mail').keyup(function(){
        mail_validation();
    })

    function mail_validation(){
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var mailvalue=$('#mail').val();
        if(emailregex.test(mailvalue)){
            $('#mailvalidation').hide();
        }else{
            $('#mailvalidation').show();
            $('#mailvalidation').html('Invalid Email');
            $('#mailvalidation').css('color','purple');
            mail_error=false;
            return mail_error;
        }
    }

    $('#password').keyup(function () {
        password_validation();
    });

    function password_validation() {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let password_val = $('#password').val();
            if (strongRegex.test(password_val)) {
                console.log("new2");
                $('#passwordvalidation').hide();
                //pass_error = true;
            } else {
                $('#passwordvalidation').show();
                $('#passwordvalidation').html('Invalid password');
                $('#passwordvalidation').css('color', 'purple');
                pass_error = false;
            }
        return pass_error;
    }

    $('#conpassword').keyup(function () {
        confirmpassword_validation();
    });

    function confirmpassword_validation() {
        var pass = $('#conpassword').val();
        var password_val = $('#password').val();
        if (pass != password_val) {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color', 'purple');
            conpass_error = false;
        }else{
            console.log("enter");
            $('#confirmpasswordvalidation').hide();
        }
    }
});