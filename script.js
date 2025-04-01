
function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}
document.addEventListener("click", function (event) {
    let menu = document.getElementById("navLinks");
    let toggle = document.querySelector(".menu-toggle");

    // Check if the clicked area is NOT inside the menu or the toggle button
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("show"); // Hide the menu
    }
});