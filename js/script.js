$(document).ready(function() {
    $('.news--slider').slick({
        slidesToShow: 4,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });

    $('.partners--slider__list').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });

    $('.about--recently__wrapper--list').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });
    $('.product--slider__slides').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
    });
    




    const searchBarCatalog = document.querySelector('.searchBar--catalog'),
            searchBarCatalogBottomBar = document.querySelector('.searchBar--catalog__bottomBar');

    searchBarCatalog.addEventListener('click', () =>{
        searchBarCatalog.classList.toggle('searchBar--catalog_active');
        searchBarCatalogBottomBar.classList.toggle('searchBar--catalog__bottomBar_active');
    })


    const showBackOfProductCart = function () {
        const   items = document.querySelectorAll('.recomend--item');

        items.forEach(item => {
            let btnShow = item.querySelector('.recomend--item__circles'),
                btnUnShow = item.querySelector('svg'),
                displayToShow = item.querySelector('.recomend--item__back');

            btnShow.addEventListener('click', event => {
                displayToShow.classList.add('recomend--item__back_active')
                setTimeout(() => {displayToShow.classList.add('pause')}, 1000);
            });
            btnUnShow.addEventListener('click', event => {
                displayToShow.classList.remove('pause')
                setTimeout(() => {displayToShow.classList.remove('recomend--item__back_active')}, 950);
            });
        })
    }
    showBackOfProductCart();

    //Табы на странице продукт
    const aboutWrapper = document.querySelector('.about--wrapper');

    const tabsAbout = function () {
        const tabsBtn = document.querySelectorAll('.about--item'),
                    tabsWrapper = document.querySelector('.about--wrapper__bottom'),
                    tabs = tabsWrapper.querySelectorAll('.about--bottom__item');

        tabsBtn.forEach(item => {
            item.addEventListener('click', function (event) {
                tabs.forEach(item => item.classList.remove('about--bottom__item_active'));
                tabsBtn.forEach((item, i) => {
                    if (this === item) {
                        item.classList.add('about--item_active');
                        tabs[i].classList.add('about--bottom__item_active');
                    }
                    else {
                        item.classList.remove('about--item_active')
                    }
                    
                });
            })
        })
    }

    if (aboutWrapper) {
        tabsAbout();
    }
    
})