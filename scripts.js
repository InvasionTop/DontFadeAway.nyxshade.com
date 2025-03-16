document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("music");
    let toggleCheckbox = document.getElementById("toggleMusic");

    toggleCheckbox.addEventListener("change", function () {
        if (this.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
