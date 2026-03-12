// Selects all images on the page that have the class "clickable"
const images = document.querySelectorAll(".clickable");

// Loops through each clickable image
images.forEach(img => {

    // Add a click event to each image
    img.addEventListener("click", () => {

        // Create a popup container that will hold the enlarged image
        const popup = document.createElement("div");
        popup.classList.add("popup");

        // Create a box to contain the image inside the popup
        const imageBox = document.createElement("div");
        imageBox.classList.add("image-box");

        // Creates a new image element for the enlarged version
        const bigImage = document.createElement("img");
        bigImage.src = img.src;

        // Creates the close (x) for the popup
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.classList.add("close-btn");

        // Add the enlarged image inside the image container
        imageBox.appendChild(bigImage);

        // Add the close button and image container to the popup
        popup.appendChild(closeBtn);
        popup.appendChild(imageBox);

        // Add the popup to the page
        document.body.appendChild(popup);

        // Allow clicking the outside the image to close the popup
        popup.addEventListener("click", () => {
            popup.remove();
        });

        // Prevent clicks on the image itself to close the popup
        imageBox.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Close the popup when the close button is clicked
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            popup.remove();
        });

        // Allow the popup to close when the Escape key
        document.addEventListener("keydown", function escClose(event) {

            // Checks if the Escape key was pressed
            if (event.key === "Escape") {

                // Remove the popup from the page
                popup.remove();

                // Remove the keydown listener after closing
                document.removeEventListener("keydown", escClose);
            }
        });
    });
});