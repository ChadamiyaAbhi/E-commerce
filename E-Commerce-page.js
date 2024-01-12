
document.addEventListener("DOMContentLoaded", function () {
    // Get the imageofproduct element
    var imageofproduct = document.querySelector(".imageofproduct img");

    // Get the elements with the class img1, img2, img3
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var img3 = document.querySelector(".img3");

    // Get the elements with the class greenclr, yellowclr
    var greenClr = document.querySelector(".greenclr");
    var yellowClr = document.querySelector(".yellowclr");

    // Add click event listeners to img1, img2, img3
    img1.addEventListener("click", function () {
        changeImage("air-force-1-07-shoes-0XGfD7.png");
    });

    img2.addEventListener("click", function () {
        changeImage("air-force-1-07-shoes-0XGfD7 (1).png");
    });

    img3.addEventListener("click", function () {
        changeImage("air-force-1-07-shoes-0XGfD7 (3).png");
    });

    // Add click event listeners to greenClr and yellowClr
    greenClr.addEventListener("click", function () {
        changeImage("air-force-1-07-shoes-0XGfD7.png");
    });

    yellowClr.addEventListener("click", function () {
        changeImage("air-force-1-07-shoes-0XGfD7 (4).png");
    });

    // Function to change the image
    function changeImage(imageSrc) {
        imageofproduct.src = imageSrc;
    }


    document.addEventListener("DOMContentLoaded", function () {
        // Get the imageofproduct element
        var imageofproduct = document.querySelector(".imageofproduct img");
    
        // Get the elements with the class img1, img2, img3
        var img1 = document.querySelector(".img1");
        var img2 = document.querySelector(".img2");
        var img3 = document.querySelector(".img3");
    
        
    });
});

