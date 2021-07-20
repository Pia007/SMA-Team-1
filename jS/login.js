document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const login = document.getElementById("login");
    const closeLoginbtn = document.getElementById("loginClose");
    const backgroundImg = document.getElementById("img-bg");
    
    if (login.style.display ="block") {
        closeLoginbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
        closeLoginbtn.addEventListener('click', showLanding);
    };
        function showLanding() {
        login.style.display = "none";
        backgroundImg.style.opacity = "1";
        // landingPage.style.display = "block";
    };
    
});
