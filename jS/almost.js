document.addEventListener("DOMContentLoaded", () => {
    // const landingPage = document.getElementById("landing-page");
    const almost = document.getElementById("almostThere");
    const closeAlmostbtn = document.getElementById("almostClose");
    const backgroundImg = document.getElementById("img-bg");
    
    if (almost.style.display ="block") {
        closeAlmostbtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
        closeAlmostbtn.addEventListener('click', showLanding);
    };
        function showLanding() {
            almost.style.display = "none";
            backgroundImg.style.opacity = "1";
        // landingPage.style.display = "block";
    };
    
});