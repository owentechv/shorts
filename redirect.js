document.addEventListener("DOMContentLoaded", function() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "mobile/index.html"; // Redirect to mobile version
    }
});
