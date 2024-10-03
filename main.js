document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu-bars');
    const navbar = document.querySelector('.navbar');
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form'); // Search form
    const closeSearchForm = document.getElementById('close-search-form'); // Close button

    // Toggle visibility of the navbar
    menu.onclick = () => {
        menu.classList.toggle('fa-times'); // Change icon if needed
        navbar.classList.toggle('active');
    };

    // Toggle visibility of the search form
    searchIcon.onclick = () => {
        searchForm.style.display = searchForm.style.display === 'flex' ? 'none' : 'flex';
    };

    // Close the search form when clicking the close button
    closeSearchForm.onclick = () => {
        searchForm.style.display = 'none';
    };

    // Close the search form when clicking outside of it (optional)
    searchForm.onclick = (e) => {
        if (e.target === searchForm) {
            searchForm.style.display = 'none';
        }
    };
});

// Initialize Swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
