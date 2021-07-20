document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const forgot = document.getElementById("forgot");
    const closeForgotbtn =document.getElementById("forgotClose");
    const backgroundImg = document.getElementById("img-bg");
    const email = document.getElementById("user_email");
    const emailSentbtn = document.getElementById("btn-send");
    const emailPopup = document.getElementById("emailSent");

    if (forgot.style.display ="block") {
        closeForgotbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
        closeForgotbtn.addEventListener('click', closeForgot);
    };
    
    email.addEventListener('input', function(e) {
        emailSentbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });    
        if (email.validity.valid) {
            emailSentbtn.addEventListener('click', showSent);
        };
    });
    
    function closeForgot() {
        forgot.style.display = "none";
        backgroundImg.style.opacity = "1";
        // landingPage.style.display = "block";
    };

    function showSent() {
        forgot.style.display = "none";
        emailPopup.style.display = "block";
    }

});
