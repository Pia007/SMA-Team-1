document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const form = document.getElementById("reset-form");
    const newPass = document.getElementById("new_password").value;
    const confPass = document.getElementById("conf_password").value;
    const reset = document.getElementById("reset");
    const btnConfirm = document.getElementById("confirmBtn");
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

    // THIS WORKS
    form.addEventListener('input', function(e) {
        btnConfirm.addEventListener('click', function(e) {
            e.preventDefault();
        });    
        if (confPass == newPass) {
            btnConfirm.addEventListener('click', showSuccess);
        };
    });

    // Check this tomorrow. Issue was button id not being valid.  Next try to make validate 
    // btnConfirm.addEventListener('click', function(e) {
    //         e.preventDefault();
    //     }); 
    //     btnConfirm.addEventListener('click', showSuccess);  
    
    function showSuccess() {
        reset.style.display = "none";
        success.style.display = "block";
    };
});
    


