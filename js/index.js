document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active-link'));
            
            // Add the active class to the clicked link
            e.target.classList.add('active-link');
        });
    });
});

/////////////// Carsol Pictures //////////////////////
var images = ["images/Rectangle 4153.png" ,"images/Rectangle 4153.png", "images/Rectangle 4153.png", "images/Rectangle 4153.png"];
var currentIndex = 0;

function showNextImage() {
    var img = document.getElementById("slideshow-img");
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}

setInterval(showNextImage, 1000);

/////////////////////// Add Cross ///////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.about-review-info-card .cross1');
    const rightArrow = document.querySelector('.about-review-info-card .cross2');
    const reviewCards = document.querySelector('.about-review-info-card .about-review-info-card');

    const scrollAmount = 300;

    leftArrow.addEventListener('click', function() {
        reviewCards.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        reviewCards.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
