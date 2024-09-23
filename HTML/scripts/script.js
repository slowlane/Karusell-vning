

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let items = Array.from(carousel.querySelectorAll('.carousel-item'));
    const totalItems = items.length;


    let leftIndex, middleIndex, rightIndex;


    middleIndex = 0;
    updateIndices();

    function updateIndices() {
        leftIndex = (middleIndex - 1 + totalItems) % totalItems;
        rightIndex = (middleIndex + 1) % totalItems;
    }

    function renderCarousel() {
 
        items.forEach((item, index) => {
            item.classList.remove('left', 'middle', 'right', 'focused');
            if (index === leftIndex) {
                item.classList.add('left');
            } else if (index === middleIndex) {
                item.classList.add('middle', 'focused');
            } else if (index === rightIndex) {
                item.classList.add('right');
            } else {
                item.classList.add('hidden');
            }
        });
    }


    renderCarousel();


    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('middle')) {
 
                middleIndex = (middleIndex - 1 + totalItems) % totalItems;
                updateIndices();
                renderCarousel();
            } else if (item.classList.contains('left') || item.classList.contains('right')) {

                middleIndex = index;
                updateIndices();
                renderCarousel();
            }
        });
    });
});
