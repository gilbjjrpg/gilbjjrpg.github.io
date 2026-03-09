const images = document.querySelectorAll(".clickable");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        const bigImage = document.createElement("img");
        bigImage.src = img.src;

        popup.appendChild(bigImage);
        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.addEventListener("keydown", function escClose(event) {
            if(event.key === "Escape") {
                popup.remove();
                document.removeEventListener("keydown", escClose);
            }
        })
    });
});