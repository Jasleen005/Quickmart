document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("registrationModal");
    const registerLink = document.getElementById("registerLink");
    const closeButton = document.querySelector(".close");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});