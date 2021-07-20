document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const form = document.getElementById("reset-form");
    const newPass = document.getElementById("new_password").value;
    const confPass = document.getElementById("conf_password").value;
    const reset = document.getElementById("reset");
    const BtnConfirm = document.getElementById("confirmPwdBtn");
    const success = document.getElementById("successReset");
    const closeResetbtn = document.getElementById("resetClose");
    const backgroundImg = document.getElementById("img-bg");
    

    if (reset.style.display ="block") {
        closeResetbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
        closeResetbtn.addEventListener('click', showLanding);
    };
    function showLanding() {
        reset.style.display = "none";
        backgroundImg.style.opacity = "1";
        // landingPage.style.display = "block";
    
    };

    function showSuccess() {
        reset.style.display = "none";
        success.style.display = "block";
    };

    form.addEventListener('input', function(e) {
        BtnConfirm.addEventListener('click', function(e) {
            e.preventDefault();
        });
        BtnConfirm.addEventListener('click', showSuccess);  
    });

    // form.addEventListener('input', function(e) {
    //     btnConfirmpwd.addEventListener('click', function(e) {
    //         e.preventDefault();
    //     }); 
    //     if(pass1.validity.valid && pass2.validity.valid && pass2 == pass1) {
    //         btnConfirmpwd.addEventListener('click', showSuccess);  
    //     };
    // });
    // form.addEventListener('input', function(e) {
    //     confirmPwdbtn.addEventListener('click', function(e) {
    //         e.preventDefault();
    //     }); 
    //     if (pass1.validity.valid && pass1 == pass2) {
    //         confirmPwdbtn.addEventListener('click', showSuccess);
    //     };
    // });

});

