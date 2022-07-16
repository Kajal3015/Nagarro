$(document).ready(()=>{
      var toggle=false;
      $('.clicks').on('click',function(){
        if(toggle==false){
            $('#box').addClass('show');
            toggle=true;
        }else if(toggle==true){
            $('#box').removeClass('show');
            toggle=false;
        }
      });

      $('.cancel').on('click',function(){
        $('#box').removeClass('show');
      });

      $('#usernamevalidation').hide();
      $('#mailvalidation').hide();

      var Error = false;
      var mail_error = false;

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
        } else {
            $('#usernamevalidation').hide();
            Error=true;
        }

        if (username_val.length < 3 || username_val.length > 10) {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invalid Username');
            $('#usernamevalidation').css('color', 'purple');
            Error = false;
        }
        return Error;
    }

    $('#mail').keyup(function(){
        mail_validation();
    })

    function mail_validation(){
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var mailvalue=$('#mail').val();
        if(emailregex.test(mailvalue)){
            $('#mailvalidation').hide();
            mail_error=true;
        }else{
            $('#mailvalidation').show();
            $('#mailvalidation').html('Invalid Email');
            $('#mailvalidation').css('color','purple');
            mail_error=false;
        }
        return mail_error;
    };

    //Submit
    $('.mybtn').click(()=>{
        if(Error && mail_error){
            $('#box').removeClass('show');
        }else{
            return false;
        }
    })

});