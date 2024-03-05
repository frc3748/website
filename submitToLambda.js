function submitToLambda() {
    var URL = "https://aewh7rhcc4fwntjj2htjv2ai740ncujn.lambda-url.us-east-2.on.aws/";
    //Regex stuff for later
    // var Namere = /[A-Za-z]{1}[A-Za-z]/;
    // if (!Namere.test($("#fullname").val())) {
    //     alert("Name can not less than 2 char");
    //     return;
    // }

    // if ($("#email").val() == "") {
    //     alert("Please enter your email id");
    //     return;
    // }

    // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    // if (!reeamil.test($("#email").val())) {
    //     alert("Please enter valid email address");
    //     return;
    // }

    var name = $("#fullname").val();
    var email = $("#email").val();
    var subject_line = $("#sline").val();
    var message = $("#message").val();
    var data = {
        name: name,
        email: email,
        sline: subject_line,
        message: message
    };

    console.log(data);
    // document.getElementById("demo").innerHTML = data;

    $.ajax({
        type: "POST",
        url: "https://aewh7rhcc4fwntjj2htjv2ai740ncujn.lambda-url.us-east-2.on.aws/",
        // url: "https://eo8vuoft3wuoug4.m.pipedream.net",
        dataType: "json",
        crossDomain: "true",
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }


    })
        .always(function () {
            // clear form and show a success message
            alert("Thank you for contacting us. We will reach out as soon as possible!");
            document.getElementById("contact-form").reset();
            location.reload();
        })
}


//for testing
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    /* var name = $("#fullname").val();
     var email = $("#email").val();
     var subject_line = $("#sline").val();
     var message = $("#message").val();
     var data = {
         name: name,
         email: email,
         sline: subject_line,
         message: message
     };*/
}
