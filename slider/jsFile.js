// create an array from imags
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get the number of images in slider
var slidesCount = sliderImages.length;

// Set current slide
var currentSlide = 1;

// slide number box
var slideNumberElement = document.getElementById('slider-number');

// previous and next buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');


prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Get the pagination ul
var paginationUl = Array.from(document.querySelectorAll('.pagination-ul li'));


// Trigger the checker function
check();


// Next slide function
function nextSlide() {

	if(nextButton.classList.contains('disabled')) {
		// Do nothing
	} else {
		currentSlide++;
		check();
	}

}

// Previous slide function
function prevSlide() {
	if(prevButton.classList.contains('disabled')) {
		// Do nothing
	} else {
		currentSlide--;
		check();
	}
}

// Select slide from bullet
	
for(var i=0; i<paginationUl.length; i++) {
	paginationUl[i].onclick = function () {
		
		var index = this.getAttribute('data-index');
		currentSlide = parseInt(index);
		check();
	};
}


// Check the who is the current slide

function check() {

	// Set the slide number
	slideNumberElement.textContent = 'Slide #' + currentSlide;


	for(var i=0; i<slidesCount; i++) {
		// Remove active class on all slides
		sliderImages[i].classList.remove('active');

		// Remove active class on all bullets
		paginationUl[i].classList.remove('active');
	}


	// Set active class on current slide
	sliderImages[currentSlide - 1].classList.add('active');

	// Set active class on current bullet
	paginationUl[currentSlide - 1].classList.add('active');


	if(currentSlide == 1) {
		prevButton.classList.add('disabled');
	} else {
		prevButton.classList.remove('disabled');
	}

	if(currentSlide == slidesCount) {
		nextButton.classList.add('disabled');
	} else {
		nextButton.classList.remove('disabled');
	}
}

