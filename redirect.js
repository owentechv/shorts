(function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = /mobile|android|iphone|ipad/.test(userAgent);

    if (isMobile) {
        window.location.href = 'mobile/index.html';
    }
})();

