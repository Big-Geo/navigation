document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    if (btn && sidebar) {
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }
});
