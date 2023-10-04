document.addEventListener("DOMContentLoaded", function () {
    var imgElements = document.querySelectorAll(".img");

    imgElements.forEach(function (imgElement) {
        imgElement.addEventListener("mouseenter", function () {
            var imgSrc = this.querySelector("img").getAttribute("src");

            var fimage = document.getElementById("fimage");

            var newImage = document.createElement("img");

            newImage.src = imgSrc;
            var fimageWidth = fimage.clientWidth;
            var fimageHeight = fimage.clientHeight;

            newImage.style.width = fimageWidth + "px";
            newImage.style.height = fimageHeight + "px";

            fimage.appendChild(newImage);
        });

        imgElement.addEventListener("mouseleave", function () {
            var fimage = document.getElementById("fimage");
            while (fimage.firstChild) {
                fimage.removeChild(fimage.firstChild);
            }
        });
    });
});
