const sliderFunction = () => {
    //Getting access to buttons (up and down)
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');

    //Getting access to 2 main parts - sidebar and main
    const sidebar = document.querySelector('.sidebar');
    const mainSlide = document.querySelector('.main-slide');
    const container = document.querySelector('.container');

    const slideCount = mainSlide.querySelectorAll('div').length;
    console.log(slideCount);
    sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

    let activeSlideNumber = 0;

    //Funding number of active slide
    const changeSlide = (side) => {
        if (side === 'up') {
            activeSlideNumber = (activeSlideNumber < slideCount - 1) ?
                ++activeSlideNumber : 0;
            console.log(activeSlideNumber);
        } else if (side === 'down') {
            activeSlideNumber = (activeSlideNumber === 0) ?
                (slideCount - 1) : --activeSlideNumber;
            console.log(activeSlideNumber);
        }
        const slideHeight = container.clientHeight;
        console.log(slideHeight);
        mainSlide.style.transform = `translateY(-${activeSlideNumber * slideHeight}px)`;
        sidebar.style.transform = `translateY(${activeSlideNumber * slideHeight}px)`;

    }

    //Adding eventlisteners to up/down buttons
    upBtn.addEventListener('click', () => {
       changeSlide('up');
    })

    downBtn.addEventListener('click', () => {
        changeSlide('down');
    })
}

sliderFunction();