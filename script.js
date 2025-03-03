document.addEventListener("DOMContentLoaded", function () {
    const roadmapItems = document.querySelectorAll(".roadmap-item");

    function showRoadmapItems() {
        roadmapItems.forEach((item) => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", showRoadmapItems);
    showRoadmapItems(); // Run once on load
});
