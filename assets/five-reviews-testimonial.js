// vars
'use strict'
var	testim1 = document.getElementById("testim1"),
		testim1Dots = Array.prototype.slice.call(document.getElementById("testim1-dots").children),
    testim1Content = Array.prototype.slice.call(document.getElementById("testim1-content").children),
    testim1LeftArrow = document.getElementById("left-arrow"),
    testim1RightArrow = document.getElementById("right-arrow"),
    testim1Speed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testim1Timer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // testim1 Script
    function playSlide(slide) {
        for (var k = 0; k < testim1Dots.length; k++) {
            testim1Content[k].classList.remove("active");
            testim1Content[k].classList.remove("inactive");
            testim1Dots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testim1Content.length-1;
        }

        if (slide > testim1Content.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testim1Content[currentActive].classList.add("inactive");            
        }
        testim1Content[slide].classList.add("active");
        testim1Dots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testim1Timer);
        testim1Timer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testim1Speed)
    }

    testim1LeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testim1RightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testim1Dots.length; l++) {
        testim1Dots[l].addEventListener("click", function() {
            playSlide(currentSlide = testim1Dots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testim1LeftArrow.click();
                break;
                
            case 39:
                testim1RightArrow.click();
                break;

            case 39:
                testim1RightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim1.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim1.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testim1LeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testim1RightArrow.click();
				} else {
					return;
				}
			
		})
}