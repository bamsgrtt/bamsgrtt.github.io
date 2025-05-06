
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-fluid");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // agar bisa berulang
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(img => observer.observe(img));
});

