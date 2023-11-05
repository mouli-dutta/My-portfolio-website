function openLinkOnClick(elementId, URL) {
    var element = document.getElementById(elementId);
    if(element) {
        element.onclick = function() {
            window.location.href = URL;
        };
    }
}

document.addEventListener("DOMContentLoaded", function() {
    openLinkOnClick("space", "https://github.com/mouli-dutta/Space-Adventure-Game");
    openLinkOnClick("flames", "https://github.com/mouli-dutta/Flames");
    openLinkOnClick("java", "https://github.com/mouli-dutta/Java-Editor");
    openLinkOnClick("wordle", "https://github.com/mouli-dutta/Wordle-Helper");
    openLinkOnClick("lockscreen", "https://github.com/mouli-dutta/Lock-Screen-Pattern-Generator");
});
