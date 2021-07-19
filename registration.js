document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const register = document.getElementById("register");
    const confirmAccount = document.getElementById("accountConfirmed");
    const name = document.getElementById("user_name");
    const email = document.getElementById("user_email");
    const pwd = document.getElementById("user_password");
    const optin = document.getElementById("optIn");
    const BtnOpt = document.getElementById('optBtn');
    const BtnClose = document.getElementById('closeOptin');
    const BtnSignup = document.getElementById("sign-up");
    const closeRegisterbtn = document.getElementById("registrationClose");
    const backgroundImg = document.getElementById("img-bg");

    confirmAccount.style.display ="none";

    if (register.style.display ="block") {
        closeRegisterbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
        closeRegisterbtn.addEventListener('click', showLanding);
    };
    function showLanding() {
        register.style.display = "none";
        backgroundImg.style.opacity = "1";
        // landingPage.style.display = "block";
    
    };
    
    BtnOpt.addEventListener('click', showOptin);

    function showOptin(){
        optin.style.display = "block";    
    };

    BtnClose.addEventListener('click', hideOptin);
    function hideOptin(){
        optin.style.display = "none"; 
    };


    BtnSignup.addEventListener('click', showConfirmed);

    if (confirmAccount.style.display ="none") {
        BtnSignup.addEventListener('click', function(e) {
        e.preventDefault();
    });
        BtnSignup.addEventListener('click', showConfirmed);
    };

    function showConfirmed(){
        register.style.display = "none";
        confirmAccount.style.display = "block";
    };
  
});
