let currentIndex = 0;
const carouselItems = document.querySelectorAll('#item-carousel');
const buttonRight = document.querySelector('.events__button_active');
const buttonLeft = document.querySelector('.events__button_position_left');


function goToSlide(index){
    if (index < 0){
        index = carouselItems.length - 1;
    } else if(index >= carouselItems.length){
        index = 0;
    }
    currentIndex = index;
    document.querySelector('.events__carousel-inner').style.transform = `translateX(-${currentIndex * 25}%)`;
    if (index === carouselItems.length - 1){
        buttonRight.classList.remove('events__button_active')

    } else if(index === 0){
        buttonLeft.classList.remove('events__button_active');
    }else {
        buttonLeft.classList.add('events__button_active');
        buttonRight.classList.add('events__button_active')
    }
    
}

function goToNextSlide(){
    goToSlide(currentIndex + 1);
}

function goToPrevSlide(){
    goToSlide(currentIndex - 1);
}

buttonRight.addEventListener('click', ()=>{
    if (buttonRight.classList.contains('events__button_active')){
        goToNextSlide()
    }
})

buttonLeft.addEventListener('click',  ()=>{
    if (buttonLeft.classList.contains('events__button_active')){
        goToPrevSlide()
    }
}
)
