document.addEventListener("DOMContentLoaded", function() {
    const feed = document.querySelector(".feed");

    let startX;
    let startY;
    let initialScrollTop;

    feed.addEventListener("touchstart", function(e) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        initialScrollTop = feed.scrollTop;
    });

    feed.addEventListener("touchmove", function(e) {
        const moveX = e.touches[0].pageX - startX;
        const moveY = e.touches[0].pageY - startY;

        if (Math.abs(moveY) > Math.abs(moveX)) {
            feed.scrollTop = initialScrollTop - moveY;
        }
    });
});
