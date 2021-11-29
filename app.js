const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
var slideNumber = 0;

var playSlider;

var repeater = () =>
{
    playSlider = setInterval(function ()
    {
        slides.forEach((slide) =>
        {
            slide.classList.remove("active");
        });
        slideNumber++;
        if (slideNumber > (numberOfSlides - 1))
        {
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
    }, 4000);
}

repeater();