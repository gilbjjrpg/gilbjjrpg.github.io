const images = document.querySelectorAll(".clickable");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        const imageBox = document.createElement("div");
        imageBox.classList.add("image-box");

        const bigImage = document.createElement("img");
        bigImage.src = img.src;

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.classList.add("close-btn");

        imageBox.appendChild(bigImage);
        popup.appendChild(closeBtn);
        popup.appendChild(imageBox);
        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        imageBox.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            popup.remove();
        });

        document.addEventListener("keydown", function escClose(event) {
            if (event.key === "Escape") {
                popup.remove();
                document.removeEventListener("keydown", escClose);
            }
        });
    });
});